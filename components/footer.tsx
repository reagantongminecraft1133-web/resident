import { MessageCircle, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { navResidences } from '@/lib/residences'

const CREAM = '#F9F9F7'
const INK = '#1A1A1A'
const CHAMPAGNE = '#C5A880'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-zinc-200"
      style={{ backgroundColor: CREAM, color: INK }}
    >
      <div className="mx-auto max-w-7xl px-5 pt-20 md:px-8 md:pt-28">
        <div className="rounded-3xl border border-zinc-200 bg-white px-6 py-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.015)] md:px-12 md:py-16">
          <h2
            className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl"
            style={{ color: INK }}
          >
            Ready to find your room in Sibu?
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed"
            style={{ color: `${INK}A6` }}
          >
            Message us on WhatsApp and we&apos;ll share availability, photos and
            pricing right away. Your next residence is one chat away.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/60000000000"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity duration-300 hover:opacity-90"
              style={{ backgroundColor: CHAMPAGNE, color: INK }}
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+60000000000"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#F3F4F6]"
              style={{ color: INK }}
            >
              <Phone className="size-4" />
              Call us
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p
              className="mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: `${INK}8C` }}
            >
              Premium fully-furnished room rentals across Sibu. Transforming
              rooms into residences since 2021.
            </p>
          </div>

          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: `${INK}66` }}
            >
              Residences
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navResidences.map((r) => (
                <li key={r.id}>
                  <a
                    href={`#${r.id}`}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: `${INK}A6` }}
                  >
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: `${INK}66` }}
            >
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Residences', href: '#residences' },
                { label: 'FAQs', href: '#faqs' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: `${INK}A6` }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: `${INK}66` }}
            >
              Connect
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href="https://wa.me/60000000000"
                aria-label="WhatsApp"
                className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 transition-colors hover:bg-[#F3F4F6]"
                style={{ color: `${INK}A6` }}
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 transition-colors hover:bg-[#F3F4F6]"
                style={{ color: `${INK}A6` }}
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-6 text-xs sm:flex-row"
          style={{ color: `${INK}73` }}
        >
          <p>© {new Date().getFullYear()} The Room Residence. All rights reserved.</p>
          <p>Sibu, Sarawak · Malaysia</p>
        </div>
      </div>
    </footer>
  )
}
