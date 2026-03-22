import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', color: 'white', padding: '60px 24px 24px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          {/* Logo & Description */}
          <div>
            <img src="/logo.png" alt="Pylon Solar Services" style={{ height: '60px', width: 'auto', marginBottom: '16px' }} />
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
              Professional solar panel cleaning services for Gold Coast and South East Queensland.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://www.facebook.com/profile.php?id=61587116489711" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '20px' }}>f</a>
              <a href="https://www.instagram.com/pylonsolarservices/" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '20px' }}>ig</a>
              <a href="https://www.tiktok.com/@pylonsolarservices" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '20px' }}>tt</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '16px', fontSize: '16px' }}>Quick Links</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['/', '/services', '/solar-care', '/about', '/faq'].map((href, i) => (
                <Link key={i} href={href} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>
                  {['Home', 'Services', 'Solar Care', 'About Us', 'FAQ'][i]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Our Services */}
          <div>
            <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '16px', fontSize: '16px' }}>Our Services</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Residential Solar Cleaning', 'Commercial & Industrial', 'Property Management', 'Airbnb Maintenance', 'Solar Inspection'].map((service, i) => (
                <Link key={i} href="/services" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '16px', fontSize: '16px' }}>Contact Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:0412293143" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>
                📞 0412 293 143
              </a>
              <a href="mailto:pylonsolarservices@gmail.com" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>
                ✉️ pylonsolarservices@gmail.com
              </a>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>📍 Gold Coast & South East Queensland</p>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>Available 7 Days a Week</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: '#64748b', fontSize: '14px' }}>© 2026 Pylon Solar Services. All rights reserved.</p>
          <p style={{ color: '#64748b', fontSize: '14px' }}>Professional solar panel cleaning • Gold Coast • South East Queensland</p>
        </div>
      </div>
    </footer>
  )
}