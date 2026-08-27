import { whatsappUrl, site } from '../lib/site'

export default function Hero() {
  const message = `Hi ${site.name}, I would like to talk about getting my project organised.`

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow"><span className="eyebrow-line" /> Helping ideas become real work</div>
          <h1>You have the idea.<br /><em>We help make it happen.</em></h1>
          <p className="hero-intro">ResolveSync Management helps business owners turn scattered ideas and stressful projects into clear, organised action.</p>
          <div className="hero-actions"><a className="button button-blue button-large" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Talk about your project <span aria-hidden="true">↗</span></a><a className="text-link" href="#how-we-help">See how we help <span aria-hidden="true">↓</span></a></div>
          <div className="hero-meta"><span className="meta-icon" aria-hidden="true">⌖</span><p><strong>For startups and growing businesses</strong><br />Business launches, websites, software, and important projects.</p></div>
        </div>
        <div className="hero-art" data-reveal>
          <div className="art-sun" />
          <div className="delivery-board"><div className="board-topline"><span>RSM / How we help</span><span className="board-status"><i /> Work in motion</span></div><div className="board-heading">From idea<br /><span>to action.</span></div><div className="board-rule" /><div className="board-row board-row-highlight"><span className="board-index">01</span><div><strong>Break down the idea</strong><small>Clear steps and priorities</small></div><span className="board-check">✓</span></div><div className="board-row"><span className="board-index">02</span><div><strong>Organise the people</strong><small>Right tasks, right owners</small></div><span className="board-check">○</span></div><div className="board-row"><span className="board-index">03</span><div><strong>Keep the work moving</strong><small>Follow-up, timelines, completion</small></div><span className="board-check">○</span></div><div className="board-footer"><span>RESOLVESYNC MANAGEMENT</span><span>RSM / 2026</span></div></div>
          <div className="art-note art-note-blue"><span>What changes</span><strong>You know what to do next.</strong></div>
          <div className="art-note art-note-cream"><span>What we bring</span><strong>Structure + follow-through.</strong></div>
        </div>
      </div>
      <div className="container hero-bottomline"><span>01 — THE RSM APPROACH</span><span className="hero-bottomline-copy">From “I want to do this” to “this is what happens next.”</span><span className="scroll-cue" aria-hidden="true">↓</span></div>
    </section>
  )
}
