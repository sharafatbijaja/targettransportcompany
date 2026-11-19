import { Breadcrumbs } from "@/components/Breadcrumbs";
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
        <div className="intro-copy">
          <span className="section-eyebrow">{eyebrow}</span>
          <h1>{heading}</h1>
          {intro && <p>{intro}</p>}
        </div>
      </div>
    </section>
  );
}
