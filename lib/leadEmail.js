// Branded HTML email sent to the Toscano team for every contact form lead.
// Email clients ignore <style> and modern CSS, so everything is table-based with inline styles.

const SITE_URL = 'https://toscanoflexhomes.com'

const C = {
  black:  '#080808',
  black3: '#141414',
  gold:   '#bca583',
  goldDk: '#8B6914',
  ivory:  '#FAF8F5',
  line:   '#E9E3D9',
  text:   '#1A1A1A',
  muted:  '#7A7268',
}

const FONT = "'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif"

const escapeHtml = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

function phoneParts(raw) {
  const digits = String(raw || '').replace(/\D/g, '')
  if (!digits) return null
  const us = digits.length === 10 ? `1${digits}` : digits
  const pretty = us.length === 11 && us.startsWith('1')
    ? `(${us.slice(1, 4)}) ${us.slice(4, 7)}-${us.slice(7)}`
    : raw
  return { pretty, tel: `+${us}`, wa: us }
}

function button(href, label, primary) {
  const bg = primary ? C.gold : C.black
  const color = primary ? C.black : C.gold
  return `
    <td style="padding:6px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td bgcolor="${bg}" style="background:${bg};border:1px solid ${C.gold};border-radius:2px;">
            <a href="${href}" target="_blank" style="display:inline-block;padding:14px 26px;font-family:${FONT};font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${color};text-decoration:none;">${label}</a>
          </td>
        </tr>
      </table>
    </td>`
}

function row(label, valueHtml, last) {
  return `
    <tr>
      <td style="padding:16px 0;${last ? '' : `border-bottom:1px solid ${C.line};`}width:38%;vertical-align:top;font-family:${FONT};font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${C.muted};">${label}</td>
      <td style="padding:16px 0;${last ? '' : `border-bottom:1px solid ${C.line};`}vertical-align:top;font-family:${FONT};font-size:15px;color:${C.text};">${valueHtml}</td>
    </tr>`
}

export function buildLeadEmail({ name, phone, email, interest, message, submittedAt = new Date() }) {
  const p = phoneParts(phone)
  const firstName = String(name).trim().split(/\s+/)[0]
  const received = submittedAt.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit',
  }) + ' (PT)'

  const headline = interest === 'Not specified'
    ? `${escapeHtml(name)} sent you a message.`
    : `${escapeHtml(name)} is interested in ${escapeHtml(interest.toLowerCase())}.`
  const linkStyle = `color:${C.text};text-decoration:none;border-bottom:1px solid ${C.gold};`
  const subject = `New lead: ${name} — ${interest}`
  const preheader = `${name} is interested in ${interest}. Reply, call or WhatsApp straight from this email.`

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light only" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:${C.black};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.black}" style="background:${C.black};">
    <tr>
      <td align="center" style="padding:32px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;border-collapse:collapse;">

          <!-- Header -->
          <tr>
            <td align="center" bgcolor="${C.black}" style="padding:28px 24px 26px;background:${C.black};">
              <a href="${SITE_URL}" target="_blank"><img src="${SITE_URL}/images/logo.png" width="200" alt="Toscano Flex Homes" style="display:block;width:200px;max-width:100%;height:auto;border:0;" /></a>
            </td>
          </tr>
          <tr><td height="2" bgcolor="${C.gold}" style="height:2px;line-height:2px;font-size:0;background:${C.gold};">&nbsp;</td></tr>

          <!-- Body -->
          <tr>
            <td bgcolor="${C.ivory}" style="background:${C.ivory};padding:44px 40px 44px;">
              <p style="margin:0 0 14px;font-family:${FONT};font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:${C.goldDk};">New Website Inquiry</p>
              <h1 style="margin:0 0 12px;font-family:${FONT};font-size:26px;line-height:1.3;font-weight:600;color:${C.black};">${headline}</h1>
              <p style="margin:0 0 28px;font-family:${FONT};font-size:13px;color:${C.muted};">Received ${escapeHtml(received)}</p>

              <!-- Details -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${C.line};">
                ${row('Name', escapeHtml(name))}
                ${row('Phone', p ? `<a href="tel:${p.tel}" style="${linkStyle}">${escapeHtml(p.pretty)}</a>` : `<span style="color:${C.muted};">Not provided</span>`)}
                ${row('Email', `<a href="mailto:${escapeHtml(email)}" style="${linkStyle}">${escapeHtml(email)}</a>`)}
                ${row('Interested in', `<span style="display:inline-block;padding:5px 12px;background:${C.black};color:${C.gold};font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;">${escapeHtml(interest)}</span>`, true)}
              </table>

              <!-- Message -->
              <p style="margin:28px 0 10px;font-family:${FONT};font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${C.muted};">Message</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="#FFFFFF" style="background:#FFFFFF;border-left:3px solid ${C.gold};padding:18px 22px;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.text};">
                    ${message ? escapeHtml(message).replace(/\n/g, '<br />') : `<span style="color:${C.muted};font-style:italic;">No message was included.</span>`}
                  </td>
                </tr>
              </table>

              <!-- Actions -->
              <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="margin:30px auto 0;">
                <tr>
                  ${button(`mailto:${escapeHtml(email)}?subject=${encodeURIComponent('Toscano Flex Homes — Following up')}`, `Reply to ${escapeHtml(firstName)}`, true)}
                </tr>
              </table>
              ${p ? `
              <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
                <tr>
                  ${button(`tel:${p.tel}`, 'Call', false)}
                  ${button(`https://wa.me/${p.wa}`, 'WhatsApp', false)}
                </tr>
              </table>` : ''}
            </td>
          </tr>

          <!-- Footer -->
          <tr><td height="1" bgcolor="${C.gold}" style="height:1px;line-height:1px;font-size:0;background:${C.gold};">&nbsp;</td></tr>
          <tr>
            <td align="center" bgcolor="${C.black3}" style="background:${C.black3};padding:28px 24px;">
              <p style="margin:0 0 6px;font-family:${FONT};font-size:12px;letter-spacing:3px;text-transform:uppercase;color:${C.gold};">Real Estate. Stronger Together.</p>
              <p style="margin:0 0 14px;font-family:${FONT};font-size:12px;line-height:1.6;color:#C8C0B4;">Laura &amp; Ernesto Toscano · Tri-Cities, Washington</p>
              <p style="margin:0;font-family:${FONT};font-size:10px;line-height:1.6;letter-spacing:1px;text-transform:uppercase;color:${C.muted};">Sent from the contact form on <a href="${SITE_URL}" target="_blank" style="color:${C.muted};text-decoration:underline;">toscanoflexhomes.com</a><br />Laura Toscano #20115070 · Ernesto Toscano #215918<br />Brokered by Epique Realty</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  const text = [
    'NEW WEBSITE INQUIRY — Toscano Flex Homes',
    `Received ${received}`,
    '',
    `Name: ${name}`,
    `Phone: ${p ? p.pretty : 'Not provided'}`,
    `Email: ${email}`,
    `Interested in: ${interest}`,
    '',
    'Message:',
    message || '(No message was included.)',
    '',
    'Reply to this email to respond directly to the lead.',
  ].join('\n')

  return { subject, html, text }
}
