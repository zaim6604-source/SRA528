import { Link } from 'react-router-dom';

const stats = [
  { value: '500+', label: 'Workers Placed' },
  { value: '9', label: 'Countries' },
  { value: '98%', label: 'Success Rate' },
  { value: '8+', label: 'Years Experience' },
];

const trustChips = [
  'Govt. Licensed OEP 2214/MLK',
  'Transparent Fee Structure',
  'Verified Employer Partners',
  'End-to-End Support',
  'Pre-Departure Training',
  'Post-Placement Assistance',
];

const whyUs = [
  {
    icon: 'fa-certificate',
    title: 'Government Licensed',
    desc: 'We are a fully licensed Overseas Employment Promoter (OEP 2214/MLK), regulated by the Government of Pakistan.',
  },
  {
    icon: 'fa-handshake',
    title: 'Trusted Partnerships',
    desc: 'We work only with verified employers who offer fair wages, safe working conditions, and legal contracts.',
  },
  {
    icon: 'fa-users-gear',
    title: 'Personalized Guidance',
    desc: 'Every applicant receives one-on-one counseling to find the best role matching their skills and preferences.',
  },
  {
    icon: 'fa-globe',
    title: 'Global Reach',
    desc: 'From the Gulf to Europe to Asia, we have placement opportunities across 9+ countries.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Ethical Recruitment',
    desc: 'We adhere to the highest ethical standards — no hidden fees, no misleading promises.',
  },
  {
    icon: 'fa-headset',
    title: 'Lifetime Support',
    desc: 'Our relationship doesn\'t end at deployment. We stay connected with you throughout your employment journey.',
  },
];

export default function About() {
  return (
    <div className="animate-fade-in">
      {/* HEADER */}
      <section className="bg-gradient-to-br from-primary via-highlight to-ink px-6 py-16 md:py-20 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-secondary font-bold text-sm tracking-widest uppercase">About Us</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4">
            Your Trusted Partner in <span className="text-secondary">Overseas Employment</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Warda International is a Government-Licensed Overseas Employment Promoter (OEP 2214/MLK) based in Timergara, Lower Dir.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 py-16 md:py-20 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-4">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="text-ink/60 leading-relaxed space-y-4">
              <p>
                Founded with a mission to bridge the gap between skilled Pakistani workers and international employers,
                Warda International has grown into a trusted name in overseas employment from Timergara, Lower Dir.
              </p>
              <p>
                With our government license (OEP 2214/MLK), we are authorized to recruit and place workers in countries
                across the Gulf, Europe, and Asia. Our team brings decades of combined experience in international recruitment,
                visa processing, and workforce management.
              </p>
              <p>
                We believe in transparent, ethical recruitment — every candidate is treated with respect, given clear
                information about their options, and supported at every step of their journey.
              </p>
            </div>
          </div>
          <div className="bg-ink/5 rounded-2xl p-6">
            <div className="bg-ink/10 rounded-xl p-5 text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mx-auto mb-3">
                <i className="fas fa-building" />
              </div>
              <h3 className="font-bold text-ink text-lg">Birmingham Plaza</h3>
              <p className="text-ink/50 text-sm mt-1">Office No. 10, First Floor</p>
              <p className="text-ink/50 text-sm">Rest House Road, Timergara</p>
              <p className="text-ink/50 text-sm">Lower Dir, KPK</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</div>
              <div className="text-white/50 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-2">
            Why Choose <span className="text-primary">Warda International</span>
          </h2>
          <p className="text-ink/60">What sets us apart from the rest</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-5">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                <i className={`fas ${item.icon} text-lg`} />
              </div>
              <h3 className="font-bold text-ink text-sm mb-2">{item.title}</h3>
              <p className="text-ink/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST CHIPS */}
      <section className="bg-white px-6 py-10 border-t border-ink/5">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {trustChips.map((chip) => (
            <span key={chip} className="px-4 py-2 bg-background rounded-full text-sm font-semibold text-ink/70 border border-ink/5">
              <i className="fas fa-check-circle text-primary mr-1.5" />
              {chip}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-accent to-accent/80 px-6 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-3">
            Let&apos;s Start Your Journey
          </h2>
          <p className="text-ink/70 mb-6">
            Browse our latest openings or reach out to us directly on WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 bg-ink text-white font-bold px-6 py-3.5 rounded-xl hover:brightness-150 transition-all shadow-lg"
            >
              <i className="fas fa-briefcase" /> Browse Jobs
            </Link>
            <a
              href="https://wa.me/923038799996?text=Hi%20Warda%20International!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-ink font-bold px-6 py-3.5 rounded-xl hover:brightness-110 transition-all"
            >
              <i className="fab fa-whatsapp" /> Chat with Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}