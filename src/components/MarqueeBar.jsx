export default function MarqueeBar() {
  const items = [
    '🇸🇦 Saudi Arabia', '🇶🇦 Qatar', '🇴🇲 Oman', '🇦🇪 UAE',
    '🇰🇼 Kuwait', '🇩🇪 Germany', '🇵🇱 Poland', '🇬🇷 Greece',
    '🇲🇾 Malaysia (KL)',
    '📜 License 2317/MTN',
    '📍 Kutchery Road, Multan',
    '🛩️  Gulf & Europe Recruitment',
    '📞 061-4583813',
  ];

  return (
    <div className="bg-primary text-white text-sm font-semibold py-2 overflow-hidden mt-16 md:mt-20">
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-8 px-4">
            {items.map((item, i) => (
              <span key={`${dup}-${i}`} className="inline-flex items-center gap-1.5">
                <i className="fas fa-circle text-[6px] text-accent opacity-70" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}