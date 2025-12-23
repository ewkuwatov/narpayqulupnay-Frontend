// Navbar.tsx
'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { Mail, MapPin, Globe, Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { usePathname, useRouter } from 'next/navigation'
import '@/i18n/client'
import CTA from './CTA'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const pathname = usePathname()
  const router = useRouter()

  const [openLang, setOpenLang] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const locale = pathname.split('/')[1] || 'en'
    if (i18n.language !== locale) i18n.changeLanguage(locale)
  }, [pathname, i18n])

  useEffect(() => {
    document.body.style.overflow = openForm ? 'hidden' : 'auto'
  }, [openForm])

  const navItems = useMemo(
    () => [
      { href: '#', label: t('nav.home') },
      { href: '#about-story', label: t('nav.about') },
      { href: '#products', label: t('nav.products') },
      { href: '#blog', label: t('nav.blog') },
      { href: '#gallery', label: t('nav.gallery') },
    ],
    [t]
  )

  const switchLanguage = (lang?: string) => {
    const languages = ['ru', 'en', 'uz']
    const next =
      lang ||
      languages[(languages.indexOf(i18n.language) + 1) % languages.length]

    const segments = pathname.split('/')
    segments[1] = next
    router.push(segments.join('/'))
    i18n.changeLanguage(next)
    setOpenLang(false)
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled
            ? 'bg-primary shadow-xl backdrop-blur-md border-primary/10 py-0'
            : 'bg-gradient-to-b from-black/70 to-transparent py-2'
        }`}
      >
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          } border-b border-white/10`}
        >
          <div className="max-w-7xl mx-auto px-2 py-2 flex justify-between text-xs md:text-sm text-surface font-medium">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:info@narpayqulupnay.uz">
                  info@narpayqulupnay.uz
                </a>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <MapPin size={14} />
                <span>{t('nav.region')}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={14} />
              <a href="tel:+998973222379">+998 (97) 322-23-79</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
          <a href="" className="relative z-50">
            <Image
              id="navbar-logo"
              src="/images/logo6.png"
              alt="Narpay Qulupnay"
              width={200}
              height={50}
              priority
            />
          </a>

          <nav className="hidden md:flex gap-8">
            {navItems.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="text-sm font-bold uppercase text-surface/80 hover:text-accent transition"
              >
                {i.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6 relative">
            <button
              onClick={() => setOpenLang(!openLang)}
              className="flex items-center gap-1 text-xs font-bold text-surface/70 hover:text-accent"
            >
              <Globe size={16} />
              {i18n.language.toUpperCase()}
            </button>

            {openLang && (
              <ul className="absolute w-36 text-center top-full -left-12 mt-2 bg-primary rounded-lg shadow-xl overflow-hidden">
                {['ru', 'en', 'uz'].map((l) => (
                  <li
                    key={l}
                    onClick={() => switchLanguage(l)}
                    className="px-4 py-2 cursor-pointer text-surface text-sm hover:bg-secondary/30"
                  >
                    {l.toUpperCase()}
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={() => setOpenForm(true)}
              className="bg-danger text-surface px-7 py-3 rounded-full text-sm font-bold hover:bg-danger/70 hover:text-accent"
            >
              {t('nav.contact')}
            </button>
          </div>

          <button
            className="md:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {openForm && <CTA onClose={() => setOpenForm(false)} />}
    </>
  )
}
