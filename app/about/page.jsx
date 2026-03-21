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

      {/* Mission */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '24px' }}>Our Mission</h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '18px', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto 60px' }}>
            At Pylon Solar Services, we're committed to helping Gold Coast homeowners and businesses get the maximum return from their solar investment. We understand that clean solar panels mean more energy, lower bills, and a better return on your investment.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🏆', title: 'Quality First', desc: 'We use only the best equipment and techniques to deliver exceptional results' },
              { icon: '🌿', title: 'Eco-Conscious', desc: 'We care about the environment and use sustainable cleaning methods' },
              { icon: '👥', title: 'Customer Focus', desc: 'Your satisfaction and trust are our top priorities' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '32px', textAlign: 'center', boxShadow: '0 2px 20px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontWeight: '700', fontSize: '20px', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '60px' }}>Why Choose Pylon Solar Services</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { icon: '📍', title: 'Local Gold Coast Operator', desc: "We're based right here on the Gold Coast and understand the unique challenges our climate presents for solar panel maintenance. From coastal salt spray to dust storms, we know what impacts your panels." },
              { icon: '🔧', title: 'Professional Equipment', desc: "We invest in the best water purification systems, water-fed poles, and soft-bristle brushes specifically designed for solar panels. This isn't a side hustle — it's what we do, and we do it right." },
              { icon: '✅', title: 'Care & Consistency', desc: "We treat every property with the same care we'd give our own homes. Our systematic approach ensures thorough cleaning every time, with photo documentation so you can see the results." },
              { icon: '🌿', title: 'Environmentally Responsible', desc: 'Solar energy is about sustainability, and so is our service. We use purified water systems that minimize water waste and avoid harsh chemicals that could harm your garden or the environment.' },
              { icon: '💬', title: 'Transparent Communication', desc: "From your initial quote to job completion, we keep you informed. We'll explain what we're doing, why it matters, and what results you can expect. No surprises, no hidden fees." },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', background: 'white', borderRadius: '12px', padding: '28px', boxShadow: '0 2px 15px rgba(0,0,0,0.06)' }}>
                <div style={{ background: '#e0f2fe', borderRadius: '8px', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontWeight: '700', fontSize: '20px', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: '#64748b', lineHeight: '1.7' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '32px' }}>Our Approach to Solar Maintenance</h2>
          <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.8', marginBottom: '24px', textAlign: 'center' }}>
            Solar panels are a significant investment in your home or business. They deserve professional care that goes beyond a quick spray with a garden hose. Our systematic cleaning process removes all the contaminants that reduce panel efficiency — from dust and pollen to bird droppings and coastal salt buildup.
          </p>
          <p style={{ color: '#64748b', fontSize: '18px', lineHeight: '1.8', textAlign: 'center' }}>
            We use purified de-ionised water that leaves absolutely no residue, ensuring your panels are spotless and performing at their peak. Our water-fed pole systems mean we can clean safely from the ground in most cases, protecting both our team and your roof.
          </p>
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