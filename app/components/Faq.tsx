'use client'
import { useState } from 'react'

const sans  = 'var(--font-inter), system-ui, sans-serif'
const serif = 'var(--font-instrument-serif), Georgia, serif'

const faqs = [
  {
    q: 'Where are you based, and how far will you travel?',
    a: 'Digital Jenius is based in Charlottesville, Virginia, serving the full corridors to Harrisonburg, Richmond, and Northern Virginia — including the DC metro area. For destinations beyond that, ask about our travel packages and we will build something that works for your shoot.',
  },
  {
    q: 'What types of photography do you offer?',
    a: 'Eight disciplines: event, sports, animal & pet, portrait, product, wildlife, and real estate photography, plus long-form documentary work. If your project sits between categories, reach out — versatility is the point.',
  },
  {
    q: 'Do you do videography as well?',
    a: 'Yes. Alongside photography, we produce cinematic video and documentary storytelling — from event coverage to long-form pieces about people, places, and journeys worth remembering.',
  },
  {
    q: 'How do I book a session?',
    a: 'Call or text (434) 400-9422. We are available by appointment, seven days a week. We will talk through your vision, the location, and timing, then lock in your date.',
  },
  {
    q: 'How does the process work after I book?',
    a: 'We plan the shoot together — location, shot list, and schedule. On the day, you get a focused, professional session. Afterward, every frame is carefully edited and delivered as a polished gallery. Turnaround depends on the scope of the project and is agreed up front.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div>
      {faqs.map((item, i) => (
        <div key={item.q} className={`dj-faq-item ${open === i ? 'open' : ''}`}>
          <button
            className="dj-faq-q"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span style={{
              fontFamily: serif, fontSize: 'clamp(18px, 2vw, 24px)',
              fontWeight: 400, color: '#0A0A0A', lineHeight: 1.3,
            }}>
              {item.q}
            </span>
            <span className="dj-faq-icon" aria-hidden="true" />
          </button>
          <div className="dj-faq-a">
            <div className="dj-faq-a-inner">
              <p style={{
                fontFamily: sans, fontSize: 14.5, fontWeight: 400,
                color: 'var(--dj-stone)', lineHeight: 1.85,
                paddingBottom: 28, maxWidth: 640, margin: 0,
              }}>
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
