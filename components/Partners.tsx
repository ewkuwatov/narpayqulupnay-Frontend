'use client'

import React from 'react'
import { ShieldCheck, Award, Medal } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import '@/i18n/client'

export default function Partners() {
  const { t } = useTranslation()

  const partnerItems = [
    { icon: ShieldCheck, label: t('partners.eco'), sub: 'ISO 14001' },
    { icon: Award, label: t('partners.halal'), sub: t('partners.halalSub') },
    { icon: Medal, label: t('partners.bestExporter'), sub: '2023' },
    {
      icon: ShieldCheck,
      label: t('partners.globalGAP'),
      sub: t('partners.globalGAPSub'),
    },
  ]

  return (
    <section className="py-20 border-t border-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">
              {t('partners.title')}
            </h2>
            <p className="text-stone-500">{t('partners.subtitle')}</p>
          </div>
          <button className="text-danger font-bold border-b-2 border-danger/20 hover:border-danger transition-colors pb-1">
            {t('partners.button')}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partnerItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col bg-white items-center justify-center p-6 rounded-2xl border border-surface bg-surface/20 hover:border-secondary hover:bg-white transition-all duration-300 group cursor-pointer"
            >
              <item.icon
                size={48}
                className="text-stone-400 group-hover:text-primary transition-colors mb-4"
                strokeWidth={1.5}
              />
              <div className="font-bold text-stone-700 group-hover:text-primary transition-colors">
                {item.label}
              </div>
              <div className="text-xs text-stone-400">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
