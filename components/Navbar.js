'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Home',     href: '/',         num: '01' },
  { label: 'About',    href: '/#about',   num: '02' },
  { label: 'Services', href: '/#services', num: '03' },
  { label: 'Contact',  href: '/#contact', num: '04' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--dark' : ''}${open ? ' navbar--menu-open' : ''}`}>
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo" onClick={() => setOpen(false)}>
            <Image src="/images/logo.png" alt="Toscano Flex Homes" width={200} height={60} className="navbar__logo-img" />
          </Link>
        </div>
      </header>

      <button
        className={`navbar__toggle${open ? ' navbar__toggle--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-panel${open ? ' nav-panel--open' : ''}`}>
        <div className="nav-panel__backdrop" onClick={() => setOpen(false)}></div>
        <div className="nav-panel__drawer">
          <p className="nav-panel__eyebrow">Toscano Flex Homes</p>
          <div className="nav-panel__logo">
            <Image src="/images/logo.png" alt="Toscano Flex Homes" width={220} height={70} className="nav-panel__logo-img" />
          </div>
          <ul className="nav-panel__list">
            {links.map((link) => (
              <li key={link.href} className="nav-panel__item">
                <Link href={link.href} className="nav-panel__link" onClick={() => setOpen(false)}>
                  {link.label}
                  <span className="nav-panel__link-num">{link.num}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-panel__foot">
            <span className="nav-panel__foot-label">Get in Touch</span>
            <a href="tel:+15093780223" className="nav-panel__foot-link">Ernesto: (509) 378-0223</a>
            <a href="tel:+15093807913" className="nav-panel__foot-link">Laura: (509) 380-7913</a>
            <a href="mailto:toscanoflexhomes@gmail.com" className="nav-panel__foot-link">toscanoflexhomes@gmail.com</a>
            <p className="nav-panel__foot-city">Tri-Cities, Washington</p>
          </div>
        </div>
      </div>
    </>
  )
}
