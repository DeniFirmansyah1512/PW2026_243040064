import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400/20 to-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-black uppercase tracking-widest mb-4">
        404 — Not Found
      </div>
      <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-amber-300 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
        Halaman Hilang
      </h1>
      <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
        Halaman atau parfum yang kamu cari tidak ditemukan. Coba kembali ke
        beranda atau buka daftar katalog.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-pink-500 to-violet-600 text-slate-950 font-black hover:scale-105 transition"
        >
          Ke Beranda
        </Link>
        <Link
          href="/katalog"
          className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition"
        >
          Ke Katalog
        </Link>
      </div>
    </div>
  );
}