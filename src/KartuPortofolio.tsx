interface KartuPortofolioProps {
  judul: string;
  deskripsi: string;
  teknologi: string[];
  githubUrl: string;
}

export default function KartuPortofolio({ judul, deskripsi, teknologi, githubUrl }: KartuPortofolioProps) {
  return (
    <div style={{
      border: '1px solid #D0D7DE',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', color: '#1B365D', fontSize: '16px' }}>{judul}</h3>
        <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#555', lineHeight: '1.4' }}>{deskripsi}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {teknologi.map((tech, index) => (
            <span key={index} style={{
              backgroundColor: '#E1E4E8',
              color: '#333',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '500'
            }}>
              #{tech}
            </span>
          ))}
        </div>
      </div>
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          textAlign: 'center',
          backgroundColor: '#24292e',
          color: '#ffffff',
          padding: '8px 12px',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}
      >
        GitHub Repository
      </a>
    </div>
  );
}