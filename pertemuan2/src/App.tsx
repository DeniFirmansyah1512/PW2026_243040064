import { useRef, useState } from "react";
import FormTugas from "./componen/FormTugas";
import ItemTugas, { type Tugas } from "./componen/ItemTugas";
import Kartu from "./componen/Kartu";
import Penghitung from "./componen/Penghitung";
import "./App.css";

function App() {
  const [daftarTugas, setDaftarTugas] = useState<Tugas[]>([]);
  const idTugasBerikutnya = useRef(1);

  function tambahTugas(nama: string) {
    setDaftarTugas((tugasSaatIni) => [
      ...tugasSaatIni,
      { id: idTugasBerikutnya.current++, judul: nama, selesai: false },
    ]);
  }

  function hapusTugas(id: number) {
    setDaftarTugas((tugasSaatIni) =>
      tugasSaatIni.filter((tugas) => tugas.id !== id),
    );
  }

  function ubahStatusTugas(id: number) {
    setDaftarTugas((tugasSaatIni) =>
      tugasSaatIni.map((tugas) =>
        tugas.id === id ? { ...tugas, selesai: !tugas.selesai } : tugas,
      ),
    );
  }

  return (
    <main className="wadah">
      <h1 className="judul">Daftar Tugas</h1>
      <p className="subjudul">Catat tugas dan pantau progresnya.</p>

      <FormTugas onTambah={tambahTugas} />

      <Kartu judul="Tugas saya">
        {daftarTugas.length === 0 ? (
          <p className="kosong">
            Belum ada tugas. Tambahkan tugas pertama kamu.
          </p>
        ) : (
          <ul className="daftar">
            {daftarTugas.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onHapus={hapusTugas}
                onUbahStatus={ubahStatusTugas}
              />
            ))}
          </ul>
        )}
        <p className="ringkasan">
          {daftarTugas.filter((tugas) => tugas.selesai).length} dari{" "}
          {daftarTugas.length} tugas selesai
        </p>
      </Kartu>
      <Penghitung />
    </main>
  );
}

export default App;
