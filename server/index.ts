import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import type { Request, Response } from "express";

const app = express();
const PORT = Number(process.env.PORT ?? 3000);

const MCP_SERVER_URL = process.env.MCP_SERVER_URL ?? "";
const MCP_AUTH_TOKEN = process.env.MCP_AUTH_TOKEN ?? "";
const MCP_MODEL = process.env.MCP_MODEL ?? "";
const MCP_SYSTEM_PROMPT = process.env.MCP_SYSTEM_PROMPT ?? "";

app.use(express.json({ limit: "512kb" }));

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ ok: true });
});

app.post("/api/chat", async (req: Request, res: Response) => {
  if (!MCP_SERVER_URL || !MCP_AUTH_TOKEN) {
    res.status(503).json({ error: "Serviço de chat temporariamente indisponível." });
    return;
  }

  type ChatMessage = { role: string; content: string };
  const incomingMessages: ChatMessage[] = Array.isArray(req.body?.messages)
    ? req.body.messages
    : [];

  const messages: ChatMessage[] = MCP_SYSTEM_PROMPT
    ? [{ role: "system", content: MCP_SYSTEM_PROMPT }, ...incomingMessages]
    : incomingMessages;

  const body: Record<string, unknown> = { messages };
  if (MCP_MODEL) body.model = MCP_MODEL;

  try {
    const upstream = await fetch(MCP_SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MCP_AUTH_TOKEN}`,
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(30_000),
    });

    if (!upstream.ok) {
      console.error(`[chat-proxy] upstream responded with ${upstream.status}`);
      res.status(502).json({ error: "Erro ao processar resposta do assistente." });
      return;
    }

    const contentType = upstream.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      const data = (await upstream.json()) as unknown;
      res.json(data);
    } else {
      const text = await upstream.text();
      res.json({ content: text });
    }
  } catch (err) {
    if (err instanceof Error && err.name === "TimeoutError") {
      res.status(504).json({ error: "O assistente demorou muito para responder. Tente novamente." });
    } else {
      console.error("[chat-proxy] unexpected error:", err);
      res.status(500).json({ error: "Não foi possível processar sua mensagem." });
    }
  }
});

// Serve built frontend in production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "..", "dist");

app.use(express.static(distDir));
app.get("*path", (_req: Request, res: Response) => {
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`[server] listening on :${PORT}`);
});
