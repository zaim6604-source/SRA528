import useInView from '../hooks/useInView';
import { useState } from 'react';

export default function About() {
  const [ref, inView] = useInView();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-pad" ref={ref}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#E0115F]/10 text-[#E0115F] mb-4">
            <i className="fas fa-info-circle text-xs"></i>
            WHO WE ARE
          </div>
          <h2 className="section-heading">
            Your Trusted Partner in{' '}
            <span className="text-[#E0115F]">Global Recruitment</span>
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Image */}
          <div className="img-hover-zoom rounded-2xl shadow-xl">
            {imgError ? (
              <div className="w-full aspect-[4/3] bg-[#FFF0F4] flex items-center justify-center rounded-2xl">
                <div className="text-center">
                  <i className="fas fa-image text-5xl text-[#E0115F]/30 mb-2"></i>
                  <p className="text-sm text-[#E0115F]/50">Image unavailable</p>
                </div>
              </div>
            ) : (
              <img
                src="/images/about-office.jpg"
                alt="Bridge Global Resource Office"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            )}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-[#2E0A1C]/80">
              Based in <strong>E-11, Islamabad</strong>, Bridge Global Resource is dedicated to promoting the migration of skilled Pakistani manpower for employment abroad. We provide competent, reliable, and cost-effective human resources to the international labor market, bridging the gap between Pakistani talent and global employers.
            </p>
            <p className="text-base leading-relaxed text-[#2E0A1C]/80">
              We assist foreign recruiters in recruiting Pakistani manpower against specific demands, ensuring a seamless, compliant, and transparent process from sourcing to deployment. Our team brings decades of combined experience in overseas manpower recruitment, document attestation, visa processing, and pre-departure orientation.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0115F]/10 text-[#E0115F] text-sm font-semibold">
                <i className="fas fa-shield-alt"></i>
                Reliable
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF5C8A]/10 text-[#E0115F] text-sm font-semibold">
                <i className="fas fa-coins"></i>
                Cost-Effective
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7B2D8E]/10 text-[#7B2D8E] text-sm font-semibold">
                <i className="fas fa-file-contract"></i>
                Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}