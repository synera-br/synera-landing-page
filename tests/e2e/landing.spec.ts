import { expect, test } from "@playwright/test";

test("renders key sections on desktop and mobile", async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 900 });
  await page.goto("/");

  await expect(page.locator("#sobre")).toBeVisible();
  await expect(page.locator("#servicos")).toBeVisible();
  await expect(page.locator("#treinamento")).toBeVisible();
  await expect(page.locator("#contato")).toBeVisible();

  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator(".top-nav")).toBeVisible();
  await expect(page.getByRole("button", { name: "Enviar via WhatsApp" })).toBeVisible();
});

test("validates contact form and builds whatsapp redirect", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Enviar via WhatsApp" }).click();
  await expect(page.getByText("Informe seu nome")).toBeVisible();
  await expect(page.getByText("Informe seu email")).toBeVisible();
  await expect(page.getByText("Informe sua mensagem")).toBeVisible();

  await page.getByLabel("Nome*").fill("Teste Usuario");
  await page.getByLabel("Empresa").fill("Synera Cliente");
  await page.getByLabel("Email*").fill("teste@synera.com");
  await page.getByLabel("Mensagem*").fill("Quero falar sobre consultoria Kubernetes");

  const popupPromise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Enviar via WhatsApp" }).click();
  const popup = await popupPromise;
  await expect(popup).toHaveURL(/(wa\.me|api\.whatsapp\.com)/);
  await popup.close();

  await expect(page.getByRole("button", { name: "Abrir chat com AI" })).toBeVisible();
});

test("service cards link to dedicated service pages", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: /Ver detalhes: Kubernetes e Cloud Native/i }).click();
  await expect(page).toHaveURL(/\/servicos\/kubernetes-cloud-native$/);
  await expect(page.locator("h1")).toHaveText("Kubernetes e Cloud Native");
  await expect(page.getByRole("navigation", { name: "Caminho de navegação" })).toBeVisible();
  await expect(page.locator(".service-logos img")).toHaveCount(3);

  await page.getByRole("link", { name: "Início" }).click();
  await expect(page).toHaveURL("/");
  await expect(page.locator("#servicos")).toBeVisible();
});

test("service page has contact CTAs", async ({ page }) => {
  await page.goto("/servicos/pipelines-cicd");

  await expect(page).toHaveTitle(/Pipelines e CI\/CD/);
  const whatsappLink = page.getByRole("link", { name: "Chamar no WhatsApp" }).first();
  await expect(whatsappLink).toHaveAttribute("href", /wa\.me/);

  await page.getByRole("button", { name: "Abrir chat com AI" }).click();
  await expect(page.locator(".chatbot-panel")).toBeVisible();
});
