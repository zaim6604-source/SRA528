import { useState } from 'react';

const WHATSAPP_NUMBER = '923469358431';

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello! I'm interested in applying for overseas employment.\n\nName: ${name}\nCountry of Interest: ${country || 'Not specified'}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setName('');
    setCountry('');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Form */}
      {open && (
        <div className="quick-apply-form bg-white rounded-2xl shadow-2xl border border-[var(--color-secondary)]/30 p-5 w-72">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-[var(--color-ink)] text-sm">Quick Apply</h4>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-[var(--color-ink)]"
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
            />
            <input
              type="text"
              placeholder="Country of Interest"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
            />
            <button
              type="submit"
              className="w-full bg-[var(--color-cta)] text-white font-semibold py-2 rounded-lg text-sm hover:brightness-110 transition-all"
            >
              <i className="fab fa-whatsapp mr-2" />
              Apply via WhatsApp
            </button>
          </form>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[var(--color-cta)] text-white shadow-lg flex items-center justify-center text-2xl hover:scale-105 transition-transform"
        aria-label="Quick Apply"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-bolt'}`} />
      </button>
    </div>
  );
}