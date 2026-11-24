'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function KatalogClient({ data }) {
  const [pencarian, setPencarian] = useState('');
  const [kategoriAktif, setKategoriAktif] = useState('Semua');

  const daftarKategori = [
    'Semua',
    'Fruity Chypre',
    'Citrus Aromatic',
    'Amber Floral',
    'Warm Spicy',
  ];

  const hasilFilter = data.filter((item) => {
    const cocokTeks =
      item.nama.toLowerCase().includes(pencarian.toLowerCase()) ||
      item.brand.toLowerCase().includes(pencarian.toLowerCase());
    const cocokKat =
      kategoriAktif === 'Semua' || item.kategori === kategoriAktif;
    return cocokTeks && cocokKat;
  });

  return (
    <div>
      {/* Search & Filter */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center mb-8 bg-slate-900/70 p-4 rounded-2xl border border-slate-800">
        <input
          type="text"
          placeholder="Ketik nama parfum atau brand..."
          value={pencarian}
          onChange={(e) => setPencarian(e.target.value)}
          className="w-full lg:w-80 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition"
        />

        <div className="flex flex-wrap gap-2">
          {daftarKategori.map((kat) => {
            const aktif = kategoriAktif === kat;
            return (
              <button
                key={kat}
                onClick={() => setKategoriAktif(kat)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                  aktif
                    ? 'bg-gradient-to-r from-amber-400 to-pink-500 text-slate-950 shadow-md shadow-pink-500/30 scale-105'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {kat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Daftar Kartu */}
      {hasilFilter.length === 0 ? (
        <div className="text-center py-14 rounded-3xl bg-slate-900/70 border border-slate-800">
          <p className="text-slate-300 font-semibold">
            Tidak ada parfum yang cocok dengan pencarianmu.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hasilFilter.map((parfum) => (
            <div
              key={parfum.id}
              className={`group rounded-3xl bg-slate-900/95 border border-slate-800 hover:border-white/30 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${parfum.glow} flex flex-col justify-between`}
            >
              <div>
                <div
                  className={`h-32 bg-gradient-to-r ${parfum.gradasi} p-6 flex items-start justify-between`}
                >
                  <span className="px-3.5 py-1 rounded-full bg-slate-950/35 backdrop-blur-md text-white text-xs font-bold">
                    {parfum.kategori}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white text-slate-950 text-xs font-black shadow">
                    {parfum.badge}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">
                    {parfum.brand}
                  </p>
                  <h2 className="text-2xl font-black text-white mt-1 group-hover:text-amber-300 transition">
                    {parfum.nama}
                  </h2>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    {parfum.deskripsi}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block">Harga</span>
                  <span className="text-lg font-black bg-gradient-to-r from-amber-300 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                    {parfum.harga}
                  </span>
                </div>

                <Link
                  href={`/katalog/${parfum.id}`}
                  className={`px-5 py-2.5 rounded-xl bg-gradient-to-r ${parfum.gradasi} text-slate-950 font-black text-sm hover:opacity-95 hover:scale-105 transition-all`}
                >
                  Lihat Detail →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}