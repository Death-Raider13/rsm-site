const stages = [
  {
    number: '01',
    title: 'Understand the idea',
    text: 'We start by understanding what you want to achieve, what has already been done, who is involved, and what is making the work difficult.',
    output: 'A clear view of the work',
  },
  {
    number: '02',
    title: 'Break down the work',
    text: 'We turn the idea into clear steps, decide what should happen first, organise the right people, and agree on who is responsible for what.',
    output: 'A plan with clear next steps',
  },
  {
    number: '03',
    title: 'Follow up until it is done',
    text: 'We keep track of tasks and timelines, follow up with the people involved, and help the project keep moving towards completion.',
    output: 'Visible progress towards completion',
  },
]

export default function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="process-heading" data-reveal>
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> How it works</div>
            <h2>A simple way to move<br /><em>from idea to action.</em></h2>
          </div>
          <p>We keep the process simple: understand the idea, organise the work, and follow up until the important parts are moving.</p>
        </div>
        <div className="process-list" data-reveal>
          {stages.map((stage) => (
            <article className="process-row" key={stage.number}>
              <span className="process-number">{stage.number}</span>
              <div className="process-row-main"><h3>{stage.title}</h3><p>{stage.text}</p></div>
              <div className="process-output"><span>What changes</span><strong>{stage.output}</strong></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
