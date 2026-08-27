import { useState } from 'react'
import { site, whatsappUrl } from '../lib/site'

const initialForm = { name: '', email: '', projectType: '', timing: '', summary: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (error) setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.summary.trim()) {
      setError('Please add your name, email, and a short description of the work.')
      return
    }

    const message = [
      `Hi ${site.name}, my name is ${form.name.trim()}.`,
      `Email: ${form.email.trim()}`,
      form.projectType ? `Project type: ${form.projectType}` : '',
      form.timing ? `Timing: ${form.timing}` : '',
      `What I need help moving: ${form.summary.trim()}`,
    ].filter(Boolean).join('\n')

    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid" data-reveal>
        <div className="contact-copy">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Start a conversation</div>
          <h2>Tell us what you need help <em>organising.</em></h2>
          <p>You do not need a perfect plan before you contact us. Tell us what you are trying to do, and we will help you work out the next step.</p>
          <div className="contact-details">
            <a href={whatsappUrl(`Hi ${site.name}, I would like to discuss a project.`)} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span>{site.phoneDisplay} <b aria-hidden="true">↗</b></a>
            <a href={`mailto:${site.email}`}><span>Email</span>{site.email} <b aria-hidden="true">↗</b></a>
            <p><span>Based in</span>{site.location} · Remote-ready</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-heading"><span>01 / First step</span><h3>Let’s make the next move clear.</h3></div>
          <div className="form-grid">
            <label><span>Name <i>*</i></span><input name="name" type="text" value={form.name} onChange={updateField} placeholder="Your name" autoComplete="name" /></label>
            <label><span>Email <i>*</i></span><input name="email" type="email" value={form.email} onChange={updateField} placeholder="you@company.com" autoComplete="email" /></label>
            <label><span>What do you need help with?</span><select name="projectType" value={form.projectType} onChange={updateField}><option value="">Select one</option><option value="Business launch">Business launch</option><option value="Website or app">Website or app</option><option value="New strategy">New strategy</option><option value="Something else">Something else</option></select></label>
            <label><span>When would you like to start?</span><select name="timing" value={form.timing} onChange={updateField}><option value="">Select one</option><option value="As soon as possible">As soon as possible</option><option value="This month">This month</option><option value="This quarter">This quarter</option><option value="Just exploring">Just exploring</option></select></label>
            <label className="form-full"><span>Tell us what you are trying to do <i>*</i></span><textarea name="summary" rows="4" value={form.summary} onChange={updateField} placeholder="For example: I want to launch my online store, but I do not know what should happen first..." /></label>
          </div>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button button-blue button-submit" type="submit">Send the details on WhatsApp <span aria-hidden="true">↗</span></button>
          <p className="form-note">Your message opens in WhatsApp with the details above. No long form and no pressure.</p>
        </form>
      </div>
    </section>
  )
}
