const trustChips = [
  'Government Licensed (2228/KAR)',
  '10+ Years Industry Experience',
  '5000+ Successful Placements',
  '100% Transparent Process',
  'Pre-Departure Training',
  'Post-Placement Support',
];

export default function About() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
          <i className="fas fa-info-circle" />
          ABOUT US
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2">
          Your Trusted Partner in <span className="text-primary">Overseas Recruitment</span>
        </h1>
      </div>

      {/* Story + Office photo */}
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-secondary/10">
          <h2 className="text-xl font-bold text-ink mb-4">Our Story</h2>
          <div className="space-y-4 text-ink/65 text-sm sm:text-base leading-relaxed">
            <p>
              Hasil International was founded with a single mission: to create genuine,
              life-changing overseas employment opportunities for the people of Karachi
              and beyond. Based at M-7, Falak Naz Heights, opposite Jinnah Terminal on
              Shahrah-e-Faisal — one of Karachi's most prominent arteries — we have
              become a trusted name in international recruitment.
            </p>
            <p>
              Over the years, we have successfully placed thousands of skilled and
              unskilled workers with reputable employers across the Gulf, Europe, and
              Asia. Our deep understanding of both local talent and international
              market demands allows us to deliver results that matter.
            </p>
            <p>
              Licensed by the Government of Pakistan under license number 2228/KAR,
              we operate with full transparency, integrity, and a commitment to the
              well-being of every candidate we serve.
            </p>
          </div>
        </div>

        {/* Office photo */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-secondary/10 overflow-hidden flex items-center justify-center">
          <div className="p-8 text-center">
            <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-building text-4xl text-primary" />
            </div>
            <h3 className="font-bold text-ink text-lg">Our Office</h3>
            <p className="text-ink/50 text-sm mt-1">
              M-7, Falak Naz Heights<br />
              Opp. Jinnah Terminal<br />
              Shahrah-e-Faisal, Karachi
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-amber-700 border border-accent/20">
              <i className="fas fa-map-pin text-[10px]" />
              Landmark Location
            </div>
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-secondary/10">
        <h2 className="text-xl font-bold text-ink mb-5">Why Choose Hasil International?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: 'fa-shield-alt', title: 'Licensed & Regulated', desc: 'Government license 2228/KAR. Fully compliant with overseas employment rules.' },
            { icon: 'fa-handshake', title: 'Trusted by Thousands', desc: 'Over 5,000 successful placements across 12+ countries.' },
            { icon: 'fa-eye', title: 'Complete Transparency', desc: 'No hidden fees. Clear communication at every step of the process.' },
            { icon: 'fa-people-arrows', title: 'End-to-End Support', desc: 'From registration to departure, we handle everything for you.' },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-background/50">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <i className={`fas ${item.icon} text-lg text-primary`} />
              </div>
              <div>
                <h3 className="font-bold text-ink text-sm">{item.title}</h3>
                <p className="text-ink/50 text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Chips */}
      <div>
        <h2 className="text-lg font-bold text-ink mb-4 text-center">Our Credentials</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {trustChips.map((chip) => (
            <span key={chip} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-primary/20 text-ink shadow-sm">
              <i className="fas fa-check-circle text-primary" />
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}