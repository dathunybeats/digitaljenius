import SideNav from './SideNav'

const serif = "var(--font-instrument-serif), Georgia, serif"
const sans  = "var(--font-inter), system-ui, sans-serif"

const C = {
  black:    '#0D0D0D',
  cream:    '#F5F3EE',
  gold:     '#C9A96E',
  charcoal: '#3A3835',
  stone:    '#7A7672',
  mid:      '#181613',
} as const

const slide: React.CSSProperties = {
  minHeight: '100vh',
  padding: '80px 100px 80px 80px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: sans, fontSize: 9, fontWeight: 600,
      letterSpacing: 5, textTransform: 'uppercase',
      color: C.gold, marginBottom: 44,
      display: 'flex', alignItems: 'center', gap: 16,
    }}>
      {children}
      <span style={{ display: 'block', height: 1, width: 48, background: C.gold, opacity: 0.4 }} />
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: serif, fontSize: 'clamp(32px, 4.5vw, 64px)',
      fontWeight: 300, color: C.cream, lineHeight: 1.15,
    }}>
      {children}
    </h2>
  )
}

export default function BrandDeck() {
  return (
    <div style={{ background: C.black, color: C.cream, overflowX: 'hidden' }}>
      <SideNav />

      {/* ── 1. COVER ── */}
      <section id="cover" style={{ ...slide, alignItems: 'center', textAlign: 'center' }}>
        <p style={{
          fontFamily: sans, fontSize: 9, fontWeight: 600,
          letterSpacing: 6, textTransform: 'uppercase',
          color: C.stone, marginBottom: 56,
        }}>
          Brand Identity System · 2026
        </p>

        <h1 style={{
          fontFamily: serif,
          fontSize: 'clamp(44px, 7vw, 88px)',
          fontWeight: 300, letterSpacing: '0.22em',
          color: C.cream, lineHeight: 1,
        }}>
          DIGITAL JENIUS
        </h1>

        <div style={{
          width: 1, height: 72, margin: '36px auto',
          background: `linear-gradient(to bottom, transparent, ${C.gold}, transparent)`,
        }} />

        <p style={{
          fontFamily: serif, fontStyle: 'italic',
          fontSize: 'clamp(18px, 2.2vw, 26px)',
          fontWeight: 300, color: C.stone, letterSpacing: '0.04em',
        }}>
          Every frame, on purpose.
        </p>

        <p style={{
          position: 'absolute', bottom: 36, right: 100,
          fontFamily: sans, fontSize: 9, letterSpacing: 3,
          textTransform: 'uppercase', color: `${C.stone}66`,
        }}>
          Dennis James Eddy · Charlottesville, Virginia
        </p>
      </section>

      {/* ── 2. STORY ── */}
      <section id="story" style={{ ...slide, background: C.black }}>
        <Label>The Story</Label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{
              fontFamily: serif, fontStyle: 'italic',
              fontSize: 'clamp(26px, 3.5vw, 48px)',
              fontWeight: 300, lineHeight: 1.35, color: C.cream,
            }}>
              &ldquo;At 28, life changed.{' '}
              <span style={{ color: C.gold, fontStyle: 'normal' }}>Everything</span>{' '}
              was taken from me.&rdquo;
            </p>
            <div style={{ width: 40, height: 1, background: C.gold, marginTop: 40, opacity: 0.45 }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              'Dennis Eddy received his first camera from his father at 16 — and never looked at the world the same way again. He fell immediately in love with capturing moments, chasing the feeling behind each frame.',
              'Years passed. Life moved. The cameras went quiet.',
              'At 28, Dennis was struck by a train. In that moment, every sense — sight, hearing, smell, taste, touch, and proprioception — was taken from him. After fourteen months in inpatient recovery, something became unmistakably clear: his purpose pointed to photography and videography.',
            ].map((p, i) => (
              <p key={i} style={{ fontFamily: sans, fontSize: 15, fontWeight: 300, color: C.stone, lineHeight: 1.85 }}>
                {p}
              </p>
            ))}
            <p style={{
              fontFamily: serif, fontStyle: 'italic',
              fontSize: 19, fontWeight: 300, color: C.cream, lineHeight: 1.7,
            }}>
              &ldquo;I love what I do because I am following my purpose in life.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. ESSENCE ── */}
      <section id="essence" style={{ ...slide, background: C.mid }}>
        <Label>Brand Essence</Label>
        <SectionTitle>Three pillars that define<br />every creative decision.</SectionTitle>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginTop: 52 }}>
          {[
            {
              num: '01', name: 'Resilient',
              desc: 'Built through survival, not just ambition. The brand carries weight that competitors cannot manufacture — a story that earns trust before a word is spoken.',
            },
            {
              num: '02', name: 'Intentional',
              desc: "Every frame chosen with purpose. Dennis doesn't point and shoot — he sees, considers, and captures. That deliberate precision shows in every touchpoint of the brand.",
            },
            {
              num: '03', name: 'Versatile',
              desc: 'From wildlife to real estate, events to portraits — eight disciplines, one unified vision. Serving the Charlottesville-to-DC corridor and beyond.',
            },
          ].map(p => (
            <div key={p.num} style={{
              background: 'rgba(255,255,255,0.02)',
              border: `1px solid rgba(201,169,110,0.12)`,
              padding: '52px 40px 48px',
            }}>
              <div style={{ fontFamily: serif, fontSize: 72, fontWeight: 300, color: 'rgba(201,169,110,0.12)', lineHeight: 1, marginBottom: 28 }}>{p.num}</div>
              <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase', color: C.gold, marginBottom: 18 }}>{p.name}</div>
              <p style={{ fontFamily: sans, fontSize: 14, fontWeight: 300, color: C.stone, lineHeight: 1.8 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. COLOR SYSTEM ── */}
      <section id="colors" style={{ ...slide, background: C.black }}>
        <Label>Color System</Label>
        <SectionTitle>Direction A — Cinematic</SectionTitle>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 3, marginTop: 52 }}>
          {[
            { bg: '#0D0D0D', border: '#1e1e1e', nameColor: C.cream, hexColor: C.stone, useColor: C.stone, name: 'Near Black',    hex: '#0D0D0D', use: 'Primary background. All main surfaces, hero sections.' },
            { bg: '#F5F3EE', border: 'none',    nameColor: '#1A1A1A', hexColor: C.stone, useColor: C.stone, name: 'Warm Cream',    hex: '#F5F3EE', use: 'Primary text on dark. Headlines, body copy, logo.' },
            { bg: '#C9A96E', border: 'none',    nameColor: '#1A1A1A', hexColor: 'rgba(0,0,0,0.4)', useColor: 'rgba(0,0,0,0.38)', name: 'Highlight Gold', hex: '#C9A96E', use: 'Accent. CTAs, dividers, active states, logo.' },
            { bg: '#3A3835', border: 'none',    nameColor: C.cream, hexColor: C.stone, useColor: C.stone, name: 'Warm Charcoal', hex: '#3A3835', use: 'Cards, secondary surfaces, borders.' },
            { bg: '#7A7672', border: 'none',    nameColor: C.cream, hexColor: 'rgba(245,243,238,0.55)', useColor: 'rgba(245,243,238,0.42)', name: 'Stone Gray',    hex: '#7A7672', use: 'Secondary text. Captions, metadata.' },
          ].map(sw => (
            <div key={sw.hex} style={{
              background: sw.bg,
              border: sw.border !== 'none' ? `1px solid ${sw.border}` : undefined,
              minHeight: 240, padding: '36px 28px 28px',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            }}>
              <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: sw.nameColor, marginBottom: 8 }}>{sw.name}</div>
              <div style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: sw.hexColor, marginBottom: 6 }}>{sw.hex}</div>
              <div style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: sw.useColor, lineHeight: 1.55 }}>{sw.use}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. TYPOGRAPHY ── */}
      <section id="type" style={{ ...slide, background: C.black }}>
        <Label>Typography</Label>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 52 }}>
          {/* Serif */}
          <div style={{ borderTop: `1px solid rgba(201,169,110,0.18)`, paddingTop: 32 }}>
            <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: C.gold, marginBottom: 32 }}>
              Instrument Serif — Headings &amp; Wordmark
            </div>
            <div style={{ fontFamily: serif, fontSize: 104, fontWeight: 300, color: C.cream, lineHeight: 0.88, marginBottom: 32 }}>Aa</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { size: '72px', label: '72px',  sample: 'Display',                  style: { fontSize: 42, fontWeight: 300, color: C.cream, lineHeight: 1 } },
                { size: '48px', label: '48px',  sample: 'Heading One',              style: { fontSize: 30, fontWeight: 300, color: C.cream } },
                { size: '32px', label: '32px',  sample: 'Heading Two',              style: { fontSize: 22, fontWeight: 400, color: C.stone } },
                { size: 'ital', label: 'italic', sample: 'Pull quotes & emphasis',  style: { fontSize: 19, fontStyle: 'italic', fontWeight: 300, color: C.stone } },
              ].map(row => (
                <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 16, alignItems: 'baseline', borderBottom: `1px solid rgba(255,255,255,0.04)`, padding: '14px 0' }}>
                  <span style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 2, color: `${C.stone}88`, textTransform: 'uppercase' }}>{row.label}</span>
                  <span style={{ fontFamily: serif, ...row.style }}>{row.sample}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sans */}
          <div style={{ borderTop: `1px solid rgba(201,169,110,0.18)`, paddingTop: 32 }}>
            <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: C.gold, marginBottom: 32 }}>
              Inter — Body &amp; UI
            </div>
            <div style={{ fontFamily: sans, fontSize: 104, fontWeight: 300, color: C.cream, lineHeight: 0.88, marginBottom: 32 }}>Aa</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { label: '600',  sample: 'Navigation & Labels',                  style: { fontSize: 16, fontWeight: 600, color: C.cream } },
                { label: '400',  sample: 'Body — clean, readable, neutral',      style: { fontSize: 15, fontWeight: 400, color: C.stone } },
                { label: 'caps', sample: 'SECTION LABELS & TAGS',                style: { fontSize: 9,  fontWeight: 600, letterSpacing: 5, textTransform: 'uppercase', color: C.gold } },
                { label: '300',  sample: 'Captions, metadata, fine print',       style: { fontSize: 12, fontWeight: 300, color: C.stone } },
              ].map(row => (
                <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 16, alignItems: 'baseline', borderBottom: `1px solid rgba(255,255,255,0.04)`, padding: '14px 0' }}>
                  <span style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 2, color: `${C.stone}88`, textTransform: 'uppercase' }}>{row.label}</span>
                  <span style={{ fontFamily: sans, ...row.style as React.CSSProperties }}>{row.sample}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. LOGO ── */}
      <section id="logo" style={{ ...slide, background: C.mid }}>
        <Label>Logo System</Label>
        <SectionTitle>Mark &amp; Wordmark</SectionTitle>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3, marginTop: 52 }}>
          {/* Primary on dark */}
          <div style={{ background: C.black, border: `1px solid rgba(255,255,255,0.05)`, padding: '64px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36 }}>
            <svg viewBox="0 0 480 110" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 400 }}>
              <text x="240" y="60" textAnchor="middle" fontFamily="'Instrument Serif', Georgia, serif" fontSize="36" fontWeight="300" fill={C.cream} letterSpacing="10">DIGITAL JENIUS</text>
              <line x1="20" y1="78" x2="460" y2="78" stroke={C.gold} strokeWidth="0.8" />
              <text x="240" y="98" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="400" fill={C.stone} letterSpacing="5">PHOTOGRAPHY · VIDEOGRAPHY</text>
            </svg>
            <span style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: C.stone }}>Primary — Dark Background</span>
          </div>

          {/* Monogram */}
          <div style={{ background: '#252220', padding: '64px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36 }}>
            <svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" style={{ width: 130, height: 130 }}>
              <circle cx="65" cy="65" r="58" fill="none" stroke={C.gold} strokeWidth="1.2" />
              <circle cx="65" cy="65" r="51" fill="none" stroke={C.gold} strokeWidth="0.3" opacity="0.35" />
              <text x="65" y="84" textAnchor="middle" fontFamily="'Instrument Serif', Georgia, serif" fontSize="46" fontWeight="300" fill={C.cream} letterSpacing="3">DJ</text>
            </svg>
            <span style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: C.stone }}>Monogram Mark</span>
          </div>

          {/* Reversed on cream */}
          <div style={{ background: C.cream, padding: '64px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36 }}>
            <svg viewBox="0 0 480 110" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 400 }}>
              <text x="240" y="60" textAnchor="middle" fontFamily="'Instrument Serif', Georgia, serif" fontSize="36" fontWeight="300" fill={C.black} letterSpacing="10">DIGITAL JENIUS</text>
              <line x1="20" y1="78" x2="460" y2="78" stroke="#8B6019" strokeWidth="0.8" />
              <text x="240" y="98" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="400" fill={C.stone} letterSpacing="5">PHOTOGRAPHY · VIDEOGRAPHY</text>
            </svg>
            <span style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#aaa' }}>Reversed — Light Background</span>
          </div>
        </div>
      </section>

      {/* ── 7. VOICE ── */}
      <section id="voice" style={{ ...slide, background: C.black }}>
        <Label>Brand Voice</Label>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, marginTop: 52 }}>
          <div>
            {/* Tone pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
              {['Purposeful', 'Confident', 'Warm', 'Unfiltered'].map(t => (
                <span key={t} style={{
                  border: `1px solid rgba(201,169,110,0.3)`,
                  color: C.gold, padding: '8px 22px',
                  fontFamily: sans, fontSize: 9, fontWeight: 600,
                  letterSpacing: 3, textTransform: 'uppercase',
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Do/Don't */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              <div style={{ background: 'rgba(201,169,110,0.05)', padding: '28px 22px' }}>
                <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: C.gold, marginBottom: 20 }}>Write this</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {['Direct, honest language', "First person — 'I shoot'", 'Emotion-led storytelling', 'Short, punchy sentences', 'Virginia-rooted specifics'].map(item => (
                    <li key={item} style={{ fontFamily: sans, fontSize: 12, fontWeight: 300, color: C.stone, lineHeight: 1.5, paddingLeft: 16, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: C.gold }}>→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '28px 22px' }}>
                <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: C.stone, marginBottom: 20 }}>Not this</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {['Corporate filler words', 'Passive voice overuse', 'Generic photo clichés', 'Overpromising', 'Industry jargon'].map(item => (
                    <li key={item} style={{ fontFamily: sans, fontSize: 12, fontWeight: 300, color: C.stone, lineHeight: 1.5, paddingLeft: 16, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'rgba(255,255,255,0.15)' }}>×</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            {/* About Us */}
            <div style={{ borderTop: `1px solid rgba(201,169,110,0.18)`, paddingTop: 32, marginBottom: 36 }}>
              <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: C.gold, marginBottom: 20 }}>About Us — Final Copy</div>
              <p style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: C.stone }}>
                Dennis Eddy received his first camera at 16 — and never looked at the world the same way again. After years away from the lens, a life-altering accident at 28 stripped him of every sense, all at once. What emerged from 14 months of recovery wasn&apos;t just survival — it was{' '}
                <span style={{ color: C.cream }}>purpose</span>. Today, Digital Jenius is the result of a man who fought to see again, and chose to spend that sight capturing the moments that matter most. Every shoot is intentional. Every frame,{' '}
                <span style={{ color: C.cream }}>earned</span>.
              </p>
            </div>

            {/* Tagline alts */}
            <div style={{ borderTop: `1px solid rgba(255,255,255,0.05)`, paddingTop: 28 }}>
              <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: C.gold, marginBottom: 20 }}>Tagline Options</div>
              {[
                { text: 'Every frame, on purpose.', size: 22, color: C.cream },
                { text: 'See what matters. Capture what lasts.', size: 17, color: C.stone },
                { text: 'Built to capture. Born to create.', size: 17, color: C.stone },
              ].map(t => (
                <p key={t.text} style={{ fontFamily: serif, fontStyle: 'italic', fontSize: t.size, fontWeight: 300, color: t.color, lineHeight: 1.4, marginBottom: 12 }}>
                  {t.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. SERVICES ── */}
      <section id="services" style={{ ...slide, background: C.mid }}>
        <Label>Service Architecture</Label>
        <SectionTitle>Eight disciplines.<br />One vision.</SectionTitle>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginTop: 52 }}>
          {[
            { icon: '🎉', title: 'Event Photography',    desc: 'Weddings, corporate events, celebrations — every milestone documented with care and precision.' },
            { icon: '⚡', title: 'Sports Photography',   desc: 'High-speed, high-stakes action. Athletes, teams, and game-day moments captured in motion.' },
            { icon: '🐾', title: 'Animal & Pet',         desc: 'Portraits that capture personality — for families, breeders, shelters, and pet brands.' },
            { icon: '🎭', title: 'Portrait Photography', desc: 'Individual, family, and professional portraits delivered with editorial quality.' },
            { icon: '📦', title: 'Product Photography',  desc: 'E-commerce, brand campaigns, and catalog — your product, perfected for the screen.' },
            { icon: '🦅', title: 'Wildlife Photography', desc: "Virginia's landscapes and wildlife, documented with patience, respect, and precision." },
            { icon: '🏠', title: 'Real Estate',          desc: 'Listings that sell faster. Interior and exterior photography for agents and developers.' },
            { icon: '🎬', title: 'Documentary',          desc: 'Long-form visual storytelling — people, places, and journeys that deserve to be remembered.' },
          ].map(svc => (
            <div key={svc.title} style={{
              background: 'rgba(255,255,255,0.02)',
              border: `1px solid rgba(201,169,110,0.08)`,
              padding: '36px 28px',
            }}>
              <span style={{ fontSize: 26, marginBottom: 20, display: 'block' }}>{svc.icon}</span>
              <div style={{ fontFamily: serif, fontSize: 19, fontWeight: 400, color: C.cream, marginBottom: 10, lineHeight: 1.2 }}>{svc.title}</div>
              <p style={{ fontFamily: sans, fontSize: 12, fontWeight: 300, color: C.stone, lineHeight: 1.7 }}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 9. APPLICATIONS ── */}
      <section id="apps" style={{ ...slide, background: C.black }}>
        <Label>Brand Applications</Label>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, marginTop: 52, alignItems: 'start' }}>
          {/* Business card */}
          <div>
            <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', color: C.stone, marginBottom: 24 }}>
              Business Card — Front
            </div>
            <div style={{
              background: C.black, border: `1px solid #222`,
              padding: '44px 48px', aspectRatio: '1.75',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              boxShadow: `0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,169,110,0.08)`,
              maxWidth: 460,
            }}>
              <div>
                <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 300, letterSpacing: '0.18em', color: C.cream }}>DIGITAL JENIUS</div>
                <div style={{ width: 28, height: 1, background: C.gold, margin: '14px 0' }} />
                <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: C.gold }}>Dennis James Eddy</div>
              </div>
              <div style={{ fontFamily: sans, fontSize: 10, fontWeight: 300, color: C.stone, lineHeight: 2, letterSpacing: '0.3px' }}>
                Photography &amp; Videography<br />
                (434) 400-9422<br />
                Charlottesville, Virginia<br />
                By appointment — 7 days a week
              </div>
            </div>
          </div>

          {/* Instagram mock */}
          <div>
            <div style={{ fontFamily: sans, fontSize: 9, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', color: C.stone, marginBottom: 24 }}>
              Instagram Profile Preview
            </div>
            <div style={{ background: '#111', border: `1px solid rgba(255,255,255,0.06)`, overflow: 'hidden', maxWidth: 420, boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}>
              <div style={{ padding: '22px 20px', display: 'flex', alignItems: 'center', gap: 18, borderBottom: `1px solid rgba(255,255,255,0.05)` }}>
                <div style={{ width: 68, height: 68, borderRadius: '50%', border: `1.5px solid ${C.gold}`, background: C.charcoal, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: serif, fontSize: 24, fontWeight: 300, color: C.gold }}>DJ</span>
                </div>
                <div>
                  <div style={{ fontFamily: sans, fontSize: 14, fontWeight: 600, color: C.cream, marginBottom: 4 }}>@digitaljenius</div>
                  <div style={{ fontFamily: sans, fontSize: 11, fontWeight: 300, color: C.stone, lineHeight: 1.6 }}>
                    📍 Charlottesville → Northern VA · DC<br />
                    Photography &amp; Documentary Film<br />
                    <span style={{ color: C.gold, fontSize: 10, letterSpacing: 1 }}>Every frame, on purpose. ✦</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                {['#1a1a18','#161614','#1e1c1a','#191816','#151412','#1c1a18'].map((bg, i) => (
                  <div key={i} style={{ aspectRatio: '1', background: bg }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. NEXT STEPS ── */}
      <section id="next" style={{ ...slide, background: C.black }}>
        <Label>Next Steps</Label>
        <SectionTitle>From brand to build.</SectionTitle>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginTop: 52 }}>
          {[
            [
              { n: '01', title: 'Confirm Brand Direction',   desc: 'Approve Direction A (Cinematic) or request adjustments to colors, fonts, or tagline before development begins.' },
              { n: '02', title: 'Logo Finalization',         desc: 'Polish the wordmark and monogram into production-ready SVG files — dark, light, and monochrome versions.' },
              { n: '03', title: 'Photography Assets',        desc: 'Gather portfolio images organized by service category to populate the website gallery sections.' },
              { n: '04', title: 'Confirm Shipping Address',  desc: 'Needed for business registration and any physical mail or print materials.' },
            ],
            [
              { n: '05', title: 'Build the Website',        desc: 'Next.js site built on this design system — homepage, services, about, gallery, and contact with booking form.' },
              { n: '06', title: 'Social Media Setup',       desc: 'Instagram, Facebook, and TikTok profiles with consistent branding, bio copy, and first-post content plan.' },
              { n: '07', title: 'Google Business Profile',  desc: 'Set up and optimize GMB listing for Charlottesville — service areas, categories, photos, and reviews strategy.' },
              { n: '08', title: 'Booking System',           desc: 'Online inquiry and session request form so clients can reach Dennis directly from any page.' },
            ],
          ].map((col, ci) => (
            <ul key={ci} style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
              {col.map(step => (
                <li key={step.n} style={{ display: 'flex', gap: 24, alignItems: 'flex-start', padding: '24px 0', borderBottom: `1px solid rgba(255,255,255,0.05)` }}>
                  <span style={{ fontFamily: serif, fontSize: 32, fontWeight: 300, color: 'rgba(201,169,110,0.2)', lineHeight: 1, flexShrink: 0, width: 36, marginTop: 2 }}>{step.n}</span>
                  <div>
                    <strong style={{ display: 'block', fontFamily: sans, fontSize: 13, fontWeight: 500, color: C.cream, letterSpacing: '0.5px', marginBottom: 5 }}>{step.title}</strong>
                    <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 300, color: C.stone, lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>
    </div>
  )
}
