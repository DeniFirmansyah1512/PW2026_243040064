import Link from "next/link";

export default function TentangPage() {
  const kartuInfo = [
    {
      judul: "Warna & Karakter Kuat",
      teks: "Setiap aroma dipetakan berdasarkan nuansa dan suasana yang cocok dipakai siang atau malam.",
      border: "border-amber-400/40 hover:border-amber-400",
      judulWarna: "text-amber-300",
      strip: "from-amber-400 to-orange-500",
    },
    {
      judul: "Kualitas Terkurasi",
      teks: "Pilihan wewangian dengan komposisi notes yang seimbang, tahan lama, dan berkelas.",
      border: "border-pink-400/40 hover:border-pink-400",
      judulWarna: "text-pink-300",
      strip: "from-pink-500 to-rose-500",
    },
    {
      judul: "Eksplorasi Mudah",
      teks: "Filter berdasarkan kategori aroma atau cari nama parfum favoritmu secara instan.",
      border: "border-cyan-400/40 hover:border-cyan-400",
      judulWarna: "text-cyan-300",
      strip: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-14">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-4 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-xs font-extrabold uppercase tracking-widest mb-4">
          Filosofi Brand
        </span>
        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-300 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Tentang ScentAura
        </h1>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Kami menghadirkan katalog wewangian yang energik dan ekspresif agar
          kamu bisa menemukan aroma terbaik untuk setiap momen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {kartuInfo.map((item, i) => (
          <div
            key={i}
            className={`rounded-3xl bg-slate-900/90 border ${item.border} p-6 transition-all duration-300 hover:-translate-y-1`}
          >
            <div
              className={`h-2 w-16 rounded-full bg-gradient-to-r ${item.strip} mb-4`}
            />
            <h2 className={`text-xl font-extrabold mb-2 ${item.judulWarna}`}>
              {item.judul}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {item.teks}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/katalog"
          className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-pink-500 to-violet-600 text-slate-950 font-black shadow-lg shadow-pink-500/25 hover:scale-105 transition-all duration-300"
        >
          Jelajahi Semua Parfum →
        </Link>
      </div>
    </section>
  );
}
