import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ContactWidget } from "@/components/contact-widget"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neucler - AI Employee for Business",
  description: "An AI Employee that converts leads and makes you money. 24/7 lead conversion and customer engagement.",
  icons: {
    icon: "/neucler-logo.png",
    apple: "/neucler-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <ContactWidget />
        <Analytics />
      </body>
    </html>
  )
}
