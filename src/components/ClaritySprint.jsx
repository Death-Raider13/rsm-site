import { whatsappUrl, site } from '../lib/site'

const deliverables = [
  'A clear definition of the outcome',
  'Priorities, owners, and decision points',
  'A practical milestone path',
  'A rhythm for visible follow-through',
]

export default function ClaritySprint() {
  const message = `Hi ${site.name}, I would like to ask about the Delivery Clarity Sprint.`

  return (
    <section className="section sprint-section" id="sprint">
      <div className="container">
        <div className="sprint-card" data-reveal>
          <div className="sprint-main">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Start with a focused reset</div>
            <p className="sprint-kicker">The Delivery Clarity Sprint</p>
            <h2>A practical path from <em>stuck</em> to in motion.</h2>
            <p className="sprint-description">A focused 7–10 day engagement for important work that has become unclear, delayed, or difficult to coordinate.</p>
            <a className="button button-cream" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Ask about the sprint <span aria-hidden="true">↗</span></a>
          </div>
          <div className="sprint-side">
            <div className="sprint-side-label">What you leave with</div>
            <ol className="deliverables-list">
              {deliverables.map((deliverable, index) => (
                <li key={deliverable}><span>0{index + 1}</span>{deliverable}</li>
              ))}
            </ol>
            <div className="sprint-note"><span aria-hidden="true">✦</span> No heavy process. Just enough structure to make the next move obvious.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
