'use client'

import React from 'react'
import { Mail, MapPin, Phone, Instagram, Youtube, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import '@/i18n/client'
import { NavItem } from '../app/types'

export default function Footer() {
  const { t } = useTranslation()

  const navLinks: NavItem[] = [
    { href: '#', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#products', label: t('nav.products') },
    { href: '#blog', label: t('nav.blog') },
    { href: '#gallery', label: t('nav.gallery') },
  ]

  return (
    <footer className="relative bg-primary text-surface pt-20">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-3 mb-16">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl text-white font-bold mb-6">
            {t('footer.contacts')}
          </h2>
          <ul className="space-y-5">
            <li className="flex gap-4 items-start group">
              <div className="p-2.5 bg-white/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                <MapPin size={22} />
              </div>
              <div>
                <span className="block text-white font-semibold text-lg">
                  {t('footer.addressTitle')}
                </span>
                <span className="text-sm text-surface/80 leading-relaxed">
                  {t('footer.address')}
                </span>
              </div>
            </li>

            <li className="flex gap-4 items-center group">
              <div className="p-2.5 bg-white/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                <Mail size={22} />
              </div>
              <div>
                <span className="block text-white font-semibold text-lg">
                  {t('footer.emailTitle')}
                </span>
                <a
                  href="mailto:info@narpayqulupnay.uz"
                  className="text-sm text-surface/80 hover:text-white transition"
                >
                  info@narpayqulupnay.uz
                </a>
              </div>
            </li>

            <li className="flex gap-4 items-center group">
              <div className="p-2.5 bg-white/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                <Phone size={22} />
              </div>
              <div>
                <span className="block text-white font-semibold text-lg">
                  {t('footer.phoneTitle')}
                </span>
                <a
                  href="tel:+998973222379"
                  className="text-sm text-surface/80 hover:text-white transition"
                >
                  +998 (97) 322-23-79
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Quick Links & Socials */}
        <div className="flex flex-col md:flex-row lg:flex-col gap-10 justify-between">
          <div>
            <h2 className="text-2xl text-white font-bold mb-6">
              {t('footer.navigation')}
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2 hover:text-accent transition-colors group text-surface/90"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-accent transition-colors"></span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg text-white font-bold mb-4">
              {t('footer.social')}
            </h2>
            <div className="flex gap-3">
              <a
                href="https://t.me/narpayqulupnay"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#229ED9] hover:text-white transition-all hover:-translate-y-1 text-surface"
              >
                <Send size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all hover:-translate-y-1 text-surface"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all hover:-translate-y-1 text-surface"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-secondary/30 h-[300px] relative group bg-surface/5">
          <div className="absolute inset-0 group-hover:bg-transparent pointer-events-none transition-colors z-10" />
          <iframe
            title="Location Map"
            loading="lazy"
            className="w-full h-full filter opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            src="https://yandex.uz/map-widget/v1/?ll=65.971682%2C39.939645&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDk0Mzk5NzkwEi9Pyrt6YmVraXN0b24sIFNhbWFycWFuZCB2aWxveWF0aSwgTmFycGF5IHR1bWFuaSIKDQj3g0IVg7sfQg%2C%2C&z=13.88"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-surface/60">
          <p>
            © 2025{' '}
            <span className="text-white font-bold">OOO «NARPAYQULUPNAY»</span>.
            {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              {t('footer.offer')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
