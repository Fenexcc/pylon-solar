import Link from 'next/link'
import { suburbs } from '@/data/suburbs'

export const metadata = {
  title: 'Solar Panel Cleaning Service Areas Gold Coast | Pylon Solar Services',
  description: 'Pylon Solar Services provides professional solar panel cleaning across all Gold Coast suburbs and South East Queensland. Find your suburb and get a free quote.',
}

export default function ServiceAreasPage() {
  return (
    <div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0EA5C8 0%, #1B2A6B 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginBottom: '16px' }}>
            Service Areas
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '20px', maxWidth: '600px', margin: '0 auto' }}>
            Professional solar panel cleaning across the Gold Coast and South East Queensland
          </p>
        </div>
      </section>

      {/* Suburbs Grid */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '12px' }}>
            Areas We Service
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '18px', marginBottom: '60px' }}>
            Click your suburb to learn more about our services in your area
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {suburbs.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/service-areas/${suburb.slug}`}
                style={{ background: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0', textDecoration: 'none', display: 'block', transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#0EA5C8', fontSize: '20px' }}>☀️</span>
                    <span style={{ fontWeight: '600', fontSize: '17px', color: '#1e293b' }}>{suburb.name}</span>
                  </div>
                  <span style={{ color: '#0EA5C8', fontSize: '18px' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: '#0F172A', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '40px', fontWeight: '700', marginBottom: '16px' }}>
            Don't See Your Suburb?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '40px' }}>
            We may still service your area — get in touch and we'll let you know
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn-primary" style={{ fontSize: '18px', padding: '16px 36px' }}>Get Free Quote</Link>
            <Link href="/contact" className="btn-outline" style={{ fontSize: '18px', padding: '16px 36px' }}>Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  )
}