'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function EnergyCalculator() {
  const [panels, setPanels] = useState('')
  const [lastCleaned, setLastCleaned] = useState('')
  const [locationType, setLocationType] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    if (!panels || !lastCleaned || !locationType) return

    const panelCount = parseInt(panels)
    const kwPerPanel = 0.415
    const kw = panelCount * kwPerPanel
    const dailyOutput = kw * 4.8
    const annualOutput = dailyOutput * 365

    const lossRates = {
      'never': { coastal: 0.55, standard: 0.48, protected: 0.40 },
      'over2years': { coastal: 0.45, standard: 0.38, protected: 0.30 },
      '1-2years': { coastal: 0.35, standard: 0.28, protected: 0.22 },
      '6-12months': { coastal: 0.22, standard: 0.18, protected: 0.12 },
      'under6months': { coastal: 0.08, standard: 0.06, protected: 0.04 },
    }

    const lossRate = lossRates[lastCleaned]?.[locationType] || 0.20
    const annualLoss = annualOutput * lossRate
    const dollarLoss = annualLoss * 0.32
    const fiveYearLoss = dollarLoss * 5
    const tenYearLoss = dollarLoss * 10

    setResult({
      panelCount,
      kw: Math.round(kw * 10) / 10,
      annualLoss: Math.round(annualLoss),
      dollarLoss: Math.round(dollarLoss),
      fiveYearLoss: Math.round(fiveYearLoss),
      tenYearLoss: Math.round(tenYearLoss),
      perMonth: Math.round(dollarLoss / 12),
    })
  }

  return (
    <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 30px rgba(0,0,0,0.1)', maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>How Many Solar Panels Do You Have?</label>
        <select value={panels} onChange={e => setPanels(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px' }}>
          <option value="">Select number of panels</option>
          <option value="6">6 panels</option>
          <option value="8">8 panels</option>
          <option value="10">10 panels</option>
          <option value="12">12 panels</option>
          <option value="16">16 panels</option>
          <option value="20">20 panels</option>
          <option value="24">24 panels</option>
          <option value="28">28 panels</option>
          <option value="32">32 panels</option>
          <option value="40">40+ panels</option>
        </select>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>When Were Your Panels Last Cleaned?</label>
        <select value={lastCleaned} onChange={e => setLastCleaned(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px' }}>
          <option value="">Select time since last cleaning</option>
          <option value="under6months">Less than 6 months ago</option>
          <option value="6-12months">6–12 months ago</option>
          <option value="1-2years">1–2 years ago</option>
          <option value="over2years">Over 2 years ago</option>
          <option value="never">Never cleaned</option>
        </select>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>Your Location Type</label>
        <select value={locationType} onChange={e => setLocationType(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px' }}>
          <option value="">Select your location</option>
          <option value="coastal">Coastal (near beach, salt air)</option>
          <option value="standard">Standard residential suburb</option>
          <option value="protected">Protected / inland area</option>
        </select>
      </div>

      <button onClick={calculate} className="btn-primary" style={{ width: '100%', fontSize: '18px', padding: '16px' }}>
        Calculate My Energy Loss
      </button>

      <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '13px', marginTop: '12px' }}>
        * Estimates based on average Gold Coast conditions and electricity rates. Actual results may vary.
      </p>

      {result && (
        <div style={{ marginTop: '32px' }}>
          <div style={{ background: '#fef2f2', borderRadius: '12px', padding: '20px', marginBottom: '16px', textAlign: 'center', border: '1px solid #fecaca' }}>
            <p style={{ color: '#dc2626', fontWeight: '600', fontSize: '16px', marginBottom: '4px' }}>
              Your {result.panelCount} panels ({result.kw}kW system) are currently losing:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div style={{ background: 'white', borderRadius: '8px', padding: '20px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#dc2626' }}>${result.perMonth}</div>
              <div style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>Wasted every month</div>
            </div>
            <div style={{ background: 'white', borderRadius: '8px', padding: '20px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#dc2626' }}>${result.dollarLoss}</div>
              <div style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>Lost every year</div>
            </div>
            <div style={{ background: 'white', borderRadius: '8px', padding: '20px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#b91c1c' }}>${result.fiveYearLoss}</div>
              <div style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>Lost over 5 years</div>
            </div>
            <div style={{ background: 'white', borderRadius: '8px', padding: '20px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#991b1b' }}>${result.tenYearLoss}</div>
              <div style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>Lost over 10 years</div>
            </div>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #0EA5C8 0%, #1B2A6B 100%)', borderRadius: '12px', padding: '24px', textAlign: 'center', marginBottom: '16px' }}>
            <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', marginBottom: '8px' }}>
              Also losing annually
            </div>
            <div style={{ fontSize: '36px', fontWeight: '800', color: 'white' }}>
              {result.annualLoss} kWh
            </div>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', marginTop: '4px' }}>
              That's enough to power a home for {Math.round(result.annualLoss / 15)} days
            </div>
          </div>

          <p style={{ textAlign: 'center', color: '#15803d', fontWeight: '700', fontSize: '16px', marginBottom: '20px' }}>
            A professional clean restores your full output — get that money back.
          </p>

          <div style={{ textAlign: 'center' }}>
            <Link href="/quote" className="btn-primary" style={{ fontSize: '18px', padding: '16px 40px' }}>
              Get a Free Quote Now
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}