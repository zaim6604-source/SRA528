import { useState } from 'react';

const faqs = [
  {
    q: 'What documents do I need to apply for overseas jobs?',
    a: 'You typically need your CNIC, passport (valid for at least 6 months), educational certificates, experience letters, and passport-sized photographs. Additional documents may be required depending on the country and job role.',
  },
  {
    q: 'How long does the recruitment process take?',
    a: 'The process usually takes 4–8 weeks from registration to departure, depending on the destination country, visa processing times, and document attestation requirements. We keep you updated at every stage.',
  },
  {
    q: 'Is Hasil International government-licensed?',
    a: 'Yes, we are fully licensed by the Government of Pakistan under license number 2228/KAR. Our office is located at M-7, Falak Naz Heights, Opp. Jinnah Terminal, Shahrah-e-Faisal, Karachi.',
  },
  {
    q: 'What countries do you recruit for?',
    a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman, Kuwait, Germany, Poland, Romania, and Malaysia. We are continuously expanding our network of trusted employers across the Gulf, Europe, and Asia.',
  },
  {
    q: 'How can I contact you?',
    a: 'You can reach us by phone at 021-1458892 or via WhatsApp at 0333-3315228. You can also visit our office at M-7, Falak Naz Heights, Opp. Jinnah Terminal, Shahrah-e-Faisal, Karachi.',
  },
];

export default function Contact() {
  const [openIdx, setOpenIdx] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', destination: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const whatsappText = encodeURIComponent(
    `Hello Hasil International! My name is ${form.name || '[Your Name]'}. I am interested in ${form.destination || 'overseas employment'}. ${form.message ? `Message: ${form.message}` : ''} Please contact me at ${form.phone || '[Your Phone]'}.`
  );

  return (
    <div className="space-y-8">
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
          <i className="fas fa-paper-plane" />
          CONTACT US
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-ink/60 mt-2 max-w-2xl">
          Ready to start your overseas journey? Reach out to us today.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Form */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-secondary/10">
          <h2 className="text-lg font-bold text-ink mb-5">Send us a Message</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(`https://wa.me/923333315228?text=${whatsappText}`, '_blank');
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-2.5 rounded-xl border border-secondary/20 bg-background/30 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="03XX-XXXXXXX"
                className="w-full px-4 py-2.5 rounded-xl border border-secondary/20 bg-background/30 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Destination Country</label>
              <select
                name="destination"
                value={form.destination}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-secondary/20 bg-background/30 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
              >
                <option value="">Select a country...</option>
                <option>Saudi Arabia</option>
                <option>UAE</option>
                <option>Qatar</option>
                <option>Oman</option>
                <option>Kuwait</option>
                <option>Germany</option>
                <option>Poland</option>
                <option>Romania</option>
                <option>Malaysia</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Your message..."
                className="w-full px-4 py-2.5 rounded-xl border border-secondary/20 bg-background/30 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-lg"
            >
              <i className="fab fa-whatsapp text-lg" />
              Send via WhatsApp
            </button>
            <p className="text-xs text-ink/40 text-center">
              Form opens WhatsApp with your details. Alternatively, email us at{' '}
              <a href="mailto:info@hasilintl.pk" className="text-primary hover:underline">
                info@hasilintl.pk
              </a>
            </p>
          </form>
        </div>

        {/* Contact info + Map */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary/10">
            <h3 className="font-bold text-ink mb-4">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-phone text-primary text-sm" />
                </div>
                <div>
                  <p className="text-xs text-ink/40">Phone</p>
                  <a href="tel:0211458892" className="text-sm font-semibold text-ink hover:text-primary transition-colors">021-1458892</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <i className="fab fa-whatsapp text-[#25D366] text-sm" />
                </div>
                <div>
                  <p className="text-xs text-ink/40">WhatsApp</p>
                  <a href="https://wa.me/923333315228" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-ink hover:text-primary transition-colors">0333-3315228</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-envelope text-primary text-sm" />
                </div>
                <div>
                  <p className="text-xs text-ink/40">Email</p>
                  <a href="mailto:info@hasilintl.pk" className="text-sm font-semibold text-ink hover:text-primary transition-colors">info@hasilintl.pk</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-map-marker-alt text-primary text-sm" />
                </div>
                <div>
                  <p className="text-xs text-ink/40">Address</p>
                  <p className="text-sm font-semibold text-ink">M-7, Falak Naz Heights, Opp. Jinnah Terminal, Main Shahrah-e-Faisal, Karachi East, Sindh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address-query map */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Falak+Naz+Heights+Shahrah-e-Faisal+Karachi"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl p-6 shadow-sm border border-secondary/10 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <i className="fas fa-map-marked-alt text-primary text-sm" />
              </div>
              <div>
                <h3 className="font-bold text-ink text-sm">Find Us on Map</h3>
                <p className="text-xs text-ink/40">Click to open in Google Maps</p>
              </div>
            </div>
            <div className="h-28 rounded-xl bg-gradient-to-br from-background to-primary/5 flex items-center justify-center border border-secondary/10">
              <div className="text-center">
                <i className="fas fa-map-pin text-2xl text-primary" />
                <p className="text-xs text-ink/50 mt-1">Falak Naz Heights, Shahrah-e-Faisal</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-secondary/10">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
            <i className="fas fa-question-circle" />
            FAQS
          </span>
          <h2 className="text-xl font-bold text-ink">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-secondary/20 rounded-xl overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-background/30"
              >
                <span className="font-semibold text-ink text-sm sm:text-base">{faq.q}</span>
                <i className={`fas fa-chevron-down text-primary shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIdx === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-5 pb-4 text-ink/65 text-sm sm:text-base leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}