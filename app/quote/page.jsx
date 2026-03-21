'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function QuotePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [today, setToday] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    property_type: '',
    system_size: '',
    roof_access: '',
    notes: '',
  })

  useEffect(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    setToday(d)
    setCurrentMonth(new Date())
    setMounted(true)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          preferred_date: selectedDate ? selectedDate.toISOString().split('T')[0] : null
        })
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Something went wrong')
      router.push('/quote/success')
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    return { firstDay, daysInMonth }
  }

  const monthName = mounted && currentMonth
    ? currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })
    : ''

  const prevMonth = () => {
    const d = new Date(currentMonth)
    d.setMonth(d.getMonth() - 1)
    if (d >= new Date(today.getFullYear(), today.getMonth(), 1)) setCurrentMonth(d)
  }

  const nextMonth = () => {
    const d = new Date(currentMonth)
    d.setMonth(d.getMonth() + 1)
    setCurrentMonth(d)
  }

  const selectDate = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    if (date >= today) setSelectedDate(date)
  }

  const isSelected = (day) => {
    if (!selectedDate || !currentMonth) return false
    return selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
  }

  const isPast = (day) => {
    if (!currentMonth || !today) return false
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return date < today
  }

  const { firstDay, daysInMonth } = mounted && currentMonth
    ? getDaysInMonth(currentMonth)
    : { firstDay: 0, daysInMonth: 0 }

  return (
    <div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0EA5C8 0%, #1B2A6B 100%)', padding: '60px 24px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', marginBottom: '12px' }}>
            Get a Free Quote
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px' }}>
            Tell us about your solar system and we'll provide a customised quote
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '60px 24px', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px', alignItems: 'start' }}>

            {/* Left — Form */}
            <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 30px rgba(0,0,0,0.08)' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '32px' }}>Request Your Free Quote</h2>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                <h3 style={{ fontWeight: '700', fontSize: '16px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>Your Information</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px' }}>Full Name *</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px' }}>Phone Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="0412293143"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px' }}>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px' }}>Property Address *</label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="123 Main St, Surfers Paradise, QLD 4217"
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>

                <h3 style={{ fontWeight: '700', fontSize: '16px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginTop: '8px' }}>Property Details</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px' }}>Property Type *</label>
                    <select
                      name="property_type"
                      value={formData.property_type}
                      onChange={handleChange}
                      required
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px', boxSizing: 'border-box' }}
                    >
                      <option value="">Select property type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="property_management">Property Management</option>
                      <option value="airbnb">Airbnb / Holiday Rental</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px' }}>Approximate System Size</label>
                    <select
                      name="system_size"
                      value={formData.system_size}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px', boxSizing: 'border-box' }}
                    >
                      <option value="">Select system size</option>
                      <option value="small">Small (1-10 panels)</option>
                      <option value="medium">Medium (11-20 panels)</option>
                      <option value="large">Large (21-30 panels)</option>
                      <option value="xlarge">Extra Large (30+ panels)</option>
                      <option value="unsure">Not sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px' }}>Roof Access Details</label>
                  <input
                    name="roof_access"
                    value={formData.roof_access}
                    onChange={handleChange}
                    placeholder="e.g. Single storey, easy access, no obstacles"
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px' }}>Additional Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any specific concerns or requirements? When panels were last cleaned? Any visible issues?"
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '16px', resize: 'vertical', boxSizing: 'border-box' }}
                  />
                </div>

                {error && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '12px 16px', color: '#dc2626', fontSize: '14px' }}>
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ fontSize: '18px', padding: '16px', width: '100%', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                  {loading ? 'Submitting...' : 'Request Free Quote'}
                </button>

                <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '13px' }}>
                  * No obligation. We'll contact you within 24 hours with a personalised quote.
                </p>

              </form>
            </div>

            {/* Right — Calendar + Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* Calendar */}
              <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 30px rgba(0,0,0,0.08)' }}>
                <h3 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '4px' }}>Preferred Service Date</h3>
                <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
                  Optional — we'll confirm availability when we contact you.
                </p>

                {mounted && currentMonth && (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <button type="button" onClick={prevMonth} style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '16px' }}>‹</button>
                      <span style={{ fontWeight: '600', fontSize: '15px' }}>{monthName}</span>
                      <button type="button" onClick={nextMonth} style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '16px' }}>›</button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '4px' }}>
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                        <div key={d} style={{ textAlign: 'center', fontSize: '12px', fontWeight: '600', color: '#94a3b8', padding: '4px 0' }}>{d}</div>
                      ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
                      {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1
                        const past = isPast(day)
                        const selected = isSelected(day)
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => selectDate(day)}
                            disabled={past}
                            style={{
                              padding: '8px 4px',
                              borderRadius: '6px',
                              border: 'none',
                              cursor: past ? 'not-allowed' : 'pointer',
                              background: selected ? '#0EA5C8' : 'transparent',
                              color: past ? '#cbd5e1' : selected ? 'white' : '#1e293b',
                              fontWeight: selected ? '700' : '400',
                              fontSize: '14px',
                            }}
                          >
                            {day}
                          </button>
                        )
                      })}
                    </div>

                    {selectedDate && (
                      <div style={{ marginTop: '16px', background: '#f0f9ff', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', color: '#0EA5C8', fontWeight: '600', textAlign: 'center' }}>
                        ✓ Selected: {selectedDate.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' })}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* What to Expect */}
              <div style={{ background: '#f0f9ff', borderRadius: '16px', padding: '28px' }}>
                <h3 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '16px' }}>What to Expect</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    "We'll review your request within 24 hours",
                    'Receive a personalised quote based on your system',
                    'No hidden fees or obligations',
                    'Flexible scheduling to suit your needs',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#0EA5C8', fontWeight: '700', flexShrink: 0 }}>✓</span>
                      <span style={{ color: '#1e293b', fontSize: '15px' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How We Price */}
              <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 15px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '12px' }}>How We Price</h3>
                <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6' }}>
                  Our pricing is based on your system size, roof access, and location. Most residential cleanings are completed in 1-2 hours. We provide transparent quotes with no surprises.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}