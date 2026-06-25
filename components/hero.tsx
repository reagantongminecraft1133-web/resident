'use client'

import { useState } from 'react'
import { ArrowDown, MapPin } from 'lucide-react'
import { navResidences } from '@/lib/residences'

const INK = '#FFFFFF'
const CHAMPAGNE = '#C5A880'
const PILL_INACTIVE = '#F3F4F6'

export function Hero() {
  const [active, setActive] = useState(navResidences[0].id)

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-black"
      style={{ color: INK }}
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/steinway.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 pb-16 pt-32 text-center md:px-8 md:pb-24 md:pt-44">
        <span
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: 'rgba(255,255,255,0.9)' }}
        >
          <span
            className="size-1.5 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
          />
          Premium Living in Sibu
        </span>

        <h1
          className="mt-7 max-w-4xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          style={{ color: '#FFFFFF' }}
        >
          Sibu Room Rental
          <span
            className="mt-2 block text-xl font-light sm:text-2xl md:text-3xl"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            Fully Furnished Accommodation
          </span>
        </h1>

        <p
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed md:text-lg"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          Transforming Rooms into Residences — thoughtfully designed, move-in
          ready homes for modern professionals and students.
        </p>

        <div className="mt-12 w-full">
          <p
            className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em]"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Explore our residences
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {navResidences.map((r) => {
              const isActive = active === r.id
              return (
                <a
                  key={r.id}
                  href={`#${r.id}`}
                  onClick={() => setActive(r.id)}
                  className="rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300"
                  style={
                    isActive
                      ? {
                          backgroundColor: CHAMPAGNE,
                          color: INK,
                          border: `1px solid ${CHAMPAGNE}`,
                        }
                      : {
                          backgroundColor: PILL_INACTIVE,
                          color: INK,
                          border: '1px solid transparent',
                        }
                  }
                >
                  {r.name}
                </a>
              )
            })}
          </div>

          <div
            className="mx-auto mt-6 flex min-h-6 max-w-md items-center justify-center gap-2 text-sm"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            <MapPin className="size-4 shrink-0" style={{ color: 'rgba(255,255,255,0.6)' }} />
            <span>
              {navResidences.find((r) => r.id === active)?.tagline}
            </span>
          </div>
        </div>

        <a
          href="#residences"
          className="mt-12 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          Discover residences
          <ArrowDown className="size-4 animate-bounce" style={{ color: 'rgba(255,255,255,0.5)' }} />
        </a>
      </div>
    </section>
  )
}
