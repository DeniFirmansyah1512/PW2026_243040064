interface BadgeSkillProps {
  namaSkill: string;
  level: 'Pemula' | 'Menengah' | 'Mahir';
}

export default function BadgeSkill({ namaSkill, level }: BadgeSkillProps) {
  // Menentukan warna badge berdasarkan level
  const getBadgeStyle = () => {
    switch (level) {
      case 'Mahir':
        return { backgroundColor: '#D4EDDA', color: '#155724' }; // Hijau
      case 'Menengah':
        return { backgroundColor: '#CCE5FF', color: '#004085' }; // Biru
      case 'Pemula':
      default:
        return { backgroundColor: '#FFF3CD', color: '#856404' }; // Kuning
    }
  };

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      marginRight: '8px',
      marginBottom: '8px',
      ...getBadgeStyle()
    }}>
      {namaSkill} <span style={{ fontSize: '10px', opacity: 0.8 }}>({level})</span>
    </span>
  );
}