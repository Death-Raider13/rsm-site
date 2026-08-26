const evidence = [
  { number: '01', title: 'Method proof', text: 'A clear working system: outcomes, owners, decisions, milestones, and a rhythm for follow-through.' },
  { number: '02', title: 'Capability proof', text: 'Useful delivery artifacts that show how RSM thinks and what a client can expect to receive.' },
  { number: '03', title: 'Permission-based proof', text: 'As projects are completed, approved stories and outcomes will be added here without exaggeration.' },
]

export default function Proof() {
  return (
    <section className="section proof-section" id="proof">
      <div className="container">
        <div className="proof-layout" data-reveal>
          <div className="proof-intro">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Trust, built properly</div>
            <h2>We are building the evidence <em>in the open.</em></h2>
            <p>RSM is a new consultancy. We are not going to fill this page with invented numbers or borrowed logos. We will earn credibility through careful work, useful artifacts, and client-approved outcomes.</p>
            <a className="text-link text-link-light" href="#contact">Start with a conversation <span aria-hidden="true">↗</span></a>
          </div>
          <div className="evidence-stack">
            {evidence.map((item) => (
              <article className="evidence-item" key={item.number}>
                <span className="card-number">{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <span className="evidence-mark" aria-hidden="true">↗</span>
              </article>
            ))}
            <div className="evidence-footer"><span className="evidence-pulse" /> No fabricated metrics. No borrowed trust. Just real delivery.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
