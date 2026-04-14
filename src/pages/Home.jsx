import { Link } from 'react-router-dom'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { GraduationCap, Clock, Monitor, Shield, ArrowRight, ChevronRight } from 'lucide-react'

export default function Home() {
  useScrollRevealAll('.reveal')

  return (
    <>
      {/* ---- HERO ---- */}
      <section className="hero">
        <div className="hero__left">
          <div className="hero__label reveal">
            <Shield size={14} />
            <span>BQA Accredited Institution</span>
          </div>
          <h1 className="hero__title reveal" style={{'--delay':1}}>
            Flexible Learning<br/>for a <em>Changing World</em>
          </h1>
          <p className="hero__sub reveal" style={{'--delay':2}}>
            Shape your career with accredited programs in Business,
            Health &amp; Safety, and Administration — built for Botswana's workforce.
          </p>
          <div className="hero__btns reveal" style={{'--delay':3}}>
            <Link to="/admissions" className="btn btn--primary btn--lg">Apply Now <ArrowRight size={18}/></Link>
            <Link to="/programs" className="btn btn--outline-light btn--lg">Explore Programs</Link>
          </div>
        </div>
        <div className="hero__right reveal" style={{'--delay':2}}>
          <img src="/building.jpg" alt="REPTEC Campus" className="hero__img"/>
          <div className="hero__img-badge">
            <strong>Gaborone</strong>
            <span>African Mall Campus</span>
          </div>
        </div>
      </section>

      {/* ---- STATS STRIP ---- */}
      <section className="strip">
        <div className="strip__inner">
          <div className="strip__item reveal"><span className="strip__num">BQA</span><span className="strip__label">Accredited</span></div>
          <div className="strip__item reveal" style={{'--delay':1}}><span className="strip__num">4+</span><span className="strip__label">Study Modes</span></div>
          <div className="strip__item reveal" style={{'--delay':2}}><span className="strip__num">100%</span><span className="strip__label">Digital Access</span></div>
          <div className="strip__item reveal" style={{'--delay':3}}><span className="strip__num">Gaborone</span><span className="strip__label">African Mall</span></div>
        </div>
      </section>

      {/* ---- FEATURES BENTO ---- */}
      <section className="bento">
        <div className="container">
          <p className="bento__tag reveal">Why Choose REPTEC</p>
          <h2 className="bento__heading reveal" style={{'--delay':1}}>Built for <em>Your Future</em></h2>

          <div className="bento__grid">
            <div className="bento__card bento__card--big reveal" style={{'--delay':2}}>
              <div className="bento__icon"><GraduationCap size={32} strokeWidth={1.5}/></div>
              <h3>Accredited Qualifications</h3>
              <p>Recognized by the Botswana Qualifications Authority (BQA) for quality and integrity in education. Every certificate and diploma we offer meets national standards.</p>
              <Link to="/programs" className="bento__link">Explore programs <ChevronRight size={16}/></Link>
            </div>
            <div className="bento__card reveal" style={{'--delay':3}}>
              <div className="bento__icon"><Clock size={28} strokeWidth={1.5}/></div>
              <h3>Flexible Study</h3>
              <p>Full-time, part-time, weekend, and distance learning programs designed to fit your life.</p>
            </div>
            <div className="bento__card bento__card--green reveal" style={{'--delay':4}}>
              <div className="bento__icon"><Monitor size={28} strokeWidth={1.5}/></div>
              <h3>Digital Platform</h3>
              <p>Access resources, classes, and support online through Realic's digital learning system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="cta-band reveal">
        <div className="container cta-band__inner">
          <div>
            <h2>Ready to start <em>your journey?</em></h2>
            <p>Join hundreds of students building careers with accredited, flexible education.</p>
          </div>
          <Link to="/admissions" className="btn btn--white btn--lg">Get Started <ArrowRight size={18}/></Link>
        </div>
      </section>
    </>
  )
}
