'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const slides = [
  {
    src:       '/images/hero-1.jpg',
    mobileSrc: '/images/hero-1-mobile.jpg',
    alt:       'Luxury Homes in Tri-Cities WA',
  },
  {
    src:       '/images/hero-2.jpg',
    mobileSrc: '/images/hero-2-mobile.jpg',
    alt:       'Real Estate Tri-Cities Washington',
  },
  {
    src:       '/images/hero-3.jpg',
    mobileSrc: '/images/hero-3-mobile.jpg',
    alt:       'Kennewick Pasco Richland Homes',
  },
  {
    src:       '/images/hero-4.jpg',
    mobileSrc: '/images/hero-4-mobile.jpg',
    alt:       'Washington State Real Estate',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(true)

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    const content = document.querySelector('.hero__content')
    if (!content) return
    if (current === 0) {
      content.classList.remove('hero__content--hidden')
    } else {
      content.classList.add('hero__content--hidden')
    }
  }, [current])

  useEffect(() => {
    if (!playing) return
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [playing, next])

  return (
    <div className="hslider">
      {slides.map((s, i) => {
        const isActive = i === current
        return (
          <div
            key={isActive ? `active-${current}` : i}
            className={`hslider__slide${isActive ? ' hslider__slide--active' : ''}`}
          >
            <Image
              fill
              src={s.src}
              alt={s.alt}
              className="hslider__img"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        )
      })}

      <div className="hslider__overlay"></div>

      <div className="hslider__frame">
        <div className="hslider__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hslider__dot${i === current ? ' hslider__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="hslider__controls">
          <button
            className={`hslider__btn hslider__btn--pause${playing ? '' : ' hslider__btn--paused'}`}
            onClick={() => setPlaying(p => !p)}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6,3 20,12 6,21"/>
              </svg>
            )}
          </button>
          <button className="hslider__btn hslider__btn--arrow" onClick={prev} aria-label="Previous">&#8249;</button>
          <button className="hslider__btn hslider__btn--arrow" onClick={next} aria-label="Next">&#8250;</button>
        </div>

        <div className="hslider__footer">
          <p className="hslider__copy">&copy;Toscano FH {new Date().getFullYear()}</p>
          <div className="hslider__socials">
            <a href="https://www.instagram.com/toscanoflexhomes" target="_blank" rel="noopener noreferrer" className="hslider__social" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1C3An2hLwU/" target="_blank" rel="noopener noreferrer" className="hslider__social" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@toscanoflexhomes" target="_blank" rel="noopener noreferrer" className="hslider__social" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
