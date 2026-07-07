export default function MarqueeTicker() {
  const items = [
    "Welder",
    "Electrician",
    "Plumber",
    "Mason",
    "Steel Fixer",
    "Heavy Driver",
    "Trade Testing & Certification",
    "Mardan, KPK",
    "Bukhari Trade Test Center",
  ];

  const doubled = [...items, ...items, ...items];

  return (
    <div className="bg-primary text-white py-2.5 overflow-hidden border-b border-primary/20">
      <div className="flex animate-marquee whitespace-nowrap gap-8">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-sm font-medium">
            <i className="fas fa-circle text-[6px] text-cta"></i>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}