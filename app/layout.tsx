import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Derintaş Mermer & Granit | Doğal Taş Çözümleri",
  description:
    "Derintaş Mermer & Granit - Mermer, granit ve doğal taş kesim, işleme ve uygulama hizmetleri. Mutfak tezgahı, zemin döşeme, merdiven ve özel tasarım projeler.",
  keywords: [
    "mermer",
    "granit",
    "doğal taş",
    "mutfak tezgahı",
    "granit tezgah",
    "mermer kesim",
    "zemin döşeme",
    "taş kaplama",
    "İzmir mermer",
    "Derintaş",
  ],
  openGraph: {
    title: "Derintaş Mermer & Granit | Doğal Taş Çözümleri",
    description:
      "Mermer, granit ve doğal taş işçiliğinde 20+ yıllık deneyim. Mutfak tezgahı, zemin döşeme, merdiven ve özel tasarım projeler.",
    type: "website",
    locale: "tr_TR",
    siteName: "Derintaş Mermer & Granit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derintaş Mermer & Granit | Doğal Taş Çözümleri",
    description:
      "Mermer, granit ve doğal taş işçiliğinde 20+ yıllık deneyim. Kaliteli işçilik, güvenilir hizmet.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
