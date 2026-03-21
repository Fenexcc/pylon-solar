'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{ background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px' }}>
        
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '8px' }}>
          <img 
            src="/logo.png" 
            alt="Pylon Solar Services" 
            style={{ height: '60px', width: 'auto' }} 
            onError={(e) => { e.target.style.display='none' }} 
          />
          <span style={{ fontWeight: '800', fontSize: '20px', color: '#1B2A6B' }}>PYLON SOLAR</span>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          <Link href="/" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
          <Link href="/services" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '500' }}>Services</Link>
          <Link href="/solar-care" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '500' }}>Solar Care</Link>
          <Link href="/about" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '500' }}>About</Link>
          <Link href="/faq" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '500' }}>FAQ</Link>
          <Link href="/contact" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
        </nav>

        {/* Right side — phone + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="tel:0412293143" style={{ color: '#0EA5C8', fontWeight: '600', textDecoration: 'none', fontSize: '15px' }}>
            📞 0412 293 143
          </a>
          <Link href="/quote" className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
            Get a Quote
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px' }}
            className="mobile-menu-btn"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'white', borderTop: '1px solid #e2e8f0', padding: '16px 24px' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link href="/" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '500' }} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/services" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '500' }} onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/solar-care" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '500' }} onClick={() => setMenuOpen(false)}>Solar Care</Link>
            <Link href="/about" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '500' }} onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/faq" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '500' }} onClick={() => setMenuOpen(false)}>FAQ</Link>
            <Link href="/contact" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '500' }} onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/quote" className="btn-primary" style={{ textAlign: 'center' }} onClick={() => setMenuOpen(false)}>Get a Quote</Link>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}