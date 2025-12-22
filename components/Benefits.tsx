'use client'

import React, { useMemo } from 'react'
import { Sun, Clock, Droplets, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import '@/i18n/client'

export default function Benefits() {
  const { t, i18n } = useTranslation()

  const features = useMemo(
    () => [
      {
        icon: <Sun size={32} />,
        title: t('benefits.sunRegionTitle'),
        description: t('benefits.sunRegionDesc'),
      },
      {
        icon: <Droplets size={32} />,
        title: t('benefits.cleanWaterTitle'),
        description: t('benefits.cleanWaterDesc'),
      },
      {
        icon: <Clock size={32} />,
        title: t('benefits.morningHarvestTitle'),
        description: t('benefits.morningHarvestDesc'),
      },
      {
        icon: <Heart size={32} />,
        title: t('benefits.withLoveTitle'),
        description: t('benefits.withLoveDesc'),
      },
    ],
    [i18n.language, t]
  )

  return (
    <section className="py-20 bg-surface relative" id="about">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#007B4B_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm bg-primary/5 px-4 py-1 rounded-full">
            {t('benefits.sectionTag')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4">
            {t('benefits.sectionTitle')}
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-secondary/20 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-surface text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-accent transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-600 leading-relaxed group-hover:text-stone-800 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
