import { Link } from 'react-router-dom'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { FileText, Users, Phone, ArrowRight, Download, Check } from 'lucide-react'
import PageHero from '../components/PageHero'

const steps = [
  { n:1, t:'Download & Fill', d:<>Download the application form from <a href="https://reptec.org" target="_blank" rel="noopener noreferrer" className="link">reptec.org</a> and complete all required sections.</> },
  { n:2, t:'Submit Documents', d:'Submit your completed form with certified copies of academic certificates and national ID.' },
  { n:3, t:'Choose Your Mode', d:'Select your preferred study mode — full-time, part-time, weekend, or distance — and begin.' },
]

const cards = [
  { icon:<FileText size={24} strokeWidth={1.5}/>, t:'Entry Requirements', d:'Requirements vary by program but generally include:', list:['Junior Certificate (JC)','BGCSE pass or equivalent','National ID / Passport','Certified academic transcripts'] },
  { icon:<Users size={24} strokeWidth={1.5}/>, t:'Support & Guidance', d:'Our admissions team helps you every step:', list:['One-on-one admissions advice','Program selection guidance','Document preparation help','Financial planning support'] },
  { icon:<Phone size={24} strokeWidth={1.5}/>, t:'Contact Admissions', d:'Reach out to our admissions office directly.', hl:true, contact:{ phone:'+267 390 3890', email:'info@reptec.org', loc:'African Mall, Gaborone' } },
]

export default function Admissions() {
  useScrollRevealAll('.reveal')
  return (
    <>
      <PageHero tag="Start Your Journey" title="Join" highlight="Realic College" description="Flexible intake schedules and multiple learning modes make it easy to fit education into your life." />

      <section className="steps-section">
        <div className="container">
          <p className="label-tag reveal">Application Process</p>
          <h2 className="steps__heading reveal" style={{'--delay':1}}>How to <em>Apply</em></h2>
          <div className="steps__tl">
            {steps.map(s => (
              <div className="steps__item reveal" style={{'--delay':s.n+1}} key={s.n}>
                <div className="steps__marker"><span>{s.n}</span></div>
                <div className="steps__line"/>
                <div className="steps__body"><h3>{s.t}</h3><p>{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="req">
        <div className="container">
          <div className="req__grid">
            {cards.map((c,i) => (
              <div className={`req__card reveal${c.hl ? ' req__card--hl' : ''}`} style={{'--delay':i+1}} key={i}>
                <div className="req__icon">{c.icon}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
                {c.list && <ul className="req__list">{c.list.map(l => <li key={l}><Check size={14}/>{l}</li>)}</ul>}
                {c.contact && <div className="req__contact"><p><strong>Phone:</strong> {c.contact.phone}</p><p><strong>Email:</strong> <a href={`mailto:${c.contact.email}`} className="link">{c.contact.email}</a></p><p><strong>Visit:</strong> {c.contact.loc}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band reveal">
        <div className="container cta-band__inner">
          <div><h2>Your future <em>starts here</em></h2><p>Download the application form and begin your journey with REPTEC today.</p></div>
          <div className="cta-band__btns">
            <a href="https://reptec.org" target="_blank" rel="noopener noreferrer" className="btn btn--white btn--lg"><Download size={18}/> Download Form</a>
            <Link to="/contact" className="btn btn--outline-light btn--lg">Ask a Question</Link>
          </div>
        </div>
      </section>
    </>
  )
}
