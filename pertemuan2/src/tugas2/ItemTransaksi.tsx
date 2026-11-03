// src/tugas2/ItemTransaksi.tsx

type Transaksi = {
  id: number;
  keterangan: string;
  nominal: number;
  jenis: string;
  tanggal: string;
};

type ItemTransaksiProps = {
  transaksi: Transaksi;
  onHapus: (id: number) => void;
};

function ItemTransaksi({ transaksi, onHapus }: ItemTransaksiProps) {
  const isMasuk = transaksi.jenis === 'Pemasukan';

  return (
    <div className="transaksi-card">
      <div className="transaksi-detail">
        <h4>{transaksi.keterangan}</h4>
        <span>{transaksi.tanggal} • {transaksi.jenis}</span>
      </div>
      <div className="transaksi-nominal-box">
        <span className={`nominal-teks ${isMasuk ? 'badge-masuk' : 'badge-keluar'}`}>
          {isMasuk ? '+ Rp ' : '- Rp '} {transaksi.nominal.toLocaleString('id-ID')}
        </span>
        <button className="btn-hapus-item" onClick={() => onHapus(transaksi.id)}>
          Hapus
        </button>
      </div>
    </div>
  );
}

export default ItemTransaksi;