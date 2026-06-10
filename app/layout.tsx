import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const siteUrl = "https://digitaljenius.arquillasolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Digital Jenius — Photography & Videography | Charlottesville, VA",
  description:
    "Cinematic photography and documentary film in Charlottesville, Virginia. Event, sports, portrait, pet, product, wildlife, and real estate photography — serving Harrisonburg, Richmond, and Northern Virginia. Call (434) 400-9422.",
  keywords: [
    "photographer Charlottesville VA",
    "videographer Charlottesville",
    "event photography Virginia",
    "portrait photography Charlottesville",
    "real estate photography Virginia",
    "wedding photographer Charlottesville",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Digital Jenius — Every Frame, On Purpose",
    description:
      "Cinematic photography and documentary film in Charlottesville, Virginia. Available by appointment, seven days a week.",
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: "Digital Jenius",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Jenius — Every Frame, On Purpose. Photography & Videography in Charlottesville, Virginia.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Jenius — Every Frame, On Purpose",
    description:
      "Cinematic photography and documentary film in Charlottesville, Virginia. Call (434) 400-9422.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Digital Jenius",
  url: "https://digitaljenius.arquillasolutions.com",
  image: "https://digitaljenius.arquillasolutions.com/og.jpg",
  logo: "https://digitaljenius.arquillasolutions.com/logo.png",
  description:
    "Cinematic photography and videography studio in Charlottesville, Virginia — event, sports, animal & pet, portrait, product, wildlife, and real estate photography, plus documentary film.",
  telephone: "+1-434-400-9422",
  founder: { "@type": "Person", name: "Dennis Eddy" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charlottesville",
    addressRegion: "VA",
    addressCountry: "US",
  },
  areaServed: [
    "Charlottesville VA",
    "Harrisonburg VA",
    "Richmond VA",
    "Northern Virginia",
    "Washington DC",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
