import Link from 'next/link'

export const metadata = {
  title: 'Contact Us | Pylon Solar Services Gold Coast',
  description: 'Get in touch with Pylon Solar Services. Call 0412 293 143 or send us a message. We service all Gold Coast suburbs and respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0EA5C8 0%, #1B2A6B 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginBottom: '16px' }}>
            Contact Us
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '20px', maxWidth: '600px', margin: '0 auto' }}>
            Get in touch for a free quote or to discuss your solar panel cleaning needs
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }}>

            {/* Left — Contact Info */}
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '12px' }}>Get In Touch</h2>
              <p style={{ color: '#64748b', lineHeight: '1.7', marginBottom: '32px' }}>
                Have questions about our services? Want to schedule a cleaning? We're here to help! Reach out through any of the methods below or use our contact form.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ background: '#e0f2fe', borderRadius: '8px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                    📞
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '16px', marginBottom: '4px' }}>Phone</div>
                    <a href="tel:0412293143" style={{ color: '#0EA5C8', textDecoration: 'none', fontWeight: '600', fontSize: '18px' }}>0412 293 143</a>
                    <div style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>Available 7 days a week</div>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ background: '#e0f2fe', borderRadius: '8px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                    ✉️
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '16px', marginBottom: '4px' }}>Email</div>
                    <a href="mailto:pylonsolarservices@gmail.com" style={{ color: '#0EA5C8', textDecoration: 'none', fontWeight: '600' }}>pylonsolarservices@gmail.com</a>
                    <div style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>We respond within 24 hours</div>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ background: '#e0f2fe', borderRadius: '8px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                    📍
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '16px', marginBottom: '4px' }}>Service Area</div>
                    <div style={{ color: '#1e293b', fontWeight: '600' }}>Gold Coast & South East Queensland</div>
                    <div style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>Covering all major suburbs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Simple Contact Form */}
            <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 30px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>Send Us a Message</h2>
              <p style={{ color: '#64748b', marginBottom: '32px' }}>Or for a detailed quote, <Link href="/quote" style={{ color: '#0EA5C8', fontWeight: '600' }}>use our quote form</Link></p>

              <form action="https://formsubmit.co/pylonsolarservices@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <input type="hidden" name="_subject" value="New Contact Message — Pylon Solar Services" />
                <input type="hidden" name="_next" value="https://pylonsolarservices.com/contact?sent=true" />
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px' }}>Full Name *</label>
                  <input name="name" required placeholder="John Smith" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px', boxSizing: 'border-box' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px' }}>Email Address *</label>
                  <input name="email" type="email" required placeholder="john@example.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px', boxSizing: 'border-box' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px' }}>Phone Number *</label>
                  <input name="phone" required placeholder="0412 345 678" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px', boxSizing: 'border-box' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px' }}>Message *</label>
                  <textarea name="message" required rows={5} placeholder="Tell us about your solar panel cleaning needs..." style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px', resize: 'vertical', boxSizing: 'border-box' }} />
                </div>

                <button type="submit" className="btn-primary" style={{ fontSize: '18px', padding: '16px', width: '100%' }}>
                  Send Message
                </button>

                <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '13px' }}>
                  We'll get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map — Service Area */}
      <section style={{ background: '#f8fafc', padding: '80px 24px' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: '700', marginBottom: '12px' }}>Our Service Area</h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '18px', marginBottom: '40px' }}>
            Based on the Gold Coast, servicing all of South East Queensland
          </p>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 30px rgba(0,0,0,0.10)', border: '1px solid #e2e8f0' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226914.2289978712!2d153.23506!3d-28.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b910c3cd5417481%3A0xf1d8b4d78aca6827!2sGold%20Coast%20QLD!5e0!3m2!1sen!2sau!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pylon Solar Services — Gold Coast Service Area"
            />
          </div>
        </div>
      </section>

    </div>
  )
}