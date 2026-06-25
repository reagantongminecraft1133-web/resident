'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

type Review = {
  name: string
  handle: string
  initials: string
  rating: number
  text: string
}

const reviews: Review[] = [
  {
    name: 'Amira Tan',
    handle: 'via Facebook',
    initials: 'AT',
    rating: 5,
    text: 'Moved into Kingsway last month and it genuinely feels like a boutique hotel. Everything was spotless, fully furnished, and the team handled everything over WhatsApp in minutes.',
  },
  {
    name: 'Jason Wong',
    handle: 'via Facebook',
    initials: 'JW',
    rating: 5,
    text: 'Best rental experience in Sibu. The Norway rooms are bright and quiet, perfect for working from home. Booking and deposit were transparent with zero hidden fees.',
  },
  {
    name: 'Michelle Lau',
    handle: 'via Facebook',
    initials: 'ML',
    rating: 5,
    text: 'I love the attention to detail at Steinway — the lighting, the linens, the little touches. It truly turns a room into a residence. Highly recommend to anyone relocating.',
  },
  {
    name: 'Daniel Lim',
    handle: 'via Facebook',
    initials: 'DL',
    rating: 5,
    text: 'Professional, responsive and premium. Parkway is steps away from everything I need and the private bathroom is immaculate. Will be renewing for sure.',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % reviews.length),
    [],
  )
  const prev = () =>
    setIndex((i) => (i - 1 + reviews.length) % reviews.length)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  const review = reviews[index]

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#C5A880/10' }}>
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <span className="text-[11px] font-medium uppercase tracking-[0.25em]" style={{ color: '#1A1A1A66' }}>
          What Residents Say
        </span>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl" style={{ color: '#1A1A1A' }}>
          Loved by tenants across Sibu
        </h2>

        <div className="relative mt-12 rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] md:p-12">
          <Quote
            className="mx-auto size-9"
            style={{ color: '#1A1A1A20' }}
            aria-hidden="true"
          />

          <div
            className="mt-5 flex items-center justify-center gap-1"
            aria-label={`${review.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={
                  i < review.rating
                    ? 'size-5'
                    : 'size-5'
                }
                style={{
                  fill: i < review.rating ? '#1A1A1A' : 'none',
                  color: i < review.rating ? '#1A1A1A' : '#1A1A1A15'
                }}
              />
            ))}
          </div>

          <blockquote className="mx-auto mt-6 max-w-2xl text-balance text-lg font-light leading-relaxed md:text-xl" style={{ color: '#1A1A1A' }}>
            &ldquo;{review.text}&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full text-sm font-semibold" style={{ backgroundColor: '#F3F4F6', color: '#1A1A1A' }}>
              {review.initials}
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold" style={{ color: '#1A1A1A' }}>
                {review.name}
              </p>
              <p className="text-xs" style={{ color: '#1A1A1A66' }}>{review.handle}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 transition-colors hover:bg-[#F3F4F6]"
            style={{ color: '#1A1A1A70' }}
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={
                  i === index
                    ? 'h-2 w-6 rounded-full transition-all'
                    : 'size-2 rounded-full transition-all hover:bg-zinc-400'
                }
                style={{ backgroundColor: i === index ? '#1A1A1A' : '#1A1A1A20' }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 transition-colors hover:bg-[#F3F4F6]"
            style={{ color: '#1A1A1A70' }}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
