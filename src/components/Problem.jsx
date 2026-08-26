const problems = [
  {
    number: '01',
    title: 'The plan exists, but progress is fuzzy.',
    text: 'Everyone is busy, but the next decision, owner, or milestone is still unclear.',
  },
  {
    number: '02',
    title: 'Too many moving parts sit with one person.',
    text: 'A founder or team lead is carrying coordination that the work itself cannot afford to lose.',
  },
  {
    number: '03',
    title: 'Good intentions keep slipping past deadlines.',
    text: 'Meetings happen, actions are agreed, and then follow-through disappears into the week.',
  },
]

export default function Problem() {
  return (
    <section className="section problem-section" id="problem">
      <div className="container">
        <div className="section-intro split-intro" data-reveal>
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> You may need RSM if...</div>
            <h2>Important work should not depend on <em>heroics.</em></h2>
          </div>
          <p>When delivery becomes harder than the work itself, an outside operating partner can give the team enough structure to regain momentum without adding unnecessary complexity.</p>
        </div>
        <div className="problem-grid" data-reveal>
          {problems.map((problem) => (
            <article className="problem-card" key={problem.number}>
              <span className="card-number">{problem.number}</span>
              <div className="problem-card-copy">
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </div>
              <span className="problem-arrow" aria-hidden="true">↘</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
