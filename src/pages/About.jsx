import FadeIn from '../components/FadeIn';
import useInView from '../hooks/useInView';

const whyUs = [
  { icon: 'fa-shield-halved', title: 'Licensed & Registered', desc: 'Fully authorized overseas employment promoter with verified credentials. License 2237/RWP.' },
  { icon: 'fa-handshake', title: 'Gulf Specialists', desc: 'Exclusive focus on Gulf countries — we know the market, the employers, and the process inside out.' },
  { icon: 'fa-globe', title: 'Established Network', desc: 'Over two decades of trusted partnerships with employers across Saudi Arabia, UAE, Qatar, and more.' },
  { icon: 'fa-clock', title: 'Timely Processing', desc: 'Efficient visa, documentation, and travel coordination to get you deployed faster.' },
  { icon: 'fa-star', title: 'Proven Track Record', desc: 'Thousands of successful placements with satisfied workers and employers since 2003.' },
  { icon: 'fa-user-shield', title: 'Worker Welfare First', desc: 'Commitment to fair contracts, safe working conditions, and complete transparency.' },
];

const trustChips = [
  'Government Licensed',
  '100% Transparent',
  'No Hidden Fees',
  'Verified Gulf Employers',
  'Safe & Legal Process',
  'Community Trusted',
];

export default function About() {
  const [cardsRef, cardsVisible] = useInView(0.1);

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: '#FF206E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FBFF12' }}>
              <i className="fa-solid fa-info-circle" />
              About Sufyan Recruiting Agency
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">About Us</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Your trusted partner in Gulf manpower recruitment since 2003. Licensed, transparent, and driven by results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1A1423' }}>Our Story</h2>
              <div className="w-16 h-1 mt-4 mb-6" style={{ backgroundColor: '#41EAD4' }} />
              <p className="leading-relaxed mb-4" style={{ color: '#4A3F55' }}>
                Sufyan Recruiting Agency is a well-known overseas employment promoter that has been providing skilled and semi-skilled manpower to Gulf countries on a contract basis since 2003.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#4A3F55' }}>
                Based at Office 20, 2nd Floor, Zaki Centre, I-8 Markaz, Islamabad, we have built a reputation for reliability, transparency, and successful placements across Saudi Arabia, UAE, Qatar, Oman, Kuwait, and Bahrain.
              </p>
              <p className="leading-relaxed" style={{ color: '#4A3F55' }}>
                Our team brings decades of combined experience in international recruitment, visa processing, and manpower placement. We are fully licensed under the Government of Pakistan (License No. 2237/RWP) and operate in full compliance with overseas employment regulations.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={1}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/src/assets/images/about.jpg"
                alt="Sufyan Recruiting Agency office"
                className="w-full h-80 object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Band */}
      <section style={{ backgroundColor: '#FF206E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5000+', label: 'Workers Placed' },
              { value: '6', label: 'Gulf Countries' },
              { value: '22+', label: 'Years Experience' },
              { value: '2237/RWP', label: 'License' },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 1}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {s.value}
                  </div>
                  <div className="text-sm sm:text-base font-medium" style={{ color: '#FBFF12' }}>
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#FFF8E0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 shadow-sm border text-center" style={{ borderColor: '#FF206E10' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FF206E10' }}>
                  <i className="fas fa-bullseye text-2xl" style={{ color: '#FF206E' }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#1A1423' }}>Our Mission</h3>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: '#4A3F55' }}>
                  To connect the skilled workforce of Pakistan with legitimate overseas employment opportunities in the Gulf, ensuring dignity, fairness, and success.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border text-center" style={{ borderColor: '#FF206E10' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FF206E10' }}>
                  <i className="fas fa-eye text-2xl" style={{ color: '#FF206E' }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#1A1423' }}>Our Vision</h3>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: '#4A3F55' }}>
                  To be the most trusted overseas employment bridge between Pakistan and the Gulf, transforming lives through legitimate international careers.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border text-center" style={{ borderColor: '#FF206E10' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FF206E10' }}>
                  <i className="fas fa-heart text-2xl" style={{ color: '#FF206E' }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#1A1423' }}>Our Values</h3>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: '#4A3F55' }}>
                  Integrity, transparency, community commitment, and a relentless focus on worker welfare and successful outcomes.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: '#1A1423' }}>
            Why Choose Sufyan Recruiting Agency?
          </h2>
          <p className="mt-3 text-center max-w-xl mx-auto" style={{ color: '#4A3F55' }}>
            What sets us apart in the Gulf overseas employment industry.
          </p>
        </FadeIn>
        <div ref={cardsRef} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, i) => (
            <FadeIn key={item.title} delay={Math.min(i + 1, 6)}>
              <div className="flex gap-4 p-5 rounded-xl bg-white border shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: '#FF206E10' }}>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#FF206E10' }}>
                  <i className={`fas ${item.icon}`} style={{ color: '#FF206E' }} />
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: '#1A1423' }}>{item.title}</h3>
                  <p className="text-sm mt-1" style={{ color: '#4A3F55' }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Trust Chips */}
      <section className="py-12" style={{ backgroundColor: '#D4005A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h3 className="text-xl font-bold text-center mb-6 text-white">Trust & Credentials</h3>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {trustChips.map((chip, i) => (
              <FadeIn key={chip} delay={Math.min(i + 1, 4)}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white' }}>
                  <i className="fas fa-check-circle" style={{ color: '#41EAD4' }} />
                  {chip}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}