import { useState } from 'react';
import useInView from '../hooks/useInView';

export default function Contact() {
  const [ref, inView] = useInView();
  const [formType, setFormType] = useState('employer');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const label = formType === 'employer' ? 'Foreign Recruiter / Employer' : 'Job Seeker';
    const extra = formType === 'employer' ? `Company: ${formData.company}` : '';
    const msg = encodeURIComponent(
      `Hello Bridge Global Resource!%0A%0A---%0AType: ${label}%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0A${extra}%0AMessage: ${formData.message}%0A---`
    );
    window.open(`https://wa.me/923212188000?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="section-pad bg-white overflow-hidden">
      <div className="container-pad" ref={ref}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#E0115F]/10 text-[#E0115F] mb-4">
            <i className="fas fa-phone-alt text-xs"></i>
            GET IN TOUCH
          </div>
          <h2 className="section-heading">
            Contact{' '}
            <span className="text-[#E0115F]">Bridge Global Resource</span>
          </h2>
          <p className="section-subheading">
            Reach out to us — whether you're an employer or a job seeker, we're here to help.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-10 items-start transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left: Form */}
          <div>
            {/* Toggle */}
            <div className="flex bg-[#FFF0F4] rounded-2xl p-1 mb-6 border border-[#E0115F]/10">
              <button
                onClick={() => setFormType('employer')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  formType === 'employer'
                    ? 'bg-[#E0115F] text-white shadow-md'
                    : 'text-[#2E0A1C]/60 hover:text-[#E0115F]'
                }`}
              >
                <i className="fas fa-building mr-2"></i>
                Foreign Recruiter / Employer
              </button>
              <button
                onClick={() => setFormType('jobseeker')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  formType === 'jobseeker'
                    ? 'bg-[#E0115F] text-white shadow-md'
                    : 'text-[#2E0A1C]/60 hover:text-[#E0115F]'
                }`}
              >
                <i className="fas fa-user-tie mr-2"></i>
                Job Seeker
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FFF0F4]/50 text-sm outline-none focus:border-[#E0115F] focus:ring-2 focus:ring-[#E0115F]/20 transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FFF0F4]/50 text-sm outline-none focus:border-[#E0115F] focus:ring-2 focus:ring-[#E0115F]/20 transition-all"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FFF0F4]/50 text-sm outline-none focus:border-[#E0115F] focus:ring-2 focus:ring-[#E0115F]/20 transition-all"
              />
              {formType === 'employer' ? (
                <input
                  type="text"
                  name="company"
                  placeholder="Company / Country"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FFF0F4]/50 text-sm outline-none focus:border-[#E0115F] focus:ring-2 focus:ring-[#E0115F]/20 transition-all"
                />
              ) : (
                <input
                  type="text"
                  name="company"
                  placeholder="Job Category / Country of Interest"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FFF0F4]/50 text-sm outline-none focus:border-[#E0115F] focus:ring-2 focus:ring-[#E0115F]/20 transition-all"
                />
              )}
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FFF0F4]/50 text-sm outline-none focus:border-[#E0115F] focus:ring-2 focus:ring-[#E0115F]/20 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#7B2D8E] hover:bg-[#9B3DAE] text-white font-semibold py-3 rounded-xl text-sm transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <i className="fab fa-whatsapp"></i>
                Send via WhatsApp
              </button>
            </form>

            <p className="text-xs text-[#2E0A1C]/50 text-center mt-3">
              Or email us at{' '}
              <a href="mailto:Bridgeglobalresource@gmail.com" className="text-[#E0115F] hover:underline">Bridgeglobalresource@gmail.com</a>
              {' '}·{' '}
              <span className="text-[#2E0A1C]/30">info@bridgeglobalresource.pk</span>
            </p>
          </div>

          {/* Right: Info + Map */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF0F4] border border-[#E0115F]/10">
                <div className="w-11 h-11 rounded-xl bg-[#E0115F] flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone-alt text-white"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2E0A1C]/50 uppercase tracking-wider mb-0.5">Phone</p>
                  <a href="tel:0518468276" className="text-[#2E0A1C] font-semibold hover:text-[#E0115F] transition-colors">051-8468276</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF0F4] border border-[#E0115F]/10">
                <div className="w-11 h-11 rounded-xl bg-[#E0115F] flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-whatsapp text-white"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2E0A1C]/50 uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <a href="https://wa.me/923212188000" target="_blank" rel="noopener noreferrer" className="text-[#2E0A1C] font-semibold hover:text-[#E0115F] transition-colors">0321-2188000</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF0F4] border border-[#E0115F]/10">
                <div className="w-11 h-11 rounded-xl bg-[#E0115F] flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2E0A1C]/50 uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:Bridgeglobalresource@gmail.com" className="text-[#2E0A1C] font-semibold hover:text-[#E0115F] transition-colors">Bridgeglobalresource@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF0F4] border border-[#E0115F]/10">
                <div className="w-11 h-11 rounded-xl bg-[#E0115F] flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2E0A1C]/50 uppercase tracking-wider mb-0.5">Addresses</p>
                  <p className="text-[#2E0A1C] font-medium text-sm">3 Street 36, MPCHS E-11/3, Islamabad, 44000</p>
                  <p className="text-[#2E0A1C]/70 text-sm">1 Paris Arcade, above UBL, E-11/3 Markaz, Islamabad</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF0F4] border border-[#E0115F]/10">
                <div className="w-11 h-11 rounded-xl bg-[#E0115F] flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-facebook-f text-white"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2E0A1C]/50 uppercase tracking-wider mb-0.5">Facebook</p>
                  <a href="https://facebook.com/bridgeglobalresource" target="_blank" rel="noopener noreferrer" className="text-[#2E0A1C] font-semibold hover:text-[#E0115F] transition-colors">/bridgeglobalresource</a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E0115F]/10">
              <iframe
                title="Bridge Global Resource Office Location"
                src="https://www.google.com/maps?q=33.70230427351291,72.97965714232855&hl=en&z=16&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}