'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const links = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#work'     },
  { label: 'Process',  href: '#process'  },
  { label: 'FAQ',      href: '#faq'      },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      setHidden(y > lastY.current && y > 280)
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dj-locked', open)
    return () => document.body.classList.remove('dj-locked')
  }, [open])

  return (
    <>
      <header className={`dj-nav ${scrolled ? 'scrolled' : ''} ${hidden && !open ? 'hidden-up' : ''} ${open ? 'menu-open' : ''}`}>
        <a href="#top" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
          <Image
            src="/logo.png"
            alt="Digital Jenius logo"
            width={36}
            height={36}
            style={{ objectFit: 'contain' }}
          />
          <span style={{
            fontFamily: 'var(--font-inter), sans-serif', fontSize: 9, fontWeight: 600,
            letterSpacing: 4, textTransform: 'uppercase', color: 'var(--dj-stone)',
          }}>
            Digital Jenius
          </span>
        </a>

        <nav className="dj-nav-links">
          {links.map(link => (
            <a key={link.label} href={link.href} className="dj-nav-link">
              {link.label}
            </a>
          ))}
          <a href="tel:4344009422" className="dj-book-btn">
            Book Now
          </a>
        </nav>

        <button
          className={`dj-hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </header>

      <div className={`dj-mobile-menu ${open ? 'open' : ''}`}>
        {[...links, { label: 'Contact', href: '#contact' }].map(link => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: 'var(--font-instrument-serif), Georgia, serif',
              fontSize: 44, fontWeight: 400, color: '#0A0A0A',
              textDecoration: 'none', lineHeight: 1,
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="tel:4344009422"
          onClick={() => setOpen(false)}
          className="dj-cta-dark"
          style={{ marginTop: 12 }}
        >
          Book Now
        </a>
      </div>
    </>
  )
}
