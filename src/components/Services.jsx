import {
  HardHat,
  Stethoscope,
  Utensils,
  Truck,
  Building2,
  UserCheck,
  ClipboardList,
  Plane,
} from "lucide-react";

const serviceAccents = [
  "#FF4E00", "#FF8700", "#FFD000", "#00C2FF",
  "#FF3300", "#FF4E00", "#FF8700", "#00C2FF",
];

const services = [
  {
    icon: HardHat,
    title: "Construction & Engineering",
    description:
      "Supplying skilled and semi-skilled workers for construction projects including civil, structural, and MEP trades.",
    tags: ["Welders", "Masons", "Electricians"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Staffing",
    description:
      "Placing qualified medical professionals including nurses, paramedics, and allied health workers with reputable hospitals.",
    tags: ["Nurses", "Technicians", "Paramedics"],
  },
  {
    icon: Utensils,
    title: "Hospitality & Catering",
    description:
      "Providing trained chefs, waitstaff, housekeeping, and hotel management professionals for top-tier establishments.",
    tags: ["Chefs", "Waiters", "Housekeeping"],
  },
  {
    icon: Truck,
    title: "Logistics & Transport",
    description:
      "Sourcing licensed drivers, forklift operators, and logistics coordinators for warehousing and supply chain companies.",
    tags: ["Drivers", "Operators", "Coordinators"],
  },
  {
    icon: Building2,
    title: "Facility Management",
    description:
      "Deploying janitors, security guards, HVAC technicians, and maintenance crews for commercial and residential facilities.",
    tags: ["Security", "Maintenance", "Cleaning"],
  },
  {
    icon: UserCheck,
    title: "Domestic Staffing",
    description:
      "Recruiting trained domestic helpers, nannies, and household assistants for families across GCC countries.",
    tags: ["Helpers", "Nannies", "Cooks"],
  },
  {
    icon: ClipboardList,
    title: "Documentation & Visa",
    description:
      "End-to-end assistance with attestation, MOFA verification, medical testing, and visa stamping for workers.",
    tags: ["Attestation", "MOFA", "Medical"],
  },
  {
    icon: Plane,
    title: "Pre-departure Briefing",
    description:
      "Comprehensive orientation sessions preparing workers for overseas employment, cultural norms, and legal rights.",
    tags: ["Orientation", "Legal Rights", "Culture"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#FFF4E8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span
            className="inline-block mb-3 px-4 py-1.5 text-xs font-bold rounded-full tracking-widest uppercase border"
            style={{
              color: "#FF4E00",
              backgroundColor: "rgba(255, 78, 0, 0.08)",
              borderColor: "rgba(255, 78, 0, 0.2)",
            }}
          >
            What We Offer
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4"
            style={{ fontFamily: "Urbanist", color: "#1A1A2E" }}
          >
            Our Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B6B80" }}>
            We provide comprehensive manpower and recruitment solutions across a wide range of
            industries and job categories.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, description, tags }, i) => {
            const accent = serviceAccents[i];
            return (
              <div
                key={title}
                className="relative rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `1px solid ${accent}15`,
                  animation: `fadeInUp 0.6s ease-out ${i * 0.08}s forwards`,
                  opacity: 0,
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${accent}, ${
                      i % 2 === 0 ? accent : serviceAccents[i + 1] || accent
                    })`,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    backgroundColor: `${accent}12`,
                    border: `1px solid ${accent}25`,
                  }}
                >
                  <Icon size={22} style={{ color: accent }} />
                </div>

                <h3
                  className="font-bold text-sm mb-2 leading-snug"
                  style={{ fontFamily: "Urbanist", color: "#1A1A2E" }}
                >
                  {title}
                </h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "#6B6B80" }}>
                  {description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs rounded-full font-medium"
                      style={{
                        color: accent,
                        backgroundColor: `${accent}10`,
                        border: `1px solid ${accent}20`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-16 rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80"
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.35)" }}
            />
          </div>
          {/* <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 78, 0, 0.8) 0%, rgba(255, 135, 0, 0.7) 100%)",
            }}
          /> */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-15 bg-white animate-blob" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-10 bg-white animate-blob" style={{ animationDelay: "-4s" }} />

          <div className="relative z-10">
            <h3
              className="text-white text-2xl lg:text-3xl font-black mb-3"
              style={{ fontFamily: "Urbanist" }}
            >
              Looking for a specific workforce solution?
            </h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Contact us today and our team will craft a customized recruitment plan to meet your
              exact hiring requirements.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-8 py-3.5 text-sm font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#FF4E00",
              }}
            >
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}