'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Katalog Parfum', href: '/katalog' },
    { name: 'Tentang Kami', href: '/tentang' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-fuchsia-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <Link
          href="/"
          className="text-2xl font-black tracking-tight bg-gradient-to-r from-amber-300 via-pink-400 to-violet-400 bg-clip-text text-transparent hover:opacity-90 transition"
        >
          SCENTAURA.
        </Link>

        <nav className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-full border border-slate-800">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 via-pink-500 to-violet-600 text-slate-950 shadow-lg shadow-pink-500/30 scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}