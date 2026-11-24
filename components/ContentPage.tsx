import { ArrowUpRight, ChevronDown, Handshake, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { IconCard } from "@/components/IconCard";
import { InquiryForm } from "@/components/InquiryForm";
import { PageIntro } from "@/components/PageIntro";
import { SocialIcons } from "@/components/SocialIcons";
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
    <main className={pageKey === "booking" ? "booking-page" : pageKey === "contact" ? "contact-page" : undefined}>
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
                {section.cards.map((card) => card.phoneContacts ? (
                  <article className="info-card contact-phone-card" key={card.title}>
                    <span className="card-icon" aria-hidden="true"><Phone size={21} /></span>
                    <h3>{card.title}</h3>
                    {card.description && <p>{card.description}</p>}
                    <div className="contact-phone-list">
                      {card.phoneContacts.map((contact) => {
                        const internationalNumber = `+966${contact.number.slice(1)}`;
                        const whatsappNumber = internationalNumber.slice(1);
                        const message = locale === "ar"
                          ? "مرحباً، وصلت إليكم من موقع شركة تارجت ترانسبورت ولدي استفسار."
                          : "Hello, I came from the Target Transport website and have an enquiry.";

                        return (
                          <div className="contact-phone-entry" key={contact.number}>
                            <div className="contact-phone-heading">
                              <strong>{contact.label}</strong>
                              <a className="contact-phone-number" href={`tel:${internationalNumber}`} dir="ltr">
                                {contact.number}
                              </a>
                            </div>
                            <div className="contact-phone-actions" dir="ltr">
                              <a
                                className="contact-action-button"
                                href={`tel:${internationalNumber}`}
                                aria-label={locale === "ar"
                                  ? `اتصل بـ${contact.label} على ${contact.number}`
                                  : `Call ${contact.label} at ${contact.number}`}
                              >
                                {locale === "ar" ? "اتصل" : "Call"}
                              </a>
                              <a
                                className="contact-action-button whatsapp-action"
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={locale === "ar"
                                  ? `راسل ${contact.label} عبر واتساب على ${contact.number}`
                                  : `WhatsApp ${contact.label} at ${contact.number}`}
                              >
                                WhatsApp
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </article>
                ) : card.email ? (
                  <article className="info-card contact-email-card" key={card.title}>
                    <span className="card-icon" aria-hidden="true"><Mail size={21} /></span>
                    <h3>{card.title}</h3>
                    <a className="contact-email-link" href={`mailto:${card.email}`} dir="ltr">
                      {card.email}
                    </a>
                  </article>
                ) : (
                  <IconCard key={card.title} {...card} />
                ))}
              </div>
            )}
            {pageKey === "contact" && index === 0 && (
              <div className="contact-socials">
                <h3>{locale === "ar" ? "تابعونا" : "Follow us"}</h3>
                <SocialIcons locale={locale} />
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
      {pageKey === "booking" && page.action && (
        <section className={`content-section section-muted${pageKey === "booking" ? " booking-form-section" : ""}`}>
          <div className="container form-container">
            <InquiryForm locale={locale} kind={page.action} />
          </div>
        </section>
      )}
      {pageKey === "contact" && (
        <section className="content-section">
          <div className="container">
            <div className="contact-location-grid" dir={locale === "ar" ? "rtl" : "ltr"}>
              <div className="contact-office-image">
                <Image
                  src="/images/target-transport-company.webp"
                  alt={locale === "ar" ? "مكتب شركة تارغت ترانسبورت في الرياض" : "Target Transport Company office in Riyadh"}
                  width={1140}
                  height={878}
                  sizes="(max-width: 800px) 100vw, 40vw"
                  className="contact-office-image-content"
                />
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813.6486408534713!2d46.707128122269395!3d24.613436773206807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f057820bfe37b%3A0x3c010e6507acd828!2sAl%20Jaffal%20Commercial%20Center!5e0!3m2!1sen!2ssa!4v1795264855013!5m2!1sen!2ssa"
                className="contact-location-map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Target Transport Company Location - Al Jaffal Commercial Center, Riyadh"
              ></iframe>
            </div>
          </div>
        </section>
      )}
      {pageKey === "contact" && page.cta && (
        <section className="content-section contact-booking-cta-section">
          <div className="container">
            <div className="contact-booking-cta" dir={locale === "ar" ? "rtl" : "ltr"}>
              <div>
                <h2>{page.cta.title}</h2>
                <p>{page.cta.description}</p>
              </div>
              <Link className="button button-primary" href={`/${locale}/booking`}>
                {page.cta.label}<ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
