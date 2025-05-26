import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER, WHATSAPP_BASE_URL, DEFAULT_WHATSAPP_MESSAGE, CONTACT_BUTTON_ICON } from '@/lib/constants';
import type { LucideIcon } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "accent";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
  showIcon?: boolean;
}

export function WhatsAppButton({
  message = DEFAULT_WHATSAPP_MESSAGE,
  className,
  variant = "accent",
  size= "lg",
  children = "Entre em Contato",
  showIcon = true,
}: WhatsAppButtonProps) {
  const href = `${WHATSAPP_BASE_URL}${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const IconComponent = CONTACT_BUTTON_ICON as LucideIcon;

  return (
    <Button asChild variant={variant as any} size={size} className={className}>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {showIcon && IconComponent && <IconComponent className="mr-2 h-5 w-5" />}
        {children}
      </Link>
    </Button>
  );
}
