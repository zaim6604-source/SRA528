import { useState } from 'react';

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Quick Application - PAMI Overseas\n\nName: ${form.name}\nPhone: ${form.phone}\nInterest: ${form.interest}`
    );
    window.open(`https://wa.me/923339742773?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl p-5 mb-3 w-72 border border-[#FFD500]/30">
          {!submitted ? (
            <>
              <h4 className="font-bold text-[#141414] text-sm mb-3 font-[Poppins]">Quick Apply</h4>
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <input type="text" placeholder="Your Name" required value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD500]/40 focus:border-[#FFD500]" />
                <input type="tel" placeholder="Phone Number" required value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})}
                  className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD500]/40 focus:border-[#FFD500]" />
                <select required value={form.interest} onChange={e => setForm({...form, interest: e.target.value})}
                  className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD500]/40 focus:border-[#FFD500]">
                  <option value="">I'm interested in...</option>
                  <option value="Job Placement">Job Placement</option>
                  <option value="Visa Processing">Visa Processing</option>
                  <option value="Documentation">Documentation</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                <button type="submit"
                  className="w-full bg-[#FFD500] text-[#141414] font-bold py-2.5 rounded-lg hover:bg-[#E10600] hover:text-white transition-all text-sm">
                  <i className="fa-brands fa-whatsapp mr-1.5"></i>Apply via WhatsApp
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-2">
              <p className="text-sm font-bold text-[#141414] mb-1">Application Sent!</p>
              <p className="text-xs text-gray-500 mb-3">WhatsApp has been opened with your details.</p>
              <a href="mailto:info@pamioverseas.pk"
                className="block w-full bg-[#1C1C1C] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#E10600] transition-all mb-2">
                <i className="fa-solid fa-envelope mr-1.5"></i>Email Instead
              </a>
              <button onClick={() => { setOpen(false); setSubmitted(false); setForm({name:'',phone:'',interest:''}); }}
                className="text-xs text-gray-500 hover:text-[#E10600]">Close</button>
            </div>
          )}
        </div>
      )}
      <button onClick={() => { setOpen(!open); setSubmitted(false); }}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-xl font-bold transition-all ${
          open ? 'bg-[#E10600] rotate-45 text-white' : 'bg-[#FFD500] text-[#141414] hover:bg-[#E10600] hover:text-white'
        }`} aria-label="Quick Apply">
        <i className={`fa-solid ${open ? 'fa-times' : 'fa-bolt'}`}></i>
      </button>
    </div>
  );
}