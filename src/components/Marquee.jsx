import { FaPlane, FaSuitcase, FaPassport, FaUserTie } from 'react-icons/fa';

const ITEMS = [
  { icon: FaPlane, label: 'Air Tickets' },
  { icon: FaSuitcase, label: 'Tour Packages' },
  { icon: FaPassport, label: 'Visa Services' },
  { icon: FaUserTie, label: 'HR Consultancy' },
];

export default function Marquee() {
  const content = (
    <div className="flex items-center gap-8 whitespace-nowrap">
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center gap-2 text-sm md:text-base font-semibold">
          <item.icon size={14} />
          {item.label}
          <span className="w-1.5 h-1.5 rounded-full bg-white/40 mx-2" />
        </span>
      ))}
      <span className="flex items-center gap-2 text-sm md:text-base font-medium opacity-80">
        📍 Mid City Mall, Rawalpindi
      </span>
    </div>
  );

  return (
    <div className="relative top-16 md:top-20 overflow-hidden" style={{ background: '#F4A100' }}>
      <div className="flex py-2.5 text-white">
        <div className="flex animate-marquee">{content}</div>
        <div className="flex animate-marquee">{content}</div>
      </div>
    </div>
  );
}