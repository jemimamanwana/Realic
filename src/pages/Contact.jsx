import { useState } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { MapPin, Phone, Mail, Globe, CheckCircle, Send, ArrowRight } from 'lucide-react'
import { FacebookIcon } from '../components/Icons'
import PageHero from '../components/PageHero'

const info = [
  { icon:<MapPin size={20}/>, t:'Visit Us', d:<>Plot 940, African Mall<br/>Gaborone, Botswana</> },
  { icon:<Phone size={20}/>, t:'Call Us', d:<>+267 390 3890<br/>+267 714 83827</> },
  { icon:<Mail size={20}/>, t:'Email Us', d:<a href="mailto:info@reptec.org" className="link">info@reptec.org</a> },
  { icon:<FacebookIcon size={20}/>, t:'Follow Us', d:<a href="https://www.facebook.com/REALICCOLLEGE/" target="_blank" rel="noopener noreferrer" className="link">facebook.com/REALICCOLLEGE</a> },
  { icon:<Globe size={20}/>, t:'Website', d:<a href="https://reptec.org" target="_blank" rel="noopener noreferrer" className="link">reptec.org</a> },
]

const subs = ['General Inquiry','Admissions','Programs','Financial Information','Other']

export default function Contact() {
  useScrollRevealAll('.reveal')
  const [fd, setFd] = useState({ fname:'',lname:'',email:'',subject:'',message:'' })
  const [done, setDone] = useState(false)
  const [err, setErr] = useState({})

  const validate = () => {
    const e = {}
    if (!fd.fname.trim()) e.fname='Required'
    if (!fd.lname.trim()) e.lname='Required'
    if (!fd.email.trim()) e.email='Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fd.email)) e.email='Invalid email'
    if (!fd.message.trim()) e.message='Required'
    setErr(e); return !Object.keys(e).length
  }
  const submit = ev => { ev.preventDefault(); if (validate()) setDone(true) }
  const change = ev => { const {name,value}=ev.target; setFd(p=>({...p,[name]:value})); if(err[name]) setErr(p=>({...p,[name]:undefined})) }
  const reset = () => { setFd({fname:'',lname:'',email:'',subject:'',message:''}); setDone(false); setErr({}) }

  return (
    <>
      <PageHero tag="We'd Love to Hear From You" title="Get in" highlight="Touch" description="Visit us, call us, or send a message — our team is ready to help." />

      <section className="contact">
        <div className="container contact__grid">
          <div className="contact__info">
            <h3 className="reveal">Contact Information</h3>
            <p className="contact__info-sub reveal" style={{'--delay':1}}>Reach out through any channel.</p>
            {info.map((c,i) => (
              <div className="contact__card reveal" style={{'--delay':i+2}} key={i}>
                <div className="contact__card-icon">{c.icon}</div>
                <div><h4>{c.t}</h4><p>{c.d}</p></div>
              </div>
            ))}
          </div>
          <div className="contact__form-wrap reveal" style={{'--delay':1}}>
            {done ? (
              <div className="contact__ok">
                <CheckCircle size={48} strokeWidth={1.5}/>
                <h3>Message Sent!</h3>
                <p>Thank you — we'll respond within 24 hours.</p>
                <button className="btn btn--primary" onClick={reset}>Send Another</button>
              </div>
            ) : (
              <>
                <h3>Send a Message</h3>
                <p className="contact__form-sub">We'll respond within 24 hours.</p>
                <form onSubmit={submit} noValidate className="contact__form">
                  <div className="form-row">
                    <div className="ff"><label>First Name</label><input name="fname" placeholder="John" value={fd.fname} onChange={change} className={err.fname?'ff--err':''}/>{err.fname&&<span className="ff__err">{err.fname}</span>}</div>
                    <div className="ff"><label>Last Name</label><input name="lname" placeholder="Doe" value={fd.lname} onChange={change} className={err.lname?'ff--err':''}/>{err.lname&&<span className="ff__err">{err.lname}</span>}</div>
                  </div>
                  <div className="ff"><label>Email</label><input type="email" name="email" placeholder="john@example.com" value={fd.email} onChange={change} className={err.email?'ff--err':''}/>{err.email&&<span className="ff__err">{err.email}</span>}</div>
                  <div className="ff"><label>Subject</label><select name="subject" value={fd.subject} onChange={change}><option value="">Select a topic...</option>{subs.map(s=><option key={s}>{s}</option>)}</select></div>
                  <div className="ff"><label>Message</label><textarea name="message" rows="4" placeholder="How can we help?" value={fd.message} onChange={change} className={err.message?'ff--err':''}/>{err.message&&<span className="ff__err">{err.message}</span>}</div>
                  <button type="submit" className="btn btn--primary btn--full"><Send size={16}/> Send Message</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="map-section reveal">
        <div className="container">
          <div className="map-box">
            <MapPin size={28}/>
            <p>Plot 940, African Mall, Gaborone, Botswana</p>
            <a href="https://maps.google.com/?q=African+Mall+Gaborone+Botswana" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--sm">Open in Google Maps <ArrowRight size={14}/></a>
          </div>
        </div>
      </section>
    </>
  )
}
