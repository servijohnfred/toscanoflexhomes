import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const INTEREST_LABELS = {
  buying: 'Buying a Home',
  selling: 'Selling a Home',
  investing: 'Investing in Real Estate',
  other: 'Other / Just Exploring',
}

const escapeHtml = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export async function POST(req) {
  try {
    const formData = await req.formData()
    const name     = String(formData.get('name') ?? '').trim()
    const phone    = String(formData.get('phone') ?? '').trim()
    const email    = String(formData.get('email') ?? '').trim()
    const interest = INTEREST_LABELS[formData.get('interest')] || 'Not specified'
    const message  = String(formData.get('message') ?? '').trim()

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: 'Name and email are required.' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'Toscano Flex Homes <onboarding@resend.dev>',
      to: (process.env.CONTACT_TO_EMAIL || 'toscanoflexhomes@gmail.com').split(',').map((e) => e.trim()),
      replyTo: email,
      subject: `New lead: ${name} (${interest})`,
      text: `Name: ${name}\nPhone: ${phone || '-'}\nEmail: ${email}\nInterested in: ${interest}\n\nMessage:\n${message || '-'}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone) || '-'}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Interested in:</strong> ${escapeHtml(interest)}</p>
        <p><strong>Message:</strong><br />${escapeHtml(message).replace(/\n/g, '<br />') || '-'}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ ok: false, error: 'Could not send message.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ ok: false, error: 'Could not send message.' }, { status: 500 })
  }
}
