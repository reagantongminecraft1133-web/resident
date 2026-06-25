'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const INK = '#FFFFFF'
const CHAMPAGNE = '#C5A880'
const PILL_INACTIVE = '#F3F4F6'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Residences', href: '#residences' },
  { label: 'FAQs', href: '#faqs' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/5 bg-black/20 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
          <Logo />

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: '#FFFFFF' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 hover:opacity-90 md:inline-flex"
              style={{ backgroundColor: CHAMPAGNE, color: INK }}
            >
              Contact Us
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10 md:hidden"
              style={{ color: '#FFFFFF' }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden border-b border-white/5 bg-black/80 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-white/10"
              style={{ color: '#FFFFFF' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
            style={{ backgroundColor: CHAMPAGNE, color: INK }}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  )
}
