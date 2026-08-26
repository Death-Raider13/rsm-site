import { site } from '../lib/site'

const principles = ['Clarity before activity', 'Ownership over ambiguity', 'Honest status over performance']

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid" data-reveal>
        <div className="about-label"><div className="eyebrow"><span className="eyebrow-line" /> About RSM</div><span className="about-stamp">Lagos<br />·<br />Remote</span></div>
        <div className="about-copy">
          <h2>A delivery partner for teams that care about <em>doing the work well.</em></h2>
          <p>ResolveSync Management exists for the stretch between a good idea and a finished outcome. We bring calm coordination to the work that is important enough to need a real owner, but not yet large enough to need a complicated consultancy.</p>
          <p>Our approach is deliberately practical: understand the context, make the next move clear, keep the right people connected, and tell the truth about what is happening.</p>
          <div className="principles-list">
            {principles.map((principle, index) => <div key={principle}><span>0{index + 1}</span><strong>{principle}</strong></div>)}
          </div>
          <p className="about-signoff">Based in {site.location}. Available remotely worldwide.</p>
        </div>
      </div>
    </section>
  )
}
