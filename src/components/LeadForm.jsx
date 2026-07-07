import { useState } from 'react';
import { Send, User, Phone, Mail, Globe, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const countries = [
  'United Kingdom',
  'Canada',
  'Australia',
  'United States',
  'Germany',
  'Malaysia',
  'Ireland',
  'New Zealand',
  'Italy',
  'Turkey',
  'France',
  'Netherlands',
  'Sweden',
  'Other',
];

const initialForm = {
  name: '',
  phone: '',
  email: '',
  country: '',
  message: '',
};

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [ref, isVisible] = useScrollAnimation();

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!form.phone.trim()) errs.phone = 'Phone number is required.';
    else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone))
      errs.phone = 'Enter a valid phone number.';
    if (!form.email.trim()) errs.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Enter a valid email.';
    if (!form.country) errs.country = 'Please select a country.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const msg = encodeURIComponent(
      `Hello Sapphire Global Education,\n\nMy name is ${form.name}.\nI am interested in studying in ${form.country}.\nMy contact number is ${form.phone}.\nEmail: ${form.email}.\n${form.message ? `Message: ${form.message}.\n` : ''}Please guide me further.`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/923088583143?text=${msg}`, '_blank');
    }, 800);
  };

  return (
    <section
      id="lead-form"
      className="section-pad relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sapphire-900 via-sapphire-800 to-sapphire-700" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container-pad">
        <div className="max-w-5xl mx-auto">
          <div
            ref={ref}
            className={`grid lg:grid-cols-5 gap-10 items-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Left Info Column */}
            <div className="lg:col-span-2 text-white">
              <span className="inline-block bg-white/10 text-gold-300 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                Free Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-5 leading-snug">
                Take the First Step Towards Your{' '}
                <span className="text-gradient">Dream University</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Fill in the form and our counselor will reach out to you on WhatsApp
                within 24 hours — completely free, no obligation.
              </p>

              <ul className="space-y-4">
                {[
                  'Free, no-obligation consultation',
                  'Expert advice tailored to you',
                  'Response within 24 hours',
                  'Completely confidential',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-sapphire-700 font-heading mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-500">
                      Redirecting you to WhatsApp to connect with our counselor…
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <h3 className="text-xl font-bold text-sapphire-700 font-heading mb-1">
                      Get Free Consultation
                    </h3>
                    {/* <p className="text-sm text-gray-400 mb-4">
                      All fields marked * are required.
                    </p> */}

                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Ahmed Khan"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 ${
                            errors.name
                              ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
                              : 'border-gray-200 bg-gray-50 focus:border-sapphire-400 focus:ring-2 focus:ring-sapphire-100 focus:bg-white'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone + Email row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="03XX-XXXXXXX"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 ${
                              errors.phone
                                ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
                                : 'border-gray-200 bg-gray-50 focus:border-sapphire-400 focus:ring-2 focus:ring-sapphire-100 focus:bg-white'
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@email.com"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 ${
                              errors.email
                                ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
                                : 'border-gray-200 bg-gray-50 focus:border-sapphire-400 focus:ring-2 focus:ring-sapphire-100 focus:bg-white'
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Interested Country */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Interested Country *
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <select
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 appearance-none ${
                            errors.country
                              ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
                              : 'border-gray-200 bg-gray-50 focus:border-sapphire-400 focus:ring-2 focus:ring-sapphire-100 focus:bg-white'
                          }`}
                        >
                          <option value="">Select a country…</option>
                          {countries.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      {errors.country && (
                        <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Message{' '}
                        <span className="font-normal text-gray-400">(optional)</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Tell us more about your study plans or any questions…"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none transition-all duration-200 focus:border-sapphire-400 focus:ring-2 focus:ring-sapphire-100 focus:bg-white resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-98 text-base"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor">
                        <path d="M16 .667C7.552.667.667 7.552.667 16c0 2.833.74 5.49 2.035 7.797L.667 31.333l7.74-2.01A15.267 15.267 0 0016 31.333C24.448 31.333 31.333 24.448 31.333 16S24.448.667 16 .667zm0 27.946a13.6 13.6 0 01-6.938-1.896l-.497-.294-5.152 1.338 1.375-4.998-.326-.517A13.6 13.6 0 012.388 16C2.388 8.515 8.515 2.388 16 2.388c7.485 0 13.612 6.127 13.612 13.612S23.485 28.613 16 28.613zm7.455-10.177c-.41-.205-2.422-1.194-2.797-1.33-.375-.136-.648-.205-.921.205s-1.057 1.33-1.296 1.603-.477.307-.887.102c-.41-.205-1.73-.637-3.295-2.034-1.218-1.087-2.04-2.428-2.28-2.838-.238-.41-.026-.632.179-.836.184-.184.41-.477.614-.716.205-.238.273-.41.41-.682.137-.273.068-.512-.034-.716-.102-.205-.921-2.22-1.262-3.039-.332-.8-.67-.69-.921-.703l-.784-.013c-.273 0-.716.102-1.091.512-.375.41-1.433 1.4-1.433 3.414s1.467 3.96 1.672 4.232c.205.273 2.888 4.41 6.997 6.186.978.422 1.74.673 2.335.862.981.311 1.875.267 2.58.162.787-.117 2.422-.99 2.763-1.945.34-.954.34-1.773.238-1.945-.102-.17-.375-.273-.784-.477z" />
                      </svg>
                      Send via WhatsApp
                      <Send className="w-4 h-4" />
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      By submitting, you agree to be contacted by our counselors.
                      Your data is safe with us.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
