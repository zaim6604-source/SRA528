import { useState } from 'react';

export default function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [need, setNeed] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*Blue Real Eye Inquiry*\n\nName: ${name}\nPhone: ${phone}\nNeed: ${need}`;
    window.open(`https://wa.me/923115700584?text=${encodeURIComponent(text)}`, '_blank');
    setOpen(false);
    setName('');
    setPhone('');
    setNeed('');
  };

  return (
    <>
      <style>{`
        .fw-wrap{position:fixed;bottom:24px;right:24px;z-index:9998;display:flex;flex-direction:column;align-items:flex-end;gap:12px}
        .fw-btn{width:56px;height:56px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(255,214,10,.35);transition:transform .25s,box-shadow .25s;position:relative;z-index:2}
        .fw-btn:hover{transform:scale(1.1);box-shadow:0 8px 30px rgba(255,214,10,.5)}
        .fw-card{background:#fff;border-radius:16px;padding:20px;width:300px;box-shadow:0 12px 40px rgba(0,0,0,.12);border:1px solid rgba(217,4,41,.08);transition:transform .25s,opacity .25s;transform-origin:bottom right}
        .fw-card.closed{transform:scale(.8) translateY(20px);opacity:0;pointer-events:none}
        .fw-card.open{transform:scale(1) translateY(0);opacity:1}
        .fw-title{font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:15px;color:#2E0507;margin-bottom:4px}
        .fw-sub{font-size:12px;color:#6B2025;margin-bottom:14px}
        .fw-field{margin-bottom:10px}
        .fw-field input{width:100%;padding:10px 14px;border-radius:10px;border:1px solid rgba(217,4,41,.1);font-size:13px;font-family:"Inter",sans-serif;color:#2E0507;outline:none;transition:border-color .2s}
        .fw-field input:focus{border-color:#D90429;box-shadow:0 0 0 2px rgba(217,4,41,.06)}
        .fw-send{width:100%;padding:10px;border-radius:10px;border:none;background:#FFD60A;color:#2E0507;font-weight:700;font-size:13px;font-family:"Plus Jakarta Sans",sans-serif;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:transform .2s}
        .fw-send:hover{transform:translateY(-1px)}
      `}</style>

      <div className="fw-wrap">
        {/* Card */}
        <div className={`fw-card ${open ? 'open' : 'closed'}`}>
          <div className="fw-title">Get Started</div>
          <div className="fw-sub">Share your details and we'll connect on WhatsApp</div>
          <form onSubmit={handleSubmit}>
            <div className="fw-field">
              <input
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div className="fw-field">
              <input
                placeholder="Phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="fw-field">
              <input
                placeholder="How can we help?"
                value={need}
                onChange={e => setNeed(e.target.value)}
              />
            </div>
            <button type="submit" className="fw-send">
              <i className="fab fa-whatsapp" /> Send
            </button>
          </form>
        </div>

        {/* Button */}
        <button
          className="fw-btn"
          onClick={() => setOpen(!open)}
          style={{ background: open ? '#2E0507' : '#FFD60A' }}
          aria-label="Get Started"
        >
          {open ? (
            <i className="fas fa-times" style={{ color: '#fff', fontSize: 20 }} />
          ) : (
            <i className="fab fa-whatsapp" style={{ color: '#2E0507', fontSize: 24 }} />
          )}
        </button>
      </div>
    </>
  );
}