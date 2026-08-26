import { whatsappUrl, site } from '../lib/site'

const services = [
  {
    number: '01',
    tag: 'Launch coordination',
    title: 'Move the launch.',
    text: 'Turn a new offer, programme, or business idea into a coordinated launch plan with priorities, owners, and a visible path to go-live.',
    deliverable: 'Launch plan + delivery rhythm',
  },
  {
    number: '02',
    tag: 'Implementation support',
    title: 'Make the system useful.',
    text: 'Align requirements, people, handoffs, and decisions so a software or process implementation actually works in the day-to-day.',
    deliverable: 'Requirements map + handoff plan',
  },
  {
    number: '03',
    tag: 'Strategy execution',
    title: 'Keep the promise moving.',
    text: 'Translate agreed strategy into accountable actions, milestones, and a practical operating rhythm that survives the busy weeks.',
    deliverable: 'Execution roadmap + check-ins',
  },
]

export default function Services() {
  const message = `Hi ${site.name}, I would like to discuss one of your delivery services.`

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-intro services-heading" data-reveal>
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> What RSM can own</div>
            <h2>Less “support.”<br /><em>More forward motion.</em></h2>
          </div>
          <p>Choose the kind of momentum your team needs now. Each engagement is shaped around a real outcome, not a vague promise to be available.</p>
        </div>
        <div className="service-grid" data-reveal>
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top"><span className="card-number">{service.number}</span><span className="service-tag">{service.tag}</span></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-deliverable"><span>Typical output</span><strong>{service.deliverable}</strong></div>
              <a className="service-link" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Talk about this <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
