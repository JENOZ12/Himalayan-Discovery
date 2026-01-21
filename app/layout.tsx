import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google"; // Import both
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

import Navbar from "@/components/Navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://himalayadiscovery.com'),
  title: {
    default: "Himalayan Discovery | Uncharted Adventures in Spiti & Kinnaur",
    template: "%s | Himalayan Discovery"
  },
  description: "Explore the uncharted beauty of the Himalayas. Premium 4x4 expeditions, trekking, and cultural tours in Spiti, Kinnaur, and luxury Himalayan stays.",
  keywords: ["Spiti Valley Tour", "Kinnaur Road Trip", "Himalayan 4x4 Expedition", "Luxury Travel Himalayas", "Kaza Tours", "Chandratal Lake Camping", "Sangla Valley Guide"],
  authors: [{ name: "Himalayan Discovery Team" }],
  creator: "Himalayan Discovery",
  publisher: "Himalayan Discovery",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Himalayan Discovery | Premium Himalayan Expeditions",
    description: "Join the most immersive 4x4 road trips and trekking adventures in Spiti and Kinnaur. Experience luxury in the wilderness.",
    url: 'https://himalayadiscovery.com',
    siteName: 'Himalayan Discovery',
    images: [
      {
        url: '/hero/spiti-og.jpg', // Ensure this exists or fallback to a general hero
        width: 1200,
        height: 630,
        alt: 'Himalayan Discovery Expedition',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himalayan Discovery',
    description: 'Uncharted Adventures in the Himalayas. Premium Tours & Stays.',
    images: ['/hero/spiti-og.jpg'], // Same as OG
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfair.variable}`}>
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)]">
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Himalayan Discovery",
              "url": "https://himalayadiscovery.com",
              "logo": "https://himalayadiscovery.com/logo.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 97362 85518",
                "contactType": "customer service"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
