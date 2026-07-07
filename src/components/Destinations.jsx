import { MapPin, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const destinations = [
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    universities: '150+ Universities',
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    highlight: 'Top-ranked world-class institutions',
    tag: 'Most Popular',
    tagColor: 'bg-gold-500',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    universities: '100+ Universities',
    image:
      'https://images.unsplash.com/photo-1507992781348-310259076fe0?auto=format&fit=crop&w=800&q=80',
    highlight: 'Post-study work & PR pathways',
    tag: 'Trending',
    tagColor: 'bg-teal-500',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    universities: '43 Universities',
    image:
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    highlight: 'Quality education & great lifestyle',
    tag: '',
    tagColor: '',
  },
  {
    country: 'United States',
    flag: '🇺🇸',
    universities: '4000+ Universities',
    image:
      'https://images.unsplash.com/photo-1501466044931-62695aada8e9?auto=format&fit=crop&w=800&q=80',
    highlight: 'Ivy League & research excellence',
    tag: 'Premium',
    tagColor: 'bg-sapphire-600',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    universities: '400+ Universities',
    image:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
    highlight: 'Tuition-free public universities',
    tag: 'Affordable',
    tagColor: 'bg-green-600',
  },
  {
    country: 'Malaysia',
    flag: '🇲🇾',
    universities: '20+ Universities',
    image:
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
    highlight: 'Affordable & close to home',
    tag: 'Budget-Friendly',
    tagColor: 'bg-orange-500',
  },
];

export default function Destinations() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="destinations" className="section-pad bg-gray-50 overflow-hidden">
      <div className="container-pad">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-sapphire-50 text-sapphire-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            Study Destinations
          </span>
          <h2 className="section-heading">Explore Your Dream Country</h2>
          <p className="section-subheading">
            We have strong partnerships with leading universities across the world's
            most student-friendly destinations.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((dest, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden shadow-card group cursor-pointer transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image with zoom on hover */}
              <div className="overflow-hidden h-52 sm:h-60">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Tag */}
              {dest.tag && (
                <span
                  className={`absolute top-4 left-4 ${dest.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}
                >
                  {dest.tag}
                </span>
              )}

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-sapphire-900 via-sapphire-800/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl text-white">{dest.flag}</span>
                  <h3 className="text-white font-bold font-heading text-xl">
                    {dest.country}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-white/70 text-xs mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{dest.universities}</span>
                </div>
                <p className="text-white/80 text-sm">{dest.highlight}</p>

                {/* Hover CTA */}
                <a
                  href="#lead-form"
                  className="mt-3 inline-flex items-center gap-1 text-gold-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:gap-2"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Destinations */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">
            Also offering guidance for Ireland, New Zealand, Italy, Turkey & more
          </p>
          <a href="#lead-form" className="btn-primary">
            Explore All Destinations
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
