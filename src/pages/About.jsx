import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import OptimizedImage from '../components/OptimizedImage';
import StatBand from '../components/StatBand';

export default function About() {
  const revealRef = useScrollReveal();
  const storyRef = useScrollReveal();

  return (
    <div className="page-fade">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#FF1654] to-[#D60046] pt-12 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold mb-4 backdrop-blur-sm">
            <i className="fas fa-info-circle" />
            About Us
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Your Trusted Gateway to Gulf Careers
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            Licensed by the Government of Pakistan — connecting KPK workers to verified employers across the Middle East.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="-mt-10 relative z-10">
        <StatBand />
      </div>

      {/* Story + Image */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={revealRef} className="reveal grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80"
                alt="Professional team collaboration and partnership"
                className="aspect-[4/3]"
                icon="fas fa-handshake"
              />
            </div>

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF1654]/10 text-[#FF1654] rounded-full text-xs font-semibold mb-4">
                <i className="fas fa-building" />
                Our Story
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#152935] mb-4 sm:mb-6">
                Licensed Overseas Employment Provider
              </h2>
              <p className="text-sm sm:text-base text-[#152935]/70 leading-relaxed mb-4">
                Based in <strong>Adda Bazar, Sherpao, Charsadda</strong>, Visa Master Overseas (License{' '}
                <strong>OP&HRD/4951/PWR/2023</strong>) is a government-registered Overseas Employment
                Promoter dedicated to connecting skilled workers from KPK with reputable employers in
                the Middle East.
              </p>
              <p className="text-sm sm:text-base text-[#152935]/70 leading-relaxed mb-6">
                From the heart of <strong>Charsadda district</strong>, we specialize in placing workers
                in Gulf countries including Saudi Arabia, UAE, Qatar, Oman, and Kuwait. Our key roles
                include animal farm workers, cattle herders, thermal insulation technicians, construction
                staff, drivers, and hospitality professionals.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="chip bg-[#FFF3E0]">
                  <i className="fas fa-check-circle text-green-500" /> Govt. Licensed
                </div>
                <div className="chip bg-[#FFF3E0]">
                  <i className="fas fa-shield-alt text-[#FF1654]" /> No Hidden Fees
                </div>
                <div className="chip bg-[#FFF3E0]">
                  <i className="fas fa-clock text-[#FF1654]" /> Fast Processing
                </div>
                <div className="chip bg-[#FFF3E0]">
                  <i className="fas fa-headset text-[#FF1654]" /> 24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-[#FFF3E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#152935] mb-3">
              Why Choose Visa Master Overseas?
            </h2>
            <p className="text-sm sm:text-base text-[#152935]/60 max-w-xl mx-auto">
              We put our candidates first — with transparency, integrity, and care.
            </p>
          </div>

          <div ref={storyRef} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: 'fas fa-certificate', title: 'Government Licensed', desc: 'Registered under OP&HRD/4951/PWR/2023 — fully compliant with all regulations.' },
              { icon: 'fas fa-search-dollar', title: 'Transparent Fees', desc: 'No hidden charges. All costs communicated clearly upfront.' },
              { icon: 'fas fa-handshake', title: 'Verified Employers', desc: 'We personally vet every employer to ensure authentic job offers.' },
              { icon: 'fas fa-tachometer-alt', title: 'Fast Processing', desc: 'Efficient documentation and visa processing — get deployed quickly.' },
              { icon: 'fas fa-users', title: 'Local Presence', desc: 'Based in Sherpao, Charsadda — we understand the local community.' },
              { icon: 'fas fa-headset', title: 'Post-Placement Support', desc: 'We stay with you even after you reach your destination.' },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-orange-100 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF1654]/10 flex items-center justify-center text-[#FF1654] mb-3">
                  <i className={v.icon} />
                </div>
                <h3 className="text-base font-bold font-[Poppins] text-[#152935] mb-2">{v.title}</h3>
                <p className="text-sm text-[#152935]/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#247BA0] to-[#152935]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Work in the Gulf?
          </h2>
          <p className="text-sm sm:text-base text-white/80 mb-8 max-w-lg mx-auto">
            Take the first step. Contact us today and let us help you find the right job abroad.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#152935] bg-[#FFD400] rounded-full hover:bg-[#e6bf00] transition-all no-underline"
            >
              <i className="fas fa-search" />
              Browse Jobs
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border-2 border-white/40 rounded-full hover:bg-white/10 transition-all no-underline"
            >
              <i className="fas fa-envelope" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}