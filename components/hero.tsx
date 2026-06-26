'use client'

import { useState } from 'react'
import { ArrowDown, MapPin } from 'lucide-react'
import { navResidences } from '@/lib/residences'

const INK = '#1A1A1A'
const CHAMPAGNE = '#C5A880'
const PILL_INACTIVE = '#F3F4F6'

export function Hero() {
  const [active, setActive] = useState(navResidences[0].id)

  const handleCapsuleClick = (e: React.MouseEvent, id: string) => {
  e.preventDefault(); // 阻止默认的生硬锚点跳转
  setActive(id);      // 激活当前胶囊高亮

  // 1. 找到底下的目标房源卡片元素
  const cardElement = document.getElementById(id);
  if (cardElement) {
    // 2. 丝滑滚动到屏幕中央
    cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // 3. 滚动需要时间，延迟 500ms 等页面滚到地方后，强行给卡片注入“放大高亮”类名
    setTimeout(() => {
      cardElement.classList.add('scale-105', 'shadow-[0_20px_50px_rgba(197,168,128,0.3)]', 'z-10', 'ring-2', 'ring-[#C5A880]');
    }, 500);

    // 4. 再延迟 400ms（等待放大动画定格），自动模拟人类去点击卡片里的 "View Details" 按钮
    setTimeout(() => {
      // 复原卡片样式，准备迎接全屏展开
      cardElement.classList.remove('scale-105', 'shadow-[0_20px_50px_rgba(197,168,128,0.3)]', 'z-10', 'ring-2', 'ring-[#C5A880]');
      
      // 自动寻找卡片里的按钮并模拟点击
      const viewDetailsBtn = cardElement.querySelector('.view-details-btn') as HTMLElement;
      if (viewDetailsBtn) {
        viewDetailsBtn.click(); // 👈 临门一脚，正式全屏进入！
      }
    }, 900);
  }
};

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
          

        <h1
          className="mt-7 max-w-4xl text-balance text-3xl font-semibold font-serif   leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
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
                  onClick={(e) => handleCapsuleClick(e, r.id)}
                  className="rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 transform inline-block hover:scale-105 hover:brightness-125 hover:shadow-[0_4px_12px_rgba(197,168,128,0.2)] active:scale-95"
                  style={
                    isActive
                      ? {
                          backgroundColor: CHAMPAGNE,
                          color: '#1A1A1A',
                          border: `1px solid ${CHAMPAGNE}`,
                        }
                      : {
                          backgroundColor: 'rgba(255,255,255,0.08)',
                          color: '#FFFFFF',
                          border: '1px solid rgba(255,255,255,0.1)',
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
