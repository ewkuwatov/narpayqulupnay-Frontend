'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [animateOut, setAnimateOut] = useState(false)
  const [showText, setShowText] = useState(false)
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 })

  // Определяем позицию логотипа в navbar
  const updateTargetPos = () => {
    const logo = document.querySelector('#navbar-logo') as HTMLImageElement
    if (logo) {
      const rect = logo.getBoundingClientRect()
      setTargetPos({
        x: rect.left + rect.width / 2 - window.innerWidth / 2,
        y: rect.top + rect.height / 2 - window.innerHeight / 2,
      })
    }
  }

  useEffect(() => {
    updateTargetPos()
    window.addEventListener('resize', updateTargetPos)
    return () => window.removeEventListener('resize', updateTargetPos)
  }, [])

  // Показываем прелоадер один раз
  useEffect(() => {
    if (!localStorage.getItem('preloaderShown')) {
      localStorage.setItem('preloaderShown', 'true')
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [])

  // Запуск анимации после загрузки логотипа
  const handleLogoLoad = () => {
    // Текст через 0.5s
    setTimeout(() => setShowText(true), 500)
    // Логотип летит к navbar через 2s
    setTimeout(() => setAnimateOut(true), 2000)
    // Прелоадер скрывается через 2.7s (0.7s после animateOut)
    setTimeout(() => setLoading(false), 2700)
  }

  if (!loading) return null

  const words = ['Свежий', 'Вкусный', 'Надежный']

  return (
    <div
      className={`fixed inset-0 bg-primary z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${
        animateOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Фон с лёгкой анимацией вращения */}
      <div
        className="absolute inset-0 bg-primary rounded-full animate-spin-slow opacity-20"
        style={{ borderRadius: '50%' }}
      />

      {/* Логотип */}
      <div
        className={`relative transition-transform duration-700 ${
          !animateOut ? 'animate-pulse-slow' : ''
        }`}
        style={{
          transform: animateOut
            ? `translate(${targetPos.x}px, ${targetPos.y}px) scale(0)`
            : 'translate(0,0) scale(1)',
        }}
      >
        <Image
          src="/images/logo1.png"
          alt="Narpay Qulupnay"
          width={350}
          height={50}
          onLoad={handleLogoLoad}
        />
      </div>

      {/* Текст */}
      <div className="flex gap-4 mt-6 text-surface">
        {words.map((word, i) => (
          <div
            key={i}
            className={`text-xl font-semibold transition-all duration-1000 ${
              showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${i * 300}ms` }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  )
}
