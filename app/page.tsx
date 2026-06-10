import Image from 'next/image'
import Nav from './components/Nav'
import Preloader from './components/Preloader'
import ScrollFx from './components/ScrollFx'
import Counter from './components/Counter'
import Parallax from './components/Parallax'
import Faq from './components/Faq'

const serif = "var(--font-instrument-serif), Georgia, serif"
const sans  = "var(--font-inter), system-ui, sans-serif"

const C = {
  white:    '#FFFFFF',
  offwhite: '#F7F7F5',
  black:    '#0A0A0A',
  charcoal: '#2C2C2C',
  stone:    '#5C5C5C',
  silver:   '#A6A6A6',
  border:   'rgba(0,0,0,0.08)',
} as const

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p data-reveal="fade" style={{
      fontFamily: sans, fontSize: 9, fontWeight: 600,
      letterSpacing: 5, textTransform: 'uppercase' as const,
      color: light ? C.silver : C.stone, marginBottom: 40,
      display: 'flex', alignItems: 'center', gap: 16,
      justifyContent: light ? 'center' : 'flex-start',
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
  { id: '1519741497674-611481863552', alt: 'Event photography — wedding celebration',     title: 'The Celebration', cat: 'Event',       span: 'dj-w-7' },
  { id: '1541534741688-6078c6bfb5c5', alt: 'Sports photography — athlete in motion',     title: 'Game Day',        cat: 'Sports',      span: 'dj-w-5' },
  { id: '1531746020798-e6953c6e8e04', alt: 'Portrait photography',                       title: 'The Portrait',    cat: 'Portrait',    span: 'dj-w-5' },
  { id: '1560518883-ce09059eeffa',    alt: 'Real estate photography — modern interior',  title: 'The Listing',     cat: 'Real Estate', span: 'dj-w-7' },
  { id: '1587300003388-59208cc962cb', alt: 'Animal photography — dog portrait',          title: 'Best Friend',     cat: 'Animal & Pet', span: 'dj-w-4' },
  { id: '1474511320723-9a56873867b5', alt: 'Wildlife photography — fox in winter',       title: 'The Wild',        cat: 'Wildlife',    span: 'dj-w-4' },
  { id: '1505740420928-5e560c06d30e', alt: 'Product photography — studio detail',        title: 'The Product',     cat: 'Product',     span: 'dj-w-4' },
]

const stats = [
  { value: 16, suffix: '',  label: 'Age Dennis received his first camera' },
  { value: 8,  suffix: '',  label: 'Photography disciplines mastered' },
  { value: 4,  suffix: '',  label: 'Virginia regions served' },
  { value: 7,  suffix: '',  label: 'Days a week, by appointment' },
]

const process = [
  { num: '01', title: 'Inquire',  desc: 'Call or text to tell us about your project. We respond fast and listen first.' },
  { num: '02', title: 'Plan',     desc: 'Location, vision, shot list, schedule — we map the session together before anyone lifts a camera.' },
  { num: '03', title: 'Shoot',    desc: 'A focused, professional session. Calm direction, deliberate frames, no wasted time.' },
  { num: '04', title: 'Deliver',  desc: 'Every image carefully edited and delivered as a polished gallery, ready to use.' },
]

const locations = [
  { area: 'Charlottesville',   note: 'Primary market & surrounding counties' },
  { area: 'Harrisonburg',      note: 'Full corridor — Cville to Harrisonburg' },
  { area: 'Richmond',          note: 'Full corridor — Cville to Richmond' },
  { area: 'Northern Virginia', note: 'Including DC metro area' },
]

export default function Home() {
  return (
    <div id="top" style={{ background: C.white, color: C.black, overflowX: 'hidden' }}>
      <noscript>
        <style>{`.dj-preloader{display:none}`}</style>
      </noscript>

      <Preloader />
      <ScrollFx />
      <Nav />

      {/* ── HERO ── */}
      <section className="dj-hero" style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="dj-hero-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1800&q=80"
            alt="Cinematic photography"
            fill
            preload
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="dj-hero-overlay" style={{ position: 'absolute', inset: 0 }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="dj-hi-1" style={{
            fontFamily: sans, fontSize: 9, fontWeight: 700,
            letterSpacing: 6, textTransform: 'uppercase',
            color: C.charcoal, marginBottom: 52,
          }}>
            Photography &amp; Videography · Charlottesville, Virginia
          </p>

          <h1 className="dj-hi-2" style={{
            fontFamily: serif,
            fontSize: 'clamp(56px, 9vw, 120px)',
            fontWeight: 400, color: C.black,
            lineHeight: 1.04, marginBottom: 36,
          }}>
            Every Frame,<br />On Purpose.
          </h1>

          <p className="dj-hi-3" style={{
            fontFamily: sans, fontSize: 15, fontWeight: 400,
            color: C.charcoal, lineHeight: 1.75,
            maxWidth: 380, margin: '0 auto 56px',
          }}>
            Cinematic photography and documentary film — capturing the moments that deserve to last.
          </p>

          <div className="dj-cta-row dj-hi-4">
            <a href="tel:4344009422" className="dj-cta-dark">
              Book a Session
            </a>
            <a href="#work" className="dj-nav-link" style={{ fontSize: 10, letterSpacing: 3, color: C.charcoal, fontWeight: 600 }}>
              View Work →
            </a>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: 40, left: '50%',
          transform: 'translateX(-50%)', zIndex: 1,
        }}>
          <div className="dj-scroll-line" />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="dj-marquee" aria-hidden="true">
        <div className="dj-marquee-track">
          {[0, 1].map(copy => (
            <span key={copy} style={{ display: 'inline-flex', alignItems: 'baseline' }}>
              {services.map(svc => (
                <span key={svc.title} style={{ display: 'inline-flex', alignItems: 'baseline' }}>
                  <span style={{
                    fontFamily: serif, fontStyle: 'italic', fontSize: 28,
                    fontWeight: 400, color: C.black, padding: '0 28px',
                  }}>
                    {svc.title}
                  </span>
                  <span style={{ fontFamily: sans, fontSize: 10, color: C.stone }}>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="dj-section" style={{ background: C.offwhite }}>
        <div className="dj-grid-2-top">
          <div>
            <Label>The Story</Label>
            <p data-reveal style={{
              fontFamily: serif, fontStyle: 'italic',
              fontSize: 'clamp(28px, 3.5vw, 46px)',
              fontWeight: 400, lineHeight: 1.3, color: C.black,
            }}>
              &ldquo;At 28, life changed.{' '}
              <span style={{ fontStyle: 'normal' }}>Everything</span>{' '}
              was taken from me.&rdquo;
            </p>
            <div data-reveal="fade" data-delay="2" style={{ width: 40, height: 1, background: C.black, marginTop: 40, opacity: 0.15 }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <p data-reveal data-delay="1" style={{ fontFamily: sans, fontSize: 15, fontWeight: 400, color: C.stone, lineHeight: 1.85 }}>
              Dennis Eddy received his first camera from his father at 16 — and never looked at the world the same way again. He fell immediately in love with capturing moments, chasing the feeling behind each frame.
            </p>
            <p data-reveal data-delay="2" style={{ fontFamily: sans, fontSize: 15, fontWeight: 400, color: C.stone, lineHeight: 1.85 }}>
              Years passed. Life moved. The cameras went quiet.
            </p>
            <p data-reveal data-delay="3" style={{ fontFamily: sans, fontSize: 15, fontWeight: 400, color: C.stone, lineHeight: 1.85 }}>
              At 28, Dennis was struck by a train. In that moment, every sense — sight, hearing, smell, taste, touch, and proprioception — was taken from him. After fourteen months in inpatient recovery, something became unmistakably clear: his purpose pointed to photography and videography.
            </p>
            <p data-reveal data-delay="4" style={{ fontFamily: sans, fontSize: 15, fontWeight: 400, color: C.stone, lineHeight: 1.85 }}>
              Today, every session carries that weight. Each frame is a second chance — made deliberately, gratefully, and on purpose.
            </p>
            <p data-reveal data-delay="5" style={{
              fontFamily: serif, fontStyle: 'italic',
              fontSize: 19, fontWeight: 400, color: C.charcoal, lineHeight: 1.7,
              marginTop: 12,
            }}>
              &ldquo;I love what I do because I am following my purpose in life.&rdquo;
            </p>
          </div>
        </div>

        <div data-reveal="scale" style={{ marginTop: 88 }}>
          <Parallax speed={0.04}>
            <div style={{ position: 'relative', aspectRatio: '21/9', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1800&q=80"
                alt="Camera and lenses — the craft of photography"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Parallax>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="dj-section" style={{ background: C.black, paddingTop: 100, paddingBottom: 100 }}>
        <div className="dj-stats-grid">
          {stats.map((stat, i) => (
            <div key={stat.label} data-reveal data-delay={String(i + 1)}>
              <p style={{
                fontFamily: serif, fontSize: 'clamp(56px, 6vw, 88px)',
                fontWeight: 400, color: C.white, lineHeight: 1, marginBottom: 18,
              }}>
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p style={{
                fontFamily: sans, fontSize: 11, fontWeight: 400,
                letterSpacing: 2, textTransform: 'uppercase',
                color: C.silver, lineHeight: 1.7, maxWidth: 200,
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="dj-section" style={{ background: C.white }}>
        <div style={{ marginBottom: 72 }}>
          <Label>What We Do</Label>
          <h2 data-reveal style={{
            fontFamily: serif,
            fontSize: 'clamp(32px, 4.5vw, 64px)',
            fontWeight: 400, color: C.black, lineHeight: 1.1,
          }}>
            Eight disciplines.<br />One vision.
          </h2>
        </div>

        <div className="dj-svc-list">
          {services.map((svc, i) => (
            <a key={svc.title} href="#contact" className="dj-svc-row" data-reveal="fade">
              <span style={{
                fontFamily: sans, fontSize: 11, fontWeight: 500,
                letterSpacing: 2, color: C.stone,
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 style={{
                fontFamily: serif, fontSize: 'clamp(22px, 2.6vw, 34px)', fontWeight: 400,
                color: C.black, lineHeight: 1.15, margin: 0,
              }}>
                {svc.title}
              </h3>
              <p className="dj-svc-desc" style={{
                fontFamily: sans, fontSize: 13.5, fontWeight: 400,
                color: C.stone, lineHeight: 1.8, margin: 0,
              }}>
                {svc.desc}
              </p>
              <span className="dj-svc-arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── WORK / GALLERY ── */}
      <section id="work" className="dj-section" style={{ background: C.offwhite }}>
        <div style={{ marginBottom: 72 }}>
          <Label>The Work</Label>
          <h2 data-reveal style={{
            fontFamily: serif,
            fontSize: 'clamp(32px, 4.5vw, 64px)',
            fontWeight: 400, color: C.black, lineHeight: 1.1,
          }}>
            Every frame,<br />earned.
          </h2>
        </div>

        <div className="dj-work-grid">
          {gallery.map((photo, i) => (
            <div key={photo.id} className={`dj-photo ${photo.span}`} data-reveal="scale" data-delay={String((i % 3) + 1)}>
              <Image
                src={`https://images.unsplash.com/photo-${photo.id}?w=1200&q=80`}
                alt={photo.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="dj-photo-caption">
                <span style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 20, color: C.white }}>
                  {photo.title}
                </span>
                <span style={{
                  fontFamily: sans, fontSize: 9, fontWeight: 600,
                  letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)',
                }}>
                  {photo.cat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="dj-section" style={{ background: C.white }}>
        <div style={{ marginBottom: 72 }}>
          <Label>How It Works</Label>
          <h2 data-reveal style={{
            fontFamily: serif,
            fontSize: 'clamp(32px, 4.5vw, 64px)',
            fontWeight: 400, color: C.black, lineHeight: 1.1,
          }}>
            Simple process.<br />Serious results.
          </h2>
        </div>

        <div className="dj-process-grid">
          {process.map((step, i) => (
            <div key={step.num} className="dj-process-step" data-reveal data-delay={String(i + 1)}>
              <p style={{
                fontFamily: sans, fontSize: 11, fontWeight: 500,
                letterSpacing: 3, color: C.stone, marginBottom: 24,
              }}>
                {step.num}
              </p>
              <h3 style={{
                fontFamily: serif, fontSize: 28, fontWeight: 400,
                color: C.black, marginBottom: 16, lineHeight: 1.2,
              }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: sans, fontSize: 13.5, fontWeight: 400, color: C.stone, lineHeight: 1.8 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="dj-section" style={{ background: C.offwhite }}>
        <div className="dj-grid-2-top">
          <div>
            <Label>Where We Shoot</Label>
            <h2 data-reveal style={{
              fontFamily: serif,
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400, color: C.black, lineHeight: 1.15,
            }}>
              Based in Charlottesville.<br />
              Available statewide.
            </h2>
            <p data-reveal data-delay="2" style={{
              fontFamily: sans, fontSize: 14, fontWeight: 400,
              color: C.stone, lineHeight: 1.75, marginTop: 24, maxWidth: 320,
            }}>
              Serving the full Charlottesville-to-DC corridor. Destination shoots available — ask about travel packages.
            </p>
          </div>

          <div className="dj-loc-list">
            {locations.map((loc, i) => (
              <div key={loc.area} className="dj-loc-row" data-reveal data-delay={String(i + 1)}>
                <span style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, color: C.black }}>
                  {loc.area}
                </span>
                <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 400, color: C.stone, textAlign: 'right' }}>
                  {loc.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="dj-section" style={{ background: C.white }}>
        <div className="dj-grid-2-top">
          <div>
            <Label>Questions</Label>
            <h2 data-reveal style={{
              fontFamily: serif,
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400, color: C.black, lineHeight: 1.15,
            }}>
              Before you<br />book.
            </h2>
            <p data-reveal data-delay="2" style={{
              fontFamily: sans, fontSize: 14, fontWeight: 400,
              color: C.stone, lineHeight: 1.75, marginTop: 24, maxWidth: 300,
            }}>
              Something else on your mind? Call or text — we answer fast.
            </p>
          </div>

          <Faq />
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="dj-section" style={{
        background: C.black,
        textAlign: 'center',
      }}>
        <Label light>Book a Session</Label>
        <h2 data-reveal style={{
          fontFamily: serif,
          fontSize: 'clamp(36px, 5vw, 72px)',
          fontWeight: 400, color: C.white, lineHeight: 1.1,
          marginBottom: 24,
        }}>
          Let&apos;s create something<br />worth remembering.
        </h2>
        <p data-reveal data-delay="1" style={{
          fontFamily: sans, fontSize: 15, fontWeight: 400,
          color: C.silver, lineHeight: 1.75,
          maxWidth: 380, margin: '0 auto 52px',
        }}>
          Available by appointment, seven days a week. Call or text to get started.
        </p>

        <div data-reveal data-delay="2">
          <a href="tel:4344009422" className="dj-cta-btn" style={{ marginBottom: 28 }}>
            (434) 400-9422
          </a>
        </div>

        <p data-reveal="fade" data-delay="3" style={{
          fontFamily: sans, fontSize: 9, fontWeight: 400,
          letterSpacing: 3, textTransform: 'uppercase',
          color: C.silver, marginTop: 28,
        }}>
          By appointment · 7 days a week
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="dj-footer">
        <div className="dj-footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <Image src="/logo.png" alt="Digital Jenius" width={32} height={32} style={{ objectFit: 'contain' }} />
              <span style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', color: C.stone }}>
                Digital Jenius
              </span>
            </div>
            <p style={{ fontFamily: sans, fontSize: 13.5, fontWeight: 400, color: C.stone, lineHeight: 1.8, maxWidth: 300 }}>
              Cinematic photography and documentary film, made on purpose — based in Charlottesville, serving all of Virginia.
            </p>
          </div>

          <div>
            <p style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: C.black, marginBottom: 20 }}>
              Explore
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'About',    href: '#about'    },
                { label: 'Services', href: '#services' },
                { label: 'Work',     href: '#work'     },
                { label: 'Process',  href: '#process'  },
                { label: 'FAQ',      href: '#faq'      },
              ].map(link => (
                <a key={link.label} href={link.href} className="dj-footer-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: C.black, marginBottom: 20 }}>
              Services
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Events & Weddings', 'Portraits', 'Real Estate', 'Sports', 'Documentary'].map(svc => (
                <a key={svc} href="#services" className="dj-footer-link">
                  {svc}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: C.black, marginBottom: 20 }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="tel:4344009422" className="dj-footer-link" style={{ fontSize: 16, color: C.black }}>
                (434) 400-9422
              </a>
              <p style={{ fontFamily: sans, fontSize: 12.5, fontWeight: 400, color: C.stone, lineHeight: 1.7, margin: 0 }}>
                Charlottesville, Virginia<br />
                By appointment · 7 days a week
              </p>
            </div>
          </div>
        </div>

        <div className="dj-footer-bottom">
          <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 300, color: C.stone, letterSpacing: 0.5, margin: 0 }}>
            © 2026 Digital Jenius · Charlottesville, Virginia
          </p>
          <a href="#top" className="dj-footer-link" style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' }}>
            Back to top ↑
          </a>
        </div>
      </footer>

    </div>
  )
}
