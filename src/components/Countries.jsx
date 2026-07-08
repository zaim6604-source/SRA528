import useInView from '../hooks/useInView';

const countries = [
  {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    landmark: 'Masjid Al-Haram',
    roles: 'Construction, Drivers, Hospitality',
    image: 'https://picsum.photos/seed/saudi-arabia/800/600',
  },
  {
    name: 'UAE',
    flag: '🇦🇪',
    landmark: 'Burj Khalifa, Dubai',
    roles: 'Hospitality, Retail, Drivers',
    image: 'https://picsum.photos/seed/uae-dubai/800/600',
  },
  {
    name: 'Qatar',
    flag: '🇶🇦',
    landmark: 'Museum of Islamic Art',
    roles: 'Construction, Hospitality',
    image: 'https://picsum.photos/seed/qatar-doha/800/600',
  },
  {
    name: 'Oman',
    flag: '🇴🇲',
    landmark: 'Sultan Qaboos Grand Mosque, Muscat',
    roles: 'Security, Hospitality',
    image: 'https://picsum.photos/seed/oman-muscat/800/600',
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    landmark: 'Brandenburg Gate, Berlin',
    roles: 'Nurses, Trades, IT',
    image: 'https://picsum.photos/seed/germany-berlin/800/600',
  },
  {
    name: 'Romania',
    flag: '🇷🇴',
    landmark: 'Palace of the Parliament',
    roles: 'Manufacturing, Logistics',
    image: 'https://picsum.photos/seed/romania/800/600',
  },
  {
    name: 'Greece',
    flag: '🇬🇷',
    landmark: 'Parthenon, Athens',
    roles: 'Farming, Tourism',
    image: 'https://picsum.photos/seed/greece-athens/800/600',
  },
  {
    name: 'Croatia',
    flag: '🇭🇷',
    landmark: 'Old Town, Dubrovnik',
    roles: 'Tourism, Hospitality',
    image: 'https://picsum.photos/seed/croatia-dubrovnik/800/600',
  },
  {
    name: 'Malaysia',
    flag: '🇲🇾',
    landmark: 'Petronas Towers, KL',
    roles: 'Electronics, Manufacturing',
    image: 'https://picsum.photos/seed/malaysia-kuala-lumpur/800/600',
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

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full bg-gradient-to-br from-primary/10 to-secondary/10"><span class="text-6xl">${country.flag}</span></div>`;
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
                <p className="text-xs text-ink/50 mb-2 flex items-center gap-1">
                  <i className="fas fa-landmark text-primary/60" />
                  {country.landmark}
                </p>
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