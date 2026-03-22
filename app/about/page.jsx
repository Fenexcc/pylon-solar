import Link from 'next/link'

export const metadata = {
  title: 'About Pylon Solar Services | Gold Coast Solar Panel Cleaning',
  description: 'Learn about Pylon Solar Services — your trusted local Gold Coast solar panel cleaning specialists. Professional equipment, eco-conscious methods, customer-first approach.',
}

export default function AboutPage() {
  return (
    <div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0EA5C8 0%, #1B2A6B 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginBottom: '16px' }}>
            About Pylon Solar Services
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '20px', maxWidth: '600px', margin: '0 auto' }}>
            Your trusted local partner for professional solar panel cleaning and maintenance
          </p>
        </div>
      </section>

      {/* Mission — photo left, text right */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 30px rgba(0,0,0,0.10)' }}>
              <img
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&fit=crop"
                alt="Solar panels on Gold Coast home"
                style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div>
              <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '24px' }}>Our Mission</h2>
              <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.8', marginBottom: '24px' }}>
                At Pylon Solar Services, we're committed to helping Gold Coast homeowners and businesses get the maximum return from their solar investment. We understand that clean solar panels mean more energy, lower bills, and a better return on your investment.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: '🏆', title: 'Quality First', desc: 'Only the best equipment and techniques for exceptional results' },
                  { icon: '🌿', title: 'Eco-Conscious', desc: 'Sustainable cleaning methods that protect your garden and the environment' },
                  { icon: '👥', title: 'Customer Focus', desc: 'Your satisfaction and trust are our top priorities' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ background: '#e0f2fe', borderRadius: '8px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>{item.title}</div>
                      <div style={{ color: '#64748b', fontSize: '15px' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach — text left, photo right */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '24px' }}>Our Approach to Solar Maintenance</h2>
              <p style={{ color: '#64748b', fontSize: '17px', lineHeight: '1.8', marginBottom: '20px' }}>
                Solar panels are a significant investment in your home or business. They deserve professional care that goes beyond a quick spray with a garden hose. Our systematic cleaning process removes all the contaminants that reduce panel efficiency — from dust and pollen to bird droppings and coastal salt buildup.
              </p>
              <p style={{ color: '#64748b', fontSize: '17px', lineHeight: '1.8' }}>
                We use purified de-ionised water that leaves absolutely no residue, ensuring your panels are spotless and performing at their peak. Our water-fed pole systems mean we can clean safely from the ground in most cases, protecting both our team and your roof.
              </p>
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 30px rgba(0,0,0,0.10)' }}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&fit=crop"
                alt="Professional solar panel cleaning equipment"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '60px' }}>Why Choose Pylon Solar Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              {
                img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&fit=crop',
                icon: '📍',
                title: 'Local Gold Coast Operator',
                desc: "We're based right here on the Gold Coast and understand the unique challenges our climate presents — from coastal salt spray to dust storms, we know what impacts your panels."
              },
              {
                img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&fit=crop',
                icon: '🔧',
                title: 'Professional Equipment',
                desc: "We invest in the best water purification systems, water-fed poles, and soft-bristle brushes. This isn't a side hustle — it's what we do, and we do it right."
              },
              {
                img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&fit=crop',
                icon: '✅',
                title: 'Care & Consistency',
                desc: "We treat every property with the same care we'd give our own homes, with photo documentation so you can see the results every time."
              },
              {
                img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&fit=crop',
                icon: '🌿',
                title: 'Environmentally Responsible',
                desc: 'We use purified water systems that minimize water waste and avoid harsh chemicals that could harm your garden or the environment.'
              },
              {
                img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&fit=crop',
                icon: '💬',
                title: 'Transparent Communication',
                desc: "From your initial quote to job completion, we keep you informed. No surprises, no hidden fees — just honest, professional service."
              },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 20px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ background: '#e0f2fe', borderRadius: '8px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <h3 style={{ fontWeight: '700', fontSize: '18px' }}>{item.title}</h3>
                  </div>
                  <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '15px' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '12px' }}>Proudly Serving the Gold Coast</h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '18px', marginBottom: '48px' }}>
            We're proud to serve homeowners, property managers, and businesses throughout the Gold Coast and South East Queensland region.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', maxWidth: '900px', margin: '0 auto 48px' }}>
            {['Surfers Paradise', 'Burleigh Heads', 'Broadbeach', 'Southport', 'Robina', 'Mermaid Beach', 'Palm Beach', 'Currumbin', 'Coolangatta', 'Mudgeeraba', 'Nerang', 'Varsity Lakes', 'Coomera', 'Helensvale', 'Hope Island', 'Runaway Bay', 'Ormeau', 'Pimpama', 'Tugun', 'Miami', 'Merrimac', 'Reedy Creek', 'Upper Coomera', 'Oxenford'].map((suburb, i) => (
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

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: '#0F172A', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '40px', fontWeight: '700', marginBottom: '16px' }}>
            Ready to Work With Us?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '40px' }}>
            Get a free quote today and experience the Pylon Solar difference
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