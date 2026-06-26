'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin, MessageCircle } from 'lucide-react'
import { buildWhatsAppInquiryUrl } from '@/lib/constants'
import { getResidenceDetail } from '@/lib/residence-details'
import type { Residence } from '@/lib/residences'
import { cn } from '@/lib/utils'

const WARM_CREAM = '#F9F9F7'
const INK = '#1A1A1A'
const CHAMPAGNE = '#C5A880'

type AmenityKey =
  | 'amenities'
  | 'property'
  | 'security'
  | 'management'
  | 'cleaning'
  | 'parking'

const AMENITY_LABELS: Record<AmenityKey, string> = {
  amenities: 'AMENITIES',
  property: 'PROPERTY',
  security: 'SECURITY',
  management: 'MANAGEMENT',
  cleaning: 'CLEANING',
  parking: 'PARKING',
}

type Props = {
  residence: Residence
  onClose: () => void
  isClosing?: boolean
}

function HeroCarousel({ images, alt }: { images: string[]; alt: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(index, images.length - 1))
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' })
    setActive(clamped)
  }, [images.length])

  const onScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el || el.clientWidth === 0) return
    setActive(Math.round(el.scrollLeft / el.clientWidth))
  }, [])

  if (images.length === 1) {
    return (
      <div className="relative w-full overflow-hidden bg-[#EDECEA]">
        <img
          src={images[0] || '/placeholder.svg'}
          alt={alt}
          className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
        />
      </div>
    )
  }

  return (
    <div className="relative w-full bg-[#EDECEA]">
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <div key={`${src}-${i}`} className="w-full shrink-0 snap-center">
            <img
              src={src || '/placeholder.svg'}
              alt={`${alt} — ${i + 1}`}
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => scrollTo(active - 1)}
            className="absolute left-3 top-1/2 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1A1A1A] shadow-sm transition-opacity disabled:opacity-0 sm:flex"
            disabled={active === 0}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => scrollTo(active + 1)}
            className="absolute right-3 top-1/2 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1A1A1A] shadow-sm transition-opacity disabled:opacity-0 sm:flex"
            disabled={active === images.length - 1}
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  i === active ? 'w-5 bg-white' : 'w-1.5 bg-white/50',
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function ResidenceDetailPanel({
  residence,
  onClose,
  isClosing = false,
}: Props) {
  const [visible, setVisible] = useState(false)
  const detail = getResidenceDetail(residence.id)
  const title = `${residence.name.toUpperCase()} RESIDENCE`
  const whatsAppUrl = buildWhatsAppInquiryUrl(residence.name)
  const heroImages =
    detail.heroImages.length > 0
      ? detail.heroImages
      : [residence.image || '/placeholder.svg']

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (isClosing) setVisible(false)
  }, [isClosing])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex flex-col transition-opacity duration-500 ease-out',
        visible ? 'opacity-100' : 'opacity-0',
      )}
      style={{ backgroundColor: WARM_CREAM }}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} details`}
    >
      <div
        className={cn(
          'flex-1 overflow-y-auto overscroll-contain transition-transform duration-500 ease-out',
          visible ? 'translate-y-0' : 'translate-y-4',
        )}
      >
        {/* 1. Hero — full-bleed, first screen on mobile */}
        <div className="relative">
          <HeroCarousel images={heroImages} alt={title} />

          <button
            type="button"
            onClick={onClose}
            className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#F9F9F7]/92 px-3.5 py-2 text-sm font-medium shadow-sm backdrop-blur-sm transition-colors hover:bg-[#F9F9F7] sm:left-6 sm:top-5"
            style={{ color: INK }}
          >
            <ArrowLeft className="size-4" />
            Homepage
          </button>
        </div>

        {/* 2. Title + price + tags — immediately below hero */}
        <div className="mx-auto max-w-5xl px-5 pb-32 pt-6 md:px-8 md:pt-8 md:pb-36">
          <header>
            <h2
              className="text-balance text-2xl font-semibold leading-tight tracking-[0.04em] sm:text-3xl md:text-4xl"
              style={{ color: INK }}
            >
              {title}
            </h2>

            <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {detail.priceFrom != null ? (
                <>
                  <p className="text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: INK }}>
                    RM {detail.priceFrom}
                    <span className="ml-1 text-base font-normal text-[#1A1A1A]/55 sm:text-lg">
                      / month
                    </span>
                  </p>
                  <span className="text-xs text-[#1A1A1A]/45">起 · 含基本设施</span>
                </>
              ) : (
                <p className="text-lg font-medium text-[#1A1A1A]/55">
                  价格即将公布 · 欢迎预约咨询
                </p>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {detail.highlightTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3.5 py-1.5 text-xs font-medium"
                  style={{
                    color: CHAMPAGNE,
                    backgroundColor: `${CHAMPAGNE}18`,
                    border: `1px solid ${CHAMPAGNE}55`,
                  }}
                >
                  {tag}
                </span>
              ))}
              {detail.audienceTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#1A1A1A]/[0.06] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#1A1A1A]/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#1A1A1A]/65">
              {residence.tagline}
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-[#1A1A1A]/50">
              <MapPin className="size-3.5" style={{ color: INK }} />
              {residence.location}
            </p>
          </header>

          {/* 3. Amenities grid */}
          <section className="mt-10 md:mt-14">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#1A1A1A]/[0.08] bg-[#1A1A1A]/[0.06] md:grid-cols-3">
              {(Object.keys(AMENITY_LABELS) as AmenityKey[]).map((key) => (
                <div
                  key={key}
                  className="px-4 py-5 md:px-6 md:py-7"
                  style={{ backgroundColor: WARM_CREAM }}
                >
                  <h3
                    className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#1A1A1A]/45"
                  >
                    {AMENITY_LABELS[key]}
                  </h3>
                  <ul className="mt-2.5 space-y-1.5">
                    {detail.amenityGrid[key].map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-snug text-[#1A1A1A]/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Floors */}
          {detail.floors.length > 0 && (
            <section className="mt-12 space-y-14 md:mt-16 md:space-y-20">
              {detail.floors.map((floor) => (
                <div key={floor.label}>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1A1A1A]/45">
                    {floor.label} · Common Areas
                  </h3>
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {floor.commonAreas.map((area) => (
                      <div
                        key={`${floor.label}-${area.name}`}
                        className="w-[132px] shrink-0 sm:w-40"
                      >
                        <div className="aspect-[3/4] overflow-hidden rounded-xl border border-[#1A1A1A]/[0.08] bg-[#EDECEA]">
                          <img
                            src={area.image || '/placeholder.svg'}
                            alt={`${area.name} at ${title}`}
                            className="size-full object-cover"
                          />
                        </div>
                        <p className="mt-2.5 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-[#1A1A1A]/70">
                          {area.name}
                        </p>
                      </div>
                    ))}
                  </div>

                  <h3 className="mt-10 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1A1A1A]/45">
                    {floor.label} · Rooms
                  </h3>
                  <div className="mt-4 space-y-6">
                    {floor.rooms.map((room) => (
                      <div
                        key={`${floor.label}-${room.model}`}
                        className="overflow-hidden rounded-2xl border border-[#1A1A1A]/[0.08] bg-white/50"
                      >
                        <img
                          src={room.image || '/placeholder.svg'}
                          alt={room.model}
                          className="aspect-[16/10] w-full object-cover sm:aspect-[16/9]"
                        />
                        <div className="border-t border-[#1A1A1A]/[0.06] px-4 py-3.5 sm:px-5">
                          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#1A1A1A]/45">
                            Room Type
                          </p>
                          <p
                            className="mt-1 text-lg font-medium tracking-wide sm:text-xl"
                            style={{ color: INK }}
                          >
                            {room.model}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* 5. Map */}
          <section className="mt-12 pb-8 md:mt-16 md:pb-10">
            <h3
              className="text-balance text-lg font-semibold tracking-tight sm:text-xl"
              style={{ color: INK }}
            >
              Where is {residence.name} Residence?
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#1A1A1A]/55">
              {detail.mapCaption}
            </p>
            <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#1A1A1A]/[0.08] bg-[#EDECEA]">
              <img
                src={detail.mapImage || '/placeholder.svg'}
                alt={`Map location for ${title}`}
                className="aspect-[16/10] w-full object-cover opacity-90 sm:aspect-[16/9]"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-[#F9F9F7]/95 px-3.5 py-2 text-sm text-[#1A1A1A]/75 shadow-sm backdrop-blur-sm">
                <MapPin className="size-4" style={{ color: INK }} />
                {residence.location}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* WhatsApp CTA — logic unchanged */}
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 bottom-0 z-[60] px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-12 transition-all duration-500 ease-out sm:px-6',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        )}
        style={{
          background: `linear-gradient(to top, ${WARM_CREAM} 65%, ${WARM_CREAM}00)`,
        }}
      >
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto mx-auto flex max-w-2xl items-center justify-center gap-2.5 rounded-full px-5 py-3.5 text-sm font-semibold tracking-wide shadow-md transition-transform duration-300 hover:scale-[1.01] active:scale-[0.98] motion-safe:animate-[pulse-soft_2.5s_ease-in-out_infinite] sm:py-4 sm:text-base"
          style={{ backgroundColor: CHAMPAGNE, color: INK }}
        >
          <MessageCircle className="size-5" />
          立即预约看房 (Inquire via WhatsApp)
        </a>
      </div>
    </div>
  )
}
