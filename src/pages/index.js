export default function Home() {
  return (
    <div style={{
      backgroundColor: 'DarkMidnightBlue',
      color: 'white',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <img src="/logo.png" alt="BridgeKey Homes Logo" style={{ maxWidth: '200px', marginBottom: '1rem' }} />
      <h1>Welcome to BridgeKey Homes</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>Your Home. Your Terms. Our Solutions.</p>
      <footer style={{ position: 'absolute', bottom: '2rem', width: '100%', textAlign: 'center' }}>
        <p style={{ fontStyle: 'italic' }}>Under construction</p>
      </footer>
    </div>
  );
}
