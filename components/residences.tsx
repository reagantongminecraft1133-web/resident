'use client'

import { useCallback, useEffect, useState } from 'react'
import { Check, MapPin } from 'lucide-react'
import { ResidenceDetailPanel } from '@/components/residence-detail-panel'
import { residences, type Residence } from '@/lib/residences'
import { cn } from '@/lib/utils' // 👈 确保引入了 cn 工具函数，用于动态拼装 Tailwind 类名

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
              ready for you to move in. Tap any card to explore amenities and location.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {residences.map((r) => (
              <article
                key={r.id}
                id={r.id}
                // 🌟 1. 语义化拦截：如果是即将开业，取消 button 角色和焦点
                role={r.comingSoon ? undefined : "button"}
                tabIndex={r.comingSoon ? undefined : 0}
                onClick={() => {
                  // 🌟 2. 点击拦截：如果是即将开业，直接 return 绝不弹出详情面板
                  if (r.comingSoon) return
                  handleOpen(r)
                }}
                onKeyDown={(e) => {
                  // 🌟 3. 键盘拦截：如果是即将开业，同样死死拦截
                  if (r.comingSoon) return
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleOpen(r)
                  }
                }}
                // 🌟 4. 视觉反馈与动效拦截
                className={cn(
                  "group flex flex-col scroll-mt-28 overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10",
                  r.comingSoon
                    ? "cursor-default opacity-95" // 🔒 即将开业：指针变回普通箭头，拿掉所有 hover 位移、放大、亮框、浮起阴影！
                    : "cursor-pointer hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.015)]" // 🔓 正常房源：保留丝滑动效
                )}
              >
                <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                  <img
                    src={r.image || '/placeholder.svg'}
                    alt={`${r.name} residence interior`}
                    className={cn(
                      "size-full object-cover transition-transform duration-700 ease-out",
                      !r.comingSoon && "group-hover:scale-105" // 🌟 5. 图片缩放拦截：即将开业时，图片不跟随鼠标 hover 放大
                    )}
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
                    <MapPin className="size-3.5" style={{ color: '#C5A880' }} />
                    {r.location}
                  </span>
                </div>

                <div className="flex flex-col gap-4 p-6 flex-1">
                  <div>
                    <h3 
                      className={cn(
                        "text-xl font-semibold tracking-tight transition-opacity",
                        !r.comingSoon && "group-hover:opacity-80"
                      )} 
                      style={{ color: '#1A1A1A' }}
                    >
                      {r.name}
                    </h3>
                      
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: '#1A1A1A99' }}>
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

                  {/* 🌟 6. 底部文案拦截：即将开业时，自动将引导文案洗成高冷的 Stay Tuned */}
                  <p
                    className="text-[11px] mt-auto pt-4 font-medium uppercase tracking-[0.2em] transition-opacity group-hover:opacity-70"
                    style={{ color: '#1A1A1A66' }}
                  >
                    {r.comingSoon ? 'Stay Tuned // 敬请期待' : 'Tap to explore →'}
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