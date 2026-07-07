export default function MAFHHMarquee() {
  const text = "★ Maids • Nannies & Helpers • Drivers • Cooks • Patient & Elder Care • Domestic Couples ★ F-11, Islamabad ★ Verified & Screened Staff ★";

  return (
    <div className="w-full overflow-hidden pt-16" style={{ background: 'var(--color-primary)' }}>
      <div className="py-2.5 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee" style={{ animation: 'marquee 28s linear infinite' }}>
          <span className="text-sm font-bold tracking-wide mx-4" style={{ color: '#FFD400' }}>{text}</span>
          <span className="text-sm font-bold tracking-wide mx-4" style={{ color: '#FFD400' }}>{text}</span>
          <span className="text-sm font-bold tracking-wide mx-4" style={{ color: '#FFD400' }}>{text}</span>
        </div>
      </div>
    </div>
  );
}