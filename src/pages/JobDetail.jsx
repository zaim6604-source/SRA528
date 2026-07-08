import { useParams, Link } from 'react-router-dom';
import { jobs } from '../data/jobs';
import OptimizedImage from '../components/OptimizedImage';

const countryImages = {
  'Saudi Arabia': 'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=800&h=400&fit=crop&q=80',
  'UAE': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=400&fit=crop&q=80',
  'Qatar': 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=800&h=400&fit=crop&q=80',
  'Oman': 'https://images.unsplash.com/photo-1548266652-99cf27701ced?w=800&h=400&fit=crop&q=80',
  'Kuwait': 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800&h=400&fit=crop&q=80',
};

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="page-fade min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-exclamation-circle text-5xl text-[#FF1654]/30 mb-4" />
          <h2 className="text-2xl font-bold font-[Poppins] text-[#152935] mb-2">Job Not Found</h2>
          <p className="text-sm text-[#152935]/60 mb-6">The job you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#FF1654] rounded-full hover:bg-[#D60046] transition-all no-underline"
          >
            <i className="fas fa-arrow-left text-xs" />
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  const countryImage = countryImages[job.country] || countryImages['Saudi Arabia'];

  const whatsappText = `Hello Visa Master Overseas! I am interested in the ${job.role} position in ${job.country}. Please share more details.`;

  return (
    <div className="page-fade">
      {/* Hero image */}
      <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
        <OptimizedImage
          src={countryImage}
          alt={`${job.country} — job destination`}
          className="w-full h-full"
          icon="fas fa-globe-asia"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#152935]/80 via-[#152935]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/80 hover:text-white mb-3 transition-colors no-underline"
            >
              <i className="fas fa-arrow-left text-xs" />
              Back to Jobs
            </Link>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold font-[Poppins] text-white">{job.role}</h1>
            <p className="text-sm sm:text-base text-white/70 mt-1">
              <i className="fas fa-map-marker-alt mr-1.5 text-[#FFD400]" />
              {job.country} {job.countries.length > 1 && `(+ ${job.countries.filter(c => c !== job.country).join(', ')})`}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-8 sm:py-12 bg-[#FFF3E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-orange-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF1654]/10 flex items-center justify-center text-[#FF1654]">
                    <i className={job.icon} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold font-[Poppins] text-[#152935]">Job Description</h2>
                    <span className="text-xs font-medium text-[#247BA0]">{job.subcategory}</span>
                  </div>
                </div>
                <p className="text-sm text-[#152935]/70 leading-relaxed">{job.description}</p>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-orange-100">
                <h2 className="text-lg font-bold font-[Poppins] text-[#152935] mb-4 flex items-center gap-2">
                  <i className="fas fa-list-check text-[#FF1654]" />
                  Requirements
                </h2>
                <ul className="space-y-2.5">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#152935]/70">
                      <i className="fas fa-check-circle text-[#70C1B3] mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-orange-100">
                <h2 className="text-lg font-bold font-[Poppins] text-[#152935] mb-4 flex items-center gap-2">
                  <i className="fas fa-file-alt text-[#FF1654]" />
                  Required Documents
                </h2>
                <ul className="space-y-2.5">
                  {job.documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#152935]/70">
                      <i className="fas fa-file text-[#247BA0] mt-0.5 flex-shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 sm:sticky sm:top-28 sm:self-start">
              {/* Apply Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
                <h3 className="text-sm font-bold font-[Poppins] text-[#152935] mb-1">Salary & Benefits</h3>
                <p className="text-lg font-bold text-[#FF1654] mb-4">{job.salary}</p>

                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-xs text-[#152935]/60">
                    <i className="fas fa-globe text-[#247BA0]" />
                    <span>Available in: {job.countries.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#152935]/60">
                    <i className="fas fa-tag text-[#247BA0]" />
                    <span>Category: {job.subcategory}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/923459090790?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#70C1B3] rounded-full hover:bg-[#5db8a8] hover:shadow-lg transition-all no-underline"
                >
                  <i className="fab fa-whatsapp" />
                  Apply via WhatsApp
                </a>
                <p className="text-xs text-[#152935]/40 text-center mt-3">
                  Or email{' '}
                  <a href="mailto:sawerapvt@gmail.com" className="text-[#247BA0] hover:underline">
                    sawerapvt@gmail.com
                  </a>
                </p>
              </div>

              {/* Other countries */}
              {job.countries.length > 1 && (
                <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
                  <h3 className="text-sm font-bold font-[Poppins] text-[#152935] mb-3">Also Available In</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.countries.filter(c => c !== job.country).map((c) => (
                      <span
                        key={c}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#FFF3E0] text-[#152935]/70 font-medium"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Apply */}
              <a
                href="https://wa.me/923459090790"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-2xl p-5 shadow-md border border-orange-100 hover:shadow-lg transition-all no-underline group"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                  <i className="fab fa-whatsapp text-lg" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#152935] group-hover:text-green-600 transition-colors">
                    WhatsApp Us
                  </div>
                  <div className="text-xs text-[#152935]/50">0345-9090790</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}