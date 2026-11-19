import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, locales } from "@/lib/content";
import "../globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const themeInitScript = `
  try {
    const savedTheme = localStorage.getItem("target-theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : systemPrefersDark
          ? "dark"
          : "light";
    document.documentElement.dataset.theme = theme;
  } catch {}
`;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Target Transport Company KSA",
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <SiteHeader locale={locale} />
        {children}
        <Footer locale={locale} />
        <FloatingActions locale={locale} />
      </body>
    </html>
  );
}
