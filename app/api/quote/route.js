import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const data = await request.json()

    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from('quotes')
      .insert([{
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address,
        property_type: data.property_type || null,
        system_size: data.system_size || null,
        roof_access: data.roof_access || null,
        notes: data.notes || null,
        preferred_date: data.preferred_date || null,
        status: 'new'
      }])

    if (dbError) {
      console.error('Supabase error:', dbError)
      return Response.json({ error: 'Failed to save quote' }, { status: 500 })
    }

    // 2. Send customer confirmation email
    await resend.emails.send({
      from: 'Pylon Solar Services <quotes@pylonsolarservices.com>',
      to: data.email,
      subject: 'Thanks for your quote request - Pylon Solar Services',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="background: linear-gradient(135deg, #0EA5C8 0%, #1B2A6B 100%); padding: 40px; border-radius: 12px; text-align: center; margin-bottom: 32px;">
            <h1 style="color: white; font-size: 28px; margin: 0 0 8px;">Thank You, ${data.name}!</h1>
            <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 0;">We've received your quote request</p>
          </div>

          <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Hi ${data.name}, thanks for reaching out to Pylon Solar Services. We've received your quote request and will get back to you within 24 hours with a personalised quote for your property.
          </p>

          <div style="background: #f0f9ff; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h3 style="color: #1B2A6B; margin: 0 0 16px;">Your Request Summary</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; color: #64748b; font-size: 14px;">Property Address</td><td style="padding: 6px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${data.address}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b; font-size: 14px;">Property Type</td><td style="padding: 6px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${data.property_type || 'Not specified'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b; font-size: 14px;">System Size</td><td style="padding: 6px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${data.system_size || 'Not specified'}</td></tr>
              ${data.preferred_date ? `<tr><td style="padding: 6px 0; color: #64748b; font-size: 14px;">Preferred Date</td><td style="padding: 6px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${data.preferred_date}</td></tr>` : ''}
            </table>
          </div>

          <div style="background: #f8fafc; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h3 style="color: #1B2A6B; margin: 0 0 16px;">What Happens Next?</h3>
            <p style="color: #64748b; font-size: 14px; margin: 0 0 8px;">We'll review your system details</p>
            <p style="color: #64748b; font-size: 14px; margin: 0 0 8px;">Prepare a customised quote for your property</p>
            <p style="color: #64748b; font-size: 14px; margin: 0;">Contact you within 24 hours</p>
          </div>

          <p style="color: #64748b; font-size: 14px; text-align: center;">
            Need to reach us sooner? Call <a href="tel:0412293143" style="color: #0EA5C8; font-weight: 600;">0412 293 143</a> or email <a href="mailto:pylonsolarservices@gmail.com" style="color: #0EA5C8;">pylonsolarservices@gmail.com</a>
          </p>

          <div style="text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
            <p style="color: #94a3b8; font-size: 12px;">2026 Pylon Solar Services | Gold Coast & South East Queensland</p>
          </div>
        </div>
      `
    })

    // 3. Send admin notification
    await resend.emails.send({
      from: 'Pylon Solar Services <quotes@pylonsolarservices.com>',
      to: process.env.ADMIN_EMAIL,
      subject: `New Quote Request - ${data.name} (${data.address})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="background: #1B2A6B; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="color: white; font-size: 22px; margin: 0;">New Quote Request</h1>
          </div>

          <div style="background: #f8fafc; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h3 style="color: #1B2A6B; margin: 0 0 16px;">Customer Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px;">Name</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 700;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone</td><td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #0EA5C8; font-weight: 700; font-size: 16px;">${data.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #0EA5C8;">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Address</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${data.address}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Property Type</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${data.property_type || 'Not specified'}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">System Size</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${data.system_size || 'Not specified'}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Roof Access</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${data.roof_access || 'Not specified'}</td></tr>
              ${data.preferred_date ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Preferred Date</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 700;">${data.preferred_date}</td></tr>` : ''}
              ${data.notes ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Notes</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${data.notes}</td></tr>` : ''}
            </table>
          </div>

          <div style="text-align: center;">
            <a href="https://supabase.com/dashboard" style="background: #0EA5C8; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">View in Supabase Dashboard</a>
          </div>
        </div>
      `
    })

    return Response.json({ success: true })

  } catch (error) {
    console.error('Quote API error:', error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}