const evidence = [
  { number: '01', title: 'A clear way of working', text: 'We agree on the goal, list the steps, organise the people, and keep track of what needs to happen next.', },
  { number: '02', title: 'Useful work, not just advice', text: 'You get practical plans, task lists, timelines, and follow-up that help the project move forward.', },
  { number: '03', title: 'Real results over time', text: 'As we complete projects, we will add client-approved stories that show what changed and what was completed.', },
]

export default function Proof() {
  return (
    <section className="section proof-section" id="proof">
      <div className="container">
        <div className="proof-layout" data-reveal>
          <div className="proof-intro">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Trust, built properly</div>
            <h2>We show how we work, <em>then let the work speak.</em></h2>
            <p>RSM is a new consultancy, so we are not going to use made-up numbers or logos that do not belong to us. We build trust by being clear about the work, creating useful plans, and delivering what we agree to do.</p>
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
            <div className="evidence-footer"><span className="evidence-pulse" /> No made-up numbers. Just clear work and honest follow-up.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
