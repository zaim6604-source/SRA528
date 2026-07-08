import { Link } from 'react-router-dom';
import countries from '../data/countries';

const stats = [
  { label: 'Professionals Placed', value: '3,200+' },
  { label: 'Countries Served', value: '12+' },
  { label: 'Years of Experience', value: '8+' },
  { label: 'Licensed Since', value: '2016' },
];

const servicesList = [
  { icon: 'fa-briefcase', label: 'Overseas Job Placement', color: 'bg-primary' },
  { icon: 'fa-passport', label: 'Visa Processing', color: 'bg-secondary' },
  { icon: 'fa-file-signature', label: 'Document Attestation', color: 'bg-cta' },
  { icon: 'fa-stethoscope', label: 'Medical & Trade Tests', color: 'bg-highlight' },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-secondary/10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-4">
            <i className="fas fa-check-circle text-[10px]" />
            License 2228/KAR
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-tight">
            Karachi's Result-Driven Route to{' '}
            <span className="text-primary">Working Abroad</span>
          </h1>
          <p className="text-ink/60 mt-4 text-base sm:text-lg leading-relaxed">
            Hasil International connects skilled and unskilled workers from Karachi with
            trusted employers across the Gulf, Europe, and Asia. Licensed, transparent, and
            committed to your success.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://wa.me/923333315228"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold bg-cta text-white hover:bg-cta/90 transition-all shadow-lg hover:shadow-xl"
            >
              <i className="fab fa-whatsapp text-lg" />
              Apply via WhatsApp
            </a>
            <a
              href="https://wa.me/923333315228"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              <i className="fab fa-whatsapp" />
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-5 shadow-sm border border-secondary/10 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">{s.value}</div>
            <div className="text-xs sm:text-sm text-ink/60 font-medium mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Services teaser */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl sm:text-2xl font-bold text-ink">Our Services</h2>
          <Link to="/services" className="text-sm font-semibold text-primary hover:text-highlight transition-colors flex items-center gap-1">
            View All <i className="fas fa-arrow-right text-xs" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesList.map((svc) => (
            <div key={svc.label} className="bg-white rounded-xl shadow-sm border border-secondary/10 overflow-hidden hover:shadow-md transition-all">
              <div className={`${svc.color} h-2`} />
              <div className="p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <i className={`fas ${svc.icon} text-lg text-primary`} />
                </div>
                <h3 className="font-bold text-ink text-sm">{svc.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured destinations */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl sm:text-2xl font-bold text-ink">Featured Destinations</h2>
          <Link to="/countries" className="text-sm font-semibold text-primary hover:text-highlight transition-colors flex items-center gap-1">
            All Countries <i className="fas fa-arrow-right text-xs" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {countries.slice(0, 6).map((c) => (
            <Link
              key={c.slug}
              to={`/countries/${c.slug}`}
              className="bg-white rounded-xl shadow-sm border border-secondary/10 overflow-hidden hover:shadow-md transition-all group"
            >
              <div className="h-32 bg-ink/5 flex items-center justify-center text-5xl">
                {c.flag}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-ink group-hover:text-primary transition-colors">{c.name}</h3>
                <p className="text-xs text-ink/50 mt-1">{c.roles.length} job categories</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}