import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const WA = '923455487713';

export default function CTABand() {
  return (
    <section className="py-16 px-5 relative overflow-hidden text-center"
      style={{ background: 'linear-gradient(135deg, #F4A100 0%, #E0144C 100%)' }}>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-display font-extrabold mb-4" style={{ fontSize: 'clamp(24px,4vw,38px)', color: '#fff' }}>
          Ready to Begin Your Journey?
        </h2>
        <p className="text-base mb-8 max-w-xl mx-auto text-white/85">
          Whether you are planning a holiday or seeking overseas employment, Rimsha Travels is here to help.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent('Hi Rimsha Travels! I would like to enquire about your services. Please provide details.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !no-underline"
            style={{ background: '#06A77D', boxShadow: '0 4px 20px rgba(6,167,125,0.4)' }}
          >
            <FaPaperPlane size={14} /> Enquire Now
          </a>
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !no-underline"
          >
            <FaWhatsapp size={16} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}