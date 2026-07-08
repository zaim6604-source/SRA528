import { useParams, Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { jobs } from '../data/jobs';

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="pt-24 max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FF206E10' }}>
          <i className="fa-solid fa-circle-exclamation text-2xl" style={{ color: '#FF206E' }} />
        </div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#1A1423' }}>Job Not Found</h1>
        <p className="mb-8" style={{ color: '#4A3F55' }}>The opening you are looking for does not exist or has been filled.</p>
        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all"
          style={{ backgroundColor: '#41EAD4', color: '#1A1423' }}
        >
          <i className="fa-solid fa-arrow-left" />
          Back to Jobs
        </Link>
      </div>
    );
  }

  const whatsappText = encodeURIComponent(
    `Hello Sufyan Recruiting Agency! I am interested in the "${job.role}" position in ${job.country}. Please provide more details.`
  );

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative pt-24 pb-16 md:pb-20 overflow-hidden" style={{ backgroundColor: '#FF206E' }}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors hover:text-white"
              style={{ color: '#FBFF12' }}
            >
              <i className="fa-solid fa-arrow-left" />
              Back to Jobs
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-3xl">{job.flag}</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FBFF12' }}>
                {job.country}
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FBFF12' }}>
                {job.trade}
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FBFF12' }}>
                {job.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">{job.role}</h1>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {job.country} &bull; {job.salary} &bull; {job.contract} &bull; {job.openings} openings
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Country Image */}
            <FadeIn>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={job.image}
                  alt={job.country}
                  className="w-full h-64 md:h-80 object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={1}>
              <div>
                <h2 className="text-xl font-bold mb-3" style={{ color: '#1A1423' }}>About This Opportunity</h2>
                <p className="leading-relaxed" style={{ color: '#4A3F55' }}>{job.description}</p>
              </div>
            </FadeIn>

            {/* Requirements */}
            <FadeIn delay={2}>
              <div>
                <h2 className="text-xl font-bold mb-3" style={{ color: '#1A1423' }}>Requirements</h2>
                <ul className="space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <i className="fa-solid fa-check-circle mt-1" style={{ color: '#41EAD4' }} />
                      <span className="text-sm" style={{ color: '#4A3F55' }}>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Documents */}
            <FadeIn delay={3}>
              <div>
                <h2 className="text-xl font-bold mb-3" style={{ color: '#1A1423' }}>Required Documents</h2>
                <ul className="space-y-2">
                  {job.documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <i className="fa-solid fa-file-lines mt-1" style={{ color: '#FF206E' }} />
                      <span className="text-sm" style={{ color: '#4A3F55' }}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <FadeIn delay={1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: '#FF206E10' }}>
                <h3 className="font-bold text-base mb-4" style={{ color: '#1A1423' }}>Quick Apply</h3>
                <a
                  href={`https://wa.me/923458649342?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-3"
                  style={{ backgroundColor: '#41EAD4', color: '#1A1423' }}
                >
                  <i className="fab fa-whatsapp" />
                  Apply via WhatsApp
                </a>
                <p className="text-xs text-center" style={{ color: '#4A3F55' }}>
                  Tap to send a pre-filled message on WhatsApp
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: '#FF206E10' }}>
                <h3 className="font-bold text-base mb-4" style={{ color: '#1A1423' }}>Job Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: '#4A3F55' }}>Country</span>
                    <span className="font-semibold" style={{ color: '#1A1423' }}>{job.country}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#4A3F55' }}>Category</span>
                    <span className="font-semibold" style={{ color: '#1A1423' }}>{job.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#4A3F55' }}>Trade</span>
                    <span className="font-semibold" style={{ color: '#1A1423' }}>{job.trade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#4A3F55' }}>Salary</span>
                    <span className="font-semibold" style={{ color: '#1A1423' }}>{job.salary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#4A3F55' }}>Contract</span>
                    <span className="font-semibold" style={{ color: '#1A1423' }}>{job.contract}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#4A3F55' }}>Openings</span>
                    <span className="font-semibold" style={{ color: '#1A1423' }}>{job.openings}</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={3}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: '#FF206E10' }}>
                <h3 className="font-bold text-base mb-3" style={{ color: '#1A1423' }}>Need Help?</h3>
                <p className="text-xs mb-4" style={{ color: '#4A3F55' }}>
                  Call us or send a message for any questions about this position.
                </p>
                <a
                  href="tel:0514861137"
                  className="flex items-center gap-3 text-sm font-semibold mb-2"
                  style={{ color: '#FF206E' }}
                >
                  <i className="fa-solid fa-phone" />
                  051-4861137
                </a>
                <a
                  href="https://wa.me/923458649342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-semibold"
                  style={{ color: '#41EAD4' }}
                >
                  <i className="fab fa-whatsapp" />
                  0345-8649342
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#1A1423' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Ready to Apply for This Position?
            </h2>
            <p className="text-sm mb-6" style={{ color: '#FBFF12' }}>
              Send us a message on WhatsApp and we&rsquo;ll guide you through the process.
            </p>
            <a
              href={`https://wa.me/923458649342?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#41EAD4', color: '#1A1423' }}
            >
              <i className="fab fa-whatsapp" />
              Apply Now
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}