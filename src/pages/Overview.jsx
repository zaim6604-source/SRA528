import { Link } from 'react-router-dom';

const counters = [
  { icon: 'fa-user-check', end: 5000, suffix: '+', label: 'Workers Placed' },
  { icon: 'fa-globe-asia', end: 9, suffix: '', label: 'Countries' },
  { icon: 'fa-calendar-check', end: 12, suffix: '+', label: 'Years Experience' },
  { icon: 'fa-shield-alt', end: 1, suffix: '', label: 'Licensed Agency' },
];

const quickLinks = [
  { to: '/services', icon: 'fa-concierge-bell', label: 'Our Services', desc: 'Explore our recruitment services' },
  { to: '/destinations', icon: 'fa-globe-asia', label: 'Destinations', desc: 'Countries we recruit for' },
  { to: '/process', icon: 'fa-arrow-right', label: 'Our Process', desc: 'How we work step by step' },
  { to: '/apply', icon: 'fa-paper-plane', label: 'Apply Now', desc: 'Start your journey today' },
];

export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Hero card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-highlight to-cta p-8 sm:p-10 lg:p-12 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30 mb-5">
            <i className="fas fa-shield-alt" />
            License 2207/RWP
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-4">
            Rawalpindi's Dependable Desk for{' '}
            <span className="text-accent">Overseas Careers</span>
          </h1>
          <p className="text-white/85 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
            Fejar Enterprises — your trusted partner for overseas employment. Licensed, transparent, and committed to helping you build a better future abroad.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+920514410484"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-bold bg-accent text-ink hover:bg-accent/90 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              <i className="fas fa-phone-alt text-lg" />
              Call Now
            </a>
            <Link
              to="/apply"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold border-2 border-white/40 text-white hover:bg-white/10 transition-all"
            >
              <i className="fas fa-question-circle text-lg" />
              Enquire
            </Link>
          </div>
        </div>
      </div>

      {/* Counter cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {counters.map((c) => (
          <div
            key={c.label}
            className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-secondary/10 text-center hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <i className={`fas ${c.icon} text-primary`} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-ink">
              {c.end.toLocaleString()}{c.suffix}
            </div>
            <div className="text-xs sm:text-sm text-ink/50 font-medium uppercase tracking-wider mt-1">
              {c.label}
            </div>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="group bg-white rounded-xl p-5 shadow-sm border border-secondary/10 hover:shadow-md hover:border-primary/20 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
              <i className={`fas ${link.icon} text-primary group-hover:text-white transition-colors`} />
            </div>
            <h3 className="font-bold text-ink text-sm mb-1">{link.label}</h3>
            <p className="text-xs text-ink/50">{link.desc}</p>
          </Link>
        ))}
      </div>

      {/* CTA section */}
      <div className="rounded-2xl bg-gradient-to-r from-cta to-primary p-8 sm:p-10 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Ready to Work Abroad?
        </h2>
        <p className="text-white/85 max-w-xl mx-auto mb-6">
          Take the first step toward a better future. Call us now or submit your application online.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+920514410484"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-bold bg-accent text-ink hover:bg-accent/90 transition-all shadow-lg"
          >
            <i className="fas fa-phone-alt" />
            Call Now — 051-4410484
          </a>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all"
          >
            <i className="fas fa-paper-plane" />
            Apply Online
          </Link>
        </div>
      </div>
    </div>
  );
}