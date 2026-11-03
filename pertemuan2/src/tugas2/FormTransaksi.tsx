// src/tugas2/FormTransaksi.tsx
import { useState, type FormEvent } from 'react';

type Transaksi = {
  id: number;
  keterangan: string;
  nominal: number;
  jenis: string;
  tanggal: string;
};

type FormTransaksiProps = {
  onTambah: (transaksiBaru: Transaksi) => void;
};

function FormTransaksi({ onTambah }: FormTransaksiProps) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('Pemasukan');

  const tidakValid = keterangan.trim() === '' || nominal === '' || Number(nominal) <= 0;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tidakValid) return;

    onTambah({
      id: Date.now(),
      keterangan: keterangan.trim(),
      nominal: Number(nominal),
      jenis: jenis,
      tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    });

    setKeterangan('');
    setNominal('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <div className="form-row">
        <select 
          className="fin-select" 
          value={jenis} 
          onChange={(e) => setJenis(e.target.value)}
        >
          <option value="Pemasukan">📥 Pemasukan</option>
          <option value="Pengeluaran">📤 Pengeluaran</option>
        </select>
        <input 
          type="text" 
          className="fin-input"
          placeholder="Keterangan (cth: Gaji / Uang Makan)"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />
      </div>
      <div className="form-row">
        <input 
          type="number" 
          className="fin-input"
          placeholder="Nominal (Rp)"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
        />
        <button type="submit" className="fin-submit-btn" disabled={tidakValid}>
          + Tambah Transaksi
        </button>
      </div>
    </form>
  );
}

export default FormTransaksi;