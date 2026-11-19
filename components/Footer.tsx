import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { getCopy, pageKeys, type Locale } from "@/lib/content";

export function Footer({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="wordmark wordmark-footer" href={`/${locale}`} aria-label={copy.ui.brand}>
            <BrandLogo variant="dark-surface" />
          </Link>
          <p>{copy.ui.footerText}</p>
        </div>
        <nav className="footer-nav" aria-label={locale === "ar" ? "روابط الموقع" : "Site links"}>
          <strong>{locale === "ar" ? "استكشف" : "Explore"}</strong>
          <Link href={`/${locale}`}>{copy.ui.home}</Link>
          {pageKeys.map((key) => (
            <Link key={key} href={`/${locale}/${key}`}>{copy.ui.nav[key]}</Link>
          ))}
        </nav>
        <div className="footer-contact">
          <strong>{copy.ui.nav.contact}</strong>
          <p>{locale === "ar" ? "بيانات التواصل المعتمدة ستضاف هنا." : "Verified company contact details will be added here."}</p>
          <Link href={`/${locale}/contact`}>
            {copy.ui.book}<ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {copy.ui.brand}</span>
        <span>{locale === "ar" ? "المعلومات قيد التحقق قبل النشر." : "Company details are published only when verified."}</span>
      </div>
    </footer>
  );
}
