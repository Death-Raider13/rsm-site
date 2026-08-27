import { whatsappUrl, site } from '../lib/site'

const timeline = [
  ['01', 'Understand the idea', 'We talk through what you want to achieve, what has already been done, who is involved, and what is making the work difficult.'],
  ['02', 'Organise the work', 'We break the idea into steps, decide what comes first, and agree on who is doing what.'],
  ['03', 'Agree on what happens next', 'You leave with a clear plan, a task list, and a simple way to keep the work moving.'],
]

const deliverables = ['A clear goal for the project', 'A task list and who is doing each task', 'A list of decisions that need to be made', 'A timeline for the work', 'A simple follow-up plan']

export default function SprintPage() {
  const message = `Hi ${site.name}, I would like to start a Delivery Clarity Sprint conversation.`

  return (
    <div className="sprint-page">
      <header className="sprint-page-header"><div className="container sprint-page-header-inner"><a className="brand-lockup" href="/"><img src="/rsm_logo_refined_primary.png" alt="RSM" className="brand-mark" /><span className="brand-wordmark"><strong>ResolveSync</strong><span>Management</span></span></a><a className="text-link" href="/">Back to home <span aria-hidden="true">↗</span></a></div></header>
      <main>
        <section className="sprint-page-hero"><div className="container sprint-page-hero-grid"><div><div className="eyebrow"><span className="eyebrow-line" /> A simple way to get started</div><h1>Get your project from <em>confusing</em> to clear.</h1><p>A 7–10 day Delivery Clarity Sprint for a business idea or project that needs a clear plan and organised follow-up.</p><a className="button button-blue button-large" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Ask about the sprint <span aria-hidden="true">↗</span></a></div><div className="sprint-page-aside"><span className="aside-label">The question we answer</span><strong>What should happen first, who is doing it, and how do we keep the work moving?</strong><span className="aside-mark">RSM / 01</span></div></div></section>
        <section className="sprint-page-section"><div className="container sprint-page-two-col"><div><div className="eyebrow"><span className="eyebrow-line" /> Why this exists</div><h2>A good idea needs <em>an organised plan.</em></h2></div><div className="sprint-page-copy"><p>Many business owners know what they want to achieve, but the work behind the idea can become confusing. Different people are involved, tasks are scattered, and nobody is sure what should happen first.</p><p>The sprint turns that confusion into clear steps, organised responsibilities, and a simple plan the team can use.</p></div></div></section>
        <section className="sprint-page-section sprint-page-timeline"><div className="container"><div className="eyebrow"><span className="eyebrow-line" /> What we do together</div><div className="timeline-list">{timeline.map(([number, title, text]) => <article className="timeline-item" key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
        <section className="sprint-page-section"><div className="container sprint-deliverables-grid"><div><div className="eyebrow"><span className="eyebrow-line" /> What you leave with</div><h2>A plan you can <em>use.</em></h2><p className="sprint-page-copy">You get practical documents and next steps you can use to organise the work and keep everyone moving in the same direction.</p></div><div className="deliverable-card">{deliverables.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><i aria-hidden="true">✓</i></div>)}</div></div></section>
        <section className="sprint-page-fit"><div className="container fit-grid"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Is it a fit?</div><h2>Start with the work.<br /><em>Make it clear.</em></h2></div><div className="fit-copy"><p>The sprint is a good fit if you have a business idea or project you want to complete, but need help organising the steps and people involved.</p><p>It may not be the right fit if you only want general advice. RSM works with you on the actual work, tasks, and follow-up.</p><a className="button button-cream" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Start a fit conversation <span aria-hidden="true">↗</span></a></div></div></section>
      </main>
      <footer className="sprint-page-footer"><div className="container"><span>© {new Date().getFullYear()} {site.name}</span><a href={`mailto:${site.email}`}>{site.email}</a></div></footer>
    </div>
  )
}
