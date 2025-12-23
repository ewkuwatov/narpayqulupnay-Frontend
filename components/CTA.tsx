// CTA.tsx
'use client'

import React from 'react'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import '@/i18n/client'

export default function CTA({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-primary text-white rounded-2xl p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
        >
          <X size={24} />
        </button>

        <h2 className="text-4xl font-semibold mb-6 text-center">
          {t('cta.title')}
        </h2>

        <form className="flex flex-col gap-4">
          <input
            className="p-4 rounded-xl text-black"
            placeholder={t('cta.name')}
          />
          <input
            className="p-4 rounded-xl text-black"
            placeholder={t('cta.phone')}
          />
          <button className="bg-danger p-4 rounded-xl font-bold">
            {t('cta.submit')}
          </button>
        </form>
      </div>
    </div>
  )
}
