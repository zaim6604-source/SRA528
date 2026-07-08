import { COMPANY } from '../data/siteData'

const ITEMS = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Germany', 'Poland', 'Italy', 'Greece', 'Malaysia',
  `License ${COMPANY.license}`,
  'Karam Ellahi Centre, Lakar Mandi Road, Toba Tek Singh',
  "Toba Tek Singh's Doorway to the World",
  'Manpower Recruitment',
  'Gulf, Europe & Asia Placement',
]

export default function MarqueeBand() {
  return (
    <div className="bg-primary py-3 text-white font-semibold text-sm overflow-hidden">
      <div className="marquee-container">
        <div className="animate-marquee inline-flex items-center gap-8">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <i className="fas fa-circle-check text-accent text-xs" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}