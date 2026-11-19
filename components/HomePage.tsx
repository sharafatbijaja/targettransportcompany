import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck, CalendarDays, ChevronDown, Fuel, Snowflake, Thermometer, UsersRound } from "lucide-react";
import { IconCard } from "@/components/IconCard";
import { getCopy, type Locale } from "@/lib/content";

function RouteArtwork({ locale }: { locale: Locale }) {
  return (
    <div className="route-artwork">
      <Image
        src="/images/saudi-routes-hero.svg"
        alt={locale === "ar" ? "خريطة طرق النقل في السعودية من الرياض" : "Saudi Arabia transport routes from Riyadh"}
        width={900}
        height={586}
        sizes="(max-width: 840px) calc(100vw - 36px), 55vw"
        unoptimized
      />
    </div>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const home = copy.home;
  const bookUrl = `/${locale}/booking`;
  const servicesUrl = `/${locale}/services`;

  return (
    <main>
      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-copy">
            {/* <Breadcrumbs locale={locale} /> */}
            <span className="section-eyebrow animate-pulse">{home.eyebrow}</span>
            <h1>{home.heading}</h1>
            <p>{home.intro}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={bookUrl}>
                {home.primaryAction}<ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <Link className="button button-quiet" href={servicesUrl}>
                {home.secondaryAction}<ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="hero-note">
              <span className="note-dot animate-ping" />
              <span>{locale === "ar" ? "يتم تأكيد تفاصيل الرحلة قبل الحجز" : "Trip details are confirmed before booking"}</span>
            </div>
          </div>
          <RouteArtwork locale={locale} />
        </div>
      </section>

      <section className="content-section services-section" id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-heading">
            <div><span className="section-eyebrow">{copy.ui.nav.services}</span><h2 id="services-heading">{home.servicesTitle}</h2></div>
            <p>{home.servicesIntro}</p>
          </div>
          <div className="card-grid service-card-grid">
            {home.services.map((card) => (
              <IconCard key={card.title} {...card} link={{ href: bookUrl, label: copy.ui.requestQuote }} />
            ))}
          </div>
        </div>
      </section>

      <section className="city-scene-section">
        <div className="container city-scene-layout">
          <div className="city-scene-copy">
            <span className="section-eyebrow">{home.cityScene.eyebrow}</span>
            <h2>{home.cityScene.title}</h2>
            <p>{home.cityScene.description}</p>
          </div>
          <div className="city-scene-frame rounded-full overflow-hidden shadow-lg shadow-black/70">
            <Image
              src="/images/animated-coaster-new.svg"
              alt={home.cityScene.imageAlt}
              width={900}
              height={450}
              sizes="(max-width: 840px) calc(100vw - 36px), 1120px"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="content-section section-muted" aria-labelledby="coverage-heading">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">{home.coverage.eyebrow}</span>
              <h2 id="coverage-heading">{home.coverage.title}</h2>
            </div>
            <p>{home.coverage.description}</p>
          </div>
          <div className="coverage-panel">
            <div className="coverage-map">
              <Image
                src="/images/Target-Transport-Company-About-Us.png"
                alt={home.coverage.imageAlt}
                width={1500}
                height={1125}
                sizes="(max-width: 820px) calc(100vw - 36px), 680px"
              />
            </div>
            <div className="coverage-copy">
              <span className="section-eyebrow">{home.coverage.listLabel}</span>
              <ul>
                {home.coverage.locations.map((location) => (
                  <li key={location}>{location}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="section-heading vehicle-section-heading">
            <div>
              <span className="section-eyebrow">{copy.ui.nav.fleet}</span>
              <h3 id="fleet-heading">{locale === "ar" ? "خيارات مركبات تناسب احتياجاتك" : "Vehicle options for every need"}</h3>
            </div>
          </div>
          <div className="vehicle-pricing-grid">
            <article className="vehicle-pricing-card">
              <Image
                className="vehicle-pricing-image"
                src="/images/higer-bus-51seats.webp"
                alt={locale === "ar" ? "حافلة هايجر" : "Higer bus"}
                width={1640}
                height={640}
                sizes="(max-width: 840px) calc(100vw - 80px), 520px"
              />
              <h3 className="vehicle-pricing-title">{locale === "ar" ? "حافلة" : "Bus (Higer)"}</h3>
              <div className="vehicle-price">
                <CalendarDays size={18} aria-hidden="true" />
                <strong>17,000</strong>
                <span>{locale === "ar" ? "ريال / شهريًا" : "SAR / month"}</span>
              </div>
              <ul className="vehicle-inclusions">
                <li><UsersRound size={18} aria-hidden="true" />{locale === "ar" ? "51 مقعدًا" : "51 seats"}</li>
                <li><Snowflake size={18} aria-hidden="true" />{locale === "ar" ? "مكيّف هواء" : "Air conditioning"}</li>
                <li><Thermometer size={18} aria-hidden="true" />{locale === "ar" ? "مدفأة" : "Heater"}</li>
                <li><UsersRound size={18} aria-hidden="true" />{locale === "ar" ? "مع سائق من الشركة فقط — لا تتوفر خدمة القيادة الذاتية" : "Company driver included — no self-drive service"}</li>
                <li><Fuel size={18} aria-hidden="true" />{locale === "ar" ? "الوقود مشمول" : "Fuel included"}</li>
              </ul>
            </article>
            <article className="vehicle-pricing-card">
              <Image
                className="vehicle-pricing-image"
                src="/images/toyota-coaster-2026.webp"
                alt={locale === "ar" ? "تويوتا كوستر" : "Toyota Coaster"}
                width={1640}
                height={640}
                sizes="(max-width: 840px) calc(100vw - 80px), 520px"
              />
              <h3 className="vehicle-pricing-title">{locale === "ar" ? "كوستر" : "Coaster"}</h3>
              <div className="vehicle-price-options">
                <div className="vehicle-price">
                  <CalendarDays size={18} aria-hidden="true" />
                  <strong>15,000</strong>
                  <span>{locale === "ar" ? "ريال / شهريًا" : "SAR / month"}</span>
                </div>
                <div className="vehicle-price">
                  <CalendarDays size={18} aria-hidden="true" />
                  <strong>700</strong>
                  <span>{locale === "ar" ? "ريال / يوميًا" : "SAR / day"}</span>
                </div>
              </div>
              <ul className="vehicle-inclusions">
                <li><UsersRound size={18} aria-hidden="true" />{locale === "ar" ? "22 مقعدًا" : "22 seats"}</li>
                <li><Snowflake size={18} aria-hidden="true" />{locale === "ar" ? "مكيّف هواء" : "Air conditioning"}</li>
                <li><Thermometer size={18} aria-hidden="true" />{locale === "ar" ? "مدفأة" : "Heater"}</li>
                <li><UsersRound size={18} aria-hidden="true" />{locale === "ar" ? "مع سائق من الشركة فقط — لا تتوفر خدمة القيادة الذاتية" : "Company driver included — no self-drive service"}</li>
                <li><Fuel size={18} aria-hidden="true" />{locale === "ar" ? "الوقود مشمول" : "Fuel included"}</li>
              </ul>
            </article>
          </div>
          <p className="vehicle-tax-note">
            <BadgeCheck size={19} aria-hidden="true" />
            <span>{locale === "ar" ? "الأسعار الموضحة لا تشمل الضريبة." : "Tax excluded from all listed prices."}</span>
          </p>
          <div className="vehicle-booking-cta">
            <Link className="button button-primary" href={bookUrl}>
              {locale === "ar" ? "احجز الآن / أرسل استفسارًا" : "Book Now / Get Inquiry"}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-heading">
            <div><span className="section-eyebrow">{locale === "ar" ? "نهجنا" : "Our approach"}</span><h2>{home.reasonsTitle}</h2></div>
          </div>
          <div className="card-grid card-grid-three">
            {home.reasons.map((card) => <IconCard key={card.title} {...card} />)}
          </div>
        </div>
      </section>

      <section className="content-section section-muted">
        <div className="container faq-container">
          <div className="section-heading">
            <div><span className="section-eyebrow">{locale === "ar" ? "معلومات مفيدة" : "Helpful information"}</span><h2>{home.faqTitle}</h2></div>
          </div>
          <div className="faq-list">
            {home.faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}<ChevronDown size={18} aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-inner">
          <div><span className="section-eyebrow">{copy.ui.nav.booking}</span><h2>{home.closingTitle}</h2><p>{home.closingText}</p></div>
          <Link className="button button-light" href={bookUrl}>{home.primaryAction}<ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
