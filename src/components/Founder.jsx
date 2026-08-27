import { site } from '../lib/site'

const credentials = [
  'Computer Science student',
  'Virtual assistance, project and product management',
  '3D video editing and creative production',
]

export default function Founder() {
  return (
    <section className="section founder-section" id="founder">
      <div className="container founder-heading" data-reveal>
        <div className="eyebrow"><span className="eyebrow-line" /> The person behind RSM</div>
        <p className="founder-heading-note">Founder-led support for business owners who want their ideas to become real work.</p>
      </div>
      <div className="container founder-profile" data-reveal>
        <div className="founder-profile-card">
          <div className="profile-card-top"><span>RSM / 01</span><span>Founder-led</span></div>
          <div className="profile-monogram" aria-hidden="true">LO</div>
          <div className="profile-card-bottom"><strong>Liana Odunayo</strong><span>Founder, ResolveSync Management</span><span>{site.location} · Remote</span></div>
        </div>
        <div className="founder-copy">
          <h2>Helping good ideas become <em>finished work.</em></h2>
          <p className="founder-lead">I’m Liana Odunayo, founder of ResolveSync Management. I help founders turn messy ideas and scattered work into organised, practical action.</p>
          <p className="founder-bio">My experience spans virtual assistance, project and product management, and 3D video editing. I am naturally drawn to organising people, tools, and moving parts so that work becomes easier to understand and easier to complete.</p>
          <p className="founder-bio">I started RSM to help founders and teams move from confusion to practical execution. The focus is not just planning work; it is helping the right work actually move forward.</p>
          <div className="founder-credentials">
            {credentials.map((credential, index) => <div key={credential}><span>0{index + 1}</span><strong>{credential}</strong></div>)}
          </div>
        </div>
      </div>
      <div className="container team-callout" data-reveal>
        <div className="eyebrow"><span className="eyebrow-line" /> The team around the work</div>
        <div><h3>A team built around what you need.</h3><p>RSM is led by Liana and supported by a growing team. Depending on the project, we bring together the right support across planning, organisation, operations, content, and technical implementation—so the work is not left hanging between different people.</p></div>
      </div>
      <div className="container artifact-preview" data-reveal>
        <div className="artifact-copy"><div className="eyebrow"><span className="eyebrow-line" /> Sample working artifact</div><h3>See the kind of plan we help create.</h3><p>A simple project view can make the goal, tasks, people, and next decision easier for everyone to understand.</p><a className="text-link" href="/delivery-clarity-sprint">See the sprint details <span aria-hidden="true">↗</span></a></div>
        <div className="artifact-board" aria-label="Sample project clarity worksheet"><div className="artifact-board-top"><span>Project clarity worksheet</span><span>RSM / SAMPLE</span></div><div className="artifact-board-title">The next move</div><div className="artifact-board-block"><span>Goal</span><strong>What are we trying to finish?</strong></div><div className="artifact-board-columns"><div><span>Who is doing it?</span><strong>Name the person responsible.</strong></div><div><span>What comes next?</span><strong>Choose the next clear step.</strong></div></div><div className="artifact-board-footer"><span>01</span><span>Turn a busy idea into a working plan.</span></div></div>
      </div>
    </section>
  )
}
