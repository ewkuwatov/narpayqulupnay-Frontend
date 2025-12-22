'use client'

import React, { useMemo } from 'react'
import { ArrowRight, Star, ShoppingBasket } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import '@/i18n/client'

export default function Products() {
  const { t, i18n } = useTranslation()

  const products = useMemo(
    () => [
      {
        id: 1,
        name: t('products.albion.name'),
        desc: t('products.albion.desc'),
        image:
          'https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=800',
        tags: [t('products.albion.tags.sweet'), t('products.albion.tags.big')],
      },
      {
        id: 2,
        name: t('products.clery.name'),
        desc: t('products.clery.desc'),
        image:
          'https://images.unsplash.com/photo-1543528176-61b239494933?auto=format&fit=crop&q=80&w=800',
        tags: [
          t('products.clery.tags.early'),
          t('products.clery.tags.aromatic'),
        ],
      },
      {
        id: 3,
        name: t('products.asia.name'),
        desc: t('products.asia.desc'),
        image:
          'https://images.unsplash.com/photo-1688465162586-d8c52c238923?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: [t('products.asia.tags.dessert'), t('products.asia.tags.juicy')],
      },
    ],
    [i18n.language, t]
  )

  return (
    <section
      id="products"
      className="relative py-24 bg-primary overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="leaf-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <circle cx="2" cy="2" r="1" fill="#F1F2E4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      {/* Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-accent text-sm font-bold uppercase tracking-wider mb-4 shadow-lg">
            <ShoppingBasket size={14} />
            <span>{t('products.sectionTag')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-surface mb-6 drop-shadow-md">
            {t('products.sectionTitle')}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-[2px] w-12 bg-white/20 rounded-full"></div>
            <div className="w-24 h-1.5 bg-danger rounded-full shadow-[0_0_15px_rgba(224,60,49,0.6)]" />
            <div className="h-[2px] w-12 bg-white/20 rounded-full"></div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/40 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80" />
                <div className="absolute top-5 right-5 flex flex-col items-end gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface/90 text-primary text-xs font-bold rounded-lg shadow-lg backdrop-blur-md transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 first:delay-100 last:delay-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col relative">
                <h3 className="text-2xl font-bold text-surface mb-3 group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <p className="text-surface/80 leading-relaxed mb-6 flex-grow text-sm font-light">
                  {p.desc}
                </p>

                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <div className="flex text-accent gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="currentColor"
                        className="opacity-80"
                      />
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-accent transition-colors">
                    {t('products.details')}{' '}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-surface/60 mb-6 text-sm">
            {t('products.consultationText')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-accent/50 text-accent hover:bg-accent hover:text-primary rounded-full font-bold transition-all duration-300 hover:scale-105"
          >
            <span>{t('products.consultationBtn')}</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
