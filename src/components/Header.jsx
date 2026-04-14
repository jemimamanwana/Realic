import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/programs', label: 'Programs' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); document.body.style.overflow = '' }, [loc])

  const toggle = () => { setOpen(!open); document.body.style.overflow = !open ? 'hidden' : '' }

  return (
    <header className={`hdr${scrolled ? ' hdr--scrolled' : ''}`}>
      <div className="hdr__inner">
        <Link to="/" className="hdr__logo">
          <img src="/logo.jpg" alt="REPTEC" className="hdr__logo-img"/>
          <div>
            <span className="hdr__logo-name">REPTEC</span>
            <span className="hdr__logo-sub">Professional &amp; Technical College</span>
          </div>
        </Link>
        <nav className={`hdr__nav${open ? ' hdr__nav--open' : ''}`}>
          {navItems.map(n => (
            <Link key={n.path} to={n.path} className={`hdr__link${loc.pathname === n.path ? ' hdr__link--on' : ''}`}>{n.label}</Link>
          ))}
          <Link to="/admissions" className="hdr__apply">Apply Now</Link>
        </nav>
        <button className={`hdr__burger${open ? ' hdr__burger--on' : ''}`} onClick={toggle} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>
    </header>
  )
}
