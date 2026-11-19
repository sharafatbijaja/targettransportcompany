import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Target Transport Company KSA",
  description: "Transportation information and inquiries for Target Transport Company KSA.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
