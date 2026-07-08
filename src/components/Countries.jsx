import useInView from '../hooks/useInView';

const countries = [
  {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    roles: 'Construction, Drivers',
    image: 'https://picsum.photos/seed/saudi-arabia/800/600',
  },
  {
    name: 'UAE',
    flag: '🇦🇪',
    roles: 'Hospitality, Retail, Drivers',
    image: 'https://picsum.photos/seed/uae/800/600',
  },
  {
    name: 'Qatar',
    flag: '🇶🇦',
    roles: 'Construction, Hospitality',
    image: 'https://picsum.photos/seed/qatar/800/600',
  },
  {
    name: 'Oman',
    flag: '🇴🇲',
    roles: 'Security, Hospitality',
    image: 'https://picsum.photos/seed/oman/800/600',
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    roles: 'Nurses, Trades, IT',
    image: 'https://picsum.photos/seed/germany/800/600',
  },
  {
    name: 'Poland',
    flag: '🇵🇱',
    roles: 'Welders, Factory Workers',
    image: 'https://picsum.photos/seed/poland/800/600',
  },
  {
    name: 'Romania',
    flag: '🇷🇴',
    roles: 'Manufacturing, Logistics',
    image: 'https://picsum.photos/seed/romania/800/600',
  },
  {
    name: 'Greece',
    flag: '🇬🇷',
    roles: 'Farming, Tourism',
    image: 'https://picsum.photos/seed/greece/800/600',
  },
  {
    name: 'Malaysia',
    flag: '🇲🇾',
    roles: 'Electronics, Manufacturing',
    image: 'https://picsum.photos/seed/malaysia/800/600',
  },
];

export default function Countries() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="countries" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="pill-badge bg-primary/10 text-primary border border-primary/20">
            <i className="fas fa-globe-asia mr-1.5" />
            DESTINATIONS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center mb-4">
          Countries We Serve
        </h2>
        <p className="text-center text-ink/60 max-w-2xl mx-auto mb-12">
          We connect workers with reputable employers across the Gulf, Europe, and Asia.
        </p>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {countries.map((country, i) => (
            <div
              key={country.name}
              className={`group rounded-xl overflow-hidden shadow-md bg-white border border-secondary/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full bg-gradient-to-br from-primary/10 to-accent/10"><span class="text-6xl">${country.flag}</span></div>`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <span>{country.flag}</span>
                    {country.name}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {country.roles.split(', ').map((role) => (
                    <span
                      key={role}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-background text-primary border border-secondary/20"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}