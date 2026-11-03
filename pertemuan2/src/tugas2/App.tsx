// src/tugas2/App.tsx
import { useState, useEffect } from 'react';
import FormTransaksi from './FormTransaksi';
import ItemTransaksi from './ItemTransaksi';
import './App.css';

type Transaksi = {
  id: number;
  keterangan: string;
  nominal: number;
  jenis: string;
  tanggal: string;
};

function App() {
  const [daftarTransaksi, setDaftarTransaksi] = useState<Transaksi[]>(() => {
    const dataTersimpan = localStorage.getItem("catatan-keuangan-pro");
    if (dataTersimpan) {
      try {
        return JSON.parse(dataTersimpan);
      } catch (e) {
        return [];
      }
    }
    return [
      {
        id: 1,
        keterangan: "Uang Saku Bulanan",
        nominal: 2500000,
        jenis: "Pemasukan",
        tanggal: "01 Nov 2026",
      },
      {
        id: 2,
        keterangan: "Makan Siang & Kopi",
        nominal: 45000,
        jenis: "Pengeluaran",
        tanggal: "02 Nov 2026",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem(
      "catatan-keuangan-pro",
      JSON.stringify(daftarTransaksi),
    );
  }, [daftarTransaksi]);

  const tambahTransaksi = (transaksiBaru: Transaksi) => {
    setDaftarTransaksi((prev) => [transaksiBaru, ...prev]);
  };

  const hapusTransaksi = (id: number) => {
    setDaftarTransaksi((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPemasukan = daftarTransaksi
    .filter((item) => item.jenis === "Pemasukan")
    .reduce((acc, curr) => acc + curr.nominal, 0);

  const totalPengeluaran = daftarTransaksi
    .filter((item) => item.jenis === "Pengeluaran")
    .reduce((acc, curr) => acc + curr.nominal, 0);

  const totalSaldo = totalPemasukan - totalPengeluaran;

  return (
    <div className="fin-container">
      <div className="fin-header">
        <h1>💰 DompetKu - Catatan Keuangan</h1>
        <p>Praktikum Web • Modul 2 React Lanjutan (NPM: 243040064)</p>
      </div>

      {/* Dashboard Kartu Berwarna */}
      <div className="dashboard-grid">
        <div className="stat-card card-saldo">
          <span>Total Saldo</span>
          <h3>Rp {totalSaldo.toLocaleString("id-ID")}</h3>
        </div>
        <div className="stat-card card-masuk">
          <span>Pemasukan</span>
          <h3>+ Rp {totalPemasukan.toLocaleString("id-ID")}</h3>
        </div>
        <div className="stat-card card-keluar">
          <span>Pengeluaran</span>
          <h3>- Rp {totalPengeluaran.toLocaleString("id-ID")}</h3>
        </div>
      </div>

      {/* Form Input Section */}
      <div className="fin-section">
        <h2>✨ Tambah Transaksi Baru</h2>
        <FormTransaksi onTambah={tambahTransaksi} />
      </div>

      {/* List Riwayat Section */}
      <div className="fin-section">
        <h2>📋 Riwayat Transaksi</h2>
        {daftarTransaksi.length === 0 ? (
          <p className="pesan-kosong">
            Belum ada catatan keuangan. Yuk, mulai catat pengeluaranmu hari ini!
          </p>
        ) : (
          <div className="transaksi-container">
            {daftarTransaksi.map((item) => (
              <ItemTransaksi
                key={item.id}
                transaksi={item}
                onHapus={hapusTransaksi}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
