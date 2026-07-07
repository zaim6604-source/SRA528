import useInView from '../hooks/useInView';

export default function MAFHHContact() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = encodeURIComponent(fd.get('name'));
    const phone = encodeURIComponent(fd.get('phone'));
    const staffType = encodeURIComponent(fd.get('staffType'));
    const living = encodeURIComponent(fd.get('living'));
    const message = encodeURIComponent(fd.get('message'));
    const text = `Hello MAFHH Helpmates! I'd like to hire staff.%0A%0AName: ${name}%0APhone: ${phone}%0AStaff Type: ${staffType}%0ALive-in/Live-out: ${living}%0AMessage: ${message}`;
    window.open(`https://wa.me/923319767633?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-14">
          <div className="pill-badge justify-center mx-auto w-fit">
            <span className="pill-dot" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--dark-text)' }}>
            Let's Find Your <span style={{ color: 'var(--color-primary)' }}>Perfect Staff</span>
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Form */}
          <div className="rounded-2xl p-8 shadow-lg border" style={{ background: 'var(--color-background)', borderColor: 'rgba(255,22,84,.1)' }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-1.5" style={{ color: 'var(--dark-text)' }}>Your Name</label>
                <input name="name" required
                  className="w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all focus:ring-2"
                  style={{ borderColor: 'rgba(0,0,0,.1)', background: '#fff', color: 'var(--dark-text)', '--tw-ring-color': 'var(--color-primary)' }}
                  placeholder="e.g. Fatima Ahmed"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1.5" style={{ color: 'var(--dark-text)' }}>Phone Number</label>
                <input name="phone" type="tel" required
                  className="w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all focus:ring-2"
                  style={{ borderColor: 'rgba(0,0,0,.1)', background: '#fff', color: 'var(--dark-text)', '--tw-ring-color': 'var(--color-primary)' }}
                  placeholder="e.g. 03XX-XXXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1.5" style={{ color: 'var(--dark-text)' }}>Staff Type Needed</label>
                <select name="staffType" required
                  className="w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all focus:ring-2"
                  style={{ borderColor: 'rgba(0,0,0,.1)', background: '#fff', color: 'var(--dark-text)', '--tw-ring-color': 'var(--color-primary)' }}
                >
                  <option value="">Select staff type...</option>
                  <option>Maid</option>
                  <option>Nanny / Helper</option>
                  <option>Driver</option>
                  <option>Cook</option>
                  <option>Patient Care Attendant</option>
                  <option>Elder Caregiver</option>
                  <option>Domestic Couple</option>
                  <option>All-Round House Help</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1.5" style={{ color: 'var(--dark-text)' }}>Live-in / Live-out</label>
                <select name="living"
                  className="w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all focus:ring-2"
                  style={{ borderColor: 'rgba(0,0,0,.1)', background: '#fff', color: 'var(--dark-text)', '--tw-ring-color': 'var(--color-primary)' }}
                >
                  <option value="">Not specified</option>
                  <option>Live-in</option>
                  <option>Live-out</option>
                  <option>Flexible</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1.5" style={{ color: 'var(--dark-text)' }}>Message</label>
                <textarea name="message" rows="3"
                  className="w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all focus:ring-2 resize-none"
                  style={{ borderColor: 'rgba(0,0,0,.1)', background: '#fff', color: 'var(--dark-text)', '--tw-ring-color': 'var(--color-primary)' }}
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center !py-3.5 !text-base">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Info + Map */}
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(112,193,179,.15)', color: 'var(--color-cta)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="font-extrabold text-sm" style={{ color: 'var(--dark-text)' }}>Address</div>
                  <div className="text-sm" style={{ color: 'var(--subtle-text)' }}>MXCM+X88, Service Rd W, F-11/1, Islamabad</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,22,84,.1)', color: 'var(--color-primary)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <div className="font-extrabold text-sm" style={{ color: 'var(--dark-text)' }}>WhatsApp</div>
                  <a href="https://wa.me/923319767633" target="_blank" rel="noopener noreferrer" className="text-sm font-bold no-underline" style={{ color: 'var(--color-primary)' }}>0331-9767633</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(36,123,160,.12)', color: 'var(--color-accent)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div className="font-extrabold text-sm" style={{ color: 'var(--dark-text)' }}>Email</div>
                  <a href="mailto:Syedasadalinaqvi.303@gmail.com" className="text-sm font-bold no-underline" style={{ color: 'var(--color-accent)' }}>Syedasadalinaqvi.303@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,212,0,.15)', color: '#FFD400' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </div>
                <div>
                  <div className="font-extrabold text-sm" style={{ color: 'var(--dark-text)' }}>Follow Us</div>
                  <div className="flex gap-3 mt-1">
                    <a href="https://www.facebook.com/p/MAFHH-Helpmates-100064329150337/" target="_blank" rel="noopener noreferrer" className="text-lg" style={{ color: '#247BA0' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/mafhh_helpmates/" target="_blank" rel="noopener noreferrer" className="text-lg" style={{ color: '#247BA0' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border" style={{ borderColor: 'rgba(0,0,0,.06)' }}>
              <iframe
                title="MAFHH Helpmates Location"
                src="https://www.google.com/maps?q=33.67255859572482,72.98327542698567&hl=en&z=16&output=embed"
                className="w-full h-64 md:h-72"
                style={{ border: 0 }}
                allowFullScreen=""
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