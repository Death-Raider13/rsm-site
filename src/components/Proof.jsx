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

export default function Proof() {
  const ref = useReveal()
  return (
    <section id="proof" style={{ background: 'var(--canvas)', padding: 'clamp(88px,10vw,142px) 32px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '14px', width: '1px', background: 'linear-gradient(var(--blue), rgba(28,86,197,0.1))', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '52px', paddingLeft: '13px', fontSize: '10px', fontWeight: 700, color: 'var(--navy)', letterSpacing: '0.09em', textTransform: 'uppercase', position: 'relative' }}>
          <span style={{ position: 'absolute', top: '50%', left: '9px', transform: 'translate(-50%,-50%)', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--canvas)', border: '2px solid var(--blue)' }} />
          <span style={{ color: 'var(--blue)', fontWeight: 700 }}>03</span>
          <span style={{ background: 'var(--blue)', opacity: 0.72, width: '38px', height: '1px' }} />
          <span style={{ color: 'var(--slate)' }}>Our approach</span>
        </div>

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'stretch' }} className="rsm-proof-layout">
          {/* Left: image block */}
          <div style={{ background: 'linear-gradient(135deg, #EAF1FF, #DBEAFE)', borderRadius: '20px', minHeight: '455px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, padding: '40px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, color: 'var(--blue)', letterSpacing: '-0.02em', marginBottom: '24px' }}>Built with care. Growing through delivery.</div>
              {[65,80,55,70,85,60,75].map((w, i) => (
                <div key={i} style={{ height: '2px', background: i < 2 ? 'var(--blue)' : 'rgba(11,47,107,0.15)', borderRadius: '2px', width: w+'%', marginBottom: '14px' }} />
              ))}
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent 40%, rgba(11,47,107,0.5))', paddingBottom: '18px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '60px' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, color: '#FAFBFE', letterSpacing: '0.07em', textTransform: 'uppercase' }}>Delivery evidence · Building trust through real work</span>
            </div>
          </div>

          {/* Right: working areas card */}
          <div style={{ background: 'var(--surface-warm)', border: '1px solid rgba(11,47,107,0.1)', borderTop: '4px solid var(--blue)', padding: '28px 30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(11,47,107,0.08)', paddingBottom: '21px', marginBottom: '0', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, color: 'var(--navy)', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
              <span>Our commitment</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            {[
              { num: '01', title: 'Delivery-first approach', desc: 'Every project starts with clarity on what moves first and why.' },
              { num: '02', title: 'Permission-based sharing', desc: 'We only share project evidence with explicit client approval.' },
              { num: '03', title: 'Honest communication', desc: 'No fluff. No fabricated metrics. Real status, real next steps.' },
            ].map((item, i, arr) => (
              <div key={item.num} style={{ display: 'grid', gridTemplateColumns: '30px 1fr 18px', alignItems: 'start', gap: '14px', padding: '22px 0', borderBottom: i < arr.length - 1 ? '1px solid rgba(11,47,107,0.08)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, color: 'var(--blue)' }}>{item.num}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--navy)', margin: '0 0 7px' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.5, color: 'var(--slate)', margin: 0, maxWidth: '340px' }}>{item.desc}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--slate)" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '11px', marginTop: '23px', fontFamily: 'var(--font-body)', fontSize: '12px', lineHeight: 1.45, color: 'var(--slate)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" style={{ flexShrink: 0, marginTop: '1px' }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              RSM is intentionally building a body of delivery evidence through real work, careful documentation, and projects completed with permission to share.
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .rsm-proof-layout { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
