import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://axonteck.com/'), // Replace with your actual domain
  title: {
    default: 'Axon - Your Brain\'s Shortcut to Success',
    template: '%s | Axon'
  },
  description: 'Turn messy meetings and vague emails into real progress instantly. Stop managing tasks, start mastering time with AI-driven productivity.',
  keywords: ['productivity tool', 'AI task management', 'meeting notes', 'time management', 'Axon app'],
  authors: [{ name: 'Axon Team' }],
  creator: 'Axon',
  publisher: 'Axon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Axon - Your Brain\'s Shortcut to Success',
    description: 'Turn messy meetings and vague emails into real progress instantly.',
    url: 'https://axonteck.com/',
    siteName: 'Axon',
    images: [
      {
        url: '/og-image.png', // Create a 1200x630 image and put it in your /public folder
        width: 1200,
        height: 630,
        alt: 'Axon - AI Productivity Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axon - Shortcut to Success',
    description: 'Stop managing tasks, start mastering time.',
    images: ['/og-image.png'],
    creator: '@yourtwitterhandle', // Optional
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
