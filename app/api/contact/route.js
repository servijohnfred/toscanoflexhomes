import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const formData = await req.formData()
    const name     = formData.get('name')
    const phone    = formData.get('phone')
    const email    = formData.get('email')
    const interest = formData.get('interest')
    const message  = formData.get('message')

    console.log('New contact form submission:', { name, phone, email, interest, message })

    return NextResponse.redirect(new URL('/?sent=true', req.url))
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.redirect(new URL('/?error=true', req.url))
  }
}
