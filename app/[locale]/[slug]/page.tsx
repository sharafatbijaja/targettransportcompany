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

  if (slug === "contact") {
    const contactTitle = locale === "ar"
      ? "تواصل مع شركة تارجت للنقل بالرياض | احجز تويوتا كوستر وحافلات هايجر"
      : "Contact Target Transport Company Riyadh | Book Toyota Coaster & Higer Bus";
    const contactDescription = locale === "ar"
      ? "اطلب عرض سعر لتأجير الحافلات وتويوتا كوستر في الرياض وجميع مناطق المملكة. تفضل بزيارة مكتبنا في مركز الجفال التجاري بالرياض أو أرسل تفاصيل رحلتك."
      : "Request a bus or Toyota Coaster quote in Riyadh & across KSA. Visit our office at Al Jaffal Commercial Center, Riyadh, or submit your route details online.";
    return {
      title: contactTitle,
      description: contactDescription,
      ...(page.keywords ? { keywords: page.keywords } : {}),
      alternates: {
        canonical,
        languages: {
          en: "/en/contact",
          ar: "/ar/contact",
          "x-default": "/en/contact",
        },
      },
      openGraph: {
        title: contactTitle,
        description: contactDescription,
        ...(siteUrl ? { url: new URL(path, siteUrl).toString() } : {}),
        siteName: getCopy(locale).ui.brand,
        locale: locale === "ar" ? "ar_SA" : "en",
        type: "website",
      },
      twitter: { card: "summary", title: contactTitle, description: contactDescription },
    };
  }

  if (slug === "services") {
    return {
      title: page.title,
      description: page.description,
      keywords: page.keywords,
      alternates: {
        canonical,
        languages: {
          en: "/en/services",
          ar: "/ar/services",
          "x-default": "/en/services",
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

  return {
    title: page.title,
    description: page.description,
    ...(page.keywords ? { keywords: page.keywords } : {}),
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
  const areaServed = [
    "Riyadh", "Dammam", "Jeddah", "Makkah", "Madinah",
    "Taif", "Tabuk", "Hafar Al Batin", "Abha",
  ];
  const serviceSchema =
    slug === "services"
      ? page.sections.slice(0, 2).flatMap((section) =>
          section.cards?.map((card) => ({
            "@context": "https://schema.org",
            "@type": "Service",
            name: card.title,
            description: card.description,
            areaServed,
            serviceType: section.title,
            provider: {
              "@type": "Organization",
              name: getCopy(locale).ui.brand,
              ...(siteUrl ? { url: siteUrl } : {}),
            },
          })) ?? [],
        )
      : [];
  const fleetSchema = slug === "fleet"
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: locale === "ar" ? "مركبات أسطول تارجت للنقل" : "Target Transport Fleet Vehicles",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Product",
              name: locale === "ar" ? "حافلة هايجر (51 راكب)" : "Higer Bus (51-Seater)",
              description: locale === "ar"
                ? "حافلة هايجر كبيرة بسعة 51 راكباً، مع سائق ووقود."
                : "Full-size 51-seat Higer bus rental with driver and fuel.",
              offers: {
                "@type": "Offer",
                price: 17000,
                priceCurrency: "SAR",
                description: locale === "ar" ? "إيجار شهري" : "Monthly rental",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Product",
              name: locale === "ar" ? "تويوتا كوستر (22 راكب)" : "Toyota Coaster (22-Seater)",
              description: locale === "ar"
                ? "تويوتا كوستر بسعة 22 راكباً، مع سائق ووقود."
                : "22-seat Toyota Coaster rental with driver and fuel.",
              offers: [
                {
                  "@type": "Offer",
                  price: 15000,
                  priceCurrency: "SAR",
                  description: locale === "ar" ? "إيجار شهري" : "Monthly rental",
                },
                {
                  "@type": "Offer",
                  price: 700,
                  priceCurrency: "SAR",
                  description: locale === "ar" ? "إيجار يومي" : "Daily rental",
                },
              ],
            },
          },
        ],
      }
    : null;
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
  const organizationSchema = slug === "about"
    ? {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": siteUrl ? `${siteUrl}/#organization` : "https://targettransportcompany.sa/#organization",
        name: locale === "ar" ? "شركة تارجت للنقل" : "Target Transport Company",
        alternateName: "Target Transport Company Riyadh KSA",
        url: siteUrl ?? "https://targettransportcompany.sa",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Riyadh",
          addressRegion: "Riyadh Province",
          addressCountry: "SA",
        },
        areaServed: [
          "Riyadh", "Dammam", "Jeddah", "Makkah", "Madinah",
          "Taif", "Tabuk", "Hafar Al Batin", "Abha",
        ],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "ar" ? "تأجير أسطول حافلات في المملكة العربية السعودية" : "Bus and fleet rental across Saudi Arabia",
          },
        },
        description: locale === "ar"
          ? "مزود رائد لخدمات الأساطيل في الرياض يضم أكثر من 500 حافلة هايجر وتويوتا كوستر ومركبات فاخرة لخدمة 9 مدن سعودية."
          : "Riyadh-based fleet provider operating 500+ modern Toyota Coasters, Higer buses and VIP vehicles across 9 major Saudi cities.",
      }
    : null;
  const aboutSchema = slug === "about" ? {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: page.title,
    description: page.description,
    inLanguage: locale,
    ...(siteUrl ? { url: new URL(`/${locale}/about`, siteUrl).toString() } : {}),
    mainEntity: {
      "@type": "Organization",
      "@id": siteUrl ? `${siteUrl}/#organization` : "https://targettransportcompany.sa/#organization",
    },
  } : null;
  const contactSchema = slug === "contact" ? [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: page.title,
      description: page.description,
      inLanguage: locale,
      ...(siteUrl ? { url: new URL(`/${locale}/contact`, siteUrl).toString() } : {}),
      mainEntity: {
        "@type": "LocalBusiness",
        "@id": siteUrl ? `${siteUrl}/#location` : "https://targettransportcompany.sa/#location",
        name: "Target Transport Company",
        telephone: "+966540328480",
        email: "info@targettransportcompany.sa",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Al Jaffal Commercial Center",
          addressLocality: "Riyadh",
          addressRegion: "Riyadh Province",
          addressCountry: "SA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 24.6134368,
          longitude: 46.7071281,
        },
        areaServed: [
          "Riyadh", "Dammam", "Jeddah", "Makkah", "Madinah",
          "Taif", "Tabuk", "Hafar Al Batin", "Abha",
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": siteUrl ? `${siteUrl}/#location` : "https://targettransportcompany.sa/#location",
      name: "Target Transport Company",
      url: siteUrl ?? "https://targettransportcompany.sa",
      telephone: "+966540328480",
      email: "info@targettransportcompany.sa",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Al Jaffal Commercial Center",
        addressLocality: "Riyadh",
        addressRegion: "Riyadh Province",
        addressCountry: "SA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 24.6134368,
        longitude: 46.7071281,
      },
      areaServed: [
        "Riyadh", "Dammam", "Jeddah", "Makkah", "Madinah",
        "Taif", "Tabuk", "Hafar Al Batin", "Abha",
      ],
    },
  ] : [];

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {organizationSchema && <JsonLd data={organizationSchema} />}
      {aboutSchema && <JsonLd data={aboutSchema} />}
      {contactSchema.map((schema, index) => <JsonLd key={`contact-schema-${index}`} data={schema} />)}
      {serviceSchema.map((schema) => <JsonLd key={schema.name} data={schema} />)}
      {fleetSchema && <JsonLd data={fleetSchema} />}
      {faqSchema && <JsonLd data={faqSchema} />}
      <ContentPage locale={locale} pageKey={slug} />
    </>
  );
}
