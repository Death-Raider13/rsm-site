import { useState } from 'react'
import { navLinks, site, whatsappUrl } from '../lib/site'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const message = `Hi ${site.name}, I would like to discuss a project.`

  return (
    <header className="site-header" id="header">
      <div className="container header-inner">
        <a className="brand-lockup" href="#hero" aria-label={`${site.name} home`}>
          <img src="/rsm_logo_refined_primary.png" alt="RSM" className="brand-mark" />
          <span className="brand-wordmark">
            <strong>ResolveSync</strong>
            <span>Management</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <a className="button button-dark header-cta" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-navigation${menuOpen ? ' is-open' : ''}`}>
        <div className="container mobile-navigation-inner">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <a className="button button-blue" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  )
}
