import useScrollReveal from '../hooks/useScrollReveal';

const services = [
  { title: 'Overseas Job Placement', desc: 'End-to-end placement in top companies across 9+ countries with verified employers.', icon: 'fas fa-briefcase', color: '#FF3366' },
  { title: 'Visa Processing', desc: 'Complete visa assistance — from documentation to submission and follow-up.', icon: 'fas fa-passport', color: '#FF6B9D' },
  { title: 'Document Attestation', desc: 'Educational, professional & personal document attestation by authorized bodies.', icon: 'fas fa-file-signature', color: '#FFCE47' },
  { title: 'Medical & Travel Coordination', desc: 'Scheduled medical tests, travel bookings, and airport pickup arrangements.', icon: 'fas fa-plane-departure', color: '#FF3366' },
  { title: 'Pre-Departure Orientation', desc: 'Cultural & workplace orientation to prepare candidates for international roles.', icon: 'fas fa-chalkboard-teacher', color: '#FF6B9D' },
  { title: 'Employer Liaison', desc: 'Direct coordination with overseas employers to ensure job authenticity.', icon: 'fas fa-handshake', color: '#FFCE47' },
  { title: 'Contract Review', desc: 'Transparent contract review so you understand every term before signing.', icon: 'fas fa-gavel', color: '#FF3366' },
  { title: 'Post-Arrival Support', desc: 'Ongoing support after arrival — we stay with you until you settle in.', icon: 'fas fa-headset', color: '#FF6B9D' },
];

const colorMap = {
  '#FF3366': 'bg-[#FF3366]',
  '#FF6B9D': 'bg-[#FF6B9D]',
  '#FFCE47': 'bg-[#FFCE47]',
};

export default function Services() {
  const revealRef = useScrollReveal();

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FFF0F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF3366]/10 text-[#FF3366] rounded-full text-xs font-semibold mb-4">
            <i className="fas fa-cogs" />
            Our Services
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3A0A1E] mb-3">
            Everything You Need
          </h2>
          <p className="text-sm sm:text-base text-[#3A0A1E]/60 max-w-xl mx-auto">
            From application to arrival — we handle every step of your overseas employment journey.
          </p>
        </div>

        <div ref={revealRef} className="reveal masonry-grid">
          {services.map((s, i) => {
            const bgClass = colorMap[s.color] || 'bg-[#FF3366]';
            return (
              <div key={i} className="masonry-item">
                <div className={`${bgClass} rounded-2xl p-6 sm:p-8 text-white min-h-[180px] flex flex-col`}>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl mb-4">
                    <i className={s.icon} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-[Poppins] mb-2">{s.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed flex-1">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}