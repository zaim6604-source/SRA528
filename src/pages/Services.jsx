import { Link } from 'react-router-dom';
import { services } from '../data/countries';

const colorMap = {
  '#FF206E': 'from-[#FF206E] to-[#D4005A]',
  '#D4005A': 'from-[#D4005A] to-[#FF206E]',
  '#41EAD4': 'from-[#41EAD4] to-[#1A1423]',
  '#FBFF12': 'from-[#FBFF12] to-[#FF206E]',
};

export default function Services() {
  return (
    <div className="animate-fade-in">
      {/* HEADER */}
      <section className="px-6 py-16 md:py-20 bg-ink text-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">What We Offer</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Complete overseas employment solutions designed to make your journey smooth, transparent, and successful.
          </p>
        </div>
      </section>

      {/* FLIP CARDS */}
      <section className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const gradient = colorMap[s.color] || 'from-primary to-highlight';
            const isDark = s.color === '#1A1423' || s.color === '#D4005A';
            return (
              <div key={s.title} className="flip-card h-64">
                <div className="flip-card-inner">
                  {/* FRONT */}
                  <div className={`flip-card-front bg-gradient-to-br ${gradient} text-white p-6`}>
                    <i className={`fas ${s.icon} text-4xl mb-4`} />
                    <h3 className="text-lg font-bold text-center leading-tight">{s.title}</h3>
                  </div>
                  {/* BACK */}
                  <div className={`flip-card-back p-6 ${isDark || s.color === '#FBFF12' ? 'bg-ink text-white' : 'bg-white text-ink'} shadow-xl`}>
                    <p className="text-sm leading-relaxed text-center">{s.desc}</p>
                    <Link
                      to="/contact"
                      className={`mt-4 inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all ${
                        isDark || s.color === '#FBFF12'
                          ? 'bg-cta text-ink hover:brightness-110'
                          : 'bg-primary text-white hover:brightness-110'
                      }`}
                    >
                      Inquire Now <i className="fas fa-arrow-right text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-14 text-center" style={{ background: 'linear-gradient(135deg, #FF206E 0%, #1A1423 100%)' }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Need a Custom Solution?</h2>
          <p className="text-white/70 mb-6">
            We tailor our services to match your skills and preferences with the right employer.
          </p>
          <a
            href="https://wa.me/923005866833?text=Hello%20Mahail%20Overseas!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta text-ink font-bold px-6 py-3 rounded-xl hover:brightness-110 transition-all"
          >
            <i className="fab fa-whatsapp" /> Talk to Us
          </a>
        </div>
      </section>

      <footer className="bg-ink text-white/50 px-6 py-6 text-center text-xs border-t border-white/10">
        &copy; {new Date().getFullYear()} Mahail Overseas Employment Promoters
      </footer>
    </div>
  );
}