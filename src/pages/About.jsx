import { Link } from 'react-router-dom';

const reasons = [
  { icon: 'fa-shield-halved', title: 'Govt. Licensed', desc: 'Fully registered overseas employment promoter operating under government regulations.' },
  { icon: 'fa-handshake', title: 'Trusted Network', desc: 'Strong partnerships with verified employers across 9+ countries.' },
  { icon: 'fa-circle-check', title: '98% Success Rate', desc: 'Proven track record of visa approvals and successful placements.' },
  { icon: 'fa-headset', title: 'End-to-End Support', desc: 'From application to arrival — we are with you at every step.' },
  { icon: 'fa-file-contract', title: 'Transparent Process', desc: 'Clear fee structures, no hidden charges, and full contract transparency.' },
  { icon: 'fa-hand-holding-heart', title: 'Post-Placement Care', desc: 'We stay connected after you depart to ensure your well-being.' },
];

const milestones = [
  { year: '2017', event: 'Mahail Overseas established in Peshawar' },
  { year: '2018', event: 'First batch of workers placed in Saudi Arabia' },
  { year: '2020', event: 'Expanded to European destinations (Poland, Romania)' },
  { year: '2022', event: 'Crossed 300 successful placements' },
  { year: '2024', event: 'Added Germany & Malaysia to our network' },
  { year: '2025', event: 'Celebrating 500+ workers placed globally' },
];

export default function About() {
  return (
    <div className="animate-fade-in">
      {/* HEADER */}
      <section className="px-6 py-16 md:py-20 bg-ink text-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">About Us</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4">
            Your Trusted Partner in <span className="text-primary">Global Employment</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            From Peshawar to the world — we have been connecting skilled Pakistani workers with reputable international employers since 2017.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 py-16 md:py-20 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-4">Our Story</h2>
            <div className="space-y-4 text-ink/70 leading-relaxed">
              <p>
                Founded in the heart of Hashtnagri, Peshawar, Mahail Overseas Employment Promoters was born from a simple belief:
                every hardworking Pakistani deserves access to quality employment opportunities abroad.
              </p>
              <p>
                What started as a small office in Shan Plaza has grown into a trusted overseas employment agency,
                placing over 500 workers across 9 countries in the Middle East, Europe, and Asia.
              </p>
              <p>
                Our team brings decades of combined experience in recruitment, visa processing, and international
                labor markets. We take pride in our transparent processes, ethical practices, and genuine care for every worker we place.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary to-highlight rounded-2xl p-1">
            <div className="bg-background rounded-2xl p-8 h-full">
              <div className="w-full h-48 rounded-xl bg-ink/5 flex items-center justify-center text-ink/20 text-6xl">
                <i className="fas fa-building" />
              </div>
              <div className="mt-4 space-y-2 text-sm text-ink/60">
                <p className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-primary" />
                  Office #08, 2nd Floor, Shan Plaza, Sikanderpura Chowk
                </p>
                <p className="flex items-center gap-2">
                  <i className="fas fa-city text-primary" />
                  Hashtnagri, Peshawar, 25000, KPK
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="px-6 py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-2 text-center">Our Journey</h2>
          <p className="text-ink/60 text-center mb-10">Key milestones that shaped who we are.</p>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                    <span className="text-2xl font-extrabold text-primary">{m.year}</span>
                  </div>
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-primary/30">
                    <i className="fas fa-check" />
                  </div>
                  <div className={`bg-background rounded-xl p-4 shadow-sm flex-1 md:w-1/2 ${i % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}>
                    <span className="md:hidden text-primary font-bold text-sm">{m.year}</span>
                    <p className="text-ink/70 text-sm mt-1 md:mt-0">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 py-16 md:py-20 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-2 text-center">Why Choose Us?</h2>
        <p className="text-ink/60 text-center mb-10">Six reasons that make us the right choice for your overseas journey.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl mb-3">
                <i className={`fas ${r.icon}`} />
              </div>
              <h3 className="font-bold text-ink mb-1">{r.title}</h3>
              <p className="text-ink/60 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST CHIPS */}
      <section className="px-6 py-10 bg-primary">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {['Govt. Licensed', '500+ Placed', '9 Countries', '98% Success', 'Transparent Fees', 'Post-Placement Support', 'Peshawar Based'].map((chip) => (
            <span
              key={chip}
              className="bg-white/15 text-white backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-14 text-center bg-ink text-white">
        <h2 className="text-2xl font-bold mb-3">Ready to Work Abroad?</h2>
        <p className="text-white/60 mb-6">Let us help you find the right opportunity.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-cta text-ink font-bold px-6 py-3 rounded-xl hover:brightness-110 transition-all"
        >
          <i className="fas fa-paper-plane" /> Get in Touch
        </Link>
      </section>

      <footer className="bg-ink/80 text-white/50 px-6 py-6 text-center text-xs border-t border-white/10">
        &copy; {new Date().getFullYear()} Mahail Overseas Employment Promoters — Peshawar, KPK
      </footer>
    </div>
  );
}