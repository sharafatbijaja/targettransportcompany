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
    keywords: copy.home.keywords,
    alternates: {
      canonical: new URL(path, siteUrl).toString(),
      languages: {
        en: new URL("/en", siteUrl).toString(),
        ar: new URL("/ar", siteUrl).toString(),
        "x-default": new URL("/en", siteUrl).toString(),
      },
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
    "@type": "LocalBusiness",
    name: copy.ui.brand,
    ...(siteUrl ? { url: siteUrl } : {}),
    description: copy.home.description,
    areaServed: [
      "Riyadh", "Dammam", "Jeddah", "Makkah", "Madinah",
      "Taif", "Tabuk", "Hafar Al Batin", "Abha",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bus and Toyota Coaster rental",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Higer Bus 51-Seater",
          price: "17000",
          priceCurrency: "SAR",
          unitText: "MONTH",
          description: "51 seats, professional company driver included, fuel included, VAT excluded.",
        },
        {
          "@type": "Offer",
          name: "Toyota Coaster 22-Seater",
          price: "15000",
          priceCurrency: "SAR",
          unitText: "MONTH",
          description: "22 seats, professional company driver included, fuel included, VAT excluded.",
        },
        {
          "@type": "Offer",
          name: "Toyota Coaster 22-Seater",
          price: "700",
          priceCurrency: "SAR",
          unitText: "DAY",
          description: "22 seats, professional company driver included, fuel included, VAT excluded.",
        },
      ],
    },
  };
  const transportServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TransportService",
    name: copy.ui.brand,
    ...(siteUrl ? { url: siteUrl } : {}),
    description: copy.home.description,
    areaServed: [
      "Riyadh", "Dammam", "Jeddah", "Makkah", "Madinah",
      "Taif", "Tabuk", "Hafar Al Batin", "Abha",
    ],
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
      <JsonLd data={transportServiceSchema} />
      <JsonLd data={faqSchema} />
      <HomePage locale={locale} />
    </>
  );
}
