import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FacebookIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft__top container">
        <div className="ft__brand">
          <Link to="/" className="ft__brand-link">
            <img src="/logo.jpg" alt="" className="ft__brand-img"/>
            <div>
              <strong className="ft__brand-name">REPTEC</strong>
              <span className="ft__brand-sub">Realic Professional &amp; Technical College</span>
            </div>
          </Link>
          <p className="ft__brand-desc">Shaping Botswana's future through practical, career-oriented education.</p>
          <a href="https://www.facebook.com/REALICCOLLEGE/" target="_blank" rel="noopener noreferrer" className="ft__social"><FacebookIcon size={16}/> Facebook</a>
        </div>
        <div className="ft__col">
          <h4>Pages</h4>
          <Link to="/">Home</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="ft__col">
          <h4>Programs</h4>
          <Link to="/programs">Business Studies</Link>
          <Link to="/programs">Health &amp; Safety</Link>
          <Link to="/programs">Office Administration</Link>
        </div>
        <div className="ft__col">
          <h4>Contact</h4>
          <span><MapPin size={13}/> African Mall, Gaborone</span>
          <span><Phone size={13}/> +267 390 3890</span>
          <span><Mail size={13}/> <a href="mailto:info@reptec.org">info@reptec.org</a></span>
        </div>
      </div>
      <div className="ft__bottom container">
        <p>&copy; {new Date().getFullYear()} Realic Professional &amp; Technical College</p>
        <p>Accredited by BQA</p>
      </div>
    </footer>
  )
}
