import { useState } from "react";

const testimonials = [
  {
    name: "Bilal Khan",
    role: "Welder — Saudi Arabia",
    quote: "I took my 3G welding test at Bukhari Trade Test Center. The assessors were professional and the setup was just like what I'd face on a real site. Got my certificate the same day.",
    rating: 5,
  },
  {
    name: "Faisal Ali",
    role: "Electrician — Qatar",
    quote: "The practical test was fair and thorough. They tested my wiring, panel work, and troubleshooting skills. The video record helped my employer verify my skills without a second interview.",
    rating: 5,
  },
  {
    name: "Waqar Ahmad",
    role: "Heavy Driver — UAE",
    quote: "Bukhari Center made the testing process easy. They tested my driving and basic mechanical knowledge. The certificate was accepted by my sponsor without any issues.",
    rating: 5,
  },
  {
    name: "Rashid Mehmood",
    role: "Plumber — Germany",
    quote: "The test was hands-on and practical — pipe threading, joint work, and pressure testing. I appreciated the detailed grading report. Highly recommended for anyone going abroad.",
    rating: 4,
  },
  {
    name: "Naveed Iqbal",
    role: "Steel Fixer — Kuwait",
    quote: "They tested my rebar tying, cutting, and bending skills just like on a real construction site. Fair assessment and quick results. Great facility in Mardan.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            WHAT WORKERS SAY
          </span>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Chat bubble thread */}
          <div className="flex flex-col gap-5">
            {testimonials.map((t, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex ${isLeft ? "justify-start" : "justify-end"} animate-chat-pop`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className={`relative max-w-lg ${
                      isLeft
                        ? "bg-background border border-primary/10"
                        : "bg-primary/5 border border-primary/10"
                    } rounded-2xl p-4 shadow-sm`}
                  >
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, s) => (
                        <i
                          key={s}
                          className={`fas fa-star text-[10px] ${s < t.rating ? "text-cta" : "text-gray-200"}`}
                        ></i>
                      ))}
                    </div>
                    <p className="text-sm text-ink/80 leading-relaxed mb-2">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-primary">
                          {t.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-ink">{t.name}</p>
                        <p className="text-[10px] text-ink/40">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}