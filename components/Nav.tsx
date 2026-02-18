import { useState, useEffect } from 'react'

const links = [
  { href: '#jellemzok', label: 'Jellemzők' },
  { href: '#feltetelek', label: 'Feltételek' },
  { href: '#galeria', label: 'Galéria' },
  { href: '#terkep', label: 'Térkép' },
  { href: '#kapcsolat', label: 'Kapcsolat' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`site-nav${scrolled ? ' site-nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">Albérlet</a>
        <ul className="nav-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
