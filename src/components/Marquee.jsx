export default function Marquee() {
  const items = [
    '✈ Saudi Arabia',
    '✈ UAE',
    '✈ Qatar',
    '✈ Oman',
    '✈ Germany',
    '✈ Poland',
    '✈ Romania',
    '✈ Greece',
    '✈ Malaysia',
    '✦ License 2165/RWP',
    '✦ Adamjee Road, Saddar, Rawalpindi',
    '✦ 051-5566780',
    '✈ Saudi Arabia',
    '✈ UAE',
    '✈ Qatar',
    '✈ Oman',
    '✈ Germany',
    '✈ Poland',
    '✈ Romania',
    '✈ Greece',
    '✈ Malaysia',
    '✦ License 2165/RWP',
    '✦ Adamjee Road, Saddar, Rawalpindi',
    '✦ 051-5566780',
  ];

  return (
    <div className="mt-16 lg:mt-20 bg-primary w-full overflow-hidden py-2.5">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex shrink-0 gap-10 px-5">
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-white/90 text-sm font-medium tracking-wide"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 gap-10 px-5">
          {items.map((item, i) => (
            <span
              key={`dup-${i}`}
              className="inline-flex items-center gap-1.5 text-white/90 text-sm font-medium tracking-wide"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}