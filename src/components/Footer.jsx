export default function Footer() {
  const year = new Date().getFullYear()
  const waLink = 'https://wa.me/2348121678176?text=Hi%20ResolveSync%20Management%2C%20I%20would%20like%20to%20discuss%20a%20project.'
  return (
    <footer id="footer" style={{ background: '#0d201f', color: 'var(--canvas)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'start', padding: '45px 0' }} className="rsm-footer-top">
          <div>
            <a href="#" style={{ display: 'inline-block', marginBottom: '8px' }}>
              <img src="/rsm_logo_refined_primary.png" alt="RSM" style={{ height: '36px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.8 }} />
            </a>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.45, color: 'rgba(250,251,254,0.55)', margin: '2px 0 0', maxWidth: '220px' }}>Project delivery for startups and growing businesses.</p>
          </div>
          <div style={{ display: 'grid', gap: '6px' }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 700, color: 'rgba(250,251,254,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Contact</div>
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(250,251,254,0.6)', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='rgba(250,251,254,0.6)'}>(+234) 812 167 8176</a>
            <a href="mailto:resolvesyncmanagement@gmail.com" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(250,251,254,0.6)', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='rgba(250,251,254,0.6)'}>resolvesyncmanagement@gmail.com</a>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(250,251,254,0.35)' }}>Lagos, Nigeria &middot; Remote</span>
          </div>
          <div style={{ justifySelf: 'end' }}>
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, color: 'var(--canvas)', transition: 'color 0.17s' }}
              onMouseEnter={e=>e.currentTarget.style.color='var(--pale-blue)'}
              onMouseLeave={e=>e.currentTarget.style.color='var(--canvas)'}
            >
              Back to top
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6"/></svg>
            </a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px', padding: '15px 0 16px', fontFamily: 'var(--font-body)', fontSize: '10px', color: 'rgba(250,251,254,0.38)', flexWrap: 'wrap' }}>
          <span>&copy; {year} ResolveSync Management. All rights reserved.</span>
          <span>Lagos &middot; Nigeria &middot; Remote</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .rsm-footer-top { grid-template-columns: 1fr 1fr !important; gap: 30px 20px !important; } .rsm-footer-top > div:last-child { grid-column: 2; } }
        @media (max-width: 480px) { .rsm-footer-top { grid-template-columns: 1fr !important; } .rsm-footer-top > div:last-child { grid-column: auto; } }
      `}</style>
    </footer>
  )
}
