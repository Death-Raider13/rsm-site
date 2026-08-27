import { useState } from 'react'

const questions = [
  {
    question: 'What happens when I contact RSM?',
    answer: 'We talk about what you are trying to do, what is getting in the way, and what kind of help would be useful. You do not need a perfect plan before you contact us.',
  },
  {
    question: 'How long does the Delivery Clarity Sprint take?',
    answer: 'The sprint takes 7–10 days. If you need help after that, we can talk about ongoing support based on the size and needs of the project.',
  },
  {
    question: 'Can you work with us if we are not in Lagos?',
    answer: 'Yes. RSM is based in Lagos, Nigeria and can work remotely with startups and growing businesses in other locations.',
  },
  {
    question: 'What kind of projects do you help with?',
    answer: 'RSM helps with business launches, websites and software, new strategies, and other important projects that need clear steps, organised people, and regular follow-up.',
  },
]

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(0)

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid" data-reveal>
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> Before we talk</div>
          <h2>Questions are a good place <em>to start.</em></h2>
          <p>If you are not sure what kind of help you need, start by telling us what you are trying to do.</p>
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
