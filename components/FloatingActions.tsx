"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { getCopy, type Locale } from "@/lib/content";
import { whatsappNumber } from "@/lib/site";

export function FloatingActions({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const [visible, setVisible] = useState(false);
  const message =
    locale === "ar"
      ? "مرحباً، أود الاستفسار عن خدمة النقل."
      : "Hello, I would like to ask about transportation services.";

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 420);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <div className={`floating-actions${locale === "ar" ? " is-rtl" : ""}`}>
      {whatsappNumber && (
        <a
          className="floating-whatsapp"
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={copy.ui.whatsapp}
        >
          <MessageCircle size={22} aria-hidden="true" />
        </a>
      )}
      {visible && (
        <button
          className="floating-top"
          type="button"
          aria-label={copy.ui.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={19} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
