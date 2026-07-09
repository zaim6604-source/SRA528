export const COMPANY = {
  name: 'Sabeel Recruiting Agency',
  shortName: 'Sabeel',
  license: '2326/MLK',
  tagline: 'A Clear Path from Swat to Success Abroad',
  heroTagline: 'Sabeel Recruiting Agency guides Mingora\'s workers into trusted Gulf and European jobs — licensed, honest, complete.',
  whatsapp: '0302-8044200',
  whatsappLink: 'https://wa.me/923028044200',
  email: 'info@sabeelra.pk',
  office: {
    title: 'Office — Royal Arcade, Mingora',
    address: 'Office No. F#04, First Floor, Royal Arcade Plaza, G.T Road, Mingora, Swat, KPK',
    phone1: '0946-710171',
    phone2: '0334-8404200',
    phoneLabel: '0946-710171 / 0334-8404200',
    mapQuery: 'Royal+Arcade+Plaza+GT+Road+Mingora+Swat',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Royal+Arcade+Plaza+GT+Road+Mingora+Swat',
    mapEmbed: 'https://www.google.com/maps?q=Royal+Arcade+Plaza+GT+Road+Mingora+Swat&output=embed',
  },
}

export const STATS = [
  { label: 'Candidates Placed', value: '500+', icon: 'fa-user-check' },
  { label: 'Partner Employers', value: '60+', icon: 'fa-building' },
  { label: 'Destination Countries', value: '9', icon: 'fa-globe' },
  { label: 'Years of Service', value: '6+', icon: 'fa-star' },
]

export const SERVICES = [
  { icon: 'fa-briefcase', title: 'Job Placement', desc: 'We connect you with verified employers across the Middle East, Europe, and Asia.', color: 'from-primary to-secondary' },
  { icon: 'fa-file-signature', title: 'Visa Processing', desc: 'End-to-end visa assistance including work visas, medical, and documentation.', color: 'from-secondary to-accent' },
  { icon: 'fa-passport', title: 'Documentation', desc: 'Guidance on passport applications, attestations, and legal paperwork.', color: 'from-cta to-blue-400' },
  { icon: 'fa-language', title: 'Language Training', desc: 'Basic language courses for German, Arabic, and other destination languages.', color: 'from-primary to-highlight' },
  { icon: 'fa-plane-departure', title: 'Pre-Departure Orientation', desc: 'Cultural awareness, travel tips, and work readiness sessions before you leave.', color: 'from-secondary to-primary' },
  { icon: 'fa-handshake', title: 'Employer Liaison', desc: 'Direct coordination with overseas employers to ensure smooth job offers.', color: 'from-accent to-primary' },
  { icon: 'fa-scale-balanced', title: 'Legal Assistance', desc: 'Contract review, labor law guidance, and rights protection for overseas workers.', color: 'from-cta to-cyan-500' },
  { icon: 'fa-headset', title: 'Post-Placement Support', desc: 'We stay connected even after you land — support whenever you need it.', color: 'from-secondary to-cta' },
]

export const PROCESS_STEPS = [
  { step: 1, title: 'Registration & Inquiry', desc: 'Visit our Royal Arcade office or contact us via phone or WhatsApp. Share your qualifications and preferences.', icon: 'fa-clipboard-list' },
  { step: 2, title: 'Documentation & Verification', desc: 'Submit your passport, educational documents, and experience certificates. We verify everything.', icon: 'fa-file-circle-check' },
  { step: 3, title: 'Job Matching & Interview', desc: 'We match you with suitable overseas employers and coordinate interviews.', icon: 'fa-people-arrows' },
  { step: 4, title: 'Visa & Medical Processing', desc: 'We handle visa applications, medical tests, and all official formalities.', icon: 'fa-plane' },
  { step: 5, title: 'Departure & Follow-Up', desc: 'Pre-departure briefing, travel arrangements, and ongoing support after you arrive.', icon: 'fa-graduation-cap' },
]

export const COUNTRIES = [
  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    label: 'Saudi Arabia',
    description: 'Construction, logistics, and oil & gas opportunities across the Kingdom.',
    landmark: 'Masjid Al-Haram, Makkah',
    cities: 'Riyadh, Jeddah, Dammam',
    sectors: 'Construction, Logistics, Oil & Gas',
    image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=600&h=400&fit=crop&auto=format',
    roles: ['Construction Worker', 'Driver', 'Electrician', 'Plumber', 'Heavy Machinery Operator', 'Salesman'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Middle/Matric', 'Age 22-45', 'Medical fitness certificate', 'Clean police record'],
    salaryRange: 'SAR 1,200 – 2,500/month',
  },
  {
    slug: 'uae',
    name: 'UAE',
    flag: '🇦🇪',
    label: 'UAE',
    description: 'World-class jobs in Dubai, Abu Dhabi, and across the Emirates.',
    landmark: 'Burj Khalifa, Dubai',
    cities: 'Dubai, Abu Dhabi, Sharjah',
    sectors: 'Construction, Logistics, Retail',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&auto=format',
    roles: ['Driver', 'Delivery Rider', 'Sales Associate', 'Waiter', 'Electrician', 'AC Technician'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Matric', 'Age 21-40', 'English proficiency preferred', 'Medical fitness certificate'],
    salaryRange: 'AED 1,000 – 2,500/month',
  },
  {
    slug: 'qatar',
    name: 'Qatar',
    flag: '🇶🇦',
    label: 'Qatar',
    description: 'Lucrative positions in construction, oil & gas, and hospitality.',
    landmark: 'Museum of Islamic Art, Doha',
    cities: 'Doha',
    sectors: 'Hospitality, Construction, Oil & Gas',
    image: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=600&h=400&fit=crop&auto=format',
    roles: ['Oil & Gas Technician', 'Rigger', 'Scaffolder', 'Driver', 'Safety Officer', 'Steel Fixer'],
    requirements: ['Valid passport (6+ months)', 'Relevant trade certification', 'Age 24-45', 'Medical fitness certificate', 'Experience letter preferred'],
    salaryRange: 'QAR 1,200 – 3,000/month',
  },
  {
    slug: 'oman',
    name: 'Oman',
    flag: '🇴🇲',
    label: 'Oman (Muscat)',
    description: 'Steady demand in construction, logistics, and service sectors.',
    landmark: 'Sultan Qaboos Grand Mosque, Muscat',
    cities: 'Muscat, Salalah',
    sectors: 'Tourism, Logistics, Fisheries',
    image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&h=400&fit=crop&auto=format',
    roles: ['Driver', 'Mason', 'Carpenter', 'Painter', 'Warehouse Worker', 'Heavy Driver'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Middle', 'Age 22-45', 'Medical fitness certificate', 'Clean police record'],
    salaryRange: 'OMR 150 – 350/month',
  },
  {
    slug: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    label: 'Germany',
    description: 'Skilled worker visas in healthcare, IT, and engineering.',
    landmark: 'Brandenburg Gate, Berlin',
    cities: 'Berlin, Munich, Frankfurt',
    sectors: 'Healthcare, IT, Engineering',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop&auto=format',
    roles: ['Nurse', 'Elderly Caregiver', 'Software Engineer', 'Electrician', 'Mechanical Engineer', 'Chef'],
    requirements: ['Valid passport (6+ months)', 'Degree or relevant certification', 'Age 22-40', 'German language A2/B1 preferred', 'Work experience (2+ years)'],
    salaryRange: '€2,000 – 3,500/month',
  },
  {
    slug: 'romania',
    name: 'Romania',
    flag: '🇷🇴',
    label: 'Romania',
    description: 'Rising opportunities in manufacturing, construction, and IT.',
    landmark: 'Palace of the Parliament, Bucharest',
    cities: 'Bucharest, Cluj, Timișoara',
    sectors: 'Manufacturing, Construction, IT',
    image: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=600&h=400&fit=crop&auto=format',
    roles: ['Factory Worker', 'Construction Worker', 'Driver', 'Welder', 'Warehouse Associate', 'Chef'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Matric', 'Age 22-45', 'Medical fitness certificate', 'Basic English'],
    salaryRange: '€800 – 1,500/month',
  },
  {
    slug: 'greece',
    name: 'Greece',
    flag: '🇬🇷',
    label: 'Greece',
    description: 'Opportunities in tourism, hospitality, and agriculture.',
    landmark: 'Parthenon, Athens',
    cities: 'Athens, Thessaloniki, Crete',
    sectors: 'Tourism, Hospitality, Agriculture',
    image: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format',
    roles: ['Chef', 'Waiter', 'Hotel Staff', 'Farm Worker', 'Construction Worker', 'Driver'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Matric', 'Age 22-45', 'Medical fitness certificate', 'Basic English'],
    salaryRange: '€800 – 1,400/month',
  },
  {
    slug: 'croatia',
    name: 'Croatia',
    flag: '🇭🇷',
    label: 'Croatia (Dubrovnik)',
    description: 'Growing demand in tourism, hospitality, and construction along the Adriatic coast.',
    landmark: 'Old Town, Dubrovnik',
    cities: 'Dubrovnik, Zagreb, Split',
    sectors: 'Tourism, Hospitality, Construction',
    image: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=600&h=400&fit=crop&auto=format',
    roles: ['Chef', 'Waiter', 'Hotel Staff', 'Construction Worker', 'Driver', 'Electrician'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Matric', 'Age 22-45', 'Medical fitness certificate', 'Basic English'],
    salaryRange: '€900 – 1,500/month',
  },
  {
    slug: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    label: 'Malaysia (KL)',
    description: 'Growing opportunities in manufacturing, palm oil, and hospitality.',
    landmark: 'Petronas Towers, Kuala Lumpur',
    cities: 'Kuala Lumpur, Penang, Johor',
    sectors: 'Electronics, Manufacturing, IT',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop&auto=format',
    roles: ['Factory Worker', 'Palm Oil Plantation Worker', 'Driver', 'Warehouse Worker', 'Construction Worker', 'Waiter'],
    requirements: ['Valid passport (6+ months)', 'Minimum education: Matric', 'Age 22-45', 'Medical fitness certificate', 'Basic English'],
    salaryRange: 'MYR 1,500 – 3,000/month',
  },
]

export const JOBS = [
  { title: 'Construction Worker', country: 'Saudi Arabia', salary: 'SAR 1,500', type: 'Full-time' },
  { title: 'Electrician', country: 'UAE', salary: 'AED 2,000', type: 'Full-time' },
  { title: 'Nurse', country: 'Germany', salary: '€2,800', type: 'Full-time' },
  { title: 'Driver', country: 'Qatar', salary: 'QAR 1,800', type: 'Full-time' },
  { title: 'Chef', country: 'Croatia', salary: '€1,200', type: 'Full-time' },
  { title: 'Factory Worker', country: 'Malaysia', salary: 'MYR 2,000', type: 'Full-time' },
  { title: 'Plumber', country: 'Oman', salary: 'OMR 250', type: 'Full-time' },
  { title: 'Welder', country: 'Romania', salary: '€1,300', type: 'Full-time' },
  { title: 'Waiter', country: 'Greece', salary: '€1,000', type: 'Full-time' },
  { title: 'Heavy Driver', country: 'Saudi Arabia', salary: 'SAR 2,000', type: 'Full-time' },
  { title: 'AC Technician', country: 'UAE', salary: 'AED 2,200', type: 'Full-time' },
  { title: 'Safety Officer', country: 'Qatar', salary: 'QAR 2,500', type: 'Full-time' },
]

export const TESTIMONIALS = [
  {
    name: 'Shahid Khan',
    role: 'Placed in Saudi Arabia — Construction',
    quote: 'Sabeel Recruiting Agency made my dream of working abroad a reality. From documentation to departure, they handled everything with care. Now I am earning well and supporting my family back in Swat.',
    rating: 5,
    initials: 'SK',
  },
  {
    name: 'Wajid Ali',
    role: 'Placed in UAE — Logistics',
    quote: 'I visited their office at Royal Arcade Plaza, Mingora and was impressed by their professionalism. Within weeks, I had a job offer from Dubai. Highly recommended for anyone in Swat looking for overseas work.',
    rating: 5,
    initials: 'WA',
  },
  {
    name: 'Rashid Ahmad',
    role: 'Placed in Germany — Healthcare',
    quote: 'The team guided me through the entire process, including language training and visa interviews. Their pre-departure training was incredibly helpful. I am now working in Berlin.',
    rating: 5,
    initials: 'RA',
  },
  {
    name: 'Naveed ur Rahman',
    role: 'Placed in Qatar — Oil & Gas',
    quote: 'A trustworthy agency with a transparent process. No hidden fees, clear communication, and genuine job opportunities. I have already referred three friends from Dir to them.',
    rating: 4,
    initials: 'NR',
  },
]

export const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop&auto=format', label: 'Royal Arcade Plaza Office' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop&auto=format', label: 'Candidate Counseling' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=450&fit=crop&auto=format', label: 'Pre-Departure Orientation' },
  { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=450&fit=crop&auto=format', label: 'Documentation Center' },
  { src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=450&fit=crop&auto=format', label: 'Visa Processing' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop&auto=format', label: 'Team at Work' },
]

export const FAQS = [
  {
    q: 'What documents do I need to apply for overseas work?',
    a: 'You typically need a valid passport, CNIC, recent photographs, educational certificates, and any relevant professional certifications. Our team at Royal Arcade Plaza will guide you through the complete documentation checklist.',
  },
  {
    q: 'How long does the recruitment process take?',
    a: 'The timeline varies by destination and position, but typically ranges from 2 to 8 weeks. This includes document verification, employer matching, visa processing, and pre-departure preparations.',
  },
  {
    q: 'Is Sabeel Recruiting Agency government licensed?',
    a: 'Yes, we are fully licensed by the Government of Pakistan under license number 2326/MLK. We operate transparently and follow all regulatory requirements.',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman (Muscat), Germany, Romania, Greece, Croatia (Dubrovnik), and Malaysia (Kuala Lumpur). We are expanding to more destinations.',
  },
  {
    q: 'What are the fees for your services?',
    a: 'Our fees are transparent and competitive. We provide a clear breakdown during your initial consultation at our Royal Arcade office. There are no hidden charges.',
  },
  {
    q: 'Do you provide training before departure?',
    a: 'Yes, we offer pre-departure orientation covering language basics, cultural awareness, workplace expectations, and travel guidelines to help you settle smoothly.',
  },
  {
    q: 'How can I contact your office?',
    a: 'Visit Office No. F#04, First Floor, Royal Arcade Plaza, G.T Road, Mingora, Swat. Call us at 0946-710171 or 0334-8404200, or message us on WhatsApp at 0302-8044200.',
  },
  {
    q: 'Can I apply if I live outside Swat?',
    a: 'Absolutely! We serve candidates from across KPK and beyond. You can apply via WhatsApp at 0302-8044200 or visit our Mingora office for a consultation.',
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Countries', href: '#countries' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const MARQUEE_ITEMS = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman (Muscat)', 'Germany', 'Romania', 'Greece', 'Croatia (Dubrovnik)', 'Malaysia (KL)',
  'License 2326/MLK',
  'Royal Arcade Plaza, Mingora',
  'Serving Swat, Malakand, KPK',
  'Manpower Recruitment',
  'Gulf & Europe Placement',
]

export const ABOUT_CHIPS = [
  'Government Licensed 2326/MLK',
  '6+ Years Experience',
  'Gulf & Europe Placement',
  'Visa Processing',
  'Pre-Departure Training',
  '24/7 Support',
]

export const COUNTRY_CHIPS = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman (Muscat)', 'Germany', 'Romania', 'Greece', 'Croatia (Dubrovnik)', 'Malaysia (KL)',
]