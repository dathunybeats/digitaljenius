'use client'

import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'cover',    label: 'Cover' },
  { id: 'story',    label: 'The Story' },
  { id: 'essence',  label: 'Essence' },
  { id: 'colors',   label: 'Colors' },
  { id: 'type',     label: 'Typography' },
  { id: 'logo',     label: 'Logo' },
  { id: 'voice',    label: 'Voice' },
  { id: 'services', label: 'Services' },
  { id: 'apps',     label: 'Applications' },
  { id: 'next',     label: 'Next Steps' },
]

export default function SideNav() {
  const [active, setActive] = useState('cover')

  useEffect(() => {
    const els = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }) },
      { threshold: 0.4 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <nav style={{
      position: 'fixed', left: 28, top: '50%',
      transform: 'translateY(-50%)', zIndex: 100,
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      {SECTIONS.map(s => (
        <a
          key={s.id}
          href={`#${s.id}`}
          title={s.label}
          style={{
            display: 'block', width: 5, height: 5, borderRadius: '50%',
            background: active === s.id ? '#FFFFFF' : '#2A2A2A',
            transform: active === s.id ? 'scale(1.6)' : 'scale(1)',
            transition: 'all 0.35s ease',
            textDecoration: 'none',
          }}
        />
      ))}
    </nav>
  )
}
