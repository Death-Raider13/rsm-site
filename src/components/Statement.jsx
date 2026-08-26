import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { el.style.opacity='1'; el.style.transform='translateY(0)'; obs.disconnect() } }, { threshold: 0.15 })
    el.style.opacity='0'; el.style.transform='translateY(32px)'; el.style.transition='opacity 0.7s ease, transform 0.7s ease'
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return ref
}

export default function Statement() {
  const ref = useReveal()
  return (
    <section id="about" style={{ background: 'var(--navy)', color: 'var(--canvas)', padding: 'clamp(88px,10vw,142px) 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(28,86,197,0.25) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div ref={ref} style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '0.4fr 1fr', gap: 'clamp(50px,10vw,150px)', position: 'relative', zIndex: 1 }} className="rsm-statement-grid">
        <div style={{ paddingTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '11px', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.075em', textTransform: 'uppercase' }}>
            <span style={{ display: 'block', width: '7px', height: '7px', background: 'var(--blue)', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(28,86,197,0.25)' }} />
            Why RSM
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(37px,4.4vw,61px)', fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.075em', color: '#FAFBFE', margin: '0 0 22px', maxWidth: '780px' }}>
            Good ideas need a way forward.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.58, color: 'rgba(250,251,254,0.65)', maxWidth: '460px', margin: 0 }}>
            Important work often slows down when ownership is unclear, timelines are loose, and decisions are not followed through. RSM brings structure, coordination, and practical momentum to the work that matters.
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .rsm-statement-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </section>
  )
}
