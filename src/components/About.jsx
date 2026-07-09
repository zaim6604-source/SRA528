import { useState } from 'react';
import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'vision', label: 'Our Vision' },
    { id: 'values', label: 'Our Values' },
  ];

  const tabContent = {
    mission: 'At New Geo Pak, we are dedicated to bridging the gap between Multan\'s skilled workforce and global employment opportunities. We ensure every worker is placed with dignity, transparency, and full legal compliance.',
    vision: 'To be the most trusted overseas recruitment agency in South Punjab, known for integrity, worker welfare, and building lasting careers for Pakistani talent abroad.',
    values: 'Honesty, transparency, worker-first approach, legal compliance, and continuous support from registration to settlement.',
  };

  const chips = [
    'Gulf Recruitment', 'European Jobs', 'Skilled Workers',
    'Documentation', 'Visa Processing', 'Medical Coordination',
    'Pre-Departure Briefing', 'South Punjab Focus',
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className='w-full flex justify-center items-center'>
        <FadeUp>
          <div className="pill-badge flex justify-center items-center bg-primary text-white mb-6">
            <i className="fas fa-info-circle" />
            About Us
          </div>
        </FadeUp>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <FadeUp delay={100} className="w-full lg:w-5/12 shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-xl relative">
              <SafeImage
                src="/images/about.jpg"
                alt="New Geo Pak office"
                className="w-full h-72 sm:h-96 object-cover"
                fallbackType="about"
              />
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-accent rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-accent rounded-br-xl" />
            </div>
          </FadeUp>

          <FadeUp delay={200} className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
              Your Trusted Partner in{' '}
              <span className="text-primary">Overseas Recruitment</span>
            </h2>
            <p className="text-ink/70 mt-4 leading-relaxed">
              Based at <strong>21-Hajvery Arcade, Kutchery Road, Multan</strong>, New Geo Pak Overseas
              Employment Promoters has been connecting skilled workers from South Punjab with reputable
              employers across the Gulf and Europe since 2017.
            </p>
            <p className="text-ink/70 mt-3 leading-relaxed">
              As a <strong>government-licensed agency (2317/MTN)</strong>, we handle every step
              of the recruitment process — from documentation and visa processing to pre-departure
              briefing — ensuring a smooth, dignified journey for every worker we place.
            </p>

            <div className="flex gap-1 mt-6 bg-background rounded-xl p-1">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex-1 text-xs font-bold py-2 rounded-lg transition-all ${
                    activeTab === t.id
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-ink/60 hover:text-ink'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <p className="text-ink/70 text-sm leading-relaxed mt-4">
              {tabContent[activeTab]}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1 bg-background text-primary text-xs font-bold px-3 py-1.5 rounded-full"
                >
                  <i className="fas fa-check-circle text-[10px]" />
                  {c}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}