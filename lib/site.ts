export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://targettransportcompany.sa"
).replace(/\/+$/, "");

export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
