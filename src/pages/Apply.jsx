import { useState } from 'react';

const initialForm = { name: '', phone: '', email: '', destination: '', message: '' };

const faqs = [
  {
    q: 'What documents do I need to apply for overseas jobs?',
    a: 'You typically need your CNIC, passport (valid for at least 6 months), educational certificates, experience letters, and passport-sized photographs. Additional documents may be required depending on the country and job role.',
  },
  {
    q: 'How long does the recruitment process take?',
    a: 'The process usually takes 4–8 weeks from registration to departure, depending on the destination country, visa processing times, and document attestation requirements.',
  },
  {
    q: 'Is Fejar Enterprises government-licensed?',
    a: 'Yes, we are fully licensed by the Government of Pakistan under license number 2207/RWP. Our office is located at Flat No. 7, 1st Floor, Al-Mustafa Plaza, 6th Road, Murree Road, Rawalpindi.',
  },
  {
    q: 'What countries do you recruit for?',
    a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman, Germany, Poland, Italy, Greece, and Malaysia. We are continuously expanding our network of trusted employers across the Gulf and Europe.',
  },
  {
    q: 'What types of jobs do you offer?',
    a: 'We offer both skilled and unskilled positions including construction workers, drivers, nurses, electricians, welders, hotel staff, factory workers, security personnel, and more. Contact us with your profile for a personalized match.',
  },
  {
    q: 'How much does your service cost?',
    a: 'Our fees are transparent and competitive. We provide a complete breakdown of all charges before you begin the process. There are no hidden costs. Contact us for a detailed quotation based on your desired destination and job role.',
  },
  {
    q: 'Do you provide pre-departure training?',
    a: 'Yes, we provide comprehensive pre-departure orientation covering cultural awareness, workplace rights, travel tips, and what to expect in your destination country.',
  },
];

export default function Apply() {
  const [form, setForm] = useState(initialForm);
  const [openIdx, setOpenIdx] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Application Inquiry — Fejar Enterprises');
    const body = encodeURIComponent(
      `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ADestination: ${form.destination}%0AMessage: ${form.message}%0A%0A---%0APlease replace this with your application details.`
    );
    window.location.href = `mailto:info@fejarenterprises.pk?subject=${subject}&body=${body}`;
    setForm(initialForm);
  };

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center sm:text-left">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
          <i className="fas fa-paper-plane" />
          CONTACT / APPLY
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2">
          Get In Touch
        </h1>
        <p className="text-ink/60 mt-2 max-w-2xl">
          Have a question or ready to apply? Reach out to us — we're here to help.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Form */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-secondary/10">
          <h2 className="text-xl font-bold text-ink mb-6">Send Us Your Application</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1.5">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="03XX-XXXXXXX"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1.5">Destination</label>
                <select
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                >
                  <option value="">Select a country</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="UAE">UAE</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Oman">Oman</option>
                  <option value="Germany">Germany</option>
                  <option value="Poland">Poland</option>
                  <option value="Italy">Italy</option>
                  <option value="Greece">Greece</option>
                  <option value="Malaysia">Malaysia</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink/70 mb-1.5">Message</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-secondary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                placeholder="Tell us about your skills and preferred job..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-bold bg-cta text-white hover:bg-cta/90 transition-all shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-paper-plane" />
              Submit Application
            </button>
            <p className="text-xs text-ink/40 text-center">
              Applications are sent via email. You can also call us directly.
            </p>
          </form>
        </div>

        {/* Contact info + map */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-secondary/10">
            <h2 className="text-xl font-bold text-ink mb-5">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-phone text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm">Phone (Call Only)</p>
                  <a href="tel:0514410484" className="text-ink/60 text-sm hover:text-primary transition-colors font-medium">
                    051-4410484
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-map-marker-alt text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm">Office Address</p>
                  <p className="text-ink/60 text-sm">
                    Flat No. 7, 1st Floor, Al-Mustafa Plaza,<br />
                    6th Road, Murree Road,<br />
                    Rawalpindi, Punjab
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map - address query */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-secondary/10 h-64 bg-white">
            <iframe
              title="Fejar Enterprises Location"
              src="https://maps.google.com/maps?q=Al-Mustafa+Plaza+6th+Road+Murree+Road+Rawalpindi&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-secondary/10">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
            <i className="fas fa-question-circle" />
            FAQS
          </span>
          <h2 className="text-2xl font-extrabold text-ink">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-secondary/20 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-background/30"
              >
                <span className="font-semibold text-ink text-sm sm:text-base">
                  {faq.q}
                </span>
                <i
                  className={`fas fa-chevron-down text-primary shrink-0 transition-transform duration-300 ${
                    openIdx === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIdx === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-4 text-ink/65 text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}