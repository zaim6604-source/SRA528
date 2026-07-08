export default function MarqueeBar() {
  const items = [
    'Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Germany',
    'Romania', 'Italy', 'Cyprus', 'Malaysia',
    'License #2168/MLK',
    'Gul City Center, Batkhela',
    ' Overseas Jobs ',
    ' Licensed ',
    ' Trusted ',
  ];

  const repeated = [...items, ...items];

  return (
    <div className="relative mt-16 sm:mt-20 bg-[#FF3366] text-white py-3 overflow-hidden shadow-md">
      <div className="marquee-track flex items-center gap-8">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-sm sm:text-base font-medium whitespace-nowrap">
            {item.includes('#') || item.includes('Gul') || item.includes('Overseas') || item.includes('Licensed') || item.includes('Trusted') ? (
              <><i className="fas fa-star text-[#FFCE47] text-[10px]" /> {item}</>
            ) : (
              <><i className="fas fa-plane text-[#FFCE47] text-[10px]" /> {item}</>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}