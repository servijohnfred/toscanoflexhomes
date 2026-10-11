'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const run = () => {
      const els = document.querySelectorAll('[data-reveal]')
      els.forEach((el) => el.classList.remove('is-visible'))

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible')
              obs.unobserve(e.target)
            }
          })
        },
        { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
      )

      els.forEach((el) => obs.observe(el))
      return () => obs.disconnect()
    }

    const timer = setTimeout(run, 80)
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
