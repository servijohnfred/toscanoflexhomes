import HeroSlider from '@/components/HeroSlider'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <HeroSlider />
        <div className="hero__content">
          <p className="hero__eyebrow">Tri-Cities, Washington</p>
          <h1 className="hero__title">
            Real Estate.<br />
            Stronger Together.
          </h1>
          <p className="hero__sub">
            Husband and wife Realtors serving Kennewick, Pasco, Richland and all of Washington State. English and Spanish service.
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--gold">Buy a Home</a>
            <a href="#contact" className="btn btn--outline">Sell Your Home</a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <span>Kennewick</span>
          <span className="marquee-dot"></span>
          <span>Pasco</span>
          <span className="marquee-dot"></span>
          <span>Richland</span>
          <span className="marquee-dot"></span>
          <span>Washington State</span>
          <span className="marquee-dot"></span>
          <span>English &amp; Spanish</span>
          <span className="marquee-dot"></span>
          <span>Buy. Sell. Invest.</span>
          <span className="marquee-dot"></span>
          <span>Kennewick</span>
          <span className="marquee-dot"></span>
          <span>Pasco</span>
          <span className="marquee-dot"></span>
          <span>Richland</span>
          <span className="marquee-dot"></span>
          <span>Washington State</span>
          <span className="marquee-dot"></span>
          <span>English &amp; Spanish</span>
          <span className="marquee-dot"></span>
          <span>Buy. Sell. Invest.</span>
          <span className="marquee-dot"></span>
        </div>
      </div>

      {/* ABOUT */}
      <section className="home-about" id="about">
        <div className="home-about__inner">
          <div className="home-about__text" data-reveal>
            <p className="section-eyebrow">About Us</p>
            <h2 className="section-title">A Team Built on Strength, Trust and Results.</h2>
            <p className="home-about__body">
              Toscano Flex Homes is a husband and wife real estate team made up of Laura and Ernesto Toscano, proudly serving the Tri-Cities and surrounding communities while helping clients throughout Washington State.
            </p>
            <p className="home-about__body">
              Laura brings six years of real estate experience along with a strong attention to detail, organization, contracts, deadlines, and the administrative side of every transaction. Ernesto brings a background in marketing, sales, television, and radio, along with an outgoing approach to communication, negotiation, and promoting properties.
            </p>
            <p className="home-about__body">
              Together, we provide our clients with the best of both worlds: strong organization behind the scenes and strong communication and marketing out front.
            </p>
            <p className="home-about__body">
              The name Toscano Flex Homes also represents a part of who we are outside of real estate. We are both passionate about fitness and compete in local bodybuilding shows. The same qualities that fitness requires, discipline, consistency, preparation, and hard work, are values we bring into our real estate business and every client relationship.
            </p>
            <p className="home-about__body">
              We are proud to offer service in both English and Spanish, making real estate more accessible to the diverse communities we serve.
            </p>
            <p className="home-about__cta-line">
              Husband and Wife. Realtors. Competitors. A team in life and real estate.
            </p>
            <a href="#contact" className="btn btn--gold">Work With Us</a>
          </div>
          <div className="home-about__image" data-reveal data-delay="2">
            <Image fill src="/images/team-photo.jpeg" alt="Laura and Ernesto Toscano - Toscano Flex Homes" className="home-about__img" sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="home-about__badge">
              <span className="home-about__badge-top">Licensed</span>
              <span className="home-about__badge-num">Realtors</span>
              <span className="home-about__badge-bottom">Laura · WA #20115070</span>
              <span className="home-about__badge-bottom">Ernesto · WA #215918</span>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PROFILES */}
      <section className="home-team">
        <div className="home-team__inner">
          <div className="home-team__card" data-reveal>
            <div className="home-team__img-wrap">
              <Image fill src="/images/laura.jpeg" alt="Laura Toscano - Realtor" className="home-team__img" sizes="120px" />
            </div>
            <div className="home-team__info">
              <p className="home-team__role">Realtor</p>
              <h3 className="home-team__name">Laura Toscano</h3>
              <p className="home-team__bio">6 years of real estate experience. Expert in contracts, deadlines, organization and the administrative side of every transaction. Committed to making every deal smooth from start to close.</p>
              <a href="tel:+15093807913" className="home-team__phone">(509) 380-7913</a>
            </div>
          </div>
          <div className="home-team__card" data-reveal data-delay="2">
            <div className="home-team__img-wrap">
              <Image fill src="/images/ernesto.jpeg" alt="Ernesto Toscano - Realtor" className="home-team__img" sizes="120px" />
            </div>
            <div className="home-team__info">
              <p className="home-team__role">Realtor</p>
              <h3 className="home-team__name">Ernesto Toscano</h3>
              <p className="home-team__bio">Background in marketing, sales, television and radio. Focused on communication, negotiation and promoting properties to the right buyers. Driven to get every client the best possible outcome.</p>
              <a href="tel:+15093780223" className="home-team__phone">(509) 378-0223</a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services" id="services">
        <div className="home-services__inner">
          <div className="home-services__header" data-reveal>
            <p className="section-eyebrow">What We Do</p>
            <h2 className="section-title">How Can We Help You?</h2>
          </div>
          <div className="home-services__grid">
            <div className="service-card" data-reveal>
              <div className="service-card__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3 className="service-card__title">Buy a Home</h3>
              <p className="service-card__text">Whether it is your first home or your next investment, we guide you through every step of the buying process with clarity and confidence.</p>
              <a href="#contact" className="service-card__link">Get Started</a>
            </div>
            <div className="service-card service-card--featured" data-reveal data-delay="2">
              <div className="service-card__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
                  <path d="M12 2a10 10 0 1 0 10 10"/><path d="M22 2l-10 10"/><path d="M16 2h6v6"/>
                </svg>
              </div>
              <h3 className="service-card__title">Sell Your Home</h3>
              <p className="service-card__text">We combine strategic marketing, professional presentation and strong negotiation to sell your property fast and at the best price possible.</p>
              <a href="#contact" className="service-card__link">Get Started</a>
            </div>
            <div className="service-card" data-reveal data-delay="3">
              <div className="service-card__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="service-card__title">Invest in Real Estate</h3>
              <p className="service-card__text">From first-time investors to seasoned buyers, we help you identify opportunities in the Tri-Cities market and across Washington State.</p>
              <a href="#contact" className="service-card__link">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="home-stats">
        <div className="home-stats__inner">
          <div className="home-stats__item" data-reveal>
            <span className="home-stats__num">6+</span>
            <span className="home-stats__label">Years of Experience</span>
          </div>
          <div className="home-stats__item" data-reveal data-delay="2">
            <span className="home-stats__num">2</span>
            <span className="home-stats__label">Dedicated Realtors</span>
          </div>
          <div className="home-stats__item" data-reveal data-delay="3">
            <span className="home-stats__num">3</span>
            <span className="home-stats__label">Cities Served</span>
          </div>
          <div className="home-stats__item" data-reveal data-delay="4">
            <span className="home-stats__num">2</span>
            <span className="home-stats__label">Languages</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="home-contact" id="contact">
        <div className="home-contact__inner">
          <div className="home-contact__left" data-reveal>
            <p className="section-eyebrow">Get in Touch</p>
            <h2 className="section-title">Let's Start a Conversation.</h2>
            <p className="home-contact__intro">
              Ready to buy, sell or explore your options? We are here to make the process clear, comfortable and as stress-free as possible from beginning to end.
            </p>
            <div className="home-contact__info">
              <div className="home-contact__row">
                <span className="home-contact__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.78-1.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15z"/></svg>
                </span>
                <div>
                  <a href="tel:+15093780223" className="home-contact__detail">Ernesto: (509) 378-0223</a>
                  <a href="tel:+15093807913" className="home-contact__detail">Laura: (509) 380-7913</a>
                </div>
              </div>
              <div className="home-contact__row">
                <span className="home-contact__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                </span>
                <a href="mailto:toscanoflexhomes@gmail.com" className="home-contact__detail">toscanoflexhomes@gmail.com</a>
              </div>
              <div className="home-contact__row">
                <span className="home-contact__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span className="home-contact__detail">Tri-Cities, Washington State</span>
              </div>
            </div>
            <a
              href="https://wa.me/15093780223?text=Hi%2C%20I%27m%20interested%20in%20your%20real%20estate%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold btn--whatsapp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Message on WhatsApp
            </a>
          </div>

          <div className="home-contact__right" data-reveal data-delay="2">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="home-cta">
        <div className="home-cta__inner" data-reveal>
          <p className="section-eyebrow">Serving Tri-Cities and All of Washington</p>
          <h2 className="home-cta__title">Ready to Make Your Move?</h2>
          <p className="home-cta__sub">Kennewick, Pasco, Richland and beyond. We are here for you in English and Spanish.</p>
          <div className="home-cta__btns">
            <a href="tel:+15093780223" className="btn btn--gold">Call Ernesto</a>
            <a href="tel:+15093807913" className="btn btn--outline">Call Laura</a>
          </div>
        </div>
      </section>
    </>
  )
}
