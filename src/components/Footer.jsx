import { navLinks, site, whatsappUrl } from '../lib/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="brand-lockup" href="#hero" aria-label={`${site.name} home`}>
            <img src="/rsm_logo_refined_primary.png" alt="RSM" className="brand-mark brand-mark-inverted" />
            <span className="brand-wordmark"><strong>ResolveSync</strong><span>Management</span></span>
          </a>
          <p>We help important work get done.</p>
        </div>
        <div className="footer-nav"><span>Explore</span>{navLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}</div>
        <div className="footer-contact"><span>Contact</span><a href={whatsappUrl(`Hi ${site.name}, I would like to discuss a project.`)} target="_blank" rel="noopener noreferrer">{site.phoneDisplay}</a><a href={`mailto:${site.email}`}>{site.email}</a><span>{site.location} · Remote</span></div>
        <a className="footer-top" href="#hero">Back to top <span aria-hidden="true">↑</span></a>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span><span>Built for forward movement.</span></div>
    </footer>
  )
}
