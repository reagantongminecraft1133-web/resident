'use client'

import { useCallback, useEffect, useState } from 'react'
import { Check, MapPin } from 'lucide-react'
import { ResidenceDetailPanel } from '@/components/residence-detail-panel'
import { residences, type Residence } from '@/lib/residences'

export function Residences() {
  const [activeResidence, setActiveResidence] = useState<Residence | null>(
    null,
  )
  const [closing, setClosing] = useState(false)

  const handleOpen = useCallback((residence: Residence) => {
    setClosing(false)
    setActiveResidence(residence)
  }, [])

  const handleClose = useCallback(() => {
    setClosing(true)
    window.setTimeout(() => {
      setActiveResidence(null)
      setClosing(false)
    }, 400)
  }, [])

  useEffect(() => {
    if (activeResidence) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeResidence])

  return (
    <>
      <section
        id="residences"
        className="py-20 md:py-28"
        style={{ backgroundColor: '#F9F9F7' }}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-xl">
            <span
              className="text-[11px] font-medium uppercase tracking-[0.25em]"
              style={{ color: '#1A1A1A66' }}
            >
              Our Collection
            </span>
            <h2
              className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl"
              style={{ color: '#1A1A1A' }}
            >
              Discover Our Residences
            </h2>
            <p
              className="mt-4 text-pretty leading-relaxed"
              style={{ color: '#1A1A1AA6' }}
            >
              Five distinct residences across Sibu, each fully furnished and
              ready for you to move in. Tap any card to explore floor plans,
              amenities and location.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {residences.map((r) => (
              <article
                key={r.id}
                id={r.id}
                role="button"
                tabIndex={0}
                onClick={() => handleOpen(r)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleOpen(r)
                  }
                }}
                className="group scroll-mt-28 cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.015)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={r.image || '/placeholder.svg'}
                    alt={`${r.name} residence interior`}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/45 to-transparent" />
                  {r.comingSoon && (
                    <span
                      className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                      style={{ backgroundColor: '#C5A880', color: '#1A1A1A' }}
                    >
                      Opening Soon
                    </span>
                  )}
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 text-xs font-medium text-white/90">
                    <MapPin className="size-3.5 text-white/80" />
                    {r.location}
                  </span>
                </div>

                <div className="flex flex-col gap-4 p-6">
                  <div>
                    <h3
                      className="text-xl font-semibold tracking-tight transition-opacity group-hover:opacity-80"
                      style={{ color: '#1A1A1A' }}
                    >
                      {r.name}
                    </h3>
                    <p
                      className="mt-1.5 text-sm leading-relaxed"
                      style={{ color: '#1A1A1A99' }}
                    >
                      {r.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {r.facilities.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium"
                        style={{ backgroundColor: '#F3F4F6', color: '#1A1A1A' }}
                      >
                        <Check className="size-3 text-zinc-500" />
                        {f}
                      </span>
                    ))}
                  </div>

                  <p
                    className="text-[11px] font-medium uppercase tracking-[0.2em] transition-opacity group-hover:opacity-70"
                    style={{ color: '#1A1A1A66' }}
                  >
                    Tap to explore →
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeResidence && (
        <ResidenceDetailPanel
          residence={activeResidence}
          onClose={handleClose}
          isClosing={closing}
        />
      )}
    </>
  )
}
