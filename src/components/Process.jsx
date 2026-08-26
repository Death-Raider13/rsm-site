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

const steps = [
  { num: '01', title: 'Understand the work', desc: 'We clarify the goal, the people involved, what is already in motion, and what is blocking progress.', status: 'Discovery' },
  { num: '02', title: 'Build the path', desc: 'We define priorities, ownership, deliverables, decision points, and a practical way of working.', status: 'Planning' },
  { num: '03', title: 'Coordinate delivery', desc: 'We help the right work move, keep follow-through visible, and keep the project connected to its intended outcome.', status: 'Execution' },
]

export default function Process() {
  const ref = useReveal()
  return (
    <section id="process" style={{ background: '#F0F5FF', padding: 'clamp(88px,10vw,142px) 32px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '14px', width: '1px', background: 'linear-gradient(var(--blue), rgba(28,86,197,0.1))', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px', paddingLeft: '13px', fontSize: '10px', fontWeight: 700, color: 'var(--navy)', letterSpacing: '0.09em', textTransform: 'uppercase', position: 'relative' }}>
          <span style={{ position: 'absolute', top: '50%', left: '9px', transform: 'translate(-50%,-50%)', width: '10px', height: '10px', borderRadius: '50%', background: '#F0F5FF', border: '2px solid var(--blue)' }} />
          <span style={{ color: 'var(--blue)', fontWeight: 700 }}>02</span>
          <span style={{ background: 'var(--blue)', opacity: 0.72, width: '38px', height: '1px' }} />
          <span style={{ color: 'var(--slate)' }}>How we work</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.75fr 1.25fr', gap: 'clamp(55px,10vw,160px)', marginBottom: '52px' }} className="rsm-approach-grid">
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(41px,5vw,66px)', fontWeight: 700, lineHeight: 0.99, letterSpacing: '-0.09em', color: 'var(--navy)', margin: '25px 0 20px', maxWidth: '480px' }}>A simple way to move work forward</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.55, color: 'var(--slate)', maxWidth: '360px', margin: '0 0 28px' }}>Three clear stages. Calm, structured, and always connected to what matters most.</p>
            <a href="https://wa.me/2348121678176?text=Hi%20ResolveSync%20Management%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--navy)', fontSize: '11px', fontWeight: 700, borderBottom: '1px solid var(--navy)', paddingBottom: '5px', transition: 'color 0.17s' }}
              onMouseEnter={e => e.currentTarget.style.color='var(--blue)'}
              onMouseLeave={e => e.currentTarget.style.color='var(--navy)'}
            >
              Let&rsquo;s talk
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div ref={ref} style={{ paddingTop: '8px' }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: '22px', minHeight: '120px', position: 'relative' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(11,47,107,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, color: 'var(--navy)' }}>{step.num}</div>
                {i < steps.length - 1 && <div style={{ position: 'absolute', top: '38px', bottom: 0, left: '18px', width: '1px', background: 'rgba(11,47,107,0.25)' }} />}
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '9px', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '8px' }}>{step.status}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '25px', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.06em', color: 'var(--navy)', margin: '0 0 8px' }}>{step.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.55, color: 'var(--slate)', maxWidth: '430px', margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .rsm-approach-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  )
}
