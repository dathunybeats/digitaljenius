'use client'
import { useEffect } from 'react'

/**
 * Activates the [data-reveal] scroll-reveal system defined in globals.css.
 * The .fx class gates the hidden initial state so content stays visible
 * without JS or under prefers-reduced-motion.
 */
export default function ScrollFx() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    document.documentElement.classList.add('fx')

    const io = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('in')
            io.unobserve(el)
            // Once revealed, leave the reveal system so the element's own
            // hover transitions (background, opacity dims) take over.
            setTimeout(() => {
              el.removeAttribute('data-reveal')
              el.classList.remove('in')
            }, 1700)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
    )

    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
