import { useEffect, useRef } from 'react'

export default function Hero() {
  const waLink = 'https://wa.me/2348121678176?text=Hi%20ResolveSync%20Management%2C%20I%20would%20like%20to%20discuss%20a%20project.'
  const copyRef = useRef(null)
  const visualRef = useRef(null)

  useEffect(() => {
    [copyRef, visualRef].forEach((ref, i) => {
      const el = ref.current
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(18px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.65s var(--ease), transform 0.65s var(--ease)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, i * 100 + 50)
    })
  }, [])

  return (
    <section id="hero" style={{ background: 'var(--canvas)', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: 'minmax(0, 1.03fr) minmax(420px, 0.97fr)', alignItems: 'center', gap: 'clamp(55px, 8vw, 120px)', minHeight: '690px', paddingTop: '82px', paddingBottom: '100px' }} className="rsm-hero-grid">
        
        {/* Left copy */}
        <div ref={copyRef} style={{ paddingLeft: 'clamp(0px, 3.5vw, 46px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '11px', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.075em', textTransform: 'uppercase', marginBottom: '28px' }}>
            <span style={{ display: 'block', width: '7px', height: '7px', background: 'var(--blue)', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(28,86,197,0.15)' }} />
            Project Delivery &middot; Startups &amp; Growth
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 6.4vw, 88px)', fontWeight: 700, lineHeight: 0.98, letterSpacing: '-0.09em', color: 'var(--navy)', margin: '0 0 26px', maxWidth: '680px' }}>
            Turn important work into <span style={{ color: 'var(--blue)' }}>forward movement.</span>
          </h1>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: 1.58, color: 'var(--slate)', maxWidth: '520px', margin: '0 0 32px' }}>
            ResolveSync Management helps startups and growing businesses structure launches, implement software, and move strategy from idea to execution.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '25px', flexWrap: 'wrap' }}>
            <a id="hero-wa-cta" href={waLink} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--blue)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, padding: '15px 19px', borderRadius: '999px', transition: 'background 0.17s, transform 0.17s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Start a project on WhatsApp
            </a>
            <a id="hero-services-cta" href="#services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--navy)', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, borderBottom: '1px solid rgba(11,47,107,0.2)', paddingBottom: '5px', transition: 'color 0.17s, border-color 0.17s' }}
              onMouseEnter={e => { e.currentTarget.style.color='var(--blue)'; e.currentTarget.style.borderColor='var(--blue)' }}
              onMouseLeave={e => { e.currentTarget.style.color='var(--navy)'; e.currentTarget.style.borderColor='rgba(11,47,107,0.2)' }}
            >
              See what we do
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div style={{ borderTop: '1px solid rgba(11,47,107,0.1)', display: 'flex', alignItems: 'center', gap: '12px', marginTop: '58px', paddingTop: '19px' }}>
            <div style={{ width: '31px', height: '31px', background: 'rgba(28,86,197,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', lineHeight: 1.45, color: 'var(--slate)', margin: 0 }}>
              <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>Lagos, Nigeria</strong> &nbsp;·&nbsp; Available remotely worldwide
            </p>
          </div>
        </div>

        {/* Right visual */}
        <div ref={visualRef} style={{ minHeight: '560px', paddingRight: '34px', position: 'relative' }} className="rsm-hero-visual">
          {/* Main image area */}
          <div style={{ background: 'linear-gradient(135deg, #EAF1FF 0%, #dbeafe 60%, #bfdbfe 100%)', borderRadius: '25px', height: '505px', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px rgba(11,47,107,0.12)' }}>
            {/* Abstract document texture */}
            <div style={{ position: 'absolute', inset: 0, padding: '48px 40px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, color: 'rgba(11,47,107,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>Project Brief</div>
              {[1,2,3,4,5,6,7,8,9,10].map(i => (
                <div key={i} style={{ height: '2px', background: i <= 2 ? 'var(--blue)' : 'rgba(11,47,107,0.1)', borderRadius: '2px', marginBottom: '12px', width: i === 1 ? '55%' : i === 2 ? '40%' : [80,70,90,65,85,75,60,88][i-3]+'%', opacity: i <= 2 ? 1 : 0.8 }} />
              ))}
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(145deg, rgba(11,47,107,0.03), rgba(28,86,197,0.12))', mixBlendMode: 'multiply' }} />
            {/* Image label */}
            <div style={{ position: 'absolute', bottom: '17px', left: '17px', right: '17px', background: 'rgba(250,251,254,0.92)', backdropFilter: 'blur(9px)', borderRadius: '11px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', padding: '12px 14px' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 700, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Current stage</span>
              <strong style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--navy)' }}>Active &amp; taking projects</strong>
            </div>
          </div>

          {/* Floating service card */}
          <div style={{ position: 'absolute', bottom: '32px', right: '-4px', width: '250px', background: '#fff', border: '1px solid rgba(11,47,107,0.1)', borderRadius: '15px', padding: '19px', boxShadow: '0 18px 35px rgba(11,47,107,0.14)', zIndex: 2 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 700, color: 'var(--slate)', letterSpacing: '0.07em', textTransform: 'uppercase' }}>Three services</div>
            <div style={{ borderTop: '1px solid rgba(11,47,107,0.08)', borderBottom: '1px solid rgba(11,47,107,0.08)', margin: '17px 0', padding: '14px 0', display: 'grid', gap: '11px' }}>
              {['Business Launches', 'Software Implementation', 'Strategy Execution'].map((s, i) => (
                <span key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, color: 'var(--navy)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  {s}
                </span>
              ))}
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, color: 'var(--blue)' }}>RSM · ResolveSync Management</span>
          </div>

          {/* Note card */}
          <div style={{ position: 'absolute', top: '32px', left: '-27px', width: '105px', background: 'var(--blue)', color: '#fff', borderRadius: '12px', padding: '15px 13px', display: 'grid', gap: '7px', transform: 'rotate(-4deg)', boxShadow: '0 12px 20px rgba(11,47,107,0.2)', zIndex: 2 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 700, opacity: 0.72 }}>Delivery-first</span>
            <strong style={{ fontFamily: 'var(--font-display)', fontSize: '18px', lineHeight: 1.03, letterSpacing: '-0.06em', fontWeight: 700 }}>Real work. Earned trust.</strong>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .rsm-hero-grid { grid-template-columns: 1fr !important; gap: 55px !important; padding-top: 70px !important; padding-bottom: 90px !important; min-height: 0 !important; }
          .rsm-hero-visual { padding-right: 15px !important; min-height: 420px !important; }
        }
        @media (max-width: 600px) {
          .rsm-hero-grid { padding: 59px 20px 80px !important; }
        }
      `}</style>
    </section>
  )
}
