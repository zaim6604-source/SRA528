import { Link } from 'react-router-dom';

const stats = [
  { number: '500+', label: 'Workers Placed' },
  { number: '9', label: 'Destination Countries' },
  { number: '98%', label: 'Visa Success Rate' },
  { number: '8+', label: 'Years Experience' },
];

const serviceTeasers = [
  { icon: 'fa-user-check', title: 'Recruitment', desc: 'End-to-end hiring for global employers', color: '#FF206E' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'Hassle-free visa applications', color: '#41EAD4' },
  { icon: 'fa-plane', title: 'Travel Support', desc: 'Flights & pre-departure briefing', color: '#FBFF12' },
];

const featuredDestinations = [
  { name: 'Saudi Arabia', flag: '🇸🇦', desc: 'Construction, hospitality, engineering' },
  { name: 'UAE', flag: '🇦🇪', desc: 'Logistics, retail, hospitality' },
  { name: 'Germany', flag: '🇩🇪', desc: 'Healthcare, IT, skilled trades' },
  { name: 'Malaysia', flag: '🇲🇾', desc: 'Manufacturing, plantation, retail' },
];

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* HERO */}
      <section className="hero-gradient text-white px-6 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block bg-white/15 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
            Govt. Licensed Overseas Employment Promoter
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Peshawar's Bright Path to <span className="text-secondary">Working Abroad</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl">
            From the heart of Hashtnagri to the world — we connect skilled Pakistanis with trusted employers across the Middle East, Europe, and Asia.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/countries"
              className="inline-flex items-center gap-2 bg-secondary text-ink font-bold px-7 py-3.5 rounded-xl hover:brightness-110 transition-all shadow-lg"
            >
              <i className="fas fa-search" /> Explore Opportunities
            </Link>
            <a
              href="https://wa.me/923005866833?text=Hello%20Mahail%20Overseas!%20I%20am%20interested%20in%20overseas%20employment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-medium px-7 py-3.5 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <i className="fab fa-whatsapp" /> Apply via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-primary px-6 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-white">{stat.number}</div>
              <div className="text-white/70 text-sm font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="px-6 py-16 md:py-20 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mt-2">Our Services</h2>
          <p className="text-ink/60 mt-2 max-w-xl mx-auto">
            Complete overseas employment solutions — from application to arrival.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceTeasers.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                style={{ backgroundColor: s.color + '20', color: s.color }}
              >
                <i className={`fas ${s.icon}`} />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
              <p className="text-ink/60 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View All Services <i className="fas fa-arrow-right text-sm" />
          </Link>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="px-6 py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Destinations</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink mt-2">Featured Countries</h2>
            <p className="text-ink/60 mt-2 max-w-xl mx-auto">
              Explore opportunities across our top destinations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredDestinations.map((d) => (
              <Link
                key={d.name}
                to={`/countries/${d.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-background rounded-2xl p-5 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-3xl block mb-2">{d.flag}</span>
                <h3 className="font-bold text-ink group-hover:text-primary transition-colors">{d.name}</h3>
                <p className="text-ink/50 text-sm mt-1">{d.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/countries"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All Countries <i className="fas fa-arrow-right text-sm" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="px-6 py-16 md:py-20 text-center" style={{ background: 'linear-gradient(135deg, #41EAD4 0%, #1A1423 100%)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 mb-8">
            One message is all it takes. Apply now and take the first step toward a brighter future abroad.
          </p>
          <a
            href="https://wa.me/923005866833?text=Hello%20Mahail%20Overseas!%20I%20want%20to%20apply%20for%20overseas%20employment."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-white font-bold px-8 py-3.5 rounded-xl hover:brightness-150 transition-all shadow-lg"
          >
            <i className="fab fa-whatsapp text-lg" /> Apply Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-white/60 px-6 py-8 text-center text-sm">
        <p className="mb-1">&copy; {new Date().getFullYear()} Mahail Overseas Employment Promoters. All rights reserved.</p>
        <p>Office #08, 2nd Floor, Shan Plaza, Sikanderpura Chowk, Hashtnagri, Peshawar</p>
      </footer>
    </div>
  );
}