import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <SectionWrapper id="about" badge="ABOUT US" badgeColor="secondary">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="relative w-full max-w-md flex-shrink-0">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={imgError ? '/images/hero-team.jpg' : '/images/about-office.jpg'}
              alt="Rolla Corporation team"
              className="w-full h-72 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-cta text-white px-4 py-2 rounded-xl shadow-lg">
            <p className="text-lg font-extrabold">2266/LHR</p>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading mb-4">
            Who We Are
          </h2>
          <p className="text-ink/70 mb-4 leading-relaxed">
            <strong className="text-primary">Rolla Corporation</strong>, based on Davis Road, Lahore,
            is a government-licensed Overseas Employment Promoter (<strong>OEP License No. 2266/LHR</strong>)
            dedicated to connecting Pakistan's talented workforce with premier international employers.
            From our office in Davis Heights, we serve candidates across Lahore, Punjab, and beyond.
          </p>
          <p className="text-ink/70 mb-6 leading-relaxed">
            We believe every worker deserves a pathway to a brighter future. Whether you're a skilled
            professional, a tradesperson, or a first-time jobseeker, we provide end-to-end recruitment
            support — from document preparation and visa processing to medical coordination and departure
            logistics. With over <strong className="text-accent">3,000 successful placements</strong>
            across more than <strong className="text-cta">10 countries</strong>, we are your trusted
            partner in overseas employment.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all"
          >
            <i className="fas fa-info-circle" /> Learn More
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}