import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getContent } from "@/content";
import type { Locale } from "@/types/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const htmlLang: Record<Locale, string> = { en: "en", pt: "pt-BR" };

/**
 * Each locale has its own root layout (app/(en) and app/(pt)) so <html lang> is right
 * for screen readers and search engines. Both render through this shell.
 */
export function RootShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const content = getContent(locale);

  return (
    <html
      lang={htmlLang[locale]}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header content={content} />
        <main className="flex-1">{children}</main>
        <Footer content={content} />
      </body>
    </html>
  );
}
