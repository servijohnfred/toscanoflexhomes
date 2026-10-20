import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col footer__col--brand">
          <Image src="/images/logo.png" alt="Toscano Flex Homes" width={250} height={70} className="footer__logo-img" />
          <p className="footer__tagline">Real Estate. Stronger Together.</p>
          <div className="footer__diamond-divider">
            <span></span>
            <svg width="8" height="8" viewBox="0 0 8 8"><polygon points="4,0 8,4 4,8 0,4" fill="currentColor"/></svg>
            <span></span>
          </div>
          <p className="footer__desc">
            Husband and wife Realtors helping buyers, sellers and investors across Kennewick, Pasco, Richland and all of Washington State. Bilingual service in English and Spanish. Licensed real estate brokers in Washington State. Brokered by Epique Realty.
          </p>
          <p className="footer__location">TRI-CITIES, WASHINGTON</p>
          <div className="footer__socials">
            <a href="https://www.instagram.com/toscanoflexhomes" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1C3An2hLwU/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@toscanoflexhomes" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="footer__social">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__col">
          <h4 className="footer__heading">Navigate</h4>
          <ul className="footer__links">
            <li><Link href="/" className="footer__link">Home</Link></li>
            <li><Link href="/#about" className="footer__link">About Us</Link></li>
            <li><Link href="/#services" className="footer__link">Services</Link></li>
            <li><Link href="/#contact" className="footer__link">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__links">
            <li><a href="tel:+15093780223" className="footer__link">Ernesto: (509) 378-0223</a></li>
            <li><a href="tel:+15093807913" className="footer__link">Laura: (509) 380-7913</a></li>
            <li><a href="mailto:toscanoflexhomes@gmail.com" className="footer__link">toscanoflexhomes@gmail.com</a></li>
            <li><a href="https://wa.me/15093780223" target="_blank" rel="noopener noreferrer" className="footer__link footer__link--whatsapp">
              WhatsApp Us
            </a></li>
          </ul>
          <div className="footer__brokerage">
            <Image src="/images/epique-logo.png" alt="Epique Realty" width={120} height={40} className="footer__epique-img" />
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Toscano Flex Homes. All rights reserved. License #215918 &amp; #20115070. Brokered by Epique Realty.
        </p>
        <p className="footer__area">Serving Tri-Cities WA: Kennewick, Pasco, Richland and all of Washington State.</p>
        <p className="footer__credit">
          Designed by <a href="https://www.mystaffhero.com" target="_blank" rel="noopener">My Staff Hero Marketing</a>
        </p>
      </div>
    </footer>
  )
}
