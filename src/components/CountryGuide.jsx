import useInView from '../hooks/useInView';
import { useState } from 'react';

const countries = [
  {
    name: 'Saudi Arabia',
    roles: ['Construction', 'Drivers', 'Hospitality'],
    image: '/images/saudi-arabia.jpg',
    flag: '🇸🇦',
  },
  {
    name: 'UAE',
    roles: ['Hospitality', 'Retail', 'Technicians'],
    image: '/images/uae.jpg',
    flag: '🇦🇪',
  },
  {
    name: 'Qatar',
    roles: ['Construction'],
    image: '/images/qatar.jpg',
    flag: '🇶🇦',
  },
  {
    name: 'Kuwait',
    roles: ['Drivers', 'Labour'],
    image: '/images/kuwait.jpg',
    flag: '🇰🇼',
  },
  {
    name: 'Oman',
    roles: ['Security', 'Construction'],
    image: '/images/about-office.jpg',
    flag: '🇴🇲',
  },
  {
    name: 'Germany',
    roles: ['Nurses', 'Trades'],
    image: '/images/germany.jpg',
    flag: '🇩🇪',
  },
  {
    name: 'Poland',
    roles: ['Welders', 'Factory'],
    image: '/images/poland.jpg',
    flag: '🇵🇱',
  },
  {
    name: 'Romania',
    roles: ['Manufacturing'],
    image: '/images/romania.jpg',
    flag: '🇷🇴',
  },
  {
    name: 'Malaysia',
    roles: ['Electronics'],
    image: '/images/about-office.jpg',
    flag: '🇲🇾',
  },
];

const allRoles = countries.flatMap((c) => c.roles).filter((v, i, a) => a.indexOf(v) === i);

export default function CountryGuide() {
  const [ref, inView] = useInView();
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (name) => {
    setImgErrors((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <section id="countries" className="section-pad bg-white">
      <div className="container-pad" ref={ref}>
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#E0115F]/10 text-[#E0115F] mb-4">
            <i className="fas fa-map-marker-alt text-xs"></i>
            DESTINATIONS
          </div>
          <h2 className="section-heading">
            Countries We{' '}
            <span className="text-[#E0115F]">Serve</span>
          </h2>
          <p className="section-subheading">
            We deploy Pakistani manpower to leading employers across the globe.
          </p>
        </div>

        {/* Country Cards */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {countries.map((country, i) => (
            <div key={i} className="card bg-white border border-[#E0115F]/5 group">
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                {imgErrors[country.name] ? (
                  <div className="w-full h-full bg-[#FFF0F4] flex items-center justify-center">
                    <i className="fas fa-image text-3xl text-[#E0115F]/30"></i>
                  </div>
                ) : (
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    onError={() => handleImgError(country.name)}
                    loading="lazy"
                  />
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-lg shadow-sm">
                  {country.flag}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-[#2E0A1C] mb-3">{country.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {country.roles.map((role, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#FFF0F4] text-[#E0115F]"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chip Grid */}
        <div className="mt-12 pt-8 border-t border-[#E0115F]/10">
          <h4 className="text-center font-heading font-semibold text-lg text-[#2E0A1C] mb-5">
            <i className="fas fa-briefcase text-[#E0115F] mr-2"></i>
            In-Demand Roles
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {allRoles.map((role, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{
                  background: [ '#E0115F', '#FF5C8A', '#FFD700', '#7B2D8E', '#B8004F' ][i % 5],
                  color: i % 5 === 2 ? '#2E0A1C' : 'white',
                }}
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}