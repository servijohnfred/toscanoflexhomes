'use client'

import { useState } from 'react'
import { sendGTMEvent } from '@next/third-parties/google'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const select = form.elements.interest
    const selectedInterest = select.value ? select.options[select.selectedIndex].text : ''

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: new FormData(form) })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) throw new Error(data.error || 'Request failed')

      sendGTMEvent({ event: 'generate_lead', interest: selectedInterest })
      form.reset()
      setStatus('sent')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" action="/api/contact" method="POST" onSubmit={handleSubmit}>
      <h3 className="contact-form__title">Send Us a Message</h3>
      <div className="contact-form__row">
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="name">Full Name</label>
          <input className="contact-form__input" type="text" id="name" name="name" placeholder="Your full name" required />
        </div>
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="phone">Phone Number</label>
          <input className="contact-form__input" type="tel" id="phone" name="phone" placeholder="(509) 000-0000" />
        </div>
      </div>
      <div className="contact-form__row">
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="email">Email Address</label>
          <input className="contact-form__input" type="email" id="email" name="email" placeholder="your@email.com" required />
        </div>
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="interest">I am interested in</label>
          <select className="contact-form__input contact-form__select" id="interest" name="interest">
            <option value="">Select an option</option>
            <option value="buying">Buying a Home</option>
            <option value="selling">Selling a Home</option>
            <option value="investing">Investing in Real Estate</option>
            <option value="other">Other / Just Exploring</option>
          </select>
        </div>
      </div>
      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="message">Message</label>
        <textarea className="contact-form__input contact-form__textarea" id="message" name="message" rows="4" placeholder="Tell us how we can help..."></textarea>
      </div>
      <button type="submit" className="btn btn--gold contact-form__submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'sent' && (
        <p className="contact-form__status contact-form__status--ok" role="status">
          Thank you! Your message was sent. We will get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="contact-form__status contact-form__status--error" role="alert">
          Something went wrong. Please call or WhatsApp us, or try again.
        </p>
      )}
    </form>
  )
}
