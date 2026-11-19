import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getCopy, locales, type Locale } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = locale === "ar" ? "ar" : "en";
  const copy = getCopy(safeLocale);
  const path = `/${safeLocale}`;

  return {
    title: copy.home.title,
    description: copy.home.description,
    alternates: {
      canonical: path,
      languages: { en: "/en", ar: "/ar", "x-default": "/en" },
    },
    openGraph: {
      title: copy.home.title,
      description: copy.home.description,
      ...(siteUrl ? { url: new URL(path, siteUrl).toString() } : {}),
      siteName: copy.ui.brand,
      locale: safeLocale === "ar" ? "ar_SA" : "en",
      type: "website",
    },
    twitter: { card: "summary", title: copy.home.title, description: copy.home.description },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Page({ params }: Props) {
  const { locale: value } = await params;
  const locale: Locale = value === "ar" ? "ar" : "en";
  const copy = getCopy(locale);
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: copy.ui.brand,
    ...(siteUrl ? { url: siteUrl } : {}),
    description: copy.home.description,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.home.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={faqSchema} />
      <HomePage locale={locale} />
    </>
  );
}
