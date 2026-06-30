'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { navResidences } from '@/lib/residences'

const CREAM = '#F9F9F7'
const INK = '#1A1A1A'
const CHAMPAGNE = '#C5A880'

// 🌟 🔗 核心配置区：在这里直接换成表哥对应的真实私域网址和社交媒体主页链接
const WHATSAPP_URL = 'https://wa.me/60103268811' 
const FACEBOOK_URL = 'https://www.facebook.com/sibu.theroomresidence/' // 👈 粘贴真正的 Facebook 主页链接

function FacebookIcon({ className }: { className?: string }) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function Footer() {
  
  {/* 🎬 运镜一：一键丝滑回顶函数（Logo 专属） */}
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  {/* 🎬 运镜二：电影级“导演调度滚动+胶囊高亮”函数 */}
  const handleSmoothScrollAndHighlight = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const cardElement = document.getElementById(targetId)
    
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' })

      setTimeout(() => {
        cardElement.classList.add(
          'scale-[1.04]',
          'shadow-[0_25px_60px_rgba(197,168,128,0.35)]',
          'ring-4',
          'ring-[#C5A880]/20',
          'border-[#C5A880]',
          'z-10'
        )
      }, 400)

      setTimeout(() => {
        cardElement.classList.remove(
          'scale-[1.04]',
          'shadow-[0_25px_60px_rgba(197,168,128,0.35)]',
          'ring-4',
          'ring-[#C5A880]/20',
          'border-[#C5A880]',
          'z-10'
        )
      }, 2400)
    }
  }

  return (
    <footer
      id="contact"
      className="border-t border-zinc-200"
      style={{ backgroundColor: CREAM, color: INK }}
    >
      {/* 上半场：黄金转化舱大卡片 */}
      <div className="mx-auto max-w-7xl px-5 pt-20 md:px-8 md:pt-28">
        <div className="rounded-3xl border border-zinc-200 bg-white px-6 py-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.015)] md:px-12 md:py-16">
          <h2
            className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl"
            style={{ color: INK }}
          >
            Ready to find your room in Sibu?
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-pretty text-sm md:text-base leading-relaxed"
            style={{ color: `${INK}A6` }}
          >
            Message us on WhatsApp and we’ll share availability, photos and
            pricing right away. Your next residence is one chat away.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: CHAMPAGNE, color: INK }}
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+60103268811"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#F3F4F6] active:scale-95"
              style={{ color: INK }}
            >
              <Phone className="size-4" />
              Call us
            </a>
          </div>
        </div>
      </div>

      {/* 下半场：5列杂志级高规格阵列 */}
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5 items-start">
          
          {/* 🌟 第一列：点击 Logo 回到最顶部的完美触觉按钮容器 */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1 flex items-start justify-start">
            <button 
              onClick={scrollToTop}
              className="transition-transform duration-300 hover:scale-102 active:scale-98 focus:outline-none block group text-left"
              aria-label="Scroll to top"
            >
              <img 
                src="/images/The Room Residence Logo.png" 
                alt="The Room Residence Logo" 
                className="h-28 sm:h-32 md:h-36 lg:h-40 w-auto object-contain object-left brightness-[0.98] contrast-[1.02]"
              />
            </button>
          </div>

          {/* 第二列：Residences */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: `${INK}66` }}
            >
              Residences
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navResidences.map((r) => (
                <li key={r.id}>
                  <a
                    href={`#${r.id}`}
                    onClick={(e) => handleSmoothScrollAndHighlight(e, r.id)}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: `${INK}A6` }}
                  >
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 第三列：Navigation */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: `${INK}66` }}
            >
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: 'About Us', href: 'about', isExternal: false },
                { label: 'Residences', href: 'residences', isExternal: false },
                { label: 'Community Guidelines', href: '/community-guidelines', isExternal: true },
                { label: 'FAQs', href: 'faqs', isExternal: false },
                { label: 'Contact', href: 'contact', isExternal: false },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.isExternal ? l.href : `#${l.href}`}
                    onClick={(e) => {
                      if (!l.isExternal) {
                        handleSmoothScrollAndHighlight(e, l.href)
                      }
                    }}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: `${INK}A6` }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 第四列：Partner With Us */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: `${INK}66` }}
            >
              Partner With Us
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                'Join Us as Agent',
                'Property Management',
                'Landlord Collaboration',
                'Business Enquiry',
              ].map((partnerLabel, idx) => (
                <li key={idx}>
                  <a
                    href={`${WHATSAPP_URL}?text=Hi, I am interested in ${encodeURIComponent(partnerLabel)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-opacity hover:opacity-70 block"
                    style={{ color: `${INK}A6` }}
                  >
                    {partnerLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 🌟 第五列：Connect 满血绑定三大私域链接 */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: `${INK}66` }}
            >
              Connect
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:bg-zinc-50 hover:scale-105 active:scale-95"
                style={{ color: `${INK}A6` }}
              >
                <MessageCircle className="size-4" />
              </a>
              {/* Facebook：已绑定真实变量，并加入 target="_blank" 安全打开新标签页 */}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:bg-zinc-50 hover:scale-105 active:scale-95"
                style={{ color: `${INK}A6` }}
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 底部版权声明 */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-6 text-xs sm:flex-row"
          style={{ color: `${INK}73` }}
        >
          <p>© {new Date().getFullYear()} The Room Residence. All rights reserved.</p>
          <p className="tracking-wide font-medium">Sibu, Sarawak · Malaysia</p>
        </div>
      </div>
    </footer>
  )
}