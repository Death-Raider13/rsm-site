import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import ClaritySprint from './components/ClaritySprint'
import Services from './components/Services'
import Process from './components/Process'
import Proof from './components/Proof'
import About from './components/About'
import Founder from './components/Founder'
import FAQ from './components/FAQ'
import SprintPage from './components/SprintPage'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { site } from './lib/site'

function useRevealAll() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [announcementVisible, setAnnouncementVisible] = useState(true)
  useRevealAll()

  if (window.location.pathname === '/delivery-clarity-sprint') {
    return <SprintPage />
  }

  return (
    <div className="site-shell">
      {announcementVisible && (
        <div className="announcement-bar">
          <div className="container announcement-inner">
            <p>
              <span className="announcement-dot" />
              Now accepting a limited number of Q4 delivery projects
            </p>
            <button
              className="announcement-dismiss"
              onClick={() => setAnnouncementVisible(false)}
              aria-label="Dismiss announcement"
            >
              Dismiss <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
      )}
      <Header />
      <main>
        <Hero />
        <Problem />
        <ClaritySprint />
        <Services />
        <Process />
        <Proof />
        <About />
        <Founder />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <a className="floating-contact" href={`mailto:${site.email}`} aria-label="Email ResolveSync Management">
        <span className="floating-contact-icon" aria-hidden="true">↗</span>
        <span className="floating-contact-label">Start a conversation</span>
      </a>
    </div>
  )
}
