import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';

const countries = [
  { name: 'Saudi Arabia', flag: '🇸🇦', slug: 'saudi-arabia', roles: 'Construction, Hospitality, Engineering', img: '/images/saudi.jpg' },
  { name: 'UAE', flag: '🇦🇪', slug: 'uae', roles: 'Construction, Logistics, Hospitality', img: '/images/uae.jpg' },
  { name: 'Qatar', flag: '🇶🇦', slug: 'qatar', roles: 'Hospitality, Facilities, Security', img: '/images/qatar.jpg' },
  { name: 'Oman', flag: '🇴🇲', slug: 'oman', roles: 'Construction, Transport, Trade', img: '/images/oman.jpg' },
  { name: 'Germany', flag: '🇩🇪', slug: 'germany', roles: 'Healthcare, IT, Skilled Trades', img: '/images/germany.jpg' },
  { name: 'Poland', flag: '🇵🇱', slug: 'poland', roles: 'Manufacturing, Logistics, IT', img: '/images/poland.jpg' },
  { name: 'Romania', flag: '🇷🇴', slug: 'romania', roles: 'Manufacturing, Agriculture, IT', img: '/images/romania.jpg' },
  { name: 'Greece', flag: '🇬🇷', slug: 'greece', roles: 'Hospitality, Tourism, Services', img: '/images/greece.jpg' },
  { name: 'Malaysia', flag: '🇲🇾', slug: 'malaysia', roles: 'Manufacturing, Hospitality, IT', img: '/images/malaysia.jpg' },
];

const chipColors = ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-cta', 'bg-highlight'];

export default function Countries() {
  const [imgErrors, setImgErrors] = useState({});

  return (
    <SectionWrapper id="countries" badge="DESTINATIONS" badgeColor="primary">
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading mb-2">
        Where We Can Take You
      </h2>
      <p className="text-ink/60 mb-10 max-w-2xl">
        Opportunities across the globe — from the Middle East to Europe and Asia.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {countries.map((country, idx) => (
          <div
            key={country.name}
            className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative h-44 overflow-hidden bg-primary">
              <img
                src={imgErrors[country.name] ? '/images/hero-team.jpg' : country.img}
                alt={`Landmark in ${country.name}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={() => setImgErrors((p) => ({ ...p, [country.name]: true }))}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="text-2xl">{country.flag}</span>
                <h3 className="text-white font-bold text-lg">{country.name}</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-ink/60 text-sm">
                <span className="font-semibold text-ink">In-demand roles:</span> {country.roles}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {countries.map((country, i) => (
          <Link
            key={country.name}
            to={`/jobs?country=${country.slug}`}
            className={`${chipColors[i % chipColors.length]} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:brightness-110 transition-all`}
          >
            {country.flag} {country.name}
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}