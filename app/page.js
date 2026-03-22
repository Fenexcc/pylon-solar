import Link from 'next/link'

export const metadata = {
  title: 'Pylon Solar Services | Gold Coast Solar Panel Cleaning',
  description: 'Professional solar panel cleaning across the Gold Coast. Increase energy output by up to 50%. Purified de-ionised water. Free quotes. Call 0412 293 143.',
}

export default function HomePage() {
  return (
    <div>

      {/* Hero Section */}
      <section style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&fit=crop"
          alt="Solar panels on rooftop"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(135deg, rgba(12,20,69,0.82) 0%, rgba(27,42,107,0.78) 40%, rgba(14,165,200,0.65) 100%)',
          zIndex: 1
        }} />
        <div style={{ maxWidth: '800px', zIndex: 2, position: 'relative' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px' }}>
            Maximize Your Solar Efficiency
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '20px', marginBottom: '12px' }}>
            Professional solar panel cleaning using purified de-ionised water.
          </p>
          <p style={{ color: '#38bdf8', fontSize: '22px', fontWeight: '600', marginBottom: '40px' }}>
            Increase energy output by up to 50% with expert cleaning.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn-primary" style={{ fontSize: '18px', padding: '16px 36px' }}>Get a Free Quote</Link>
            <Link href="/services" className="btn-outline" style={{ fontSize: '18px', padding: '16px 36px' }}>Our Services</Link>
          </div>
        </div>
      </section>

      {/* Why Clean Section */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '12px' }}>
            Why Clean Your Solar Panels?
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '18px', marginBottom: '60px' }}>
            Dirty panels mean lost energy and wasted investment
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { icon: '📈', title: 'Boost Efficiency', desc: 'Clean panels produce up to 50% more energy than dirty ones', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&fit=crop' },
              { icon: '🛡️', title: 'Extend Lifespan', desc: 'Regular cleaning protects your panels and extends their life', img: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=400&fit=crop' },
              { icon: '💰', title: 'Maximize ROI', desc: 'Get the full return on your solar investment', img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&fit=crop' },
              { icon: '💧', title: 'Purified Water', desc: 'De-ionised water leaves no residue or streaks', img: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=400&fit=crop' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 20px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
                  <h3 style={{ fontWeight: '700', fontSize: '20px', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: '#64748b', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — with background photo */}
      <section style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&fit=crop"
          alt="Solar panel installation"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15,23,42,0.88)', zIndex: 1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '12px', color: 'white' }}>
            How It Works
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '18px', marginBottom: '60px' }}>
            Simple, professional process from start to finish
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              { num: '01', title: 'Request Quote', desc: 'Contact us for a free, no-obligation quote based on your system size' },
              { num: '02', title: 'Schedule Service', desc: 'Choose a convenient time that works for you' },
              { num: '03', title: 'Professional Clean', desc: 'We clean your panels using purified water and specialized equipment' },
              { num: '04', title: 'See Results', desc: 'Receive before/after photos and enjoy improved energy output' },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ color: '#38bdf8', fontSize: '64px', fontWeight: '800', lineHeight: '1', marginBottom: '16px', opacity: '0.6' }}>
                  {step.num}
                </div>
                <h3 style={{ fontWeight: '700', fontSize: '20px', marginBottom: '12px', color: 'white' }}>{step.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '12px' }}>
            Service Areas
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '18px', marginBottom: '48px' }}>
            Proudly servicing Gold Coast and South East Queensland
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', maxWidth: '900px', margin: '0 auto 48px' }}>
            {['Surfers Paradise', 'Burleigh Heads', 'Broadbeach', 'Southport', 'Robina', 'Mermaid Beach', 'Palm Beach', 'Currumbin', 'Coolangatta', 'Mudgeeraba', 'Nerang', 'Varsity Lakes', 'Coomera', 'Helensvale', 'Hope Island', 'Runaway Bay', 'Ormeau', 'Pimpama', 'Upper Coomera', 'Oxenford'].map((suburb, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1e293b', fontSize: '15px' }}>
                <span style={{ color: '#0EA5C8' }}>✓</span> {suburb}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/service-areas" className="btn-primary">View All Service Areas</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 24px', background: '#0F172A', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '40px', fontWeight: '700', marginBottom: '16px' }}>
            Ready to Maximize Your Solar Output?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '40px' }}>
            Get a free, no-obligation quote today and see the difference professional cleaning makes
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