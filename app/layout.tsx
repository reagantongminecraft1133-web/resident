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
  themeColor: '#1A1A1A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // 🌟 重点改这里：给 html 加上 bg-[#1A1A1A]（兜底背景）和 overscroll-none（防止上下拖拽回弹露出底层白画布）
    <html 
      lang="en" 
      className={`${inter.variable} bg-[#1A1A1A] overscroll-none`}
      style={{ backgroundColor: '#1A1A1A' }} // 双重保险
    >
      {/* 🌟 重点改这里：给 body 也加上统一的暗黑底色 */}
      <body className="font-sans antialiased bg-[#1A1A1A] text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
