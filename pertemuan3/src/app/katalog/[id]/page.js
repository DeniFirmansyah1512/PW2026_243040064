import Link from 'next/link';
import { notFound } from 'next/navigation';
import { daftarParfum } from '@/data/parfum';

export default async function DetailParfumPage({ params }) {
  const { id } = await params;
  const parfum = daftarParfum.find((item) => item.id === id);

  if (!parfum) {
    notFound();
  }

  return (
    <div
      className={`rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl ${parfum.glow}`}
    >
      <div
        className={`h-48 bg-gradient-to-r ${parfum.gradasi} p-8 flex flex-col justify-end`}
      >
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-slate-950/35 text-white text-xs font-bold">
            {parfum.kategori}
          </span>
          <span className="px-3 py-1 rounded-full bg-white text-slate-950 text-xs font-black">
            {parfum.konsentrasi}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow">
          {parfum.nama}
        </h2>
      </div>

      <div className="p-8 space-y-6">
        <div className="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400">
              Brand / Rumah Mode
            </span>
            <p className="text-xl font-extrabold text-cyan-400 mt-1">
              {parfum.brand}
            </p>
          </div>
          <div className="md:text-right">
            <span className="text-xs uppercase tracking-wider text-slate-400">
              Harga
            </span>
            <p className="text-2xl font-black bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent mt-1">
              {parfum.harga}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-pink-400 mb-2">
            Deskripsi Aroma
          </h3>
          <p className="text-slate-200 leading-relaxed">{parfum.deskripsi}</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-amber-300 mb-2">
            Komposisi Notes
          </h3>
          <p className="text-white font-semibold">{parfum.notes}</p>
        </div>

        <div className="pt-2">
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition"
          >
            ← Kembali ke Katalog
          </Link>
        </div>
      </div>
    </div>
  );
}