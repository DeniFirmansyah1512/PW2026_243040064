export default function KatalogLayout({ children }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="rounded-3xl bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 border border-pink-500/30 p-6 md:p-8 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
            Etalase Koleksi
          </span>
          <h1 className="text-2xl md:text-4xl font-black bg-gradient-to-r from-white via-pink-200 to-cyan-200 bg-clip-text text-transparent mt-1">
            Katalog Parfum Eksklusif
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-extrabold">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            Tersedia
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-400/30">
            Multi Aroma
          </span>
        </div>
      </div>

      {children}
    </div>
  );
}