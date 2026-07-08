import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';

const stats = [
  { icon: 'fa-users', value: '5000+', label: 'Workers Placed' },
  { icon: 'fa-globe-asia', value: '9+', label: 'Countries' },
  { icon: 'fa-certificate', value: '100%', label: 'Govt. Licensed' },
  { icon: 'fa-star', value: '12+', label: 'Years Experience' },
];

const quickLinks = [
  { to: '/services', icon: 'fa-briefcase', label: 'Our Services', color: 'bg-secondary' },
  { to: '/destinations', icon: 'fa-globe-asia', label: 'Destinations', color: 'bg-accent text-ink' },
  { to: '/process', icon: 'fa-route', label: 'How It Works', color: 'bg-highlight' },
  { to: '/apply', icon: 'fa-file-alt', label: 'Apply Now', color: 'bg-cta' },
];

export default function Overview() {
  const [ref, inView] = useInView();

  return (
    <div className="space-y-8">
      {/* Hero Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-highlight to-primary p-8 md:p-12 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <span className="inline-block bg-cta/20 text-cta text-xs font-bold px-3 py-1.5 rounded-full border border-cta/30 mb-4">
            Govt. Licensed OEP — 2238/RWP
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Your Personal Gateway<br />to Global Employment
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-xl mb-8">
            Based in I-10/4, Islamabad — connecting Pakistani talent with international opportunities across 9+ countries.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/923333312207"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cta text-white px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-cta/30"
            >
              <i className="fab fa-whatsapp" /> Apply Now
            </a>
            <a
              href="https://wa.me/923333312207"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all"
            >
              <i className="fab fa-whatsapp" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Counter Cards */}
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`bg-white rounded-2xl p-5 shadow-md text-center transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary text-xl mb-3 mx-auto">
              <i className={`fas ${s.icon}`} />
            </div>
            <div className="text-2xl md:text-3xl font-extrabold text-primary">{s.value}</div>
            <div className="text-xs text-ink/50 font-medium mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-xl font-bold text-ink mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`${l.color} rounded-2xl p-6 text-white shadow-md hover:brightness-110 transition-all text-center group`}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl mx-auto mb-3 group-hover:scale-110 transition-transform">
                <i className={`fas ${l.icon}`} />
              </div>
              <div className="font-bold text-sm">{l.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}