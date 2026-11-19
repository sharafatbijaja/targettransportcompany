import { ChevronDown } from "lucide-react";
import { IconCard } from "@/components/IconCard";
import { InquiryForm } from "@/components/InquiryForm";
import { PageIntro } from "@/components/PageIntro";
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
                <span className="section-eyebrow">{page.eyebrow}</span>
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
                <span className="section-eyebrow">{copy.ui.learnMore}</span>
                <h2>{locale === "ar" ? "إجابات عن أسئلتك" : "Answers to common questions"}</h2>
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
      {page.action && (
        <section className={`content-section section-muted${pageKey === "booking" ? " booking-form-section" : ""}`}>
          <div className="container form-container">
            <InquiryForm locale={locale} kind={page.action} />
          </div>
        </section>
      )}
    </main>
  );
}
