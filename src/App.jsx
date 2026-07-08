import { useState, useEffect, useRef, useCallback } from 'react'
import useInView from './hooks/useInView'

/* ============================================================
   IMAGE FALLBACK HELPER
   ============================================================ */
const FALLBACK_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" fill="%23D7263D30"%3E%3Crect width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Inter,sans-serif" font-size="24" fill="%23D7263D"%3EImage%3C/text%3E%3C/svg%3E'
const imgErrorHandler = (e) => { e.target.onerror = null; e.target.src = FALLBACK_IMG }

/* ============================================================
   FADE-UP ANIMATION WRAPPER
   ============================================================ */
function AnimateOnView({ children, className = '', delay = 0, style = {} }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}

/* ============================================================
   SECTION HEADER
   ============================================================ */
function SectionHeader({ title, subtitle, light = false }) {
  return (
    <div className={`text-center max-w-2xl mx-auto mb-10 md:mb-14 ${light ? 'text-white' : ''}`}>
      <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3">{title}</h2>
      {subtitle && <p className={`${light ? 'text-white/80' : 'text-berry-ink/60'} text-sm md:text-base`}>{subtitle}</p>}
      <div className={`w-16 h-1 rounded-full mx-auto mt-4 ${light ? 'bg-cta' : 'bg-primary'}`} />
    </div>
  )
}

/* ============================================================
   DATA
   ============================================================ */
const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'countries', label: 'Countries' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
]

const PHONE = '051-5565015'
const PHONE2 = '051-579140'
const WHATSAPP = '923001518073'
const WHATSAPP_LINK = 'https://wa.me/923001518073'
const EMAIL = 'info@travelkashmir.pk'
const ADDRESS = 'Office No. 20/62, 1st Floor, Bank Road, Opp. Poonch House, Saddar, Rawalpindi, Punjab'
const LAT = '33.59575574573761'
const LNG = '73.05433239999999'
const LICENSE = '2275/RWP'

const STATS = [
  { icon: 'fa-users', label: 'Workers Placed', value: '5000+' },
  { icon: 'fa-globe-asia', label: 'Countries Served', value: '9+' },
  { icon: 'fa-calendar', label: 'Years of Service', value: '12+' },
  { icon: 'fa-certificate', label: 'Govt. Licensed', value: LICENSE },
]

const SERVICES = [
  { icon: 'fa-user-tie', title: 'Manpower Recruitment', desc: 'End-to-end recruitment for Gulf & European employers across all sectors.', color: 'from-primary to-highlight', img: '/images/services-recruitment.jpg' },
  { icon: 'fa-plane', title: 'Air Ticketing & Travel', desc: 'Full travel arrangements including flight bookings, transit support, and group travel.', color: 'from-secondary to-primary', img: '/images/services-travel.jpg' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'Complete visa application assistance for work, visit, and transit visas.', color: 'from-accent to-secondary', img: '/images/services-visa.jpg' },
  { icon: 'fa-stethoscope', title: 'Medical Checks', desc: 'Coordinated medical examinations at approved centers for overseas requirements.', color: 'from-cta to-accent', img: '/images/services-medical.jpg' },
  { icon: 'fa-graduation-cap', title: 'Pre-Departure Training', desc: 'Cultural orientation, language basics, and soft skills for international roles.', color: 'from-primary to-accent', img: '/images/services-training.jpg' },
  { icon: 'fa-scale-balanced', title: 'Legal Documentation', desc: 'Contracts, attestations, insurance, and all legal paperwork handled.', color: 'from-secondary to-cta', img: '/images/services-legal.jpg' },
  { icon: 'fa-house-chimney', title: 'Accommodation Support', desc: 'Assistance with finding safe, affordable housing near your workplace.', color: 'from-accent to-primary', img: '/images/services-housing.jpg' },
  { icon: 'fa-shield-halved', title: 'Travel Insurance', desc: 'Comprehensive coverage plans for health,行李, and trip protection.', color: 'from-cta to-highlight', img: '/images/services-insurance.jpg' },
]

const COUNTRIES = [
  { name: 'Saudi Arabia', capital: 'Riyadh', flag: '🇸🇦', img: '/images/country-saudi.jpg', jobs: 'Construction, Healthcare, IT, Hospitality' },
  { name: 'UAE', capital: 'Abu Dhabi', flag: '🇦🇪', img: '/images/country-uae.jpg', jobs: 'Construction, Logistics, Hospitality' },
  { name: 'Qatar', capital: 'Doha', flag: '🇶🇦', img: '/images/country-qatar.jpg', jobs: 'Construction, Oil & Gas, Hospitality' },
  { name: 'Oman', capital: 'Muscat', flag: '🇴🇲', img: '/images/country-oman.jpg', jobs: 'Construction, Logistics, Retail' },
  { name: 'Kuwait', capital: 'Kuwait City', flag: '🇰🇼', img: '/images/country-kuwait.jpg', jobs: 'Oil & Gas, Construction, Healthcare' },
  { name: 'Germany', capital: 'Berlin', flag: '🇩🇪', img: '/images/country-germany.jpg', jobs: 'IT, Engineering, Healthcare, Skilled Trades' },
  { name: 'Malaysia', capital: 'Kuala Lumpur', flag: '🇲🇾', img: '/images/country-malaysia.jpg', jobs: 'Manufacturing, IT, Tourism' },
  { name: 'Romania', capital: 'Bucharest', flag: '🇷🇴', img: '/images/country-romania.jpg', jobs: 'Construction, IT, Hospitality' },
  { name: 'Turkey', capital: 'Istanbul', flag: '🇹🇷', img: '/images/country-turkey.jpg', jobs: 'Construction, Tourism, Manufacturing' },
]

const PROCESS_STEPS = [
  { step: 1, title: 'Inquiry & Registration', desc: 'Contact us via phone, WhatsApp, or visit our office. Register your details and express interest.', icon: 'fa-phone-volume' },
  { step: 2, title: 'Documentation', desc: 'Submit your CV, passport, and relevant certificates. We guide you through the entire paperwork.', icon: 'fa-file-lines' },
  { step: 3, title: 'Visa Application', desc: 'We process your work visa through official channels and coordinate with the employer.', icon: 'fa-passport' },
  { step: 4, title: 'Medical & Training', desc: 'Complete medical checks and pre-departure orientation at our partnered facilities.', icon: 'fa-stethoscope' },
  { step: 5, title: 'Travel & Deployment', desc: 'We book your flight and handle travel logistics. Welcome to your new job!', icon: 'fa-plane-departure' },
]

const TESTIMONIALS = [
  { name: 'Ahmed Khan', role: 'Construction Supervisor, Saudi Arabia', text: 'Travel Kashmir made the entire process smooth and transparent. From documentation to flight, everything was handled professionally.', avatar: '/images/testimonial-1.jpg', initials: 'AK' },
  { name: 'Muhammad Riaz', role: 'Driver, UAE', text: 'I was placed within 3 weeks of applying. The team guided me at every step. Highly recommended for anyone seeking overseas work.', avatar: '/images/testimonial-2.jpg', initials: 'MR' },
  { name: 'Sajid Hussain', role: 'Technician, Qatar', text: 'Professional service from start to finish. The pre-departure training was especially helpful. Grateful to the entire team!', avatar: '/images/testimonial-3.jpg', initials: 'SH' },
]

const FAQS = [
  { q: 'What documents do I need to apply?', a: 'You need a valid passport (6+ months validity), CNIC, passport-size photographs, educational certificates, and any relevant professional certifications.' },
  { q: 'How long does the visa process take?', a: 'Processing times vary by country, but typically range from 2 to 8 weeks. We keep you updated at every stage.' },
  { q: 'Do you provide pre-departure training?', a: 'Yes, we offer comprehensive pre-departure orientation covering cultural awareness, language basics, and workplace expectations.' },
  { q: 'What countries do you recruit for?', a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman, Kuwait, Germany, Malaysia, Romania, Turkey, and more.' },
  { q: 'Is Travel Kashmir a licensed agency?', a: 'Yes, we are fully licensed by the Government of Pakistan under License No. 2275/RWP, and we strictly follow all regulations.' },
  { q: 'What are the fees involved?', a: 'Fees vary based on the country and position. We maintain complete transparency — all charges are disclosed upfront with receipts.' },
]

const GALLERY_IMAGES = [
  '/images/gallery-1.jpg', '/images/gallery-2.jpg', '/images/gallery-3.jpg',
  '/images/gallery-4.jpg', '/images/gallery-5.jpg', '/images/gallery-6.jpg',
]

/* ============================================================
   NAVBAR
   ============================================================ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`mx-auto transition-all duration-300 flex items-center justify-between px-4 md:px-6 rounded-full ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-primary/10 py-2' : 'bg-white/80 backdrop-blur-sm py-2.5'}`}>
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-highlight flex items-center justify-center text-white font-extrabold text-xs md:text-sm shadow-md">
              TK
            </div>
            <div className="hidden sm:block min-w-0">
              <p className="text-berry-ink font-bold text-xs md:text-sm leading-tight">Travel Kashmir</p>
              <p className="text-primary/60 text-[10px] font-medium">{LICENSE}</p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-berry-ink/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {item.label}
              </button>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 bg-cta text-white px-4 py-1.5 rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-md shadow-cta/30"
            >
              <i className="fab fa-whatsapp text-xs" /> Apply
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-berry-ink p-1" aria-label="Menu">
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-lg`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden mx-4 mt-1 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-primary/10 p-3 animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-berry-ink/70 hover:text-primary hover:bg-primary/5 transition-all"
            >
              {item.label}
            </button>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-cta text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-all"
          >
            <i className="fab fa-whatsapp" /> Apply Now
          </a>
        </div>
      )}
    </nav>
  )
}

/* ============================================================
   MARQUEE
   ============================================================ */
function MarqueeBar() {
  return (
    <div className="bg-primary mt-20 text-white py-2 overflow-hidden text-sm font-medium">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        <span>✦ Govt. Licensed — {LICENSE}</span>
        <span>✦ Office 20/62, Bank Road, Saddar, Rawalpindi</span>
        <span>✦ {PHONE} | {PHONE2}</span>
        <span>✦ WhatsApp: 0300-1518073</span>
        <span>✦ From the Valleys to the World — Work Awaits</span>
        <span>✦ Govt. Licensed — {LICENSE}</span>
        <span>✦ Office 20/62, Bank Road, Saddar, Rawalpindi</span>
        <span>✦ {PHONE} | {PHONE2}</span>
        <span>✦ WhatsApp: 0300-1518073</span>
        <span>✦ From the Valleys to the World — Work Awaits</span>
      </div>
    </div>
  )
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-44 md:pb-20 overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/4 w-48 h-48 bg-cta/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <AnimateOnView delay={0}>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                <i className="fas fa-certificate" /> License {LICENSE}
              </span>
            </AnimateOnView>
            <AnimateOnView delay={100}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-berry-ink mb-4">
                From the Valleys to the World — <span className="text-primary">Work Awaits</span>
              </h1>
            </AnimateOnView>
            <AnimateOnView delay={200}>
              <p className="text-berry-ink/70 text-sm md:text-base max-w-xl mx-auto md:mx-0 mb-6 leading-relaxed">
                Travel Kashmir Manpower places workers with trusted Gulf and European employers, and handles the travel too — licensed and complete.
              </p>
            </AnimateOnView>
            <AnimateOnView delay={300} className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href={`${WHATSAPP_LINK}?text=*Application%20-%20Travel%20Kashmir*%0A%0A`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-all shadow-lg shadow-cta/30 animate-pulse-glow"
              >
                <i className="fas fa-paper-plane" /> Apply Now
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-berry-ink font-semibold px-6 py-3 rounded-full text-sm hover:bg-primary/5 transition-all border-2 border-primary/20 shadow-md"
              >
                <i className="fab fa-whatsapp text-[#25D366]" /> WhatsApp
              </a>
            </AnimateOnView>

            {/* Stat chips */}
            <AnimateOnView delay={400} className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-xs text-berry-ink/60">
                <i className="fas fa-check-circle text-cta" /> <span>5000+ Placed</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-berry-ink/60">
                <i className="fas fa-check-circle text-cta" /> <span>9+ Countries</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-berry-ink/60">
                <i className="fas fa-check-circle text-cta" /> <span>12+ Years</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-berry-ink/60">
                <i className="fas fa-check-circle text-cta" /> <span>Govt. Licensed</span>
              </div>
            </AnimateOnView>
          </div>

          {/* Right: Image blob */}
          <AnimateOnView delay={150} className="flex-1 max-w-md">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto animate-blob overflow-hidden shadow-2xl shadow-primary/20">
                <img
                  src="/images/hero-worker.jpg"
                  alt="Travel Kashmir Manpower"
                  className="w-full h-full object-cover"
                  onError={imgErrorHandler}
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-cta text-white rounded-xl px-3 py-1.5 md:px-4 md:py-2 shadow-lg animate-float">
                <p className="text-xs md:text-sm font-bold">License {LICENSE}</p>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-20 h-20 opacity-20">
                <div className="grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   STATS BAND
   ============================================================ */
function StatsBand() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const [counts, setCounts] = useState({})

  useEffect(() => {
    if (!inView) return
    const targets = [5000, 9, 12, 1]
    const duration = 2000
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      setCounts({
        0: Math.floor(progress * targets[0]),
        1: Math.floor(progress * targets[1]),
        2: Math.floor(progress * targets[2]),
        3: 1,
      })
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView])

  return (
    <section ref={ref} className="bg-gradient-to-r from-primary via-highlight to-primary py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center text-white">
              <i className={`fas ${stat.icon} text-2xl md:text-3xl mb-2 opacity-80`} />
              <div className="text-2xl md:text-4xl font-extrabold">
                {counts[i] !== undefined ? (
                  stat.value.includes('+') ? `${counts[i]}+` : stat.value
                ) : (
                  <span className="opacity-0">0</span>
                )}
              </div>
              <p className="text-sm md:text-base text-white/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   ABOUT
   ============================================================ */
function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="About Travel Kashmir" subtitle="Your trusted partner in overseas manpower recruitment since 2013" />
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <AnimateOnView className="flex-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="/images/about-office.jpg" alt="Travel Kashmir Office" className="w-full h-72 md:h-80 object-cover" onError={imgErrorHandler} loading="lazy" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-xl px-4 py-2 shadow-lg">
                <p className="font-bold text-sm">Since 2013</p>
              </div>
            </div>
          </AnimateOnView>
          <AnimateOnView delay={150} className="flex-1">
            <p className="text-berry-ink/70 text-sm md:text-base leading-relaxed mb-4">
              Based at <strong>Bank Road, Saddar, Rawalpindi</strong>, Travel Kashmir Manpower Recruiting Agency is a government-licensed overseas employment provider (License No. {LICENSE}) dedicated to connecting Pakistani workers with reputable employers across the Gulf and Europe.
            </p>
            <p className="text-berry-ink/70 text-sm md:text-base leading-relaxed mb-6">
              With over 12 years of experience, we have successfully placed thousands of skilled and semi-skilled workers in Saudi Arabia, UAE, Qatar, Oman, Kuwait, Germany, Malaysia, Romania, and Turkey. Our comprehensive services include recruitment, visa processing, air ticketing, medical checks, and pre-departure training.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Licensed & Regulated', '12+ Years Experience', '5000+ Placed', 'End-to-End Service', 'Transparent Fees'].map((chip) => (
                <span key={chip} className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                  <i className="fas fa-check-circle text-[10px]" /> {chip}
                </span>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SERVICES
   ============================================================ */
function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Our Services" subtitle="Comprehensive manpower and travel solutions — from recruitment to deployment" />
        <div className="masonry-grid">
          {SERVICES.map((svc, i) => (
            <AnimateOnView key={svc.title} delay={i * 60}>
              <div className={`bg-gradient-to-br ${svc.color} rounded-2xl p-5 md:p-6 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <i className={`fas ${svc.icon} text-lg`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm md:text-base">{svc.title}</h3>
                    <p className="text-white/70 text-xs mt-1 leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
                <img src={svc.img} alt={svc.title} className="w-full h-32 md:h-36 object-cover rounded-xl mt-2" onError={imgErrorHandler} loading="lazy" />
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   COUNTRY GUIDE
   ============================================================ */
function CountryGuide() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? COUNTRIES : COUNTRIES.slice(0, 6)

  return (
    <section id="countries" className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Country Guide" subtitle="We connect you with verified employers across these destinations" />

        {/* Landmark cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {displayed.map((country, i) => (
            <AnimateOnView key={country.name} delay={i * 80}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-primary/10 group">
                <div className="relative h-40 overflow-hidden">
                  <img src={country.img} alt={country.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={imgErrorHandler} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-2xl">{country.flag}</span>
                    <h3 className="font-bold text-lg leading-tight">{country.name}</h3>
                    <p className="text-white/80 text-xs">{country.capital}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-berry-ink/60 text-xs">
                    <i className="fas fa-briefcase text-primary mr-1" /> {country.jobs}
                  </p>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>

        {/* Chip grid */}
        <AnimateOnView>
          <div className="bg-white rounded-2xl shadow-md p-5 md:p-6 border border-primary/10">
            <p className="text-sm font-bold text-berry-ink mb-3"><i className="fas fa-globe-asia text-primary mr-2" />Active Destinations</p>
            <div className="flex flex-wrap gap-2">
              {COUNTRIES.map((c) => (
                <span key={c.name} className="inline-flex items-center gap-1.5 bg-primary/5 text-berry-ink text-sm px-3 py-1.5 rounded-full border border-primary/10 hover:bg-primary/10 transition-all">
                  <span>{c.flag}</span> {c.name}
                </span>
              ))}
            </div>
          </div>
        </AnimateOnView>

        {COUNTRIES.length > 6 && (
          <div className="text-center mt-6">
            <button onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
            >
              {showAll ? 'Show Less' : `View All ${COUNTRIES.length} Countries`}
              <i className={`fas fa-chevron-${showAll ? 'up' : 'down'} text-xs`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ============================================================
   PROCESS
   ============================================================ */
function Process() {
  return (
    <section id="process" className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-primary via-highlight to-accent">
      {/* Diagonal overlay */}
      <div className="absolute inset-0 bg-diagonal opacity-30" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <SectionHeader title="How It Works" subtitle="Your journey to overseas employment in 5 simple steps" light />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-white/20" />

          {PROCESS_STEPS.map((step, i) => (
            <AnimateOnView key={step.step} delay={i * 100}>
              <div className="relative text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center mb-3 relative z-10">
                  <span className="text-2xl md:text-3xl font-extrabold text-white">{step.step}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-white/20">
                  <i className={`fas ${step.icon} text-white text-lg md:text-xl mb-2`} />
                  <h3 className="text-white font-bold text-sm md:text-base">{step.title}</h3>
                  <p className="text-white/70 text-xs mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="What Our Workers Say" subtitle="Real stories from people we've helped place overseas" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <AnimateOnView key={t.name} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-primary/10 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" onError={imgErrorHandler} loading="lazy" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-cta rounded-full flex items-center justify-center text-white text-[8px] border-2 border-white">
                      <i className="fas fa-check" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-berry-ink text-sm">{t.name}</p>
                    <p className="text-berry-ink/50 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-berry-ink/70 text-sm leading-relaxed">
                  <i className="fas fa-quote-left text-primary/20 text-sm mr-1" />
                  {t.text}
                </p>
                <div className="flex gap-1 mt-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i key={s} className="fas fa-star text-[10px] text-amber-400" />
                  ))}
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   GALLERY STRIP
   ============================================================ */
function GalleryStrip() {
  return (
    <section className="py-12 md:py-16 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Our Gallery" subtitle="Moments from our journey" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {GALLERY_IMAGES.map((src, i) => (
            <AnimateOnView key={i} delay={i * 60}>
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-28 md:h-32 object-cover group-hover:scale-110 transition-transform duration-500" onError={imgErrorHandler} loading="lazy" />
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   CTA BAND
   ============================================================ */
function CTABand() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-highlight to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-diagonal opacity-20" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <AnimateOnView>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">Ready to Start Your International Career?</h2>
          <p className="text-white/80 text-sm md:text-base mb-8 max-w-xl mx-auto">
            Take the first step today. Contact us for a free consultation and let us help you find the right opportunity abroad.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`${WHATSAPP_LINK}?text=*Application%20-%20Travel%20Kashmir*%0A%0A`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-all shadow-lg shadow-cta/30 animate-pulse-glow"
            >
              <i className="fab fa-whatsapp" /> Apply Now on WhatsApp
            </a>
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-white/30 transition-all border border-white/30"
            >
              <i className="fas fa-phone" /> Call {PHONE}
            </a>
          </div>
        </AnimateOnView>
      </div>
    </section>
  )
}

/* ============================================================
   CONTACT + MAP
   ============================================================ */
function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleWhatsApp = (e) => {
    e.preventDefault()
    const text = `*Travel Kashmir Inquiry*%0A%0A_Name:_ ${encodeURIComponent(form.name)}%0A_Phone:_ ${encodeURIComponent(form.phone)}%0A_Message:_ ${encodeURIComponent(form.message || 'N/A')}`
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Contact Us" subtitle="Reach out — we're here to help" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <AnimateOnView>
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-primary/10">
              <h3 className="text-lg font-bold text-berry-ink mb-4">Send us a Message</h3>
              <form onSubmit={handleWhatsApp} className="space-y-4">
                <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 text-sm outline-none focus:border-primary bg-background text-berry-ink" />
                <input type="tel" name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 text-sm outline-none focus:border-primary bg-background text-berry-ink" />
                <textarea name="message" placeholder="Your Message (optional)" rows={4} value={form.message} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 text-sm outline-none focus:border-primary bg-background text-berry-ink resize-none" />
                <button type="submit"
                  className="w-full bg-cta text-white font-bold py-3 rounded-xl text-sm hover:opacity-90 transition-all shadow-md shadow-cta/30"
                >
                  <i className="fab fa-whatsapp mr-2" /> Send via WhatsApp
                </button>
              </form>
              <p className="text-center text-xs text-berry-ink/40 mt-3">
                Or email us at <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>
              </p>
            </div>
          </AnimateOnView>

          {/* Info + Map */}
          <AnimateOnView delay={100}>
            <div className="space-y-5">
              {/* Contact info */}
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-primary/10 space-y-4">
                <h3 className="text-lg font-bold text-berry-ink">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <i className="fas fa-map-marker-alt text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-berry-ink">Address</p>
                      <p className="text-xs text-berry-ink/60">{ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <i className="fas fa-phone text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-berry-ink">Phone</p>
                      <a href={`tel:${PHONE}`} className="text-xs text-berry-ink/60 hover:text-primary block">{PHONE}</a>
                      <a href={`tel:${PHONE2}`} className="text-xs text-berry-ink/60 hover:text-primary block">{PHONE2}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <i className="fab fa-whatsapp text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-berry-ink">WhatsApp</p>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-berry-ink/60 hover:text-primary">0300-1518073</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <i className="fas fa-envelope text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-berry-ink">Email</p>
                      <a href={`mailto:${EMAIL}`} className="text-xs text-berry-ink/60 hover:text-primary">{EMAIL}</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-primary/10 h-56 md:h-64">
                <iframe
                  title="Travel Kashmir Location"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${LNG}%2C${LAT}%2C${LNG}%2C${LAT}&layer=mapnik&marker=${LAT}%2C${LNG}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={`https://www.google.com/maps?q=${LAT},${LNG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
              >
                <i className="fas fa-map-pin" /> View on Google Maps
              </a>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FAQ
   ============================================================ */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-20 bg-primary/5">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeader title="Frequently Asked Questions" subtitle="Everything you need to know about working with us" />
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <AnimateOnView key={i} delay={i * 60}>
              <div className="bg-white rounded-xl shadow-sm border border-primary/10 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                >
                  <span className="text-sm md:text-base font-semibold text-berry-ink pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-${openIndex === i ? 'up' : 'down'} text-primary text-xs shrink-0 transition-transform duration-200`} />
                </button>
                {openIndex === i && (
                  <div className="px-4 md:px-5 pb-4 md:pb-5">
                    <p className="text-berry-ink/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="bg-highlight text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-extrabold text-sm">
                TK
              </div>
              <div>
                <p className="font-bold text-sm">Travel Kashmir</p>
                <p className="text-white/50 text-xs">License {LICENSE}</p>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed">
              From the Valleys to the World. Your trusted partner in overseas manpower recruitment and travel services.
            </p>
            <div className="flex gap-3 mt-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" aria-label="WhatsApp">
                <i className="fab fa-whatsapp text-sm" />
              </a>
              <a href={`mailto:${EMAIL}`} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" aria-label="Email">
                <i className="fas fa-envelope text-sm" />
              </a>
              <a href={`tel:${PHONE}`} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" aria-label="Phone">
                <i className="fas fa-phone text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Countries', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <button onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/60 text-xs hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-4">Our Services</h4>
            <ul className="space-y-2">
              {['Manpower Recruitment', 'Air Ticketing', 'Visa Processing', 'Medical Checks', 'Pre-Departure Training', 'Travel Insurance'].map((s) => (
                <li key={s} className="text-white/60 text-xs">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/60 text-xs">
                <i className="fas fa-map-marker-alt text-cta mt-0.5" />
                <span>{ADDRESS}</span>
              </li>
              <li>
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-white/60 text-xs hover:text-white transition-colors">
                  <i className="fas fa-phone text-cta" /> {PHONE}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE2}`} className="flex items-center gap-2 text-white/60 text-xs hover:text-white transition-colors">
                  <i className="fas fa-phone text-cta" /> {PHONE2}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 text-xs hover:text-white transition-colors">
                  <i className="fab fa-whatsapp text-cta" /> 0300-1518073
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-white/60 text-xs hover:text-white transition-colors">
                  <i className="fas fa-envelope text-cta" /> {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">© 2026 Travel Kashmir Manpower Recruiting Agency. All rights reserved.</p>
          <p className="text-white/40 text-xs">License No. {LICENSE} — Govt. of Pakistan</p>
        </div>
      </div>
    </footer>
  )
}

/* ============================================================
   QUICK APPLY FAB
   ============================================================ */
function QuickApply() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const categories = ['Construction Worker', 'Driver', 'Technician', 'Hospitality Staff', 'Factory Worker', 'Security Guard', 'Healthcare Professional', 'Engineer', 'IT Professional', 'Other']

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `*Quick Apply - Travel Kashmir*%0A%0A_Name:_ ${encodeURIComponent(name)}%0A_Phone:_ ${encodeURIComponent(phone)}%0A_Category:_ ${encodeURIComponent(category)}`
    window.open(`${WHATSAPP_LINK}?text=${text}`, '_blank')
    setOpen(false)
  }

  return (
    <div className="fixed bottom-5 right-4 md:right-6 z-50 flex flex-col items-end">
      {open && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl p-5 w-72 md:w-80 border border-primary/20 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-primary text-sm">Quick Apply</h4>
            <button onClick={() => setOpen(false)} className="text-berry-ink/40 hover:text-cta transition-colors">
              <i className="fas fa-times" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" placeholder="Your Name" required value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-primary/20 text-sm outline-none focus:border-secondary bg-background text-berry-ink" />
            <input type="tel" placeholder="Phone Number" required value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-primary/20 text-sm outline-none focus:border-secondary bg-background text-berry-ink" />
            <select required value={category} onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-primary/20 text-sm outline-none focus:border-secondary bg-background text-berry-ink">
              <option value="">Job Category</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <button type="submit" className="w-full bg-cta text-white font-bold py-2.5 rounded-lg text-sm hover:opacity-90 transition-all shadow-md">
              <i className="fab fa-whatsapp mr-1" /> Apply Now
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-cta text-white shadow-lg hover:opacity-90 transition-all flex items-center justify-center text-2xl shadow-cta/40 animate-bounce-subtle"
        aria-label="Quick Apply"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-file-pen'}`} />
      </button>
    </div>
  )
}

/* ============================================================
   APP
   ============================================================ */
export default function App() {
  return (
    <div className="min-h-screen bg-background text-berry-ink font-sans">
      <Navbar />
      <MarqueeBar />
      <Hero />
      <StatsBand />
      <About />
      <Services />
      <CountryGuide />
      <Process />
      <Testimonials />
      <GalleryStrip />
      <CTABand />
      <Contact />
      <FAQ />
      <Footer />
      <QuickApply />
    </div>
  )
}