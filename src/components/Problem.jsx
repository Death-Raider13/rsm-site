const problems = [
  {
    number: '01',
    title: 'You know what you want, but not what comes first.',
    text: 'The goal is clear in your head, but the steps, order, and priorities are not clear yet.',
  },
  {
    number: '02',
    title: 'Different people are working, but they are not aligned.',
    text: 'Tasks are spread across people, but nobody has one clear view of who is doing what and when.',
  },
  {
    number: '03',
    title: 'The work keeps waiting, even after the meetings.',
    text: 'Actions are discussed, but tasks are not followed up and deadlines keep moving further away.',
  },
]

export default function Problem() {
  return (
    <section className="section problem-section" id="problem">
      <div className="container">
        <div className="section-intro split-intro" data-reveal>
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> The problem</div>
            <h2>Good ideas get stuck<br /><em>when the work is not organised.</em></h2>
          </div>
          <p>You may need RSM if you know what you want to do, but do not know what should happen first. We organise the work, the people, and the follow-up so the idea can move towards completion.</p>
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
