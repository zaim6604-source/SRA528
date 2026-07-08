import { useState } from 'react';

const jobCategories = [
  'Construction Worker',
  'Driver',
  'Hospitality Staff',
  'Nurse / Medical',
  'Skilled Trade',
  'Factory Worker',
  'Security Staff',
  'IT Professional',
  'General Labour',
  'Other',
];

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Quick Apply - Al-Imran Brothers%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AJob Category: ${encodeURIComponent(category)}`;
    window.open(`https://wa.me/923005967332?text=${message}`, '_blank');
    setOpen(false);
    setName('');
    setPhone('');
    setCategory('');
  };

  return (
    <>
      <button
        className="quick-apply-fab"
        onClick={() => setOpen(!open)}
        aria-label="Quick Apply"
        title="Quick Apply"
      >
        <i className="fas fa-bolt" />
      </button>

      {open && (
        <div className="quick-apply-modal">
          <button className="quick-apply-close" onClick={() => setOpen(false)} aria-label="Close">
            <i className="fas fa-times" />
          </button>
          <h3>Quick Apply</h3>
          <p>Fill in your details and we'll connect on WhatsApp</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="03XX-XXXXXXX"
                required
              />
            </div>
            <div className="form-group">
              <label>Job Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="">Select category</option>
                {jobCategories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <i className="fab fa-whatsapp" /> Apply via WhatsApp
            </button>
          </form>
        </div>
      )}
    </>
  );
}