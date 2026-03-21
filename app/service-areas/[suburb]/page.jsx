import Link from 'next/link'
import { suburbs } from '@/data/suburbs'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return suburbs.map((suburb) => ({
    suburb: suburb.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { suburb: suburbSlug } = await params
  const suburb = suburbs.find((s) => s.slug === suburbSlug)
  if (!suburb) return {}
  return {
    title: `Solar Panel Cleaning ${suburb.name} | Pylon Solar Services`,
    description: `Professional solar panel cleaning in ${suburb.name}. Purified de-ionised water, safe roof-friendly methods. Free quotes. Call 0412 293 143.`,
  }
}

export default async function SuburbPage({ params }) {
  const { suburb: suburbSlug } = await params
  const suburb = suburbs.find((s) => s.slug === suburbSlug)
  if (!suburb) notFound()

  const otherSuburbs = suburbs.filter((s) => s.slug !== suburb.slug).slice(0, 6)

  return (
    <div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0EA5C8 0%, #1B2A6B 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', marginBottom: '8px' }}>
            Solar Panel Cleaning →
          </p>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginBottom: '16px' }}>
            {suburb.name}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '20px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Professional solar panel cleaning in {suburb.name}, Gold Coast
          </p>
          <Link href="/quote" className="btn-primary" style={{ fontSize: '18px', padding: '16px 36px' }}>
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* About this area */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '24px' }}>
            Solar Panel Cleaning in {suburb.name}
          </h2>
          <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.8', marginBottom: '32px' }}>
            {suburb.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            {[
              { icon: '💧', title: 'Purified Water', desc: 'De-ionised water leaves no residue' },
              { icon: '✅', title: 'Fully Insured', desc: 'Complete peace of mind' },
              { icon: '📸', title: 'Before & After', desc: 'Photos of every job' },
              { icon: '🔧', title: 'Safe Methods', desc: 'Roof-friendly techniques' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ color: '#64748b', fontSize: '13px' }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn-primary" style={{ fontSize: '17px', padding: '14px 32px' }}>
              Get a Free Quote in {suburb.name}
            </Link>
            <a href="tel:0412293143" style={{ background: '#f8fafc', color: '#1e293b', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '17px', border: '1px solid #e2e8f0' }}>
              📞 Call 0412 293 143
            </a>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: '700', marginBottom: '12px' }}>
            Our Services in {suburb.name}
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '18px', marginBottom: '48px' }}>
            Professional cleaning solutions for every property type
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { icon: '🏠', title: 'Residential Cleaning', desc: 'For homeowners looking to maximize their solar investment' },
              { icon: '🏭', title: 'Commercial Cleaning', desc: 'For businesses and large commercial properties' },
              { icon: '🔑', title: 'Property Management', desc: 'For property managers and Airbnb hosts' },
              { icon: '🔧', title: 'Panel Inspection', desc: 'Visual inspection to identify potential issues' },
            ].map((service, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '28px', boxShadow: '0 2px 15px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{service.icon}</div>
                <h3 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '8px' }}>{service.title}</h3>
                <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other suburbs */}
      <section style={{ padding: '60px 24px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: '700', marginBottom: '32px' }}>
            Also Servicing Nearby Areas
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '32px' }}>
            {otherSuburbs.map((s) => (
              <Link key={s.slug} href={`/service-areas/${s.slug}`} style={{ background: '#f0f9ff', color: '#0EA5C8', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', border: '1px solid #bae6fd' }}>
                {s.name}
              </Link>
            ))}
            <Link href="/service-areas" style={{ background: '#1B2A6B', color: 'white', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>
              View All Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: '#0F172A', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>
            Ready to Book in {suburb.name}?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '40px' }}>
            Get a free quote today — we respond within 24 hours
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn-primary" style={{ fontSize: '18px', padding: '16px 36px' }}>Get Free Quote</Link>
            <a href="tel:0412293143" className="btn-outline" style={{ fontSize: '18px', padding: '16px 36px' }}>📞 0412 293 143</a>
          </div>
        </div>
      </section>

    </div>
  )
}