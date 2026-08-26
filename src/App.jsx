import Header from './components/Header'
import Hero from './components/Hero'
import Statement from './components/Statement'
import Services from './components/Services'
import Process from './components/Process'
import Proof from './components/Proof'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: 'var(--canvas)', overflow: 'hidden' }}>
      <div style={{
        background: '#0B2F6B',
        color: 'rgba(247,250,255,0.75)',
        fontSize: '10px',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        letterSpacing: '0.04em',
        padding: '0 24px',
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '31px' }}>
          <span>Lagos, Nigeria &nbsp;&middot;&nbsp; Remote-ready</span>
          <span style={{ opacity: 0.55 }}>Project delivery for startups &amp; growing businesses</span>
          <a href="mailto:resolvesyncmanagement@gmail.com" style={{ color: 'rgba(247,250,255,0.75)', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='#fff'} onMouseLeave={e => e.target.style.color='rgba(247,250,255,0.75)'}>resolvesyncmanagement@gmail.com</a>
        </div>
      </div>
      <Header />
      <main>
        <Hero />
        <Statement />
        <Services />
        <Process />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
