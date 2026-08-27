import { whatsappUrl, site } from '../lib/site'

const services = [
  {
    number: '01',
    tag: 'Launching a business',
    title: 'Get ready to launch.',
    text: 'We help you list what needs to be done, decide what comes first, organise the people involved, and keep the launch moving until you are ready to go live.',
    deliverable: 'Launch plan + task list',
  },
  {
    number: '02',
    tag: 'Website or software project',
    title: 'Build it without the confusion.',
    text: 'We help organise the people, tasks, content, decisions, and timelines needed to build a website, app, or other digital system.',
    deliverable: 'Project plan + follow-up',
  },
  {
    number: '03',
    tag: 'An important project',
    title: 'Turn the plan into action.',
    text: 'We break the strategy or project into clear actions, help people stay aligned, follow up on the work, and keep timelines in view.',
    deliverable: 'Action plan + progress check-ins',
  },
]

export default function Services() {
  const message = `Hi ${site.name}, I would like to discuss one of your delivery services.`

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-intro services-heading" data-reveal>
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> How we help</div>
            <h2>We organise the work<br /><em>behind your idea.</em></h2>
          </div>
          <p>Whether you are launching a business, building a website or app, running a new strategy, or completing an important project, we help make the work easier to understand and easier to finish.</p>
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
