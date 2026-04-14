import { Link } from 'react-router-dom'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { Briefcase, ShieldCheck, Monitor, ArrowRight, Sun, Moon, Calendar, Wifi } from 'lucide-react'
import PageHero from '../components/PageHero'

const programs = [
  { num:'01', icon:<Briefcase size={30} strokeWidth={1.5}/>, title:'Business Studies', badge:'Certificate & Diploma', desc:'Prepare for roles in management, entrepreneurship, and administration with practical business skills.', topics:['Office Procedures','Marketing','Financial Principles','Entrepreneurship'] },
  { num:'02', icon:<ShieldCheck size={30} strokeWidth={1.5}/>, title:'Health & Safety Management', badge:'Certificate & Diploma', desc:'Develop skills in workplace safety, risk assessment, and compliance for Botswana industries.', topics:['Workplace Safety','Risk Assessment','Compliance Standards','Industrial Safety'], feat:true },
  { num:'03', icon:<Monitor size={30} strokeWidth={1.5}/>, title:'Office Administration', badge:'Certificate & Diploma', desc:'Learn communication, record-keeping, and computing skills for effective business operations.', topics:['Communication Skills','Record Keeping','Computing','Business Operations'] },
]

const modes = [
  { icon:<Sun size={22}/>, title:'Full-Time', desc:'Immersive weekday classes for focused, accelerated learning.' },
  { icon:<Moon size={22}/>, title:'Part-Time', desc:'Evening sessions designed for working professionals.' },
  { icon:<Calendar size={22}/>, title:'Weekend', desc:'Saturday and Sunday classes to fit your work week.' },
  { icon:<Wifi size={22}/>, title:'Distance', desc:'Study from anywhere through our digital platform.' },
]

export default function Programs() {
  useScrollRevealAll('.reveal')
  return (
    <>
      <PageHero tag="Academic Excellence" title="Our" highlight="Programs" description="Accredited certificate and diploma programs that combine theory and real-world practice." />

      <section className="prg">
        <div className="container">
          <p className="label-tag reveal">What We Offer</p>
          <h2 className="prg__heading reveal" style={{'--delay':1}}>Programs Designed for <em>Your Career</em></h2>
          <p className="prg__sub reveal" style={{'--delay':2}}>Each program is BQA-accredited and built to equip you with practical skills that employers demand.</p>
          <div className="prg__grid">
            {programs.map((p,i) => (
              <div className={`prg__card reveal${p.feat ? ' prg__card--feat' : ''}`} style={{'--delay':i+3}} key={i}>
                <div className="prg__card-top"><span className="prg__num">{p.num}</span><span className="prg__badge">{p.badge}</span></div>
                <div className="prg__card-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul className="prg__topics">{p.topics.map(t=><li key={t}>{t}</li>)}</ul>
                <Link to="/admissions" className={`btn ${p.feat ? 'btn--white' : 'btn--outline'} btn--sm`}>Apply Now <ArrowRight size={14}/></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modes">
        <div className="container">
          <h2 className="modes__heading reveal">Study on <em>Your Terms</em></h2>
          <div className="modes__grid">
            {modes.map((m,i) => (
              <div className="modes__item reveal" style={{'--delay':i+1}} key={i}>
                <div className="modes__icon">{m.icon}</div>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band reveal">
        <div className="container cta-band__inner">
          <div><h2>Ready to choose <em>your program?</em></h2><p>Start your application today and step into your new career.</p></div>
          <Link to="/admissions" className="btn btn--white btn--lg">Start Application <ArrowRight size={18}/></Link>
        </div>
      </section>
    </>
  )
}
