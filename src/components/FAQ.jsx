import { useState } from 'react'

const questions = [
  {
    question: 'What does the first conversation cover?',
    answer: 'We will understand what you are trying to move, what is currently getting in the way, and whether a Delivery Clarity Sprint or another engagement is the right fit. It is a working conversation, not a sales performance.',
  },
  {
    question: 'How long does an engagement take?',
    answer: 'The Delivery Clarity Sprint is designed to run for 7–10 days. Ongoing coordination is shaped around the size, urgency, and rhythm of the work rather than forced into a one-size-fits-all package.',
  },
  {
    question: 'Do you work with teams outside Lagos?',
    answer: 'Yes. RSM is based in Lagos, Nigeria and works remotely with teams where the communication rhythm and project context make remote delivery practical.',
  },
  {
    question: 'Do you only work on technology projects?',
    answer: 'No. Software implementation is one area of focus, but the underlying work is broader: bringing clarity and follow-through to launches, strategic initiatives, and other important cross-functional projects.',
  },
]

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(0)

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid" data-reveal>
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> Before we talk</div>
          <h2>Good questions make <em>better starts.</em></h2>
          <p>If you still are not sure what to ask for, start with the problem that keeps making the work harder than it should be.</p>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openQuestion === index
            return (
              <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.question}>
                <button className="faq-trigger" onClick={() => setOpenQuestion(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span>{item.question}</span><span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-answer" hidden={!isOpen}><p>{item.answer}</p></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
