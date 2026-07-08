export default function MarqueeBar() {
  return (
    <div className="bg-primary mt-24 text-white overflow-hidden py-2.5">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="flex items-center gap-2">
              <i className="fas fa-plane text-accent text-sm" />
              Travel & Overseas Services
            </span>
            <span className="text-white/60">•</span>
            <span className="flex items-center gap-2">
              <i className="fas fa-bolt text-accent text-sm" />
              Fast Processing
            </span>
            <span className="text-white/60">•</span>
            <span className="flex items-center gap-2">
              <i className="fas fa-id-card text-accent text-sm" />
              License 2224/MTN
            </span>
            <span className="text-white/60">•</span>
            <span className="flex items-center gap-2">
              <i className="fas fa-location-dot text-accent text-sm" />
              Pakhi More, Vehari
            </span>
            <span className="text-white/60">•</span>
            <span className="flex items-center gap-2">
              <i className="fas fa-ticket text-accent text-sm" />
              Air Ticketing
            </span>
            <span className="text-white/60">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}