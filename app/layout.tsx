import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.derintasmermer.com"),
  title: "Derintaş Mermer & Granit | İzmir Mermer, Granit ve Doğal Taş",
  description:
    "İzmir Karabağlar'da mermer, granit ve doğal taş kesim, işleme ve uygulama hizmetleri. Mutfak tezgahı, granit tezgah, zemin döşeme, merdiven ve özel tasarım projeler. 20+ yıllık deneyim.",
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
    "Karabağlar mermer",
    "mermer tezgah İzmir",
    "granit tezgah İzmir",
    "doğal taş kaplama",
    "mermer merdiven",
    "Derintaş",
    "Derintaş Mermer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Derintaş Mermer & Granit | İzmir Mermer ve Doğal Taş",
    description:
      "Mermer, granit ve doğal taş işçiliğinde 20+ yıllık deneyim. Mutfak tezgahı, zemin döşeme, merdiven ve özel tasarım projeler. İzmir Karabağlar.",
    type: "website",
    locale: "tr_TR",
    siteName: "Derintaş Mermer & Granit",
    images: [
      {
        url: "/traverten-teras.jpg",
        width: 1200,
        height: 630,
        alt: "Derintaş Mermer & Granit - Doğal taş işçiliği",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Derintaş Mermer & Granit | İzmir Mermer ve Doğal Taş",
    description:
      "Mermer, granit ve doğal taş işçiliğinde 20+ yıllık deneyim. Kaliteli işçilik, güvenilir hizmet.",
    images: ["/traverten-teras.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.derintasmermer.com",
  name: "Derintaş Mermer & Granit",
  description:
    "İzmir'de mermer, granit ve doğal taş kesim, işleme ve uygulama hizmetleri. Mutfak tezgahı, zemin döşeme, merdiven ve özel tasarım projeler.",
  url: "https://www.derintasmermer.com",
  telephone: "+905330306237",
  email: "info@derintasmermer.com",
  image: "https://www.derintasmermer.com/logo.png",
  logo: "https://www.derintasmermer.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aşık Veysel, 5733/3. Sk. No: 36/A",
    addressLocality: "Karabağlar",
    addressRegion: "İzmir",
    postalCode: "35130",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.3895,
    longitude: 27.1,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "İzmir",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hizmetlerimiz",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mermer Kesim & İşleme" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Granit Tezgah" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Doğal Taş Kaplama" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mutfak & Banyo Tezgahı" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Merdiven & Zemin Döşeme" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Özel Tasarım Projeler" } },
    ],
  },
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
