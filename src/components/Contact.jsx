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

export default function Contact() {
  const waLink = 'https://wa.me/2348121678176?text=Hi%20ResolveSync%20Management%2C%20I%20would%20like%20to%20discuss%20a%20project.'
  const ref = useReveal()

  return (
    <section id="contact" style={{ background: 'var(--navy)', color: 'var(--canvas)', padding: 'clamp(88px,10vw,142px) 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 80% 40%, rgba(28,86,197,0.3) 0%, transparent 55%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '11px', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.075em', textTransform: 'uppercase', marginBottom: '0' }}>
          <span style={{ width: '7px', height: '7px', background: 'var(--blue)', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(28,86,197,0.25)', display: 'block' }} />
          Get in touch
        </div>

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 0.82fr', alignItems: 'start', gap: 'clamp(55px,10vw,160px)' }} className="rsm-contact-grid">
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(45px,5.6vw,76px)', fontWeight: 700, lineHeight: 0.96, letterSpacing: '-0.09em', color: '#FAFBFE', margin: '25px 0 21px', maxWidth: '560px' }}>Have a project that needs to move?</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.58, color: 'rgba(250,251,254,0.68)', maxWidth: '410px', margin: 0 }}>Tell us what you are building, launching, or trying to organise. We will help you identify the right next step.</p>
            <div style={{ display: 'grid', gap: '11px', marginTop: '45px' }}>
              <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', color: 'var(--canvas)', fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500, transition: 'color 0.17s' }}
                onMouseEnter={e => e.currentTarget.style.color='var(--pale-blue)'}
                onMouseLeave={e => e.currentTarget.style.color='var(--canvas)'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                +234 812 167 8176 (WhatsApp)
              </a>
              <a href="mailto:resolvesyncmanagement@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', color: 'var(--canvas)', fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500, transition: 'color 0.17s' }}
                onMouseEnter={e => e.currentTarget.style.color='var(--pale-blue)'}
                onMouseLeave={e => e.currentTarget.style.color='var(--canvas)'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                resolvesyncmanagement@gmail.com
              </a>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', color: 'var(--canvas)', fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Lagos, Nigeria &middot; Remote
              </span>
            </div>
          </div>

          {/* Contact card */}
          <div style={{ background: 'var(--canvas)', color: 'var(--navy)', borderTop: '4px solid var(--blue)', padding: '31px', borderRadius: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(11,47,107,0.1)', paddingBottom: '20px', marginBottom: '25px' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.07em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Start a conversation</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.06em', color: 'var(--navy)', margin: 0 }}>Let&rsquo;s talk about your project</h3>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            {[{ label: 'Your name', type: 'text', placeholder: 'What should we call you?' }, { label: 'What are you working on?', type: 'textarea', placeholder: 'Business launch, software project, strategy...' }].map(field => (
              <label key={field.label} style={{ display: 'grid', gap: '8px', marginBottom: '18px' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 700, color: 'var(--slate)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{field.label}</span>
                {field.type === 'textarea'
                  ? <textarea placeholder={field.placeholder} rows={3} style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500, lineHeight: 1.45, color: 'var(--navy)', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(11,47,107,0.15)', outline: 'none', padding: '10px 0', resize: 'vertical' }} />
                  : <input type={field.type} placeholder={field.placeholder} style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500, lineHeight: 1.45, color: 'var(--navy)', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(11,47,107,0.15)', outline: 'none', padding: '10px 0' }} />
                }
              </label>
            ))}
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', background: 'var(--blue)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, padding: '15px', borderRadius: '999px', marginTop: '4px', transition: 'background 0.17s' }}
              onMouseEnter={e => e.currentTarget.style.background='var(--navy)'}
              onMouseLeave={e => e.currentTarget.style.background='var(--blue)'}
            >
              Send via WhatsApp
            </a>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', lineHeight: 1.45, color: 'var(--slate)', margin: '14px 0 0' }}>Or email us directly at resolvesyncmanagement@gmail.com</p>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 980px) { .rsm-contact-grid { grid-template-columns: 1fr !important; gap: 50px !important; } }
      `}</style>
    </section>
  )
}
