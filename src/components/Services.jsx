import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { el.style.opacity='1'; el.style.transform='translateY(0)'; obs.disconnect() } }, { threshold: 0.1 })
    el.style.opacity='0'; el.style.transform='translateY(40px)'; el.style.transition='opacity 0.75s ease, transform 0.75s ease'
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return ref
}

const services = [
  { num: '01', title: 'Business Launches', desc: 'Turning a business, programme, or new offer into a clear launch plan with the right priorities, people, and next steps.', tag: 'Planning & Launch' },
  { num: '02', title: 'Software Implementation', desc: 'Coordinating product requirements, people, delivery handoffs, and follow-through so digital work moves with more clarity.', tag: 'Tech & Delivery' },
  { num: '03', title: 'Strategy Execution', desc: 'Helping teams turn agreed plans into ownership, timelines, decisions, and practical progress.', tag: 'Execution & Momentum' },
]

export default function Services() {
  const ref = useReveal()
  const waLink = 'https://wa.me/2348121678176?text=Hi%20ResolveSync%20Management%2C%20I%20would%20like%20to%20discuss%20a%20project.'

  return (
    <section id="services" style={{ background: 'var(--canvas)', padding: 'clamp(88px,10vw,142px) 32px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative' }}>
        {/* Left accent line */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '14px', width: '1px', background: 'linear-gradient(var(--blue), rgba(28,86,197,0.1))', pointerEvents: 'none' }} />
        
        {/* Section marker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px', paddingLeft: '13px', fontSize: '10px', fontWeight: 700, color: 'var(--navy)', letterSpacing: '0.09em', textTransform: 'uppercase', position: 'relative' }}>
          <span style={{ position: 'absolute', top: '50%', left: '9px', transform: 'translate(-50%,-50%)', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--canvas)', border: '2px solid var(--blue)' }} />
          <span style={{ color: 'var(--blue)', fontWeight: 700 }}>01</span>
          <span style={{ background: 'var(--blue)', opacity: 0.72, width: '38px', height: '1px' }} />
          <span style={{ color: 'var(--slate)' }}>Our services</span>
        </div>

        {/* Section heading */}
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 0.42fr', alignItems: 'end', gap: '60px', marginBottom: '52px' }} className="rsm-services-heading">
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(39px,4.8vw,64px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.085em', color: 'var(--navy)', margin: '23px 0 0', maxWidth: '600px' }}>What we help move</h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.55, color: 'var(--slate)', maxWidth: '330px', margin: 0 }}>Three focused services designed to get important work moving with clarity and confidence.</p>
        </div>

        {/* Staggered service cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }} className="rsm-service-grid">
          {services.map((s, i) => (
            <div key={s.num}
              className="rsm-service-card"
              style={{
                background: 'var(--surface-warm)',
                border: '1px solid rgba(11,47,107,0.1)',
                borderTop: '4px solid var(--blue)',
                borderRadius: 0,
                minHeight: '318px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                marginTop: i === 1 ? '22px' : i === 2 ? '44px' : 0,
                transition: 'transform 0.22s ease, border-color 0.22s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.borderTopColor='var(--navy)' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderTopColor='var(--blue)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '11px', fontWeight: 700, color: 'var(--blue)' }}>
                <span>{s.num}</span>
                <div style={{ width: '42px', height: '42px', background: 'rgba(28,86,197,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '25px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.06em', color: 'var(--navy)', margin: '52px 0 11px' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.55, color: 'var(--slate)', maxWidth: '310px', margin: '0 0 25px' }}>{s.desc}</p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, color: 'var(--navy)', borderBottom: '1px solid rgba(11,47,107,0.2)', paddingBottom: '5px', marginTop: 'auto', alignSelf: 'flex-start', transition: 'color 0.17s' }}
                onMouseEnter={e => e.currentTarget.style.color='var(--blue)'}
                onMouseLeave={e => e.currentTarget.style.color='var(--navy)'}
              >
                Get started
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', borderTop: '1px solid rgba(11,47,107,0.08)', paddingTop: '13px', marginTop: '13px', fontSize: '9px', fontWeight: 700, color: 'var(--slate)', letterSpacing: '0.055em', textTransform: 'uppercase' }}>
                <span>{s.tag}</span>
                <span>RSM</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) { .rsm-service-grid { grid-template-columns: 1fr 1fr !important; } .rsm-service-grid > div:last-child { grid-column: span 2; margin-top: 0 !important; } }
        @media (max-width: 640px) { .rsm-service-grid { grid-template-columns: 1fr !important; } .rsm-service-grid > div:last-child { grid-column: auto; } .rsm-service-card { margin-top: 0 !important; } .rsm-services-heading { grid-template-columns: 1fr !important; gap: 20px !important; } }
      `}</style>
    </section>
  )
}
