const DEFAULT_PHONE = "5511999999999";

export function buildWhatsAppHref(message: string, phone = DEFAULT_PHONE): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildServiceWhatsAppHref(serviceTitle: string): string {
  const text = `Olá, equipe Synera! Quero falar sobre o serviço: ${serviceTitle}.`;
  return buildWhatsAppHref(text);
}

export const whatsappQuickHref = buildWhatsAppHref(
  "Olá, equipe Synera! Quero falar sobre consultoria em plataforma e DevOps."
);
