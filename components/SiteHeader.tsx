"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { getCopy, pageKeys, type Locale } from "@/lib/content";

type Theme = "light" | "dark" | "system";

function setTheme(theme: Theme) {
  const resolved =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;
  document.documentElement.dataset.theme = resolved;
  try {
    localStorage.setItem("target-theme", theme);
  } catch {
    document.documentElement.dataset.theme = resolved;
  }
  window.dispatchEvent(new Event("target-theme-change"));
}

function getTheme(): Theme {
  try {
    const storedTheme = localStorage.getItem("target-theme");
    return storedTheme === "light" || storedTheme === "dark" || storedTheme === "system"
      ? storedTheme
      : "system";
  } catch {
    return "system";
  }
}

function subscribeToTheme(onChange: () => void) {
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");
  const update = () => {
    onChange();
    if (getTheme() === "system") {
      document.documentElement.dataset.theme = systemPreference.matches ? "dark" : "light";
    }
  };
  window.addEventListener("target-theme-change", update);
  window.addEventListener("storage", update);
  systemPreference.addEventListener("change", update);
  return () => {
    window.removeEventListener("target-theme-change", update);
    window.removeEventListener("storage", update);
    systemPreference.removeEventListener("change", update);
  };
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useSyncExternalStore<Theme>(
    subscribeToTheme,
    getTheme,
    (): Theme => "system",
  );
  const otherLocale = locale === "en" ? "ar" : "en";
  const otherPath = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${otherLocale}`);

  function cycleTheme() {
    const nextTheme: Theme =
      theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    setTheme(nextTheme);
  }

  const ThemeIcon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href={`/${locale}`} aria-label={copy.ui.brand}>
          <BrandLogo />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? copy.ui.menuClose : copy.ui.menuOpen}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}
        >
          <Link
            href={`/${locale}`}
            aria-current={pathname === `/${locale}` ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {copy.ui.home}
          </Link>
          {pageKeys.map((key) => (
            <Link
              key={key}
              href={`/${locale}/${key}`}
              aria-current={pathname === `/${locale}/${key}` ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {copy.ui.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="header-tools">
          <Link
            className="language-switch"
            href={otherPath}
            hrefLang={otherLocale}
            aria-label={`${copy.ui.language}: ${otherLocale.toUpperCase()}`}
          >
            {otherLocale.toUpperCase()}
          </Link>
          <button
            className="theme-toggle"
            type="button"
            onClick={cycleTheme}
            aria-label={`${copy.ui.theme}: ${copy.ui.themeNames[theme]}`}
            title={`${copy.ui.theme}: ${copy.ui.themeNames[theme]}`}
          >
            <ThemeIcon size={18} aria-hidden="true" />
            <span className="theme-label">{copy.ui.themeNames[theme]}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
