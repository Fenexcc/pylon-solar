import Link from 'next/link'

export const metadata = {
  title: 'Quote Request Received | Pylon Solar Services',
  description: 'Thank you for your quote request. We will be in touch within 24 hours.',
}

export default function QuoteSuccessPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px', background: '#f8fafc' }}>
      <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>

        {/* Success Icon */}
        <div style={{ width: '80px', height: '80px', background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '40px' }}>
          ✅
        </div>

        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px', color: '#1e293b' }}>
          Thank You for Your Quote Request!
        </h1>

        <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.7', marginBottom: '32px' }}>
          We've received your details and will get back to you within 24 hours with your personalised quote.
        </p>

        {/* What happens next */}
        <div style={{ background: '#f0f9ff', borderRadius: '16px', padding: '28px', marginBottom: '32px', textAlign: 'left' }}>
          <h3 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '16px', textAlign: 'center' }}>What happens next?</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              "We'll review your system details",
              'Prepare a customised quote for your property',
              'Contact you within 24 hours',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ color: '#0EA5C8', fontWeight: '700', fontSize: '18px', flexShrink: 0 }}>✓</span>
                <span style={{ color: '#1e293b', fontSize: '16px' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
          <Link href="/quote" style={{ background: 'white', color: '#1e293b', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', border: '1px solid #e2e8f0' }}>
            ← Submit Another Quote
          </Link>
          <Link href="/" className="btn-primary" style={{ padding: '12px 24px' }}>
            🏠 Return to Home
          </Link>
        </div>

        {/* Urgent contact */}
        <p style={{ color: '#64748b', fontSize: '15px' }}>
          Need urgent assistance?{' '}
          <a href="tel:0412293143" style={{ color: '#0EA5C8', fontWeight: '600', textDecoration: 'none' }}>
            📞 0412 293 143
          </a>
        </p>

      </div>
    </div>
  )
}