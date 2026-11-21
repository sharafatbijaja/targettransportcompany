import { ArrowUpRight, ChevronDown, Handshake } from "lucide-react";
import { IconCard } from "@/components/IconCard";
import { InquiryForm } from "@/components/InquiryForm";
import { PageIntro } from "@/components/PageIntro";
import Link from "next/link";
import { getCopy, type Locale, type PageKey } from "@/lib/content";

export function ContentPage({
  locale,
  pageKey,
}: {
  locale: Locale;
  pageKey: PageKey;
}) {
  const copy = getCopy(locale);
  const page = copy.pages[pageKey];

  return (
    <main className={pageKey === "booking" ? "booking-page" : undefined}>
      <PageIntro
        locale={locale}
        pageKey={pageKey}
        eyebrow={page.eyebrow}
        heading={page.heading}
        intro={pageKey === "booking" ? "" : page.intro}
      />
      {pageKey !== "booking" && page.sections.map((section, index) => (
        <section
          className={`content-section${index % 2 ? " section-muted" : ""}`}
          key={section.title}
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-eyebrow">{section.eyebrow ?? page.eyebrow}</span>
                <h2>{section.title}</h2>
              </div>
              {section.description && <p>{section.description}</p>}
            </div>
            {!!section.cards?.length && (
              <div className="card-grid">
                {section.cards.map((card) => (
                  <IconCard key={card.title} {...card} />
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
      {pageKey !== "booking" && page.faqs && (
        <section className="content-section faq-section">
          <div className="container faq-container">
            <div className="section-heading">
              <div>
                <span className="section-eyebrow">{page.faqEyebrow ?? copy.ui.learnMore}</span>
                <h2>{page.faqTitle ?? (locale === "ar" ? "إجابات عن أسئلتك" : "Answers to common questions")}</h2>
              </div>
            </div>
            <div className="faq-list">
              {page.faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}<ChevronDown size={18} aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
      {pageKey === "partners" && page.cta && (
        <section className="content-section section-muted">
          <div className="container form-container">
            <div className="info-card form-panel">
              <span className="card-icon" aria-hidden="true"><Handshake size={21} /></span>
              <h3>{page.cta.title}</h3>
              <p>{page.cta.description}</p>
              <Link className="text-link" href={`/${locale}/contact`}>
                {page.cta.label}<ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}
      {page.action && (
        <section className={`content-section section-muted${pageKey === "booking" ? " booking-form-section" : ""}`}>
          <div className="container form-container">
            <InquiryForm locale={locale} kind={page.action} />
          </div>
        </section>
      )}
      {pageKey === "contact" && (
        <section className="content-section">
          <div className="container">
            <div
              className="w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm mt-10"
              dir={locale === "ar" ? "rtl" : "ltr"}
            >
              <div className="border-b border-slate-200/80 bg-white px-5 py-4 text-sm font-semibold text-slate-700 md:px-6">
                {locale === "ar"
                  ? "المقر الرئيسي: مركز الجفال التجاري، الرياض، المملكة العربية السعودية"
                  : "Head Office: Al Jaffal Commercial Center, Riyadh, Saudi Arabia"}
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813.6486408534713!2d46.707128122269395!3d24.613436773206807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f057820bfe37b%3A0x3c010e6507acd828!2sAl%20Jaffal%20Commercial%20Center!5e0!3m2!1sen!2ssa!4v1795264855013!5m2!1sen!2ssa"
                className="w-full h-[380px] md:h-[420px] border-0 block"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Target Transport Company Location - Al Jaffal Commercial Center, Riyadh"
              ></iframe>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
