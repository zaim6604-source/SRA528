import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import useInView from '../hooks/useInView';
import { jobs } from '../data/jobs';

const stats = [
  { value: '5000+', label: 'Workers Placed' },
  { value: '6', label: 'Gulf Countries' },
  { value: '22+', label: 'Years Experience' },
  { value: '2237/RWP', label: 'Licensed Operator' },
];

const featuredJobs = jobs.slice(0, 6);

export default function Home() {
  const [statsRef, statsVisible] = useInView(0.2);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ backgroundColor: '#FFF8E0' }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #FF206E 1px, transparent 1px), radial-gradient(circle at 75% 75%, #41EAD4 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6 sm:space-y-7">
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm" style={{ backgroundColor: '#FF206E', color: 'white' }}>
                  <i className="fa-solid fa-flag-checkered text-[10px]" />
                  Govt. Licensed OEP — 2237/RWP
                </span>
              </FadeIn>

              <FadeIn delay={1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight m-0" style={{ color: '#1A1423' }}>
                  Supplying Skilled{' '}
                  <span style={{ color: '#FF206E' }}>Manpower</span>
                  {' '}to the Gulf Since 2003
                </h1>
              </FadeIn>

              <FadeIn delay={2}>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg" style={{ color: '#4A3F55' }}>
                  Sufyan Recruiting Agency — connecting Pakistani workers with trusted employers across Saudi Arabia, UAE, Qatar, Oman, Kuwait, and Bahrain.
                </p>
              </FadeIn>

              <FadeIn delay={3}>
                <div className="flex flex-wrap gap-4 pt-1">
                  <Link
                    to="/jobs"
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#41EAD4', color: '#1A1423' }}
                  >
                    <i className="fa-solid fa-briefcase" />
                    Browse Openings
                  </Link>
                  <a
                    href="https://wa.me/923458649342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 border-2"
                    style={{ borderColor: '#FF206E', color: '#FF206E' }}
                  >
                    <i className="fab fa-whatsapp" />
                    WhatsApp Us
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={4}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: '#FF206E10', color: '#FF206E' }}>
                    <i className="fa-solid fa-certificate" />
                    License 2237/RWP
                  </span>
                  <span className="flex items-center gap-2 text-xs font-medium" style={{ color: '#4A3F55' }}>
                    <i className="fa-solid fa-building-columns" style={{ color: '#41EAD4' }} />
                    Govt. Licensed
                  </span>
                  <span className="flex items-center gap-2 text-xs font-medium" style={{ color: '#4A3F55' }}>
                    <i className="fa-solid fa-location-dot" style={{ color: '#FF206E' }} />
                    I-8 Markaz, Islamabad
                  </span>
                </div>
              </FadeIn>
            </div>

            {/* Right — Visual */}
            <div className="hidden lg:block relative">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full relative" style={{ border: '3px solid rgba(255, 32, 110, 0.1)' }}>
                  <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl" style={{ border: '4px solid #41EAD4' }}>
                    <img
                      src="/src/assets/images/hero.jpg"
                      alt="Global opportunities"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  {/* Center hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full z-10" style={{ backgroundColor: '#FF206E', border: '3px solid #41EAD4' }} />
                  {/* License badge */}
                  <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg px-3 py-2 z-10 border" style={{ borderColor: 'rgba(255, 32, 110, 0.15)' }}>
                    <div className="text-[10px] font-bold" style={{ color: '#FF206E' }}>License</div>
                    <div className="text-xs font-bold" style={{ color: '#1A1423' }}>2237/RWP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <section ref={statsRef} style={{ backgroundColor: '#FF206E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center fade-up ${statsVisible ? 'visible' : ''} fade-up-delay-${i + 1}`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {statsVisible ? s.value : '0'}
                </div>
                <div className="text-sm sm:text-base font-medium tracking-wide" style={{ color: '#FBFF12' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED OPENINGS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <FadeIn>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: '#FF206E10', color: '#FF206E' }}>
            <i className="fa-solid fa-briefcase" />
            Featured Openings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold m-0 leading-tight" style={{ color: '#1A1423' }}>
            Current Opportunities
          </h2>
          <p className="text-base sm:text-lg mt-3 max-w-xl" style={{ color: '#4A3F55' }}>
            Explore the latest job openings across the Gulf region.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10">
          {featuredJobs.map((job, i) => (
            <FadeIn key={job.id} delay={Math.min(i + 1, 4)}>
              <Link to={`/jobs/${job.id}`} className="job-card block bg-white rounded-2xl overflow-hidden shadow-sm border border-[#FF206E10] hover:shadow-lg group">
                <div className="h-40 overflow-hidden">
                  <img
                    src={job.image}
                    alt={job.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{job.flag}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#41EAD420', color: '#1A1423' }}>
                      {job.country}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: '#FF206E10', color: '#FF206E' }}>
                      {job.trade}
                    </span>
                  </div>
                  <h3 className="text-base font-bold mt-2 mb-1" style={{ color: '#1A1423' }}>{job.role}</h3>
                  <p className="text-xs" style={{ color: '#4A3F55' }}>
                    {job.openings} openings &bull; {job.salary}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: '#41EAD4' }}>
                    View Details <i className="fa-solid fa-arrow-right text-[10px]" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={4}>
          <div className="text-center mt-10">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#41EAD4', color: '#1A1423' }}
            >
              View All Openings <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ===== WHY SUFYAN ===== */}
      <section style={{ backgroundColor: '#1A1423' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: '#FF206E20', color: '#FF206E' }}>
              <i className="fa-solid fa-star" />
              Why Sufyan?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold m-0 leading-tight text-white">
              Trusted Since 2003
            </h2>
            <p className="text-base sm:text-lg mt-3 max-w-xl" style={{ color: '#FBFF12' }}>
              A well-known agency providing manpower to Gulf countries on a contract basis.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { icon: 'fa-shield-halved', title: 'Govt. Licensed', desc: 'Fully authorized OEP under License 2237/RWP. Operating in full compliance with Pakistani regulations.' },
              { icon: 'fa-handshake', title: 'Gulf Expertise', desc: 'Dedicated focus on Gulf countries including Saudi Arabia, UAE, Qatar, Oman, Kuwait, and Bahrain.' },
              { icon: 'fa-globe', title: 'Strong Gulf Network', desc: 'Established partnerships with verified employers across the Gulf region, built over two decades.' },
              { icon: 'fa-clock', title: 'Timely Processing', desc: 'Efficient visa processing, documentation, and travel coordination to ensure smooth deployment.' },
              { icon: 'fa-user-check', title: 'Worker Welfare', desc: 'Commitment to fair treatment, proper contracts, and safe working conditions for every worker.' },
              { icon: 'fa-medal', title: 'Proven Track Record', desc: 'Thousands of successful placements with satisfied workers and employers across the Gulf.' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={Math.min(i + 1, 4)}>
                <div className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#FF206E20' }}>
                    <i className={`fas ${item.icon}`} style={{ color: '#41EAD4' }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-sm mt-1" style={{ color: '#FBFF12' }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="py-16 sm:py-20 lg:py-24 px-4" style={{ background: 'linear-gradient(135deg, #FF206E 0%, #D4005A 100%)' }}>
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-7">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white m-0 leading-tight">
              Ready to Work in the Gulf?
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
              One message is all it takes. Let Sufyan Recruiting Agency connect you with verified employers.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="https://wa.me/923458649342"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#41EAD4', color: '#1A1423' }}
              >
                <i className="fab fa-whatsapp" />
                Apply Now
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold text-white border-2 border-white/40 transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <i className="fa-regular fa-paper-plane" />
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}