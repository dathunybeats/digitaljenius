import Image from 'next/image'

const serif = "var(--font-instrument-serif), Georgia, serif"
const sans  = "var(--font-inter), system-ui, sans-serif"

const C = {
  white:    '#FFFFFF',
  offwhite: '#F7F7F5',
  black:    '#0A0A0A',
  charcoal: '#2C2C2C',
  stone:    '#888888',
  border:   'rgba(0,0,0,0.08)',
} as const

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: sans, fontSize: 9, fontWeight: 600,
      letterSpacing: 5, textTransform: 'uppercase' as const,
      color: C.stone, marginBottom: 40,
      display: 'flex', alignItems: 'center', gap: 16,
    }}>
      {children}
      <span style={{ display: 'block', height: 1, width: 48, background: C.stone, opacity: 0.4, flexShrink: 0 }} />
    </p>
  )
}

const services = [
  { title: 'Event Photography',    desc: 'Weddings, corporate events, celebrations — every milestone documented with care and precision.' },
  { title: 'Sports Photography',   desc: 'High-speed, high-stakes action. Athletes, teams, and game-day moments captured in motion.' },
  { title: 'Animal & Pet',         desc: 'Portraits that capture personality — for families, breeders, shelters, and pet brands.' },
  { title: 'Portrait Photography', desc: 'Individual, family, and professional portraits delivered with editorial quality.' },
  { title: 'Product Photography',  desc: 'E-commerce, brand campaigns, and catalog — your product, perfected for the screen.' },
  { title: 'Wildlife Photography', desc: "Virginia's landscapes and wildlife, documented with patience, respect, and precision." },
  { title: 'Real Estate',          desc: 'Listings that sell faster. Interior and exterior photography for agents and developers.' },
  { title: 'Documentary',          desc: 'Long-form visual storytelling — people, places, and journeys that deserve to be remembered.' },
]

const gallery = [
  { id: '1519741497674-611481863552', alt: 'Event photography — wedding celebration' },
  { id: '1541534741688-6078c6bfb5c5', alt: 'Sports photography — athlete in motion' },
  { id: '1587300003388-59208cc962cb', alt: 'Animal photography — dog portrait' },
  { id: '1531746020798-e6953c6e8e04', alt: 'Portrait photography' },
  { id: '1474511320723-9a56873867b5', alt: 'Wildlife photography — fox in winter' },
  { id: '1560518883-ce09059eeffa', alt: 'Real estate photography — modern interior' },
]

const locations = [
  { area: 'Charlottesville',   note: 'Primary market & surrounding counties' },
  { area: 'Harrisonburg',      note: 'Full corridor — Cville to Harrisonburg' },
  { area: 'Richmond',          note: 'Full corridor — Cville to Richmond' },
  { area: 'Northern Virginia', note: 'Including DC metro area' },
]

export default function Home() {
  return (
    <div style={{ background: C.white, color: C.black, overflowX: 'hidden' }}>

      {/* ── NAV ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '18px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${C.border}`,
      }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
          <Image
            src="/logo.png"
            alt="Digital Jenius logo"
            width={36}
            height={36}
            style={{ objectFit: 'contain' }}
          />
          <span style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', color: C.stone }}>
            Digital Jenius
          </span>
        </a>

        <nav className="dj-nav-links">
          {[
            { label: 'About',    href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Work',     href: '#work' },
          ].map(link => (
            <a key={link.label} href={link.href} style={{
              fontFamily: sans, fontSize: 10, fontWeight: 500,
              letterSpacing: 2, textTransform: 'uppercase',
              color: C.stone, textDecoration: 'none',
            }}>
              {link.label}
            </a>
          ))}
          <a href="tel:4344009422" className="dj-book-btn" style={{
            fontFamily: sans, fontSize: 10, fontWeight: 600,
            letterSpacing: 2, textTransform: 'uppercase',
            color: C.black, textDecoration: 'none',
            border: `1px solid ${C.black}`,
            padding: '10px 22px',
          }}>
            Book Now
          </a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="dj-hero" style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1800&q=80"
            alt="Cinematic photography"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.65) 50%, rgba(255,255,255,0.88) 100%)',
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{
            fontFamily: sans, fontSize: 9, fontWeight: 600,
            letterSpacing: 6, textTransform: 'uppercase',
            color: C.stone, marginBottom: 52,
          }}>
            Photography &amp; Videography · Charlottesville, Virginia
          </p>

          <h1 style={{
            fontFamily: serif,
            fontSize: 'clamp(56px, 9vw, 120px)',
            fontWeight: 400, color: C.black,
            lineHeight: 1.04, marginBottom: 36,
          }}>
            Every Frame,<br />On Purpose.
          </h1>

          <p style={{
            fontFamily: sans, fontSize: 15, fontWeight: 300,
            color: C.stone, lineHeight: 1.75,
            maxWidth: 380, margin: '0 auto 56px',
          }}>
            Cinematic photography and documentary film — capturing the moments that deserve to last.
          </p>

          <div className="dj-cta-row">
            <a href="tel:4344009422" style={{
              fontFamily: sans, fontSize: 10, fontWeight: 600,
              letterSpacing: 3, textTransform: 'uppercase',
              color: C.white, background: C.black,
              padding: '16px 40px', textDecoration: 'none',
            }}>
              Book a Session
            </a>
            <a href="#work" style={{
              fontFamily: sans, fontSize: 10, fontWeight: 500,
              letterSpacing: 3, textTransform: 'uppercase',
              color: C.stone, textDecoration: 'none',
            }}>
              View Work →
            </a>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: 40, left: '50%',
          transform: 'translateX(-50%)', zIndex: 1,
        }}>
          <div style={{ width: 1, height: 56, background: `linear-gradient(to bottom, transparent, ${C.stone}66)` }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="dj-section dj-grid-2" style={{ background: C.offwhite }}>
        <div>
          <Label>The Story</Label>
          <p style={{
            fontFamily: serif, fontStyle: 'italic',
            fontSize: 'clamp(28px, 3.5vw, 46px)',
            fontWeight: 400, lineHeight: 1.3, color: C.black,
          }}>
            &ldquo;At 28, life changed.{' '}
            <span style={{ fontStyle: 'normal' }}>Everything</span>{' '}
            was taken from me.&rdquo;
          </p>
          <div style={{ width: 40, height: 1, background: C.black, marginTop: 40, opacity: 0.15 }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <p style={{ fontFamily: sans, fontSize: 15, fontWeight: 300, color: C.stone, lineHeight: 1.85 }}>
            Dennis Eddy received his first camera from his father at 16 — and never looked at the world the same way again. He fell immediately in love with capturing moments, chasing the feeling behind each frame.
          </p>
          <p style={{ fontFamily: sans, fontSize: 15, fontWeight: 300, color: C.stone, lineHeight: 1.85 }}>
            Years passed. Life moved. The cameras went quiet.
          </p>
          <p style={{ fontFamily: sans, fontSize: 15, fontWeight: 300, color: C.stone, lineHeight: 1.85 }}>
            At 28, Dennis was struck by a train. In that moment, every sense — sight, hearing, smell, taste, touch, and proprioception — was taken from him. After fourteen months in inpatient recovery, something became unmistakably clear: his purpose pointed to photography and videography.
          </p>
          <p style={{
            fontFamily: serif, fontStyle: 'italic',
            fontSize: 19, fontWeight: 400, color: C.charcoal, lineHeight: 1.7,
          }}>
            &ldquo;I love what I do because I am following my purpose in life.&rdquo;
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="dj-section" style={{ background: C.white }}>
        <div style={{ marginBottom: 64 }}>
          <Label>What We Do</Label>
          <h2 style={{
            fontFamily: serif,
            fontSize: 'clamp(32px, 4.5vw, 64px)',
            fontWeight: 400, color: C.black, lineHeight: 1.1,
          }}>
            Eight disciplines.<br />One vision.
          </h2>
        </div>

        <div className="dj-grid-4">
          {services.map(svc => (
            <div key={svc.title} style={{
              background: C.offwhite,
              border: `1px solid ${C.border}`,
              padding: '40px 28px 36px',
            }}>
              <h3 style={{
                fontFamily: serif, fontSize: 20, fontWeight: 400,
                color: C.black, marginBottom: 14, lineHeight: 1.2,
              }}>
                {svc.title}
              </h3>
              <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: C.stone, lineHeight: 1.8 }}>
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORK / GALLERY ── */}
      <section id="work" className="dj-section" style={{ background: C.offwhite }}>
        <div style={{ marginBottom: 64 }}>
          <Label>The Work</Label>
          <h2 style={{
            fontFamily: serif,
            fontSize: 'clamp(32px, 4.5vw, 64px)',
            fontWeight: 400, color: C.black, lineHeight: 1.1,
          }}>
            Every frame,<br />earned.
          </h2>
        </div>

        <div className="dj-grid-3">
          {gallery.map(photo => (
            <div key={photo.id} style={{ position: 'relative', aspectRatio: '3/2', overflow: 'hidden' }}>
              <Image
                src={`https://images.unsplash.com/photo-${photo.id}?w=800&q=80`}
                alt={photo.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="dj-section" style={{ background: C.white }}>
        <div className="dj-grid-2-top">
          <div>
            <Label>Where We Shoot</Label>
            <h2 style={{
              fontFamily: serif,
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400, color: C.black, lineHeight: 1.15,
            }}>
              Based in Charlottesville.<br />
              Available statewide.
            </h2>
            <p style={{
              fontFamily: sans, fontSize: 13, fontWeight: 300,
              color: C.stone, lineHeight: 1.75, marginTop: 24, maxWidth: 320,
            }}>
              Serving the full Charlottesville-to-DC corridor. Destination shoots available — ask about travel packages.
            </p>
          </div>

          <div>
            {locations.map((loc, i) => (
              <div key={loc.area} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                padding: '20px 0',
                borderBottom: i < locations.length - 1 ? `1px solid ${C.border}` : 'none',
              }}>
                <span style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, color: C.black }}>
                  {loc.area}
                </span>
                <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: C.stone }}>
                  {loc.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="dj-section" style={{
        background: C.black,
        textAlign: 'center',
      }}>
        <Label>Book a Session</Label>
        <h2 style={{
          fontFamily: serif,
          fontSize: 'clamp(36px, 5vw, 72px)',
          fontWeight: 400, color: C.white, lineHeight: 1.1,
          marginBottom: 24,
        }}>
          Let&apos;s create something<br />worth remembering.
        </h2>
        <p style={{
          fontFamily: sans, fontSize: 15, fontWeight: 300,
          color: C.stone, lineHeight: 1.75,
          maxWidth: 380, margin: '0 auto 52px',
        }}>
          Available by appointment, seven days a week. Call or text to get started.
        </p>

        <a href="tel:4344009422" style={{
          fontFamily: sans, fontSize: 15, fontWeight: 500,
          letterSpacing: 4, textTransform: 'uppercase',
          color: C.black, background: C.white,
          padding: '20px 56px', textDecoration: 'none',
          display: 'inline-block', marginBottom: 28,
        }}>
          (434) 400-9422
        </a>

        <p style={{
          fontFamily: sans, fontSize: 9, fontWeight: 400,
          letterSpacing: 3, textTransform: 'uppercase',
          color: C.stone,
        }}>
          By appointment · 7 days a week
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="dj-footer" style={{
        background: C.white,
        borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Image src="/logo.png" alt="Digital Jenius" width={28} height={28} style={{ objectFit: 'contain' }} />
          <span style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', color: C.stone }}>
            Digital Jenius
          </span>
        </div>

        <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 300, color: C.stone, letterSpacing: 0.5 }}>
          © 2026 Digital Jenius · Charlottesville, Virginia
        </p>

        <nav style={{ display: 'flex', gap: 28 }}>
          {['About', 'Services', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontFamily: sans, fontSize: 9, fontWeight: 500,
              letterSpacing: 2, textTransform: 'uppercase',
              color: C.stone, textDecoration: 'none',
            }}>
              {link}
            </a>
          ))}
        </nav>
      </footer>

    </div>
  )
}
