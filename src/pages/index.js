export default function Home() {
  return (
    <div style={{
      backgroundColor: '#1B263B', // '#1B263B', '#003366', '#0D1B2A',
      color: 'white',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <img src="/logo.png" alt="BridgeKey Homes Logo" style={{ maxWidth: '200px', marginBottom: '1rem' }} />
      <h1>Welcome to BridgeKey Homes</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>Your Home. Your Terms. Our Solutions.</p>

    </div>

<div style={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontSize: '2rem',
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
  animation: 'pulse 2s infinite',
}}>
  🚧 Under Construction 🚧
  <style>
    {`
      @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.05); opacity: 0.8; }
        100% { transform: scale(1); opacity: 1; }
      }
    `}
  </style>
</div>

{/*    
      <footer style={{ position: 'absolute', bottom: '2rem', width: '100%', textAlign: 'center' }}>
      <p style={{ fontStyle: 'italic' }}>Under construction</p>
        </footer>
*/}


  );
}
