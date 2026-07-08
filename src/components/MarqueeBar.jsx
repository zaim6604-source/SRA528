export default function MarqueeBar() {
  return (
    <div className="relative top-16 sm:top-18 w-full overflow-hidden py-2.5 sm:py-3" style={{ backgroundColor: '#006D77' }}>
      <div className="flex whitespace-nowrap animate-marquee" style={{ animation: 'marquee 28s linear infinite' }}>
        <span className="mx-4 text-sm sm:text-base font-medium tracking-wide" style={{ color: '#EDF6F9' }}>
          <i className="fa-solid fa-star text-[11px] mr-2" style={{ color: '#FFDD00' }} />
          Rawalpindi's Dependable Bridge to Overseas Work
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#83C5BE' }} />
          Hiring for Saudi Arabia &bull; UAE &bull; Qatar &bull; Malaysia &bull; Europe
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#83C5BE' }} />
          Govt. Licensed OEP 2261/RWP
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#83C5BE' }} />
          Tingo Market, Satellite Town, Rawalpindi
          <i className="fa-solid fa-star text-[11px] ml-2" style={{ color: '#FFDD00' }} />
        </span>
        {/* Duplicate for seamless loop */}
        <span className="mx-4 text-sm sm:text-base font-medium tracking-wide" style={{ color: '#EDF6F9' }}>
          <i className="fa-solid fa-star text-[11px] mr-2" style={{ color: '#FFDD00' }} />
          Rawalpindi's Dependable Bridge to Overseas Work
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#83C5BE' }} />
          Hiring for Saudi Arabia &bull; UAE &bull; Qatar &bull; Malaysia &bull; Europe
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#83C5BE' }} />
          Govt. Licensed OEP 2261/RWP
          <i className="fa-solid fa-circle mx-3 text-[6px] align-middle" style={{ color: '#83C5BE' }} />
          Tingo Market, Satellite Town, Rawalpindi
          <i className="fa-solid fa-star text-[11px] ml-2" style={{ color: '#FFDD00' }} />
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}