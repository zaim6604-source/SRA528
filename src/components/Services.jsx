import { useState } from 'react';
import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

const services = [
  { icon: 'fa-user-plus', title: 'Manpower Supply', desc: 'Skilled & semi-skilled workers for Gulf & European employers across all sectors.', detail: 'Our manpower supply service covers all sectors including construction, hospitality, healthcare, manufacturing, and logistics. We pre-screen all candidates for skills, experience, and medical fitness before presenting them to employers.', color: 'bg-primary' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'End-to-end visa documentation and submission for work permits to Gulf and European destinations.', detail: 'We handle the complete visa lifecycle: document collection, attestation, embassy submission, biometric appointments, and follow-up. Our team ensures all paperwork meets the specific requirements of each destination country.', color: 'bg-secondary' },
  { icon: 'fa-file-contract', title: 'Contract Facilitation', desc: 'Employment contract verification and authentication services to protect worker rights.', detail: 'We review all employment contracts to ensure they meet local and international labor standards. Our team verifies salary, benefits, working hours, accommodation, and other terms before the worker signs.', color: 'bg-highlight' },
  { icon: 'fa-plane-departure', title: 'Pre-Departure', desc: 'Briefing, travel coordination, and airport assistance for departing workers.', detail: 'Our pre-departure program includes cultural orientation, travel guidelines, emergency contacts, and airport assistance. We ensure every worker departs with confidence and complete documentation.', color: 'bg-primary' },
  { icon: 'fa-hospital', title: 'Medical Screening', desc: 'Coordination with authorized medical centers for fitness certificates required by destination countries.', detail: 'We partner with government-approved medical centers for comprehensive health screenings including blood tests, X-rays, and physical examinations required for work visa applications.', color: 'bg-secondary' },
  { icon: 'fa-gavel', title: 'Legal Attestation', desc: 'Document attestation from overseas missions, chambers of commerce, and government bodies.', detail: 'Our legal team manages the entire attestation chain: from educational documents and experience certificates to police clearances and birth certificates, ensuring all documents are properly legalized.', color: 'bg-highlight' },
  { icon: 'fa-language', title: 'Language Training', desc: 'Basic language and soft skills orientation for successful integration in host countries.', detail: 'We offer basic language courses (English, Arabic, German) and soft skills training covering workplace culture, safety protocols, and communication skills to help workers succeed abroad.', color: 'bg-primary' },
  { icon: 'fa-hand-holding-heart', title: 'Post-Placement Support', desc: 'Ongoing support for workers and their families after deployment abroad.', detail: 'Our commitment doesn\'t end at departure. We provide ongoing support including family communication, grievance handling, contract extensions, and repatriation assistance throughout the worker\'s employment period.', color: 'bg-secondary' },
  {
  icon: 'fa-user-check',
  title: 'Candidate Screening',
  desc: 'Comprehensive screening and skill assessment to match employers with the right talent.',
  detail: 'Every applicant undergoes a thorough screening process including document verification, interviews, trade tests, reference checks, and background validation. This ensures employers receive qualified, reliable, and job-ready candidates while reducing hiring risks.',
  color: 'bg-highlight'
},
];

export default function Services() {
  const [modal, setModal] = useState(null);

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='w-full '>
        <FadeUp className='flex flex-col justify-center items-center'>
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-briefcase" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
            What We Offer
          </h2>
          <p className="text-ink/60 text-center mt-3 max-w-2xl mx-auto">
            Comprehensive recruitment services from documentation to deployment
          </p>
        </FadeUp>
        </div>

        <div className="services-grid mt-10">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 60}>
              <div
                className={`${s.color} text-white rounded-2xl shadow-lg hover:scale-[1.02] transition-transform overflow-hidden cursor-pointer`}
                onClick={() => setModal(s)}
              >
                <div className="h-36 overflow-hidden">
                  <SafeImage
                    src={`/images/service-${i}.jpg`}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    fallbackType="service"
                    fallbackSeed={i}
                  />
                </div>
                <div className="p-6 sm:p-8 pt-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-lg shrink-0">
                      <i className={`fas ${s.icon}`} />
                    </div>
                    <h3 className="text-lg font-extrabold">{s.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed opacity-90">{s.desc}</p>
                  <div className="mt-3 text-xs font-semibold text-white/70 flex items-center gap-1">
                    <i className="fas fa-chevron-right" />
                    Click for details
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(null)}>
          <div className="modal-content p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white text-xl">
                  <i className={`fas ${modal.icon}`} />
                </div>
                <h3 className="text-xl font-extrabold text-ink">{modal.title}</h3>
              </div>
              <button
                onClick={() => setModal(null)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-ink/50 hover:bg-gray-200 transition-colors"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            <p className="text-ink/70 leading-relaxed">{modal.detail}</p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://wa.me/923008638517"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cta text-ink font-extrabold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all"
              >
                <i className="fab fa-whatsapp" />
                Apply for {modal.title}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}