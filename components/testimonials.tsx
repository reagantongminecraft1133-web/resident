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
    name: 'Evelyn Hung',
    handle: 'Facebook Review, Jan 2026',
    initials: 'EH',
    rating: 5,
    text: 'Best choice for uni student nice environment and facilities and location is convenient and near uni too.',
  },
  {
    name: '安迪烈',
    handle: 'Facebook Review, Jan 2026',
    initials: '安',
    rating: 5,
    text: 'Very clean, comfortable and not gonna lie this place creates and gives me memories. Recommend for all !',
  },
  {
    name: 'Shirly Ivin Wong',
    handle: 'Facebook Review, Dec 2025',
    initials: 'SIW',
    rating: 5,
    text: 'strategic location, near UTS, a lot of food shops around, responsible and friendly management, really recommend it !',
  },
  {
    name: 'Zem Ahnaf',
    handle: 'Facebook Review, Sep 2025',
    initials: 'ZA',
    rating: 5,
    text: 'So comfortable and clean. Highly recommended Dekat sangat dengan UTS, dah setahun saya stay sini.',
  },
  {
    name: '徐婷婷',
    handle: 'Facebook Review, Sep 2023',
    initials: '徐',
    rating: 5,
    text: 'Super clean and comfortable, it has everything you need. A great location with various commercial facilities.',
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
    // 🌟 优化 1：大底色换成美术馆特调的“浅燕麦暖灰（#F3F3F0）”，与上下纯白板块形成柔和的分割线
    <section className="py-20 text-[#1A1A1A] border-t border-b border-zinc-200/40" style={{ backgroundColor: '#F3F3F0' }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* 小分类名：保持低调的暗金，提示品味 */}
        <span 
          className="text-[11px] font-bold uppercase tracking-[0.25em]" 
          style={{ color: '#C5A880' }}
        >
          What Residents Say
        </span>
        
        {/* 主标题：干净的碳黑墨水色 */}
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl text-[#1A1A1A]">
          Loved by tenants across Sibu
        </h2>

        {/* 🌟 优化 2：中间的大卡片改成“纯白极简浮雕卡”，配上若隐若现的微弱悬浮阴影，无印良品味扑面而来 */}
        <div className="relative mt-12 rounded-3xl border border-zinc-200/60 bg-white p-8 shadow-[0_16px_40px_rgba(0,0,0,0.02)] md:p-12 text-center">
          
          {/* 大引号：淡金点缀，优雅不抢戏 */}
          <Quote
            className="mx-auto size-8 opacity-25"
            style={{ color: '#C5A880' }}
            aria-hidden="true"
          />

          {/* 🌟 优化 3：把小星星改用香槟金实心填充，在白底上极其出挑精致 */}
          <div
            className="mt-5 flex items-center justify-center gap-1"
            aria-label={`${review.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-4"
                style={{
                  fill: i < review.rating ? '#C5A880' : 'none',
                  color: i < review.rating ? '#C5A880' : '#1A1A1A15'
                }}
              />
            ))}
          </div>

          {/* 评价正文：完美的碳黑读物字号与呼吸行高 */}
          <blockquote className="mx-auto mt-6 max-w-2xl text-balance text-base font-medium leading-relaxed md:text-lg text-zinc-800">
            &ldquo;{review.text}&rdquo;
          </blockquote>

          {/* 租客个人名片信息 */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {/* 头像圆圈换成高级的深色碳黑反衬，让视觉有落脚点 */}
            <span className="flex size-10 items-center justify-center rounded-full text-xs font-semibold text-[#F9F9F7] bg-[#1A1A1A]">
              {review.initials}
            </span>
            <div className="text-left">
              <p className="text-sm font-bold text-[#1A1A1A]">
                {review.name}
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">{review.handle}</p>
            </div>
          </div>
        </div>

        {/* 🌟 优化 4：下方的左右翻页按钮，换成纯白毛玻璃纽扣，增加点击欲 */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200/80 bg-white shadow-sm text-[#1A1A1A] transition-all hover:bg-zinc-50 active:scale-95"
          >
            <ChevronLeft className="size-4" />
          </button>

          {/* 指示灯小圆点 */}
          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={
                  i === index
                    ? 'h-1.5 w-5 rounded-full transition-all duration-300'
                    : 'size-1.5 rounded-full transition-all duration-300 hover:bg-zinc-400'
                }
                style={{ backgroundColor: i === index ? '#1A1A1A' : 'rgba(26, 26, 26, 0.15)' }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200/80 bg-white shadow-sm text-[#1A1A1A] transition-all hover:bg-zinc-50 active:scale-95"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}