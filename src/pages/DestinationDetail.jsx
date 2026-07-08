import { useParams, Link } from 'react-router-dom';

const destinationData = {
  'saudi-arabia': { name: 'Saudi Arabia', flag: '🇸🇦', roles: ['Construction Supervisor', 'Civil Engineer', 'Electrician', 'Plumber', 'Heavy Equipment Operator', 'Hospitality Staff'], requirements: 'Valid passport (min 6 months), educational certificates attested, medical fitness certificate, trade test clearance, minimum 2 years experience', img: 'https://images.unsplash.com/photo-1770786106021-52580470e31e?w=600&h=350&fit=crop' },
  'uae': { name: 'UAE', flag: '🇦🇪', roles: ['Construction Worker', 'Logistics Coordinator', 'Hotel Staff', 'Driver', 'Security Guard', 'Sales Associate'], requirements: 'Valid passport, educational certificates, medical fitness, clean criminal record, relevant experience', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=350&fit=crop' },
  'qatar': { name: 'Qatar', flag: '🇶🇦', roles: ['Hospitality Staff', 'Security Personnel', 'Facilities Manager', 'Driver', 'Construction Worker', 'Maintenance Technician'], requirements: 'Valid passport, medical certificate, trade test, police clearance, experience letter', img: 'https://images.unsplash.com/photo-1748525591986-58d2f01d4170?w=600&h=350&fit=crop' },
  'oman': { name: 'Oman', flag: '🇴🇲', roles: ['Hotel Staff', 'Construction Worker', 'Logistics Assistant', 'Driver', 'Electrician', 'Plumber'], requirements: 'Valid passport, attested educational docs, medical clearance, minimum 1 year experience', img: 'https://images.unsplash.com/photo-1725600462847-0317804cc466?w=600&h=350&fit=crop' },
  'germany': { name: 'Germany', flag: '🇩🇪', roles: ['Healthcare Worker', 'IT Specialist', 'Skilled Tradesperson', 'Nurse', 'Engineer', 'Logistics Professional'], requirements: 'Valid passport, professional certifications, German/English language proficiency, experience verification', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=350&fit=crop' },
  'poland': { name: 'Poland', flag: '🇵🇱', roles: ['Factory Worker', 'Logistics Staff', 'IT Support', 'Warehouse Operator', 'Production Supervisor', 'Driver'], requirements: 'Valid passport, medical certificate, trade test, clean criminal record', img: 'https://images.unsplash.com/photo-1648056862293-d93b3b037bfd?w=600&h=350&fit=crop' },
  'italy': { name: 'Italy', flag: '🇮🇹', roles: ['Manufacturing Worker', 'Agricultural Worker', 'Caregiver', 'Chef', 'Construction Worker', 'Logistics Staff'], requirements: 'Valid passport, medical clearance, relevant experience letter, clean police record', img: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=600&h=350&fit=crop' },
  'greece': { name: 'Greece', flag: '🇬🇷', roles: ['Hospitality Staff', 'Agricultural Worker', 'Construction Laborer', 'Chef', 'Hotel Manager', 'Maintenance Staff'], requirements: 'Valid passport, medical fitness, experience certificates, language proficiency preferred', img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=350&fit=crop' },
  'romania': { name: 'Romania', flag: '🇷🇴', roles: ['Manufacturing Worker', 'Agricultural Staff', 'IT Professional', 'Logistics Operator', 'Factory Supervisor', 'Driver'], requirements: 'Valid passport, medical certificate, trade test, experience letter', img: 'https://images.unsplash.com/photo-1710400284191-63c929e658fa?w=600&h=350&fit=crop' },
};

export default function DestinationDetail() {
  const { slug } = useParams();
  const dest = destinationData[slug];

  if (!dest) {
    return (
      <div className="text-center py-20">
        <i className="fas fa-map-pin text-6xl text-ink/20 mb-4" />
        <h2 className="text-2xl font-bold text-ink">Destination Not Found</h2>
        <p className="text-ink/50 mt-2 mb-6">The destination you're looking for doesn't exist.</p>
        <Link to="/destinations" className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:brightness-110 transition-all">
          <i className="fas fa-arrow-left" /> Back to Destinations
        </Link>
      </div>
    );
  }

  const applyText = `Hello Touchi International! I am interested in applying for opportunities in ${dest.name}. Please guide me on the available roles and process.`;

  return (
    <div className="animate-fade-in space-y-8">
      {/* Header */}
      <Link to="/destinations" className="inline-flex items-center gap-2 text-ink/50 hover:text-primary text-sm font-medium transition-colors">
        <i className="fas fa-arrow-left" /> Back to Destinations
      </Link>

      {/* Hero */}
      <div className="relative rounded-3xl overflow-hidden h-52 md:h-72 shadow-xl">
        <img src={dest.img} alt={dest.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <span className="text-4xl mb-2 block">{dest.flag}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">{dest.name}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Roles */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
            <i className="fas fa-briefcase text-secondary" /> Available Roles
          </h2>
          <ul className="space-y-3">
            {dest.roles.map((r) => (
              <li key={r} className="flex items-center gap-3 text-sm text-ink/70">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
            <i className="fas fa-clipboard-check text-accent" /> Requirements
          </h2>
          <p className="text-sm text-ink/70 leading-relaxed">{dest.requirements}</p>
        </div>
      </div>

      {/* Apply CTA */}
      <div className="bg-gradient-to-r from-primary to-highlight rounded-2xl p-6 md:p-8 text-white text-center shadow-lg">
        <h3 className="text-xl font-bold mb-2">Ready to Work in {dest.name}?</h3>
        <p className="text-white/70 text-sm mb-5">Contact us now and we'll guide you through the entire process.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/923333312207?text=${encodeURIComponent(applyText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta text-white px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all shadow-lg"
          >
            <i className="fab fa-whatsapp" /> Apply for {dest.name}
          </a>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all"
          >
            View Application Form
          </Link>
        </div>
      </div>
    </div>
  );
}