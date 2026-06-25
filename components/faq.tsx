'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'How do I book a room?',
    a: 'Message us on WhatsApp or tap “Contact Us”. We’ll share current availability, arrange a viewing (in person or virtual), and once you’re happy we secure your room with a deposit. The whole process can be completed in a single day.',
  },
  {
    q: 'What are the deposit and rental fees?',
    a: 'Rentals vary by residence and room type. Typically we ask for one month’s rent as a refundable security deposit plus the first month’s rent upfront. There are no hidden agent fees — everything is shared transparently before you commit.',
  },
  {
    q: 'Are the rooms really fully furnished?',
    a: 'Yes. Every room comes with a bed and quality mattress, wardrobe, desk, lighting, curtains and linens. Shared spaces include a fitted kitchen and lounge. You only need to bring your personal belongings.',
  },
  {
    q: 'What is included in the monthly rent?',
    a: 'Rent includes Wi-Fi, water, and the use of all shared facilities. Electricity is typically billed based on usage. Weekly cleaning of common areas is included at most residences.',
  },
  {
    q: 'What is the minimum rental period?',
    a: 'Our standard tenancy is a minimum of three months, with flexible monthly renewals after that. Short-stay options may be available at select residences — just ask.',
  },
  {
    q: 'Where are the residences located?',
    a: 'All five residences — Parkway, Kingsway, Norway, Steinway and Velway — are located in and around Sibu, close to town, dining and key amenities. We’ll help you choose the best fit for your routine.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faqs" className="py-20 md:py-28" style={{ backgroundColor: '#F9F9F7' }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-[11px] font-medium uppercase tracking-[0.25em]" style={{ color: '#1A1A1A66' }}>
            Good to know
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl" style={{ color: '#1A1A1A' }}>
            Frequently asked questions
          </h2>
          <p className="mt-4 text-pretty leading-relaxed" style={{ color: '#1A1A1AA6' }}>
            Everything you need to know about renting with The Room Residence.
            Still have a question?{' '}
            <a
              href="#contact"
              className="font-medium underline decoration-black/15 underline-offset-4 hover:decoration-black/30"
              style={{ color: '#1A1A1A' }}
            >
              Talk to our team
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className={cn(
                  'overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.015)]',
                  isOpen && 'bg-white',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium" style={{ color: '#1A1A1A' }}>
                    {item.q}
                  </span>
                  <Plus
                    className={cn(
                      'size-5 shrink-0 transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                    style={{ color: '#1A1A1A50' }}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: '#1A1A1AA6' }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
