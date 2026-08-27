const deliverables = [
  'A clear definition of the outcome',
  'Priorities, owners, and decision points',
  'A simple timeline for the work',
  'A simple plan for follow-up',
]

export default function ClaritySprint() {
  return (
    <section className="section sprint-section" id="sprint">
      <div className="container">
        <div className="sprint-card" data-reveal>
          <div className="sprint-main">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> A simple way to get started</div>
            <p className="sprint-kicker">The Delivery Clarity Sprint</p>
            <h2>Get your project from <em>confusing</em> to clear.</h2>
            <p className="sprint-description">In 7–10 days, we help you understand the work, organise the people involved, and agree on what should happen next.</p>
            <a className="button button-cream" href="/delivery-clarity-sprint">See the sprint details <span aria-hidden="true">↗</span></a>
          </div>
          <div className="sprint-side">
            <div className="sprint-side-label">What we help you organise</div>
            <ol className="deliverables-list">
              {deliverables.map((deliverable, index) => (
                <li key={deliverable}><span>0{index + 1}</span>{deliverable}</li>
              ))}
            </ol>
            <div className="sprint-note"><span aria-hidden="true">✦</span> You do not need to have everything figured out before we start.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
