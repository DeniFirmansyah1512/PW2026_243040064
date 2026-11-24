import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'ScentAura | Katalog Parfum Berwarna',
  description: 'Tugas Praktikum Web Pertemuan 3 - Next.js 16 App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-pink-500 selection:text-white relative overflow-x-hidden">
        {/* Cahaya latar belakang berwarna */}
        <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-fuchsia-600/20 blur-3xl -z-10" />
        <div className="pointer-events-none fixed top-1/3 -right-32 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl -z-10" />
        <div className="pointer-events-none fixed -bottom-32 left-1/3 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl -z-10" />

        <Navbar />
        <main className="flex-grow">{children}</main>

        <footer className="border-t border-slate-800/80 bg-slate-950/90 py-6 text-center text-sm text-slate-400">
          <p className="bg-gradient-to-r from-amber-300 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
            ScentAura Fragrance Gallery
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Praktikum Web Pertemuan 3 — Next.js App Router
          </p>
        </footer>
      </body>
    </html>
  );
}