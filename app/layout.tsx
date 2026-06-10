import type { Metadata } from "next";
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

export const metadata: Metadata = {
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
  openGraph: {
    title: "Digital Jenius — Every Frame, On Purpose",
    description:
      "Cinematic photography and documentary film in Charlottesville, Virginia. Available by appointment, seven days a week.",
    type: "website",
    locale: "en_US",
    siteName: "Digital Jenius",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Digital Jenius",
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
