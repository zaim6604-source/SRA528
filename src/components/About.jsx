import useInView from '../hooks/useInView';

const trustChips = [
  { icon: 'fa-check-circle', label: 'Govt. Licensed (2165/RWP)' },
  { icon: 'fa-handshake', label: 'Ethical Recruitment' },
  { icon: 'fa-shield-alt', label: 'Transparent Process' },
  { icon: 'fa-users', label: 'Skilled & Unskilled' },
  { icon: 'fa-passport', label: 'Visa Assistance' },
  { icon: 'fa-plane', label: 'Pre-Departure Support' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-4">
            <span className="pill-badge bg-primary/10 text-primary border border-primary/20">
              <i className="fas fa-info-circle mr-1.5" />
              WHO WE ARE
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-10">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-secondary/20 aspect-[4/3]">
                <img
                  src="https://picsum.photos/seed/janyal-about/800/600"
                  alt="Janyal Recruiting Agency team"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full bg-gradient-to-br from-primary/5 to-accent/5 p-8"><div class="text-center"><i class="fas fa-building text-5xl text-primary mb-3"></i><p class="text-ink/60 font-medium">Office No. F-11, 1st Floor<br/>Rizwan Arcade, Adamjee Road<br/>Saddar, Rawalpindi</p></div></div>`;
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-5">
                Your Trusted Gateway to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Global Opportunities
                </span>
              </h2>
              <p className="text-ink/70 leading-relaxed mb-4">
                Janyal Recruiting Agency, located at Adamjee Road in Saddar, Rawalpindi, has been a trusted name in overseas employment for over 15 years. As a government-licensed recruitment firm (License 2165/RWP), we specialize in connecting skilled and unskilled workers with reputable employers across the Gulf and Europe.
              </p>
              <p className="text-ink/70 leading-relaxed mb-6">
                Our comprehensive services cover everything from visa processing and document attestation to medical coordination, pre-departure orientation, and travel support. We are committed to ethical, transparent recruitment that puts the welfare of our candidates first.
              </p>

              {/* Trust chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {trustChips.map((chip) => (
                  <div
                    key={chip.label}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-background/50 border border-secondary/10"
                  >
                    <i className={`fas ${chip.icon} text-primary mt-0.5 text-sm`} />
                    <span className="text-xs font-medium text-ink/70">{chip.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}