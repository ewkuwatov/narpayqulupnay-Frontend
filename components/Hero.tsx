'use client'

import React from 'react'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import '@/i18n/client'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Feel */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg.jpg"
          alt={t('hero.bgAlt')}
          fill
          priority
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-16">
        <span className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(219,228,66,0.4)] animate-[fadeInDown_1s_ease-out]">
          {t('hero.tagline')}
        </span>

        <h1 className="text-6xl md:text-7xl text-surface font-extrabold tracking-tight mb-8 leading-tight drop-shadow-2xl animate-[fadeInUp_1s_ease-out_0.2s_both]">
          <span className="text-accent">{t('hero.titleMain')}</span>
          <span className="block">{t('hero.titleSub')}</span>
        </h1>

        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-surface/90">
          {t('hero.description1')}
          <span className="hidden md:inline">{t('hero.description2')}</span>
          {t('hero.description3')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="#contact"
            className="bg-danger text-white px-10 py-4 rounded-xl font-semibold shadow-xl shadow-danger/30 hover:scale-[1.04] transition"
          >
            {t('hero.ctaOrder')}
          </a>
          <a
            href="#products"
            className="px-10 py-4 rounded-xl border border-accent text-accent hover:bg-accent hover:text-primary transition"
          >
            {t('hero.ctaProducts')}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-surface/70 animate-bounce z-10 hidden md:block">
        <div className="p-3 border border-surface/20 rounded-full bg-primary/20 backdrop-blur-sm text-accent">
          <ArrowDown size={24} />
        </div>
      </div>

      {/* Organic Wave Divider */}
      <svg
        viewBox="0 0 1300 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-[100px] z-20 pointer-events-none"
      >
        <path
          d="M0,40 C120,80 240,0 360,20 480,40 600,100 720,80 840,60 960,0 1080,20 1200,40 1320,80 1440,60 L1440,120 L0,120 Z"
          className="text-surface"
          fill="currentColor"
        />
      </svg>
    </section>
  )
}
