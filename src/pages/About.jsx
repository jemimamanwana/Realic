import { Link } from 'react-router-dom'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { Globe, Eye, ShieldCheck, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'

export default function About() {
  useScrollRevealAll('.reveal')

  return (
    <>
      <PageHero tag="Who We Are" title="About" highlight="Realic College" description="A private, accredited institution shaping Botswana's future through practical, career-oriented education." />

      {/* INTRO */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro__grid">
            <div className="about-intro__img reveal">
              <img src="/building.jpg" alt="Realic College"/>
              <div className="about-intro__badge"><strong>Est.</strong><span>Gaborone</span></div>
            </div>
            <div className="about-intro__text reveal" style={{'--delay':1}}>
              <p className="label-tag">Our Story</p>
              <h2>Building Careers,<br/><em>Transforming Lives</em></h2>
              <p>Realic Professional &amp; Technical College is a private, accredited institution located at African Mall, Gaborone. Established to meet Botswana's growing need for practical, career-oriented education, Realic blends academic theory with real-world training.</p>
              <p>We believe that education should be accessible, relevant, and transformative — empowering every student to reach their full potential in a rapidly evolving job market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MVV */}
      <section className="mvv">
        <div className="container">
          <p className="label-tag label-tag--light reveal">Our Foundation</p>
          <h2 className="mvv__heading reveal" style={{'--delay':1}}>What Drives <em>Us Forward</em></h2>
          <div className="mvv__grid">
            {[
              { icon: <Globe size={26}/>, t: 'Our Mission', d: 'To provide accessible, flexible, and high-quality education that builds skills and transforms careers across Botswana and beyond.' },
              { icon: <Eye size={26}/>, t: 'Our Vision', d: "To be Botswana's leading provider of professional and technical education, recognized for excellence, innovation, and integrity.", feat: true },
              { icon: <ShieldCheck size={26}/>, t: 'Accreditation', d: 'All programs are fully accredited by the Botswana Qualifications Authority (BQA), ensuring the highest standards.' },
            ].map((c,i) => (
              <div className={`mvv__card reveal${c.feat ? ' mvv__card--feat' : ''}`} style={{'--delay': i+2}} key={i}>
                <div className="mvv__icon">{c.icon}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="vals">
        <div className="container">
          <h2 className="vals__heading reveal">Our Core <em>Values</em></h2>
          <div className="vals__grid">
            {['Excellence','Innovation','Integrity','Accessibility'].map((v,i) => (
              <div className="vals__item reveal" style={{'--delay': i+1}} key={v}>
                <span className="vals__num">0{i+1}</span>
                <h4>{v}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band reveal">
        <div className="container cta-band__inner">
          <div><h2>Want to be part of <em>our story?</em></h2><p>Join Realic College and take the first step toward a career that matters.</p></div>
          <Link to="/admissions" className="btn btn--white btn--lg">Apply Now <ArrowRight size={18}/></Link>
        </div>
      </section>
    </>
  )
}
