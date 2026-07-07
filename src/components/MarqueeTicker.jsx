export default function MarqueeTicker() {
  return (
    <div className="bg-[#E0115F] py-2.5 overflow-hidden mt-16 md:mt-20">
      <div className="marquee-track">
        <div className="flex items-center gap-0">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 text-sm md:text-base font-medium whitespace-nowrap px-4">
              <span className="text-[#FFD700]">★</span>
              <span className="text-white/90">Overseas Manpower Recruitment</span>
              <span className="text-[#FF5C8A]">•</span>
              <span className="text-white/90">International Labor Supply</span>
              <span className="text-[#FF5C8A]">•</span>
              <span className="text-white/90">Foreign Recruiter Support</span>
              <span className="text-[#FF5C8A]">•</span>
              <span className="text-white/90">E-11 Markaz, Islamabad</span>
              <span className="text-[#FF5C8A]">•</span>
              <span className="text-white/90">Free Consultation</span>
              <span className="text-[#FFD700]">★</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}