import { site } from '../lib/site'

const credentials = [
  'Relevant experience — add here',
  'Why Liana started RSM — add here',
  'Professional background — add here',
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
          <h2>Good work still needs someone to <em>hold the thread.</em></h2>
          <p className="founder-lead">I’m Liana, founder of ResolveSync Management. RSM is being built for teams that need a thoughtful partner to help important work move from intention to execution.</p>
          <p className="placeholder-note"><span>Biography in progress</span> This space will hold Liana’s relevant experience, professional background, and the story behind starting RSM. We are leaving it visible rather than filling it with generic claims.</p>
          <div className="founder-credentials">
            {credentials.map((credential, index) => <div key={credential}><span>0{index + 1}</span><strong>{credential}</strong></div>)}
          </div>
          <p className="founder-location">Based in {site.location} · Working with care, wherever the work is.</p>
        </div>
      </div>
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
