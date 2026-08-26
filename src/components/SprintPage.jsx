import { whatsappUrl, site } from '../lib/site'

const timeline = [
  ['01', 'Listen and frame', 'We understand the outcome, current context, people involved, and what is making progress difficult.'],
  ['02', 'Map and decide', 'We identify priorities, owners, dependencies, risks, and the decisions that cannot stay unresolved.'],
  ['03', 'Hand over momentum', 'You leave with a practical plan, a delivery rhythm, and the next moves made visible to the team.'],
]

const deliverables = ['Outcome definition', 'Priority and ownership map', 'Decision and dependency log', 'Milestone path', 'Next-step operating rhythm']

export default function SprintPage() {
  const message = `Hi ${site.name}, I would like to start a Delivery Clarity Sprint conversation.`

  return (
    <div className="sprint-page">
      <header className="sprint-page-header"><div className="container sprint-page-header-inner"><a className="brand-lockup" href="/"><img src="/rsm_logo_refined_primary.png" alt="RSM" className="brand-mark" /><span className="brand-wordmark"><strong>ResolveSync</strong><span>Management</span></span></a><a className="text-link" href="/">Back to home <span aria-hidden="true">↗</span></a></div></header>
      <main>
        <section className="sprint-page-hero"><div className="container sprint-page-hero-grid"><div><div className="eyebrow"><span className="eyebrow-line" /> A focused first engagement</div><h1>Make the next move <em>obvious.</em></h1><p>A 7–10 day Delivery Clarity Sprint for important work that has become unclear, delayed, or difficult to coordinate.</p><a className="button button-blue button-large" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Ask about the sprint <span aria-hidden="true">↗</span></a></div><div className="sprint-page-aside"><span className="aside-label">The question we answer</span><strong>What needs to happen next, who owns it, and how will we know it is moving?</strong><span className="aside-mark">RSM / 01</span></div></div></section>
        <section className="sprint-page-section"><div className="container sprint-page-two-col"><div><div className="eyebrow"><span className="eyebrow-line" /> Why this exists</div><h2>When the work matters, <em>clarity is not overhead.</em></h2></div><div className="sprint-page-copy"><p>Important initiatives rarely get stuck because nobody cares. They get stuck because too many decisions, dependencies, and assumptions are held in people’s heads at the same time.</p><p>The sprint creates a shared working view of the project. It is deliberately short, concrete, and designed to leave the team more capable than we found it.</p></div></div></section>
        <section className="sprint-page-section sprint-page-timeline"><div className="container"><div className="eyebrow"><span className="eyebrow-line" /> What happens</div><div className="timeline-list">{timeline.map(([number, title, text]) => <article className="timeline-item" key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
        <section className="sprint-page-section"><div className="container sprint-deliverables-grid"><div><div className="eyebrow"><span className="eyebrow-line" /> What you leave with</div><h2>Clarity you can <em>use.</em></h2><p className="sprint-page-copy">The outputs are designed to be used in the next meeting, the next handoff, and the next week of delivery.</p></div><div className="deliverable-card">{deliverables.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><i aria-hidden="true">✓</i></div>)}</div></div></section>
        <section className="sprint-page-fit"><div className="container fit-grid"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Is it a fit?</div><h2>Start small.<br /><em>Move well.</em></h2></div><div className="fit-copy"><p>The sprint is a good fit if there is a real initiative, a meaningful outcome, and enough access to the people who can make decisions.</p><p>It may not be the right fit if you are looking for a generic strategy document, a large team of consultants, or someone to make decisions on your behalf.</p><a className="button button-cream" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Start a fit conversation <span aria-hidden="true">↗</span></a></div></div></section>
      </main>
      <footer className="sprint-page-footer"><div className="container"><span>© {new Date().getFullYear()} {site.name}</span><a href={`mailto:${site.email}`}>{site.email}</a></div></footer>
    </div>
  )
}
