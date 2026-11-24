import Link from 'next/link';
import { daftarParfum } from '@/data/parfum';

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-14 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-amber-500 shadow-2xl shadow-fuchsia-600/25">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-4 py-1 rounded-full bg-slate-950/35 backdrop-blur-md text-amber-200 text-xs font-extrabold uppercase tracking-widest mb-5 border border-white/20">
            Edisi Warna & Aroma 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-sm mb-5">
            Aroma Hidup Penuh Karakter & Gaya.
          </h1>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
            Jelajahi koleksi parfum pilihan dengan gradasi karakter segar,
            manis, hangat, hingga elegan yang bikin penampilan makin stand out.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/katalog"
              className="px-7 py-3.5 rounded-2xl bg-slate-950 text-white font-extrabold hover:bg-slate-900 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Buka Katalog Parfum →
            </Link>
            <Link
              href="/tentang"
              className="px-7 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold border border-white/30 transition-all duration-300"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-300 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
            Pilihan Favorit
          </h2>
          <Link
            href="/katalog"
            className="text-sm font-bold text-pink-400 hover:text-amber-300 transition"
          >
            Lihat semua →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {daftarParfum.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className={`group rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-pink-500/60 p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${item.glow}`}
            >
              <div
                className={`h-24 rounded-2xl bg-gradient-to-r ${item.gradasi} p-4 flex items-end justify-between mb-5`}
              >
                <span className="px-3 py-1 rounded-full bg-slate-950/40 text-white text-xs font-bold">
                  {item.kategori}
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-slate-950 text-xs font-black">
                  {item.badge}
                </span>
              </div>

              <p className="text-xs font-extrabold uppercase tracking-wider text-cyan-400">
                {item.brand}
              </p>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                {item.nama}
              </h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                {item.deskripsi}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-lg font-black bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent">
                  {item.harga}
                </span>
                <Link
                  href={`/katalog/${item.id}`}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 text-white text-sm font-bold hover:opacity-95 transition"
                >
                  Detail →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}