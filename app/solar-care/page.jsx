import Link from 'next/link'
import EnergyCalculator from '@/components/EnergyCalculator'

export const metadata = {
  title: 'Solar Panel Care & Maintenance Gold Coast | Pylon Solar Services',
  description: 'Everything you need to know about maintaining your solar panels on the Gold Coast. Energy loss calculator, cleaning frequency guide, and expert advice.',
}

export default function SolarCarePage() {
  return (
    <div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0EA5C8 0%, #1B2A6B 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginBottom: '16px' }}>
            Solar Panel Care & Maintenance
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}>
            Everything you need to know about maximizing your solar investment through professional cleaning
          </p>
        </div>
      </section>

      {/* Energy Calculator */}
      <section style={{ padding: '80px 24px', background: '#f0f9ff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🧮</div>
            <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '12px' }}>How Much Energy Are You Losing?</h2>
            <p style={{ color: '#64748b', fontSize: '18px' }}>Calculate the hidden cost of dirty solar panels on your Gold Coast property</p>
          </div>
          <EnergyCalculator />
        </div>
      </section>

      {/* 5 Signs */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>⚠️</div>
            <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '12px' }}>5 Signs Your Solar Panels Need Cleaning</h2>
            <p style={{ color: '#64748b', fontSize: '18px' }}>Don't wait until it's too late — watch for these warning signs</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { icon: '📉', color: '#f59e0b', title: 'Reduced Energy Output', desc: 'Your solar system is producing less electricity than usual, even on sunny days. This is the most obvious sign that dirt is blocking sunlight.' },
              { icon: '🚫', color: '#ef4444', title: 'Visible Dirt & Grime', desc: "You can see dust, bird droppings, leaves, or salt buildup on your panels. If it's visible from the ground, it's definitely affecting performance." },
              { icon: '🕐', color: '#3b82f6', title: "It's Been 6+ Months", desc: "If you can't remember the last cleaning, it's probably time. Gold Coast's coastal environment means faster buildup of salt and debris." },
              { icon: '⚠️', color: '#f59e0b', title: 'After Storms or Dust', desc: 'Heavy rain, storms, or dust events leave residue on panels. While rain helps, it often leaves mineral deposits that reduce efficiency.' },
              { icon: '📈', color: '#ef4444', title: 'Higher Electricity Bills', desc: "Your electricity bills are creeping up despite similar usage patterns. Dirty panels mean you're buying more power from the grid. Call us at 0412 293 143 for a free assessment." },
              { icon: '🛡️', color: '#3b82f6', title: 'Warranty Maintenance', desc: 'Many solar warranties require regular professional cleaning. Neglecting this could void your warranty coverage.' },
            ].map((sign, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '28px', border: `2px solid ${sign.color}20`, boxShadow: '0 2px 15px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{sign.icon}</div>
                <h3 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '10px', color: sign.color }}>{sign.title}</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '15px' }}>{sign.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIY vs Professional */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '12px' }}>DIY vs Professional Cleaning</h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '18px', marginBottom: '60px' }}>See why Gold Coast homeowners trust professionals for their solar panel maintenance</p>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
              <div></div>
              <div style={{ background: '#fef2f2', padding: '16px', textAlign: 'center', borderRadius: '12px 0 0 0', border: '1px solid #fecaca' }}>
                <div style={{ fontWeight: '700', color: '#dc2626', fontSize: '18px' }}>DIY Cleaning</div>
                <div style={{ color: '#dc2626', fontSize: '13px' }}>Higher Risk</div>
              </div>
              <div style={{ background: '#f0fdf4', padding: '16px', textAlign: 'center', borderRadius: '0 12px 0 0', border: '1px solid #bbf7d0' }}>
                <div style={{ fontWeight: '700', color: '#15803d', fontSize: '18px' }}>Pylon Professional</div>
                <div style={{ color: '#15803d', fontSize: '13px' }}>Best Results</div>
              </div>
            </div>
            {[
              ['Safety', '❌ Risk of falls & injuries', '✅ Fully insured professionals'],
              ['Equipment', '❌ Garden hose (leaves mineral deposits)', '✅ Purified de-ionised water system'],
              ['Results', '❌ Streaks, spots, incomplete cleaning', '✅ Spotless finish, maximum efficiency'],
              ['Time Required', '⚠️ 2-4 hours + setup/cleanup', '✅ 1-2 hours, done while you relax'],
              ['Warranty Protection', '❌ May void panel warranty', '✅ Maintains warranty compliance'],
              ['Panel Damage Risk', '⚠️ Scratches from improper tools', '✅ Soft-bristle brushes, safe methods'],
              ['Cost', '⚠️ Equipment + your time + risk', '✅ Affordable + guaranteed results'],
              ['Documentation', '❌ No record of maintenance', '✅ Before/after photos provided'],
            ].map(([category, diy, pro], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: i % 2 === 0 ? 'white' : '#f8fafc', border: '1px solid #e2e8f0', borderTop: 'none' }}>
                <div style={{ padding: '14px 16px', fontWeight: '600', fontSize: '15px' }}>{category}</div>
                <div style={{ padding: '14px 16px', fontSize: '14px', color: '#64748b', borderLeft: '1px solid #e2e8f0' }}>{diy}</div>
                <div style={{ padding: '14px 16px', fontSize: '14px', color: '#64748b', borderLeft: '1px solid #e2e8f0' }}>{pro}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <div style={{ background: '#f0f9ff', borderRadius: '12px', padding: '32px', maxWidth: '500px', margin: '0 auto' }}>
              <h3 style={{ fontWeight: '700', fontSize: '20px', marginBottom: '8px' }}>Don't Risk Your Investment</h3>
              <p style={{ color: '#64748b', marginBottom: '24px' }}>Professional cleaning protects your panels and maximizes your energy output</p>
              <Link href="/quote" className="btn-primary">Get Your Free Quote Today</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Often */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '12px' }}>How Often Should You Clean?</h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '18px', marginBottom: '60px' }}>Recommended cleaning frequency based on your Gold Coast location</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {[
              { freq: 'Every 3-4', unit: 'Months', color: '#ef4444', bg: '#fef2f2', type: 'Coastal Properties', points: ['Near beach (salt spray)', 'Under trees', 'High bird activity', 'Dusty areas'] },
              { freq: 'Every 6', unit: 'Months', color: '#f59e0b', bg: '#fffbeb', type: 'Standard Properties', points: ['Residential suburbs', 'Moderate tree coverage', 'Average rainfall area', 'Normal conditions'] },
              { freq: 'Every 12', unit: 'Months', color: '#22c55e', bg: '#f0fdf4', type: 'Protected Properties', points: ['Away from coast', 'Minimal tree coverage', 'Clean environment', 'Low pollution area'] },
            ].map((item, i) => (
              <div key={i} style={{ background: item.bg, borderRadius: '12px', padding: '32px', border: `1px solid ${item.color}30` }}>
                <div style={{ color: item.color, fontSize: '48px', fontWeight: '800', lineHeight: '1' }}>{item.freq}</div>
                <div style={{ fontWeight: '700', fontSize: '20px', marginBottom: '16px' }}>{item.unit}</div>
                <div style={{ fontWeight: '600', marginBottom: '12px' }}>{item.type}:</div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {item.points.map((p, pi) => (
                    <li key={pi} style={{ color: '#64748b', fontSize: '14px', marginBottom: '6px' }}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ background: '#f0f9ff', borderRadius: '12px', padding: '32px', textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🏆</div>
            <h3 style={{ fontWeight: '700', fontSize: '20px', marginBottom: '8px' }}>Not Sure What You Need?</h3>
            <p style={{ color: '#64748b', marginBottom: '24px' }}>Get a free assessment and personalized cleaning schedule recommendation</p>
            <Link href="/quote" className="btn-primary">Request Free Assessment</Link>
          </div>
        </div>
      </section>

      {/* Cost of Neglecting */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '700', marginBottom: '12px' }}>The Cost of Neglecting Your Panels</h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '18px', marginBottom: '60px' }}>Here's what happens when solar panels aren't regularly maintained</p>
          <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { color: '#ef4444', title: 'Efficiency Drops Dramatically', desc: "Studies show dirty solar panels can lose 20-50% of their efficiency. That's thousands of dollars in lost energy production over the life of your system." },
              { color: '#f59e0b', title: 'Hot Spots Develop', desc: 'Bird droppings and heavy grime can create "hot spots" where panels overheat, potentially causing permanent damage to solar cells and reducing panel lifespan.' },
              { color: '#f97316', title: 'Warranty May Be Voided', desc: 'Most solar panel warranties require proof of regular professional maintenance. Neglecting cleaning could void your warranty coverage when you need it most.' },
              { color: '#ef4444', title: 'Permanent Damage Possible', desc: 'Accumulated dirt and debris can scratch panels over time. Some contaminants (like bird droppings) are acidic and can etch the glass permanently if left too long.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '24px 28px', border: `2px solid ${item.color}30`, borderLeft: `4px solid ${item.color}` }}>
                <h3 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '8px', color: item.color }}>{item.title}</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #0EA5C8 0%, #1B2A6B 100%)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '40px', fontWeight: '700', marginBottom: '16px' }}>Protect Your Solar Investment Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', marginBottom: '40px' }}>Don't let dirty panels cost you thousands in lost energy. Professional cleaning pays for itself.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn-primary" style={{ background: 'white', color: '#1B2A6B', fontSize: '18px', padding: '16px 36px' }}>Get Free Quote</Link>
            <Link href="/contact" className="btn-outline" style={{ fontSize: '18px', padding: '16px 36px' }}>Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  )
}