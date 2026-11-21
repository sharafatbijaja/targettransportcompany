import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AboutBookingIllustration } from "@/components/AboutBookingIllustration";
import ServicesFleetIllustration from "@/components/ServicesFleetIllustration";
import ContactNetworkIllustration from "@/components/ContactNetworkIllustration";
import { type Locale, type PageKey } from "@/lib/content";

export function PageIntro({
  locale,
  pageKey,
  eyebrow,
  heading,
  intro,
}: {
  locale: Locale;
  pageKey?: PageKey;
  eyebrow: string;
  heading: string;
  intro: string;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <Breadcrumbs locale={locale} pageKey={pageKey} />
        <div className={pageKey === "about" || pageKey === "services" || pageKey === "contact" ? "about-intro-layout" : undefined}>
          <div className="intro-copy">
            <span className="section-eyebrow">{eyebrow}</span>
            <h1>{heading}</h1>
            {intro && <p>{intro}</p>}
          </div>
          {pageKey === "about" && (
            <div className="about-intro-illustration">
              <AboutBookingIllustration lang={locale} />
            </div>
          )}
          {pageKey === "services" && (
            <div className="about-intro-illustration">
              <ServicesFleetIllustration lang={locale} />
            </div>
          )}
          {pageKey === "contact" && (
            <div className="about-intro-illustration">
              <ContactNetworkIllustration lang={locale} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
