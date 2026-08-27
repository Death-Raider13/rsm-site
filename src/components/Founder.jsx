import { site } from '../lib/site'

const credentials = [
  'Computer Science student',
  'Virtual assistance, project and product management',
  '3D video editing and creative production',
]

export default function Founder() {
  return (
    <section className="section founder-section" id="founder">
      <div className="container founder-grid" data-reveal>
        <div className="founder-portrait" role="img" aria-label="Placeholder for a portrait of Liana">
          <div className="portrait-sun" />
          <div className="portrait-initial">L</div>
          <div className="portrait-label"><span>Photo placeholder</span><strong>Liana / Founder</strong></div>
        </div>
        <div className="founder-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> The person behind RSM</div>
          <h2>Helping good ideas become <em>finished work.</em></h2>
          <p className="founder-lead">I’m Liana Odunayo, founder of ResolveSync Management. I help founders turn messy ideas and scattered work into organised, practical action.</p>
          <p className="founder-bio">My experience spans virtual assistance, project and product management, and 3D video editing. I am naturally drawn to organising people, tools, and moving parts so that work becomes easier to understand and easier to complete.</p>
          <div className="founder-credentials">
            {credentials.map((credential, index) => <div key={credential}><span>0{index + 1}</span><strong>{credential}</strong></div>)}
          </div>
          <p className="founder-location">Based in {site.location} · Working with care, wherever the work is.</p>
        </div>
      </div>
      <div className="container team-callout" data-reveal><div className="eyebrow"><span className="eyebrow-line" /> The team around the work</div><div><h3>A team built around what you need.</h3><p>RSM is led by Liana and supported by a growing team. Depending on the project, we bring together the right support across planning, organisation, operations, content, and technical implementation—so the work is not left hanging between different people.</p></div></div>
      <div className="container artifact-preview" data-reveal>
        <div className="artifact-copy"><div className="eyebrow"><span className="eyebrow-line" /> Sample working artifact</div><h3>A useful plan is a form of <em>trust.</em></h3><p>Here is the kind of clarity a client should be able to take away: a simple view of the outcome, the moving parts, the next decision, and who owns it.</p><a className="text-link" href="/delivery-clarity-sprint">See the sprint details <span aria-hidden="true">↗</span></a></div>
        <div className="artifact-board" aria-label="Sample project clarity worksheet">
          <div className="artifact-board-top"><span>Project clarity worksheet</span><span>RSM / SAMPLE</span></div>
          <div className="artifact-board-title">The next move</div>
          <div className="artifact-board-block"><span>Outcome</span><strong>What must be true when this work is done?</strong></div>
          <div className="artifact-board-columns"><div><span>Owner</span><strong>Name the person who can move it.</strong></div><div><span>Decision</span><strong>What needs to be resolved now?</strong></div></div>
          <div className="artifact-board-footer"><span>01</span><span>Turn ambiguity into a working view.</span></div>
        </div>
      </div>
    </section>
  )
}
