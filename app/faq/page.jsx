'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    question: 'How often should solar panels be cleaned?',
    answer: 'We recommend cleaning your solar panels every 6-12 months, depending on your location and environmental factors. Properties near the coast, under trees, or in high-dust areas may benefit from more frequent cleaning (every 3-6 months). Regular cleaning ensures optimal energy output and protects your investment.'
  },
  {
    question: 'Why use purified de-ionised water?',
    answer: 'De-ionised water is free from minerals and impurities found in regular tap water. This means it leaves no residue, spots, or streaks on your solar panels, resulting in a perfectly clean finish. It\'s also better for the panel surface and helps prevent mineral buildup over time.'
  },
  {
    question: 'Is it safe to clean solar panels?',
    answer: 'When done by professionals with the right equipment, yes! We use specialized water-fed pole systems that allow us to clean panels safely from the ground in most cases, eliminating the need to walk on your roof. Our team is trained in roof safety and uses soft-bristle brushes that won\'t scratch or damage panels.'
  },
  {
    question: 'How much will cleaning improve my solar output?',
    answer: 'On average, professional cleaning can improve solar panel efficiency by 15-25%, though this varies based on how dirty the panels were. Heavily soiled panels (bird droppings, dust buildup) can lose 30% or more of their efficiency. Regular cleaning ensures you get maximum return on your solar investment.'
  },
  {
    question: 'Do you work on all types of roofs?',
    answer: 'Yes! We work safely on tile, metal, and all common roofing materials. Our water-fed pole system means we rarely need to step on your roof, protecting both your roofing material and your solar panels. For difficult-access properties, we have specialized equipment to reach panels safely.'
  },
  {
    question: 'What areas do you service?',
    answer: 'We service all of the Gold Coast and surrounding areas in South East Queensland, including Surfers Paradise, Burleigh Heads, Robina, Southport, Broadbeach, Mermaid Beach, Palm Beach, Currumbin, and nearby suburbs. Contact us if you\'re unsure if we cover your area.'
  },
  {
    question: 'How long does a typical cleaning take?',
    answer: 'Most residential solar panel cleanings take 1-2 hours, depending on the size of your system and access. Commercial properties may take longer. We\'ll provide an accurate time estimate when we quote your job.'
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: 'Not necessarily. Many of our clients arrange service while they\'re at work. As long as we have access to your property and water supply, we can complete the job. We\'ll provide before and after photos and notify you when the work is complete.'
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0EA5C8 0%, #1B2A6B 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginBottom: '16px' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '20px', maxWidth: '600px', margin: '0 auto' }}>
            Everything you need to know about solar panel cleaning
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}
                >
                  <span style={{ fontWeight: '600', fontSize: '17px', color: '#1e293b' }}>{faq.question}</span>
                  <span style={{ color: '#0EA5C8', fontSize: '22px', flexShrink: 0, transition: 'transform 0.2s', transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▼
                  </span>
                </button>
                {openIndex === i && (
                  <div style={{ padding: '0 24px 20px', color: '#64748b', lineHeight: '1.7', fontSize: '16px' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section style={{ padding: '80px 24px', background: '#f8fafc', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>💬</div>
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '16px' }}>Still Have Questions?</h2>
          <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
            We're here to help! Contact us for personalized answers to your solar panel cleaning questions.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '18px', padding: '16px 36px' }}>Contact Us</Link>
            <Link href="/quote" className="btn-outline" style={{ background: '#1B2A6B', fontSize: '18px', padding: '16px 36px' }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>

    </div>
  )
}