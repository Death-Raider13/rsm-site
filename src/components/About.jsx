import { site } from '../lib/site'

const principles = ['Clear steps before more activity', 'The right people know their tasks', 'Honest updates about the work']

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid" data-reveal>
        <div className="about-label"><div className="eyebrow"><span className="eyebrow-line" /> About RSM</div><span className="about-stamp">Founder-led<br />·<br />Lagos</span></div>
        <div className="about-copy">
          <h2>We help business owners turn good ideas into <em>organised action.</em></h2>
          <p>ResolveSync Management helps startups and growing businesses organise the work behind their ideas. We help with business launches, websites and software, new strategies, and other important projects.</p>
          <p>We are not just there to give advice and disappear. We help break the idea into clear steps, organise the right people, follow up on the work, keep timelines in view, and move the project towards completion.</p>
          <div className="principles-list">
            {principles.map((principle, index) => <div key={principle}><span>0{index + 1}</span><strong>{principle}</strong></div>)}
          </div>
          <p className="about-signoff">Based in {site.location}. Available remotely worldwide.</p>
        </div>
      </div>
    </section>
  )
}
