import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ContactWidget } from "@/components/contact-widget"
import "./globals.css"

const GA_MEASUREMENT_ID = "G-QW106S9YYJ"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neucler - Lead Conversion AI for Your Service Business",
  description: "An AI Employee that converts leads and makes you money. 24/7 lead conversion and customer engagement.",
  icons: {
    icon: "/neucler-logo-new.png",
    apple: "/neucler-logo-new.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
      <body className={`font-sans antialiased`}>
        {children}
        <ContactWidget />
        <Analytics />
      </body>
    </html>
  )
}
