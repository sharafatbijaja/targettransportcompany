import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCopy, type Locale, type PageKey } from "@/lib/content";

export function Breadcrumbs({
  locale,
  pageKey,
}: {
  locale: Locale;
  pageKey?: PageKey;
}) {
  const copy = getCopy(locale);
  const Separator = locale === "ar" ? ChevronLeft : ChevronRight;

  return (
    <nav className="breadcrumbs" aria-label={copy.ui.breadcrumb}>
      <Link href={`/${locale}`}>{copy.ui.home}</Link>
      {pageKey && (
        <>
          <Separator size={14} aria-hidden="true" />
          <span aria-current="page">{copy.ui.nav[pageKey]}</span>
        </>
      )}
    </nav>
  );
}
