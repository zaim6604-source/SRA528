import { useState } from 'react';

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', job: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Visa Master Overseas! Quick Apply — Name: ${form.name || 'N/A'}, Phone: ${form.phone || 'N/A'}, Job Interest: ${form.job || 'Not specified'}.`;
    window.open(`https://wa.me/923459090790?text=${encodeURIComponent(text)}`, '_blank');
    setOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#70C1B3] text-white shadow-lg hover:shadow-xl hover:bg-[#5db8a8] transition-all flex items-center justify-center text-xl"
        aria-label="Quick Apply"
      >
        <i className="fas fa-paper-plane" />
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#70C1B3]/30 overflow-hidden">
          <div className="bg-[#70C1B3] px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i className="fas fa-bolt text-white text-sm" />
              <span className="text-sm font-bold font-[Poppins] text-white">Quick Apply</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-5 space-y-3">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#70C1B3] focus:ring-2 focus:ring-[#70C1B3]/20 outline-none transition-all text-sm"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#70C1B3] focus:ring-2 focus:ring-[#70C1B3]/20 outline-none transition-all text-sm"
            />
            <input
              type="text"
              name="job"
              value={form.job}
              onChange={handleChange}
              placeholder="Job Interested In (optional)"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#70C1B3] focus:ring-2 focus:ring-[#70C1B3]/20 outline-none transition-all text-sm"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#70C1B3] rounded-xl hover:bg-[#5db8a8] hover:shadow-lg transition-all"
            >
              <i className="fab fa-whatsapp" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      )}
    </>
  );
}