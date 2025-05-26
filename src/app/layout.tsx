import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { COMPANY_FULL_NAME, COMPANY_MISSION } from '@/lib/constants';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${COMPANY_FULL_NAME} - Consultoria em Tecnologia`,
  description: `Synera: ${COMPANY_MISSION} Especializada em Kubernetes, Microserviços, Platform Engineering, DevOps, SRE, ArgoCD e Pipelines.`,
  keywords: ["Synera", "Consultoria Tecnologia", "Kubernetes", "Microserviços", "Platform Engineering", "DevOps", "SRE", "ArgoCD", "Pipelines", "Tech Solutions", "Transformação Digital"],
  authors: [{ name: "Synera Solutions Hub" }],
  openGraph: {
    title: `${COMPANY_FULL_NAME} - Consultoria em Tecnologia`,
    description: `Synera: ${COMPANY_MISSION}`,
    type: 'website',
    locale: 'pt_BR',
    siteName: COMPANY_FULL_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_FULL_NAME} - Consultoria em Tecnologia`,
    description: `Synera: ${COMPANY_MISSION}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
