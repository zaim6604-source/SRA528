const steps = [
  { num: "1", title: "Register & Pick Trade", desc: "Contact us via WhatsApp to register and select the trade you want to be tested in." },
  { num: "2", title: "Report to Center", desc: "Visit our testing center in Mardan at your scheduled time with your tools and ID." },
  { num: "3", title: "Practical Test", desc: "Perform hands-on tasks in your trade under the observation of our experienced assessors." },
  { num: "4", title: "Assessment & Grading", desc: "Your performance is evaluated against international standards and assigned a grade." },
  { num: "5", title: "Certificate Issued", desc: "Receive your trade test certificate, skill report, and video/photo records." },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            HOW IT WORKS
          </span>
        </div>

        <div className="relative bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl p-8 md:p-12">
          {/* Arrow flow */}
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                {/* Number badge */}
                <div className="w-12 h-12 rounded-full bg-primary text-white font-heading font-extrabold text-lg flex items-center justify-center shadow-lg mb-4">
                  {step.num}
                </div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-4 text-accent/40">
                    <i className="fas fa-arrow-right text-xl"></i>
                  </div>
                )}

                {/* Content */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-primary/10 w-full">
                  <h3 className="font-heading text-sm font-bold text-ink mb-1">{step.title}</h3>
                  <p className="text-xs text-ink/70 leading-relaxed">{step.desc}</p>
                </div>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="md:hidden my-2 text-primary/30">
                    <i className="fas fa-chevron-down"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}