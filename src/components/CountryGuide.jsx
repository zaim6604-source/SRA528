import { useState } from 'react';
import FadeUp from './FadeUp';
import { countryImage } from '../assets/placeholders';

const countries = [
  { name: 'Saudi Arabia', tag: 'Construction · Oil & Gas', color: 'bg-primary', img: 'guide-saudi.jpg' },
  { name: 'UAE', tag: 'Dubai · Abu Dhabi · Services', color: 'bg-secondary', img: 'guide-uae.jpg' },
  { name: 'Qatar', tag: 'Hospitality · Construction', color: 'bg-accent', img: 'guide-qatar.jpg' },
  { name: 'Oman', tag: 'Muscat · Logistics · Retail', color: 'bg-primary', img: 'guide-oman.jpg' },
  { name: 'Kuwait', tag: 'Oil & Gas · Services', color: 'bg-highlight', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80' },
  { name: 'Germany', tag: 'Skilled Worker · EU Blue Card', color: 'bg-secondary', img: 'guide-germany.jpg' },
  { name: 'Poland', tag: 'Manufacturing · IT', color: 'bg-accent', img: 'guide-poland.jpg' },
  { name: 'Greece', tag: 'Tourism · Maritime', color: 'bg-primary', img: 'guide-greece.jpg' },
  { name: 'Malaysia', tag: 'KL · Manufacturing · Services', color: 'bg-secondary', img: 'guide-malaysia.jpg' },
];

const countryDetails = {
  'Saudi Arabia': { roles: 'Construction Workers, Drivers, Hotel Staff, Electricians, Plumbers, Nurses', salary: 'SAR 1,200 – 3,000/month', req: 'Valid passport, CNIC, experience certificates, medical fitness' },
  'UAE': { roles: 'Construction Workers, Hotel Staff, Sales Staff, Drivers, Technicians, Domestic Workers', salary: 'AED 1,000 – 3,000/month', req: 'Valid passport (6+ months), CNIC, experience letters' },
  'Qatar': { roles: 'Construction Workers, Security Guards, Drivers, Hotel Staff, Safety Officers', salary: 'QAR 1,200 – 2,500/month', req: 'Valid passport, CNIC, skill certificates, medical fitness' },
  'Oman': { roles: 'Construction Workers, Drivers, Hotel Workers, Mechanics, Electricians, Retail Staff', salary: 'OMR 180 – 350/month', req: 'Valid passport, CNIC, experience certificates, age 22-50' },
  'Kuwait': { roles: 'Construction Workers, Drivers, Hotel Staff, Electricians, Plumbers, Nurses', salary: 'KWD 120 – 300/month', req: 'Valid passport, CNIC, experience certificates, medical fitness' },
  'Germany': { roles: 'Nurses, IT Professionals, Engineers, Skilled Trades, Logistics Staff', salary: '€2,000 – 3,500/month', req: 'Valid passport, recognized qualifications, German language (A2-B1)' },
  'Poland': { roles: 'Factory Workers, Construction Workers, Warehouse Staff, Logistics, IT Specialists', salary: '4,000 – 7,000 PLN/month', req: 'Valid passport, CNIC, work experience, medical fitness' },
  'Greece': { roles: 'Tourism Staff, Hotel Workers, Construction Workers, Agricultural Workers, Maritime Staff', salary: '€800 – 1,500/month', req: 'Valid passport, CNIC, work experience, medical fitness' },
  'Malaysia': { roles: 'Manufacturing Workers, Construction Workers, Hotel Staff, IT Professionals', salary: 'MYR 1,500 – 3,500/month', req: 'Valid passport, CNIC, work experience, age 22-45' },
};

export default function CountryGuide() {
  const [modal, setModal] = useState(null);

  return (
    <section id="countries" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className='flex flex-col justify-center items-center'>
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-globe" />
            Country Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
            Destinations We Serve
          </h2>
          <p className="text-ink/60 text-center mt-3 max-w-2xl mx-auto">
            Trusted recruitment corridors to destinations across the Gulf, Europe, and Asia
          </p>
        </FadeUp>

        {/* Chip grid */}
        <FadeUp delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {countries.map((c) => (
              <button
                key={c.name}
                onClick={() => setModal(c)}
                className="inline-flex items-center gap-1.5 bg-background text-primary text-xs font-bold px-3.5 py-2 rounded-full hover:bg-primary hover:text-white transition-all border border-primary/20"
              >
                <i className="fas fa-flag-checkered" />
                {c.name}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {countries.map((c, i) => (
            <FadeUp key={c.name} delay={i * 60}>
              <div
                className="rounded-2xl shadow-lg hover:scale-[1.02] transition-transform overflow-hidden bg-white border border-gray-100 cursor-pointer"
                onClick={() => setModal(c)}
              >
                <div className="h-40 overflow-hidden bg-background">
                  <img
                    src={c.img ? (c.img.startsWith('http') ? c.img : `/images/${c.img}`) : countryImage(c.name)}
                    alt={c.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { e.target.src = countryImage(c.name); }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-ink">{c.name}</h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {c.tag.split('·').map((t) => (
                      <span key={t} className="bg-background text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 text-xs font-semibold text-cta flex items-center gap-1">
                    <i className="fas fa-chevron-right" />
                    View details
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden country-scroll mt-8 pb-2">
          {countries.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl shadow-lg w-64 shrink-0 bg-white border border-gray-100 overflow-hidden cursor-pointer"
              onClick={() => setModal(c)}
            >
              <div className="h-32 overflow-hidden bg-background">
                <img
                  src={c.img ? (c.img.startsWith('http') ? c.img : `/images/${c.img}`) : countryImage(c.name)}
                  alt={c.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => { e.target.src = countryImage(c.name); }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-extrabold text-ink">{c.name}</h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {c.tag.split('·').map((t) => (
                    <span key={t} className="bg-background text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Country Detail Modal */}
      {modal && (() => {
        const detail = countryDetails[modal.name];
        return (
          <div className="modal-backdrop" onClick={() => setModal(null)}>
            <div className="modal-content p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl ${modal.color} flex items-center justify-center text-white text-xl`}>
                    <i className="fas fa-globe-asia" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-ink">{modal.name}</h3>
                    <div className="text-xs text-ink/50">{modal.tag}</div>
                  </div>
                </div>
                <button
                  onClick={() => setModal(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-ink/50 hover:bg-gray-200 transition-colors"
                >
                  <i className="fas fa-times" />
                </button>
              </div>

              {detail && (
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-bold text-ink mb-2">
                      <i className="fas fa-users text-primary" />
                      Common Roles
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {detail.roles.split(', ').map((r) => (
                        <span key={r} className="bg-background text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background rounded-xl p-4">
                      <div className="text-xs text-ink/50 font-semibold uppercase">Salary Range</div>
                      <div className="text-sm font-extrabold text-ink mt-1">{detail.salary}</div>
                    </div>
                    <div className="bg-background rounded-xl p-4">
                      <div className="text-xs text-ink/50 font-semibold uppercase">Requirements</div>
                      <div className="text-sm font-semibold text-ink mt-1 leading-tight">{detail.req}</div>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/923008638517?text=${encodeURIComponent(`Hello New Geo Pak! I'm interested in working in ${modal.name}. Please guide me about the opportunities there.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-cta text-ink font-extrabold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all"
                  >
                    <i className="fab fa-whatsapp" />
                    Apply for {modal.name}
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })()}
    </section>
  );
}