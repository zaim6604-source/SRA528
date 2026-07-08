export default function QuickApply() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/923435644441"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-cta text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
      >
        <i className="fab fa-whatsapp text-xl" />
        <span className="font-bold text-sm hidden sm:inline">Quick Apply</span>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-cta/40 animate-ping opacity-30 group-hover:opacity-50" />
      </a>
    </div>
  );
}