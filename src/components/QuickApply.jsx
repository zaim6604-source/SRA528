export default function QuickApply() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href="mailto:info@fejarenterprises.pk?subject=Quick%20Application&body=Please%20replace%20this%20with%20your%20details%20(Name%2C%20Phone%2C%20Destination%2C%20Skills)."
        className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-cta text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
      >
        <i className="fas fa-bolt text-lg" />
        <span className="font-bold text-sm hidden sm:inline">Quick Apply</span>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-cta/40 animate-ping opacity-30 group-hover:opacity-50" />
      </a>
    </div>
  );
}