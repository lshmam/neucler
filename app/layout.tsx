import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ContactWidget } from "@/components/contact-widget"
import "./globals.css"

const GA_MEASUREMENT_ID = "G-QW106S9YYJ"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Neucler - Lead Conversion AI for Your Service Business",
  description: "Transform inbound calls into booked revenue with AI-powered lead scoring, automated follow-ups, and front desk coaching. Start your free trial today.",
  metadataBase: new URL("https://www.neucler.com"),
  alternates: {
    canonical: "/",
  },
  keywords: ["lead conversion", "AI", "inbound calls", "auto repair", "service business", "follow up automation", "front desk training"],
  authors: [{ name: "Neucler" }],
  creator: "Neucler",
  publisher: "Neucler",
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
    locale: "en_US",
    url: "https://www.neucler.com",
    siteName: "Neucler",
    title: "Neucler - Lead Conversion AI for Your Service Business",
    description: "Transform inbound calls into booked revenue with AI-powered lead scoring, automated follow-ups, and front desk coaching. Start your free trial today.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neucler - Lead Conversion AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neucler - Lead Conversion AI for Your Service Business",
    description: "Transform inbound calls into booked revenue with AI-powered lead scoring, automated follow-ups, and front desk coaching.",
    images: ["/og-image.png"],
    creator: "@neucler",
  },
  icons: {
    icon: "/neucler-logo-new.png",
    apple: "/neucler-logo-new.png",
  },
  verification: {
    google: "ZAD0mNqw5DLfsvZZNt3DxCBwuGXz4_VU0MP_CpdLacI",
  },
}

// JSON-LD Schema Markup
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Neucler",
  url: "https://www.neucler.com",
  logo: "https://www.neucler.com/neucler-logo-new.png",
  description: "AI-powered lead conversion platform for service businesses. Transform inbound calls into booked revenue.",
  telephone: "+17782004642",
  sameAs: [
    "https://www.facebook.com/neuclerai",
    "https://twitter.com/neuclerai",
    "https://www.linkedin.com/company/neuclerai",
    "https://www.instagram.com/neuclerai",
    "https://www.youtube.com/@neuclerai",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+17782004642",
    url: "https://cal.com/neucler/30min",
  },
}

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Neucler",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "AI-powered lead conversion and follow-up automation for service businesses",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "7-day free trial",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "10",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
      </head>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <body className={`font-sans antialiased ${playfair.variable}`}>
        {children}
        <ContactWidget />
        <Analytics />
      </body>
    </html>
  )
}
