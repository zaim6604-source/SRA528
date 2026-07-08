import { useState } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';

const destinations = [
  { slug: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦', roles: 'Construction, Engineering, Hospitality', img: 'https://images.unsplash.com/photo-1770786106021-52580470e31e?w=400&h=250&fit=crop' },
  { slug: 'uae', name: 'UAE', flag: '🇦🇪', roles: 'Construction, Logistics, Hospitality', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop' },
  { slug: 'qatar', name: 'Qatar', flag: '🇶🇦', roles: 'Hospitality, Facilities, Security', img: 'https://images.unsplash.com/photo-1748525591986-58d2f01d4170?w=400&h=250&fit=crop' },
  { slug: 'oman', name: 'Oman', flag: '🇴🇲', roles: 'Hospitality, Construction, Logistics', img: 'https://images.unsplash.com/photo-1725600462847-0317804cc466?w=400&h=250&fit=crop' },
  { slug: 'germany', name: 'Germany', flag: '🇩🇪', roles: 'Healthcare, IT, Skilled Trades', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop' },
  { slug: 'poland', name: 'Poland', flag: '🇵🇱', roles: 'Manufacturing, Logistics, IT', img: 'https://images.unsplash.com/photo-1648056862293-d93b3b037bfd?w=400&h=250&fit=crop' },
  { slug: 'italy', name: 'Italy', flag: '🇮🇹', roles: 'Manufacturing, Agriculture, Caregiving', img: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=400&h=250&fit=crop' },
  { slug: 'greece', name: 'Greece', flag: '🇬🇷', roles: 'Hospitality, Agriculture, Construction', img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=250&fit=crop' },
  { slug: 'romania', name: 'Romania', flag: '🇷🇴', roles: 'Manufacturing, Agriculture, IT', img: 'https://images.unsplash.com/photo-1710400284191-63c929e658fa?w=400&h=250&fit=crop' },
];

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop';
const cardColors = ['from-primary to-highlight', 'from-secondary to-primary', 'from-cta to-rose-600', 'from-highlight to-primary', 'from-primary to-cyan-700', 'from-secondary to-highlight', 'from-cta to-primary', 'from-highlight to-secondary', 'from-primary to-highlight'];

export default function Destinations() {
  const [imgErrors, setImgErrors] = useState({});
  const [ref, inView] = useInView();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-ink">Destinations</h1>
        <p className="text-ink/60 mt-2">
          Explore opportunities across 9 countries. Click any destination for details.
        </p>
      </div>

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {destinations.map((d, i) => (
          <Link
            key={d.slug}
            to={`/destinations/${d.slug}`}
            className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className={`relative h-36 bg-gradient-to-br ${cardColors[i % cardColors.length]}`}>
              <img
                src={imgErrors[d.slug] ? FALLBACK_IMG : d.img}
                alt={d.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={() => setImgErrors((p) => ({ ...p, [d.slug]: true }))}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="text-2xl">{d.flag}</span>
                <h3 className="text-white font-bold text-lg">{d.name}</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-ink/60 text-sm">
                <span className="font-semibold text-ink">Roles:</span> {d.roles}
              </p>
              <div className="mt-3 text-secondary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                View Details <i className="fas fa-arrow-right" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}