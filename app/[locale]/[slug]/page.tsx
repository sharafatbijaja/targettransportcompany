import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import {
  getCopy,
  isLocale,
  isPageKey,
  locales,
  pageKeys,
} from "@/lib/content";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    pageKeys.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isPageKey(slug)) return {};

  const page = getCopy(locale).pages[slug];
  const path = `/${locale}/${slug}`;
  const canonical = path;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
      languages: {
        en: `/en/${slug}`,
        ar: `/ar/${slug}`,
        "x-default": `/en/${slug}`,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      ...(siteUrl ? { url: new URL(path, siteUrl).toString() } : {}),
      siteName: getCopy(locale).ui.brand,
      locale: locale === "ar" ? "ar_SA" : "en",
      type: "website",
    },
    twitter: { card: "summary", title: page.title, description: page.description },
  };
}

export default function Page({ params }: Props) {
  return (
    <Suspense fallback={null}>
      <PageContent params={params} />
    </Suspense>
  );
}

async function PageContent({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isPageKey(slug)) notFound();

  const page = getCopy(locale).pages[slug];
  const serviceSchema =
    slug === "services"
      ? page.sections[0].cards?.map((card) => ({
          "@context": "https://schema.org",
          "@type": "Service",
          name: card.title,
          description: card.description,
          provider: {
            "@type": "Organization",
            name: getCopy(locale).ui.brand,
            ...(siteUrl ? { url: siteUrl } : {}),
          },
        })) ?? []
      : [];
  const faqSchema = page.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: getCopy(locale).ui.home,
        ...(siteUrl ? { item: new URL(`/${locale}`, siteUrl).toString() } : {}),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        ...(siteUrl ? { item: new URL(`/${locale}/${slug}`, siteUrl).toString() } : {}),
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {serviceSchema.map((schema) => <JsonLd key={schema.name} data={schema} />)}
      {faqSchema && <JsonLd data={faqSchema} />}
      <ContentPage locale={locale} pageKey={slug} />
    </>
  );
}
