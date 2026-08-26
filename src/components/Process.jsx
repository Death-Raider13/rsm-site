const stages = [
  {
    number: '01',
    title: 'Find the signal',
    text: 'We start by listening to what is happening now: the goal, the people involved, the work already in motion, and the friction slowing it down.',
    output: 'A shared view of the current situation',
  },
  {
    number: '02',
    title: 'Shape the path',
    text: 'We turn the conversation into priorities, ownership, decisions, dependencies, and a milestone path the team can actually use.',
    output: 'A plan with owners and next moves',
  },
  {
    number: '03',
    title: 'Keep it moving',
    text: 'We make follow-through visible, coordinate the moving parts, and keep the work connected to the outcome it was meant to create.',
    output: 'A calmer rhythm of delivery',
  },
]

export default function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="process-heading" data-reveal>
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> How it works</div>
            <h2>Structure without <em>the theatre.</em></h2>
          </div>
          <p>A calm, practical way of working that gives the team enough structure to move without burying the work in process.</p>
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
