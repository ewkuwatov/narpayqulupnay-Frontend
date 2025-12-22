'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { Mail, MapPin, Globe, Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { usePathname, useRouter } from 'next/navigation'
import '@/i18n/client'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const pathname = usePathname()
  const router = useRouter()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Синхронизация языка с URL
  useEffect(() => {
    const locale = pathname.split('/')[1] || 'en'
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [pathname, i18n])

  // Обновляем navItems при смене языка
  const navItems = useMemo(
    () => [
      { href: '#', label: t('nav.home') },
      { href: '#about-story', label: t('nav.about') },
      { href: '#products', label: t('nav.products') },
      { href: '#blog', label: t('nav.blog') },
      { href: '#gallery', label: t('nav.gallery') },
    ],
    [i18n.language, t]
  )

  // Обработчик переключения языка (ru → en → uz → ru)
  const switchLanguage = () => {
    const languages = ['ru', 'en', 'uz']
    const currentIndex = languages.indexOf(i18n.language)
    const nextIndex = (currentIndex + 1) % languages.length
    const nextLocale = languages[nextIndex]

    const segments = pathname.split('/')
    segments[1] = nextLocale
    router.push(segments.join('/'))

    i18n.changeLanguage(nextLocale)
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
        {/* Top Bar */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          } border-b border-white/10`}
        >
          <div className="max-w-7xl mx-auto px-2 py-2 flex justify-between text-xs md:text-sm text-surface font-medium">
            <div className="flex gap-6">
              <div className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
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
              <div className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                <Phone size={14} />
                <a href="tel:+998973222379">+998 (97) 322-23-79</a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
          <a href="" className="relative z-50 flex items-center gap-2 group">
            <Image
              id="navbar-logo"
              src="/images/logo6.png"
              alt="Narpay Qulupnay"
              width={200}
              height={50}
              priority
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm font-bold tracking-wide uppercase transition-colors duration-300 
                  ${
                    isScrolled
                      ? 'text-surface hover:text-accent'
                      : 'text-surface/70 hover:text-accent'
                  }
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 
                  after:bg-accent after:transition-all after:duration-300 hover:after:w-full
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={switchLanguage}
              className={`flex items-center gap-1 text-xs font-bold transition-colors ${
                isScrolled
                  ? 'text-surface/70 hover:text-accent'
                  : 'text-surface/70 hover:text-accent'
              }`}
            >
              <Globe size={16} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>

            <a
              href="#contact"
              className="bg-danger hover:bg-red-600 text-white px-7 py-3 rounded-full text-sm font-bold shadow-lg shadow-danger/30 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              {t('nav.contact')}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden z-50 p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-primary hover:bg-primary/10'
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center p-8 space-y-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-3xl font-serif text-surface hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <div className="w-12 h-px bg-surface/20 my-4" />

          <a
            href="#contact"
            className="bg-danger text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-danger/20"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('nav.order')}
          </a>

          <button
            onClick={switchLanguage}
            className="flex items-center gap-2 text-surface text-lg font-bold"
          >
            <Globe size={20} />
            {i18n.language.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  )
}
