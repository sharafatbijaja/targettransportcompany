import type { MetadataRoute } from "next";
import { pageKeys, locales } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  const paths = ["", ...pageKeys.map((page) => `/${page}`)];
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      alternates: {
        languages: {
          en: `${siteUrl}/en${path}`,
          ar: `${siteUrl}/ar${path}`,
          "x-default": `${siteUrl}/en${path}`,
        },
      },
    })),
  );
}
