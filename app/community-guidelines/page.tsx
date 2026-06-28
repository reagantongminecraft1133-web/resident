'use client'

import React from 'react'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const CHAMPAGNE = '#C5A880'
const INK = '#1A1A1A'

const guidelines = [
  {
    num: '1',
    title: 'RENT & BILLS — KEEP IT SIMPLE',
    content: 'Rent due 1st–5th each month via bank transfer. Send us the slip. Late payments: Day 6 = WhatsApp reminder. Day 10 = Room lock may be activated, we charge a home utility fee for collection. Deposit is returned 14 days after move-out inspection.'
  },
  {
    num: '2',
    title: 'RESPECT YOUR ROOMIES',
    content: 'Quiet hours: 10pm–8am. Use headphones, keep calls low. No disrespect to anyone — housemates, neighbors, or us. Visitors: Day visits 10am–10pm. Register overnight guests with us first. No opposite gender allowed inside if living in a single-gender unit.'
  },
  {
    num: '3',
    title: 'SECURITY — DON’T SHARE ACCESS',
    content: 'Keys and access tokens are personal only. Lost keys cost RM50 replacement. Locked yourself out? RM50 fee after hours/weekends. Never share gate codes/keys with anyone. CCTV in common areas is for safety only.'
  },
  {
    num: '4',
    title: 'YOUR ROOM, YOUR RESPONSIBILITY',
    content: 'Keep it as you found it. Clean, no trash, clothes washed, curtains maintained. Holes in wall, broken chairs = you repair/replace. Maintenance: We will WhatsApp 24 hours before scheduled maintenance or monthly check.'
  },
  {
    num: '5',
    title: 'COMMON AREAS — SAMA-SAMA JAGA',
    content: 'Kitchen: Wash your plates immediately. No cooking in rooms. Rubbish: Throw out every 2 days. Laundry: Don’t leave clothes for hours in dryer. Fridge: Unwisely clear your expired food. Damages: You break it, you pay for it.'
  },
  {
    num: '6',
    title: 'UTILITIES — DON’T WASTE, DON’T ABUSE',
    content: 'Water & Wi-Fi included. Aircon: Each room has a smart meter. You pay what you use. High power items: Want to bring mini-fridge/cooker? WhatsApp us first for approval.'
  },
  {
    num: '7',
    title: 'SAFETY & COMMON SENSE',
    content: 'Max 1–2 persons per room as agreed. No illegal stuff, drugs, gambling, pets. No smoking/vaping inside. RM100 penalty. Smoke outside gate only. Disputes: We’re one family house — focus on harmony.'
  },
  {
    num: '8',
    title: 'WE CAN UPDATE THIS',
    content: 'Laws change, house rules change, we adjust. We’ll give 14 days notice in group chats. Continued stay means you agree.'
  }
]

export default function CommunityGuidelinesPage() {
  return (
    // 全局大底色保持与老站一致的极简高端暗黑基调
    <main className="min-h-screen bg-[#111111] text-white pt-16 md:pt-20 selection:bg-[#C5A880]/30">
      
      {/* 🌟 战区一：电影感 Hero 顶区 */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        {/* 背景大图（带压暗滤镜，完美衬托大字） */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/P2Kitchen.jpeg" // 👈 老哥可以换成你自己的房间植物特写图
            alt="Guidelines Cover" 
            className="w-full h-full object-cover opacity-30 brightness-75 scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/50" />
        </div>

        {/* 顶部文字内容 */}
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6 opacity-60 hover:opacity-100 transition-opacity"
            style={{ color: CHAMPAGNE }}
          >
            <ArrowLeft className="size-3.5" /> Back to Home
          </Link>
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl uppercase">
            Your Guide to Happy Living
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-xs md:text-sm leading-relaxed text-zinc-400">
            Welcome home to our students & young professionals in Sibu. These guidelines help everyone study, work, rent, and stay safe together.
          </p>
        </div>
      </section>

      {/* 🌟 战区二：极度干练、不拖泥带水的 8 大暗黑守则面板 */}
      <section className="py-20 max-w-3xl mx-auto px-5 md:px-8">
        <div className="space-y-14">
          {guidelines.map((g) => (
            <div 
              key={g.num} 
              className="group border-l-2 border-zinc-800 hover:border-[#C5A880] pl-6 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <span 
                  className="text-xs font-black tracking-wider px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800"
                  style={{ color: CHAMPAGNE }}
                >
                  {g.num.padStart(2, '0')}
                </span>
                <h2 className="text-base font-bold tracking-wider uppercase text-zinc-100 group-hover:text-white transition-colors">
                  {g.title}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors tracking-wide whitespace-pre-line">
                {g.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 战区三：复刻老站的香槟金底部转化舱 */}
      <section className="py-20 border-t border-white/5" style={{ backgroundColor: '#A4906A' }}>
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2 lg:gap-16">
            
            {/* 左侧金底黑字转化文本 */}
            <div className="text-[#1A1A1A]">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl uppercase">
                Ready to join our community?
              </h2>
              <p className="mt-4 text-sm leading-relaxed opacity-80 max-w-md">
                Limited rooms are available. Join 100+ students & young professionals across Sibu. All-in rooms from RM400 with Wi-Fi, cleaning, and 24/7 support.
              </p>
              <div className="mt-8">
                <Link
                  href="/#residences"
                  className="inline-flex items-center justify-center rounded-full bg-[#1A1A1A] text-white px-7 py-3 text-sm font-semibold shadow-lg transition-transform hover:scale-105 active:scale-98"
                >
                  View All Residences
                </Link>
              </div>
            </div>

            {/* 右侧高端房间开窗图 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
              <img 
                src="/images/K1Room.png" // 👈 这里换成你在房源里拍得最好看的那张大开窗、采光拉满的真房图
                alt="Beautiful room layout" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}