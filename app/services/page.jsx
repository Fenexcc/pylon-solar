import Link from 'next/link'

export const metadata = {
  title: 'Solar Panel Cleaning Services Gold Coast | Pylon Solar Services',
  description: 'Professional solar panel cleaning services for residential, commercial, property management and Airbnb properties across the Gold Coast. Get a free quote today.',
}

export default function ServicesPage() {
  return (
    <div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0EA5C8 0%, #1B2A6B 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginBottom: '16px' }}>
            Our Services
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '20px', maxWidth: '600px', margin: '0 auto' }}>
            Professional solar panel cleaning and maintenance for residential, commercial, and property management clients
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '12px' }}>What We Offer</h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '18px', marginBottom: '60px' }}>Comprehensive cleaning solutions for every type of property</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              {
                icon: '🏠',
                title: 'Residential Solar Cleaning',
                desc: 'Professional cleaning for homeowners looking to maximize their solar investment. We use purified de-ionised water and soft-bristle brushes to safely clean your panels without scratching.',
                features: ['Purified de-ionised water cleaning', 'Soft-bristle brush system', 'Safe, roof-friendly methods']
              },
              {
                icon: '🏭',
                title: 'Commercial & Industrial',
                desc: 'Specialized service for businesses, warehouses, and large commercial properties. We handle systems of all sizes with minimal disruption to your operations.',
                features: ['Large-scale system expertise', 'Flexible scheduling', 'Safety compliance']
              },
              {
                icon: '🔑',
                title: 'Property Management & Airbnb',
                desc: 'Reliable ongoing service for property managers and Airbnb hosts. We work around your rental schedules and keep multiple properties maintained.',
                features: ['Multi-property management', 'Flexible scheduling around guests', 'Regular maintenance programs']
              },
              {
                icon: '🔧',
                title: 'Inspection',
                desc: 'Visual inspection service to identify potential issues like damaged panels, loose mounting, or wiring concerns. We keep your system running at peak performance.',
                features: ['Visual panel inspection', 'Mounting and hardware check', 'Performance assessment']
              },
            ].map((service, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '32px', boxShadow: '0 2px 20px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
                <div style={{ background: '#0EA5C8', borderRadius: '8px', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontWeight: '700', fontSize: '20px', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '16px' }}>{service.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {service.features.map((f, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1e293b', fontSize: '14px', marginBottom: '8px' }}>
                      <span style={{ color: '#0EA5C8' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '12px' }}>How We Help You Save More</h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '18px', marginBottom: '60px' }}>Every service is designed to boost your panel efficiency and protect your investment</p>

          {[
            {
              icon: '🏠',
              title: 'Your Home, Maximized Output',
              desc: "Gold Coast homes face unique challenges — salt spray, dust, and bird activity can cut your energy production by a third. Our residential service restores your panels to peak performance, often within a single visit.",
              features: ['No harsh chemicals — just pure, de-ionised water', 'Ground-based cleaning protects your roof tiles', "We work around your schedule — no disruption to your day"],
              badge: 'Up to 50% efficiency boost'
            },
            {
              icon: '🏭',
              title: 'Scale Without the Hassle',
              desc: 'Large systems mean larger savings — but also larger losses when panels get dirty. We handle warehouses, retail centres, and office buildings with crews equipped for any system size. Early mornings, weekends, after-hours — we fit your operations.',
              features: ['Dedicated project management for large installs', 'Full compliance with workplace safety standards', 'Detailed reporting for your facilities team'],
              badge: 'Minimal business disruption'
            },
            {
              icon: '🔑',
              title: 'One Call, All Properties Covered',
              desc: "Managing multiple rentals or Airbnbs? We coordinate with your booking calendars to service panels between guests. Lower power bills mean happier tenants — and fewer questions about energy costs.",
              features: ['Single point of contact for your entire portfolio', 'Automated reminders when cleaning is due', 'Consolidated invoicing for easy accounting'],
              badge: 'Multi-property scheduling'
            },
            {
              icon: '🔧',
              title: 'Expert Panel Inspection',
              desc: "Our trained eyes spot what others miss — cracked glass, loose wiring, corroded mounts, and hotspots that kill efficiency. Get a detailed report with photos and recommendations before small issues become costly repairs.",
              features: ['12-point visual inspection checklist', 'Photo documentation of any concerns', 'Referrals to trusted electricians if repairs are needed'],
              badge: 'Catch issues early'
            },
          ].map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px', direction: i % 2 === 0 ? 'ltr' : 'rtl' }}>
              <div style={{ direction: 'ltr' }}>
                <div style={{ background: '#0EA5C8', borderRadius: '8px', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontWeight: '700', fontSize: '28px', marginBottom: '16px' }}>{item.title}</h3>
                <p style={{ color: '#64748b', lineHeight: '1.7', marginBottom: '20px' }}>{item.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {item.features.map((f, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1e293b', marginBottom: '10px' }}>
                      <span style={{ color: '#0EA5C8' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ direction: 'ltr', background: '#e2e8f0', borderRadius: '12px', height: '300px', display: 'flex', alignItems: 'flex-end', padding: '16px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '80px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -60%)' }}>{item.icon}</div>
                <span style={{ background: 'rgba(255,255,255,0.9)', padding: '8px 16px', borderRadius: '8px', fontWeight: '600', fontSize: '14px', color: '#1B2A6B' }}>{item.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Our Method Works */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '12px' }}>Why Our Cleaning Method Works</h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '18px', marginBottom: '60px' }}>Professional equipment and techniques for optimal results</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
            {[
              { icon: '💧', title: 'Purified De-ionised Water', desc: 'Our de-ionised water system removes all minerals and impurities, leaving panels spotless with no residue or streaking. This ensures maximum light absorption and energy production.' },
              { icon: '🎯', title: 'Water-Fed Pole System', desc: 'Our specialized poles allow us to clean panels safely from the ground in most cases, eliminating roof damage risk and ensuring safety while providing thorough cleaning coverage.' },
              { icon: '✨', title: 'Soft-Bristle Brushes', desc: 'We use only soft-bristle brushes specifically designed for solar panels, ensuring effective cleaning without any risk of scratching or damaging the panel surface or coating.' },
            ].map((method, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '32px', boxShadow: '0 2px 20px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{method.icon}</div>
                <h3 style={{ fontWeight: '700', fontSize: '20px', marginBottom: '12px' }}>{method.title}</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>{method.desc}</p>
              </div>
            ))}
          </div>

          {/* Safety & Quality */}
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '40px' }}>Safety & Quality Commitment</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { icon: '✅', title: 'Roof-Safe Methods', desc: 'We use techniques that protect your roof and panels from damage' },
              { icon: '✅', title: 'Fully Insured', desc: 'Comprehensive insurance for your peace of mind' },
              { icon: '✅', title: 'Experienced Team', desc: 'Trained professionals who understand solar systems' },
              { icon: '✅', title: 'Photo Documentation', desc: 'Before and after photos of every job' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: '#e0f2fe', borderRadius: '8px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#0EA5C8' }}>✓</span>
                </div>
                <div>
                  <h3 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '4px' }}>{item.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '15px' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: '#0F172A', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '40px', fontWeight: '700', marginBottom: '16px' }}>Ready to Maximize Your Solar Output?</h2>
          <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '40px' }}>Get a free, no-obligation quote today</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn-primary" style={{ fontSize: '18px', padding: '16px 36px' }}>Get Free Quote</Link>
            <Link href="/contact" className="btn-outline" style={{ fontSize: '18px', padding: '16px 36px' }}>Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  )
}