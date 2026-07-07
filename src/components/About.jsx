import { useState } from "react";

function ImgWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`${className} bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center`}>
        <i className="fas fa-industry text-primary/40 text-6xl"></i>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

const trustChips = [
  { icon: "fa-toolbox", label: "20+ Trade Categories" },
  { icon: "fa-certificate", label: "Employer-Recognised" },
  { icon: "fa-clock", label: "Same-Day Results" },
  { icon: "fa-video", label: "Video Test Records" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            WHO WE ARE
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImgWithFallback
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                alt="Bukhari Trade Test Center workshop"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            <div className="mt-4 bg-white rounded-xl p-4 shadow-sm border border-primary/10">
              <p className="text-sm text-ink/70">
                <i className="fas fa-location-dot text-primary mr-2"></i>
                5XQ2+94P, Mardan, 23200, KPK
              </p>
            </div>
          </div>

          <div>
            <p className="text-ink/70 mb-6 leading-relaxed">
              <strong>Bukhari Trade Test Center</strong>, located in <strong>Mardan, KPK</strong>,
              is a professional skill assessment and trade testing facility serving workers preparing
              for overseas employment. We provide practical, hands-on testing across 20+ trade
              categories.
            </p>
            <p className="text-ink/70 mb-8 leading-relaxed">
              Our assessments are designed to meet international employer standards. Each candidate
              receives a detailed evaluation, graded results, and a recognized certificate — plus
              video and photo records of their test performance.
            </p>

            <div className="flex flex-wrap gap-3">
              {trustChips.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/15"
                >
                  <i className={`fas ${chip.icon} text-[10px]`}></i>
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}