import { useState } from 'react';

const photos = [
  { src: '/images/about-office.jpg', alt: 'Office team meeting' },
  { src: '/images/team-meeting.jpg', alt: 'Team collaboration' },
  { src: '/images/office-workspace.jpg', alt: 'Office workspace' },
  { src: '/images/staff-meeting.jpg', alt: 'Staff meeting' },
];

export default function Gallery() {
  const [errors, setErrors] = useState({});

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ink text-center font-heading mb-10">
          A Glimpse of <span className="text-accent">Our Office</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={errors[i] ? '/images/office-workspace.jpg' : photo.src}
                alt={photo.alt}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                onError={() => setErrors((p) => ({ ...p, [i]: true }))}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}