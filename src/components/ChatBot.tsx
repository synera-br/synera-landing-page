import { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type ApiResponse = {
  error?: string;
  content?: string;
  message?: string;
  choices?: Array<{ message: { content: string } }>;
};

type ChatBotProps = {
  isOpen: boolean;
  onClose: () => void;
};

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Olá! Sou o assistente AI da Synera. Estou aqui para ajudá-lo com dúvidas sobre Kubernetes, Platform Engineering, DevOps e modernização de plataformas. Como posso ajudá-lo hoje?",
};

export function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [isOpen, onClose]);

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
      onClose();
    }
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setError(null);

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = (await res.json()) as ApiResponse;

      if (!res.ok) {
        throw new Error(data.error ?? `Erro ${res.status}`);
      }

      // Support OpenAI-compatible, simple and custom response formats
      const content =
        data.choices?.[0]?.message?.content ??
        data.content ??
        data.message ??
        "Desculpe, não consegui processar sua mensagem.";

      setMessages([
        ...updatedMessages,
        { id: crypto.randomUUID(), role: "assistant", content },
      ]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível enviar sua mensagem. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="chatbot-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Chat com Assistente AI Synera"
      onClick={handleOverlayClick}
    >
      <div className="chatbot-panel" ref={panelRef}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <span className="chatbot-header-avatar" aria-hidden="true">✦</span>
            <div>
              <strong>Assistente AI</strong>
              <span>Synera Consultoria</span>
            </div>
          </div>
          <button
            className="chatbot-close"
            onClick={onClose}
            aria-label="Fechar chat"
            type="button"
          >
            ✕
          </button>
        </div>

        <div
          className="chatbot-messages"
          role="log"
          aria-live="polite"
          aria-label="Conversa com o assistente"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chatbot-message chatbot-message--${msg.role}`}
            >
              {msg.role === "assistant" && (
                <span className="chatbot-msg-avatar" aria-hidden="true">✦</span>
              )}
              <div className="chatbot-bubble">{msg.content}</div>
            </div>
          ))}

          {loading && (
            <div className="chatbot-message chatbot-message--assistant">
              <span className="chatbot-msg-avatar" aria-hidden="true">✦</span>
              <div className="chatbot-bubble chatbot-bubble--typing" aria-label="Digitando...">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}

          {error && (
            <div className="chatbot-error" role="alert">
              {error}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input-area">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Digite sua mensagem… (Enter para enviar)"
            rows={2}
            disabled={loading}
            aria-label="Mensagem para o assistente AI"
          />
          <button
            type="button"
            onClick={() => void sendMessage()}
            disabled={!input.trim() || loading}
            aria-label="Enviar mensagem"
            className="chatbot-send-btn"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
