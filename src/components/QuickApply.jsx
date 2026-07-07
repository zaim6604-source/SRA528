import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WA = '923455487713';

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Quick Enquiry\nName: ${name}\nPhone: ${phone}\nMessage: ${msg || 'I would like to know more about your services.'}`);
    window.open(`https://wa.me/${WA}?text=${text}`, '_blank');
    setOpen(false);
    setName('');
    setPhone('');
    setMsg('');
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-none cursor-pointer"
        style={{ background: '#06A77D', boxShadow: '0 4px 24px rgba(6,167,125,0.5)' }}
      >
        <FaWhatsapp size={26} color="#fff" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-[60]" style={{ background: 'rgba(0,0,0,0.4)' }} onClick={() => setOpen(false)} />
          <div className="fixed bottom-24 right-6 z-[70] w-[320px] rounded-2xl shadow-2xl overflow-hidden" style={{ background: '#fff' }}>
            <div className="flex items-center justify-between p-4" style={{ background: '#06A77D' }}>
              <span className="font-display font-bold text-sm text-white flex items-center gap-2">
                <FaWhatsapp size={16} /> Quick Enquire
              </span>
              <button onClick={() => setOpen(false)} className="bg-none border-none cursor-pointer text-white text-lg p-0">
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <input
                type="text" placeholder="Your Name *" required value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border-none outline-none"
                style={{ background: '#FFF6E0', color: '#2A1A00' }}
              />
              <input
                type="tel" placeholder="Phone Number *" required value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border-none outline-none"
                style={{ background: '#FFF6E0', color: '#2A1A00' }}
              />
              <textarea
                placeholder="Your Message (optional)" rows={2} value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border-none outline-none resize-none"
                style={{ background: '#FFF6E0', color: '#2A1A00' }}
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg text-sm font-bold border-none cursor-pointer text-white flex items-center justify-center gap-2"
                style={{ background: '#06A77D' }}
              >
                <FaWhatsapp size={16} /> Send via WhatsApp
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}