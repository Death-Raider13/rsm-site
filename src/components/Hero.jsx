import { whatsappUrl, site } from '../lib/site'

export default function Hero() {
  const message = `Hi ${site.name}, I would like to discuss a project.`

  return (
    <section className="hero-section" id="hero">
      <div className="hero-grid container">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow"><span className="eyebrow-line" /> Operations partner for important work</div>
          <h1>When good work gets stuck, <em>we get it moving.</em></h1>
          <p className="hero-intro">ResolveSync Management helps founders and growing teams bring clarity, ownership, and follow-through to launches, software projects, and strategic initiatives.</p>
          <div className="hero-actions">
            <a className="button button-blue button-large" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
              Book a discovery conversation <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#sprint">See the Delivery Clarity Sprint <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-meta">
            <span className="meta-icon" aria-hidden="true">⌖</span>
            <p><strong>{site.location}</strong><br />Remote delivery for teams ready to move</p>
          </div>
        </div>

        <div className="hero-art" data-reveal>
          <div className="art-sun" aria-hidden="true" />
          <div className="art-note art-note-blue">
            <span>RSM / 01</span>
            <strong>Make the next move obvious.</strong>
          </div>
          <div className="delivery-board" aria-label="Illustration of a delivery plan">
            <div className="board-topline"><span>Delivery clarity sprint</span><span className="board-status">In focus <i /></span></div>
            <div className="board-heading">From stuck<br /><span>to in motion.</span></div>
            <div className="board-rule" />
            <div className="board-row board-row-highlight"><span className="board-index">01</span><div><strong>Define the outcome</strong><small>What does done look like?</small></div><span className="board-check">✓</span></div>
            <div className="board-row"><span className="board-index">02</span><div><strong>Map the moving parts</strong><small>Owners, decisions, dependencies</small></div><span className="board-check">○</span></div>
            <div className="board-row"><span className="board-index">03</span><div><strong>Build the path forward</strong><small>Priorities, milestones, rhythm</small></div><span className="board-check">○</span></div>
            <div className="board-footer"><span>ResolveSync Management</span><span>06 / 26</span></div>
          </div>
          <div className="art-note art-note-cream"><span>Field note</span><strong>Clear owners.<br />Visible progress.</strong></div>
        </div>
      </div>
      <div className="hero-bottomline container">
        <span>01 — The problem</span>
        <span className="hero-bottomline-copy">Less noise. Better decisions. Work that actually moves.</span>
        <span className="scroll-cue" aria-hidden="true">↓</span>
      </div>
    </section>
  )
}
