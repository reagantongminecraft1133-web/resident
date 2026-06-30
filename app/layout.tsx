import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Room Residence | Premium Fully-Furnished Room Rentals in Sibu',
  description:
    'Transforming Rooms into Residences. Discover premium, fully-furnished room rentals across Sibu — Parkway, Kingsway, Norway, Steinway and Velway.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/The Room Residence Logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/The Room Residence Logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/The Room Residence Logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/The Room Residence Logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#F9F9F7',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
