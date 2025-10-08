import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@i18n/routing";
import { DM_Sans, Jost } from "next/font/google";
import "../globals.css";
import "@styles/minimal-animations.css";
import type { Metadata } from "next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
  weight: ["400", "500", "600"],
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "arial"],
});

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
  preload: false,
  weight: ["400", "500"],
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auradelmar.mussebgroup.com"),
  title: {
    default: "Aura del Mar - Residencias de Lujo en Santo Domingo Este",
    template: "%s | Aura del Mar",
  },
  description:
    "Descubre Aura del Mar: exclusivo proyecto residencial con apartamentos de 2 y 3 habitaciones en Santo Domingo Este. Amenidades premium, áreas verdes y ubicación privilegiada. Feria inmobiliaria 6-8 junio 2025.",

  keywords: [
    "Aura del Mar",
    "apartamentos lujo Santo Domingo Este",
    "residencias premium República Dominicana",
    "apartamentos Santo Domingo",
    "Casalina Inmobiliaria",
    "apartamentos 2 habitaciones",
    "apartamentos 3 habitaciones",
    "amenidades premium",
    "áreas verdes",
    "Santo Domingo Este",
    "residencial exclusivo",
  ],

  authors: [{ name: "Casalina Inmobiliaria" }],
  creator: "Casalina Inmobiliaria",
  publisher: "Casalina Inmobiliaria",

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

  openGraph: {
    type: "website",
    locale: "es_DO",
    alternateLocale: ["en_US"],
    url: "https://auradelmar.mussebgroup.com",
    siteName: "Aura del Mar",
    title: "Aura del Mar - Residencias de Lujo en Santo Domingo Este",
    description:
      "Exclusivo proyecto residencial con apartamentos de 2-3 habitaciones. Amenidades premium, áreas verdes y ubicación privilegiada en Santo Domingo Este.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aura del Mar - Residencias de lujo en Santo Domingo Este",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@casalinasrl",
    creator: "@casalinasrl",
    title: "Aura del Mar - Residencias de Lujo",
    description:
      "Exclusivo proyecto residencial en Santo Domingo Este. Apartamentos premium con amenidades de primer nivel.",
    images: [
      {
        url: "/images/og-image.png",
        alt: "Aura del Mar - Vista exterior del complejo residencial",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },

  manifest: "/site.webmanifest",

  other: {
    "msapplication-TileColor": "#3C7269",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#3C7269",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@i18n/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${dmSans.variable} ${jost.variable}`}
      prefix="og: https://ogp.me/ns#"
    >
      <head>
        {/* DNS prefetch for external resources */}
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Viewport with enhanced mobile support */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
        />

        {/* Enhanced format detection */}
        <meta
          name="format-detection"
          content="telephone=no, date=no, address=no, email=no"
        />

        {/* Apple specific tags */}
        <meta name="apple-mobile-web-app-title" content="Aura del Mar" />
        <meta name="application-name" content="Aura del Mar" />

        {/* Business/Location specific meta tags */}
        <meta name="geo.region" content="DO-32" />
        <meta name="geo.placename" content="Santo Domingo Este" />
        <meta name="geo.position" content="18.4861;-69.8597" />
        <meta name="ICBM" content="18.4861, -69.8597" />

        {/* Local business schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Aura del Mar - Casalina Inmobiliaria",
              image: "/images/og-image.png",
              description:
                "Residencias de lujo en Santo Domingo Este con amenidades premium",
              url: "https://auradelmar.mussebgroup.com",
              telephone: "+1-809-299-5767",
              email: "setterinvest@auradelmar.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Santo Domingo Este",
                addressRegion: "Santo Domingo",
                postalCode: "11501",
                addressCountry: "DO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 18.4861,
                longitude: -69.8597,
              },
              openingHours: "Mo-Su 10:00-17:00",
              sameAs: [
                "https://www.facebook.com/casalinainmobiliaria",
                "https://www.instagram.com/casalinasrl/",
              ],
            }),
          }}
        />
      </head>

      <body
        className="antialiased font-sans bg-white text-gray-900"
        suppressHydrationWarning
      >
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone="America/Santo_Domingo"
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
