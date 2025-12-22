'use client'

import React from 'react'
import { Leaf, CheckCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import '@/i18n/client'

export default function About() {
  const { t } = useTranslation()

  const listItems = [
    t('about.features.fields'),
    t('about.features.quality'),
    t('about.features.cooling'),
  ]

  return (
    <section id="about-story" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface/30 skew-x-12 translate-x-20 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Collage */}
          <div className="relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1591271300850-22d6784e0a7f?auto=format&fit=crop&q=80&w=800"
                alt={t('about.images.farmerAlt')}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=600"
                alt={t('about.images.strawberriesAlt')}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-10 -left-10 text-primary/10 z-0">
              <Leaf size={180} />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-10">
            <span className="text-danger font-bold tracking-widest uppercase text-sm mb-2 block">
              {t('about.title')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('about.heading.part1')} <br />
              <span className="text-secondary">{t('about.heading.part2')}</span>
            </h2>

            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              {t('about.paragraph1.before')}
              <span className="font-bold text-primary">
                {t('about.paragraph1.brand')}
              </span>
              {t('about.paragraph1.after')}
            </p>

            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              {t('about.paragraph2')}
            </p>

            <ul className="space-y-4 mb-10">
              {listItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-stone-700 font-medium"
                >
                  <CheckCircle className="text-secondary shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt={t('about.founder.alt')}
                className="w-12 h-12 rounded-full border-2 border-accent object-cover"
              />
              <div>
                <p className="font-bold text-primary">
                  {t('about.founder.name')}
                </p>
                <p className="text-xs text-stone-500 uppercase tracking-wide">
                  {t('about.founder.role')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
