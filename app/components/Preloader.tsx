'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [phase, setPhase] = useState<'show' | 'exit' | 'done'>('show')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPhase('done')
      return
    }
    document.body.classList.add('dj-locked')
    const exit = setTimeout(() => setPhase('exit'), 1500)
    const done = setTimeout(() => {
      setPhase('done')
      document.body.classList.remove('dj-locked')
    }, 2450)
    return () => {
      clearTimeout(exit)
      clearTimeout(done)
      document.body.classList.remove('dj-locked')
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div className={`dj-preloader ${phase === 'exit' ? 'dj-preloader-exit' : ''}`} aria-hidden="true">
      <Image
        src="/logo.png"
        alt=""
        width={56}
        height={56}
        className="dj-preloader-logo"
        style={{ objectFit: 'contain' }}
      />
      <span
        className="dj-preloader-word"
        style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: 6,
          textTransform: 'uppercase',
          color: '#0A0A0A',
        }}
      >
        Digital Jenius
      </span>
      <span className="dj-preloader-line" />
    </div>
  )
}
