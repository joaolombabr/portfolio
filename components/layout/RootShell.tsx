import { Geist, Geist_Mono, Unbounded } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/ui/Cursor";
import { RevealObserver } from "@/components/ui/RevealObserver";
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

/** Wide display face for headlines and the menu — the extended-grotesk look of the redesign. */
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} h-full antialiased`}
      // The inline script below adds `js` before hydration; React should not flag it.
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {/* Runs before the page paints, so scroll-reveal content is hidden only when JS can reveal it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <Header content={content} />
        <main className="flex-1">{children}</main>
        <Footer content={content} />
        <div aria-hidden className="grain" />
        <Cursor />
        <RevealObserver />
      </body>
    </html>
  );
}
