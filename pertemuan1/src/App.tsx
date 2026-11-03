import './App.css'
import Kartuprofil from './tugas1/kartuprofil'
import ItemMatkul from './tugas1/ItemMatkul'
import KartuPortofolio from './tugas1/KartuPortofolio'

function App() { 
  // Data daftar mata kuliah praktikum
  const daftarPraktikum = [ 
    { id: 101, kode: 'IF211', nama: 'Pemrograman Web (React & Laravel)', sks: 3, hari: 'Senin' }, 
    { id: 102, kode: 'IF212', nama: 'Sistem Basis Data (PostgreSQL)', sks: 3, hari: 'Rabu' }, 
    { id: 103, kode: 'IF213', nama: 'Rekayasa Perangkat Lunak Terapan', sks: 3, hari: 'Kamis' }, 
    { id: 104, kode: 'IF214', nama: 'Arsitektur Sistem Terdistribusi', sks: 2, hari: 'Jumat' } 
  ]; 

  // Data portofolio mini (Minimal 4 proyek)
  const daftarPortofolio = [
    {
      id: 1,
      judul: 'Sistem Informasi Akademik',
      deskripsi: 'Aplikasi manajemen nilai dan KRS mahasiswa berbasis web interaktif.',
      teknologi: ['React', 'Vite', 'CSS'],
      githubUrl: 'https://github.com/DeniFirmansyah1512/PW2026_243040064'
    },
    {
      id: 2,
      judul: 'RESTful API E-Commerce',
      deskripsi: 'Backend service untuk manajemen produk, keranjang belanja, dan autentikasi.',
      teknologi: ['Laravel', 'PHP', 'PostgreSQL'],
      githubUrl: 'https://github.com/DeniFirmansyah1512/PW2026_243040064'
    },
    {
      id: 3,
      judul: 'Dashboard Analitik Penjualan',
      deskripsi: 'Visualisasi data grafik penjualan bulanan dengan filter interaktif.',
      teknologi: ['React', 'ChartJS', 'Tailwind'],
      githubUrl: 'https://github.com/DeniFirmansyah1512/PW2026_243040064'
    },
    {
      id: 4,
      judul: 'Aplikasi Manajemen Tugas (To-Do)',
      deskripsi: 'Aplikasi pencatatan tugas harian dengan fitur local storage.',
      teknologi: ['JavaScript', 'React', 'HTML5'],
      githubUrl: 'https://github.com/DeniFirmansyah1512/PW2026_243040064'
    }
  ];
 
  const notifikasiSapaan = () => { 
    alert('Penyelesaian Tugas 1 Praktikum Pemrograman Web oleh Deni Firmansyah (NPM: 243040064) telah berhasil ditampilkan!'); 
  }; 
 
  return ( 
    <div style={{ maxWidth: '850px', margin: '40px auto', padding: '0 24px', fontFamily: 'Arial, sans-serif' }}> 
      <header style={{ textAlign: 'center', marginBottom: '32px' }}> 
        <h1 style={{ color: '#1B365D', margin: '0 0 8px 0' }}>Praktikum Pemrograman Web</h1> 
        <p style={{ color: '#666', fontSize: '15px' }}>Tugas 1: Modularisasi Komponen, Props Dinamis, & Showcase Portofolio</p> 
      </header> 
 
      {/* Bagian 1: Profil Mahasiswa & Badge Skill */}
      <section style={{ marginBottom: '32px' }}> 
        <h2 style={{ color: '#2C3E50', borderBottom: '2px solid #E1E4E8', paddingBottom: '8px' }}> 
          Profil Mahasiswa Praktikan 
        </h2> 
        <Kartuprofil  
          nama="Deni Firmansyah"  
          npm="243040064"  
          kelas="F"  
          status="Aktif" 
          fotoUrl="https://via.placeholder.com/80" 
        /> 
      </section> 
 
      {/* Bagian 2: List Rendering Mata Kuliah (ItemMatkul) */}
      <section style={{ marginBottom: '32px' }}> 
        <h2 style={{ color: '#2C3E50', borderBottom: '2px solid #E1E4E8', paddingBottom: '8px' }}> 
          Daftar Rencana Praktikum Semester (List Rendering) 
        </h2> 
        <div style={{ display: 'grid', gap: '12px' }}> 
          {daftarPraktikum.map((matkul) => ( 
            <ItemMatkul  
              key={matkul.id}  
              kode={matkul.kode}  
              nama={matkul.nama}  
              sks={matkul.sks}  
              hari={matkul.hari}  
            /> 
          ))} 
        </div> 
      </section> 

      {/* Bagian 3: Showcase Portofolio Mini (Tugas Terstruktur) */}
      <section style={{ marginBottom: '32px' }}> 
        <h2 style={{ color: '#2C3E50', borderBottom: '2px solid #E1E4E8', paddingBottom: '8px' }}> 
          Showcase Portofolio Mini (Tugas Terstruktur) 
        </h2> 
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}> 
          {daftarPortofolio.map((proyek) => ( 
            <KartuPortofolio  
              key={proyek.id}  
              judul={proyek.judul}  
              deskripsi={proyek.deskripsi}  
              teknologi={proyek.teknologi}  
              githubUrl={proyek.githubUrl}  
            /> 
          ))} 
        </div> 
      </section> 
 
      <div style={{ textAlign: 'center', marginTop: '40px' }}> 
        <button onClick={notifikasiSapaan} style={{ 
          backgroundColor: '#1B365D', 
          color: '#FFFFFF', 
          padding: '12px 24px', 
          border: 'none', 
          borderRadius: '6px', 
          cursor: 'pointer', 
          fontWeight: 'bold', 
          fontSize: '14px' 
        }}> 
          Uji Interaktivitas Event (Klik Disini) 
        </button> 
      </div> 
    </div> 
  ); 
} 

export default App;