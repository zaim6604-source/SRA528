import { useState } from 'react';
import useInView from '../hooks/useInView';

const jobCategories = ['Construction & Labor', 'Hospitality & Catering', 'Healthcare & Caregiving', 'Manufacturing & Factory', 'Logistics & Transport', 'IT & Engineering', 'Agriculture & Farming', 'Security & Facilities', 'Other'];

const faqs = [
  { q: 'Is Touchi International government licensed?', a: 'Yes — we are a Govt. Licensed Overseas Employment Promoter (OEP) with License No. 2238/RWP.' },
  { q: 'Which countries do you recruit for?', a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman, Germany, Poland, Italy, Greece, and Romania.' },
  { q: 'Where is your office located?', a: 'Office #6, 1st Floor, Rehman Plaza, I-10/4, Islamabad, Islamabad Capital Territory.' },
  { q: 'What documents do I need to apply?', a: 'You need a valid passport (min 6 months validity), educational certificates, experience letters, and a medical fitness certificate.' },
  { q: 'How long does the visa process take?', a: 'Visa processing times vary by country, typically ranging from 2 to 8 weeks after document submission.' },
  { q: 'Are there any registration fees?', a: 'Please contact us directly for detailed information about any applicable service fees.' },
];

export default function ApplyPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });
  const [activeFaq, setActiveFaq] = useState(null);
  const [ref, inView] = useInView();

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Touchi International! I am interested in applying for overseas employment.%0A%0A--- Application ---%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0AJob Category: ${encodeURIComponent(form.category)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/923333312207?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-ink">Apply Now</h1>
        <p className="text-ink/60 mt-2">
          Fill out the form or contact us directly. We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div ref={ref} className={`bg-white rounded-2xl shadow-md p-6 md:p-8 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Full Name</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Phone Number</label>
                <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="03XX-XXXXXXX" className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Job Category</label>
              <select name="category" required value={form.category} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-all bg-white">
                <option value="">Select a category</option>
                {jobCategories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Message</label>
              <textarea name="message" rows="3" value={form.message} onChange={handleChange} placeholder="Tell us about your background and goals..." className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-all resize-none" />
            </div>
            <button type="submit" className="w-full bg-cta text-white py-3.5 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-lg">
              <i className="fab fa-whatsapp mr-2" />Submit via WhatsApp
            </button>
          </form>

          <p className="text-center text-xs text-ink/40 mt-4">
            By submitting, you agree to be contacted. Alternatively, email{' '}
            <a href="mailto:info@touchiintl.pk" className="text-primary hover:underline">info@touchiintl.pk</a>
          </p>

          {/* Contact info */}
          <div className="mt-8 space-y-3 pt-6 border-t border-ink/10">
            <a href="tel:0514448444" className="flex items-center gap-3 text-ink/70 hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><i className="fas fa-phone" /></span>
              <span className="font-medium">051-4448444</span>
            </a>
            <a href="https://wa.me/923333312207" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink/70 hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><i className="fab fa-whatsapp" /></span>
              <span className="font-medium">0333-3312207</span>
            </a>
            <a href="https://wa.me/923367319997" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink/70 hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><i className="fab fa-whatsapp" /></span>
              <span className="font-medium">0336-7319997</span>
            </a>
            <div className="flex items-start gap-3 text-ink/70">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1"><i className="fas fa-map-marker-alt" /></span>
              <span className="font-medium text-sm">Office #6, 1st Floor, Rehman Plaza, I-10/4, Islamabad, Islamabad Capital Territory</span>
            </div>
          </div>
        </div>

        {/* Map + FAQ */}
        <div className="space-y-8">
          <div className="rounded-2xl overflow-hidden shadow-md h-64">
            <iframe title="Touchi International location" src="https://www.google.com/maps?q=33.65031240723087,73.04387354232856&hl=en&z=15&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>

          <div>
            <h2 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
              <i className="fas fa-question-circle text-accent" /> Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-sm text-ink hover:text-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <i className={`fas fa-chevron-down text-ink/30 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFaq === i && (
                    <div className="px-4 pb-4 text-sm text-ink/60 leading-relaxed border-t border-ink/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}