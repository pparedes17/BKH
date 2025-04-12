export default function Home() {
  return (
    <div style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      margin: 0, 
      backgroundColor: '#1B263B', // '#0D1B2A', '#1B365D', '#0B0B45', '#003153'
      color: 'white',
      overflow: 'hidden' 
    }}>
      {/* Main Page Content */}
      <div
        style={{
          textAlign: 'center',
          padding: '2rem 1rem 6rem', // less top padding = higher content
        }}
      >
        <img
          src="/logo.png"
          alt="BridgeKey Homes Logo"
          style={{
            width: '250px',
            filter: 'drop-shadow(10px 10px 15px rgba(0, 0, 0, 6))',
            marginBottom: '1.5rem',
          }}
        />
        <h1 style={{ marginBottom: '0.5rem' }}>Welcome to BridgeKey Homes</h1>
        <p style={{ fontSize: '1.5rem', margin: 0 }}>
          Your Home. Your Terms. Our Solutions.
        </p>
      </div>

      {/* Under Construction Banner */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          //backgroundColor: '#0D1B2A',
          textAlign: 'center',
          padding: '1rem 0',
          fontSize: '1.75rem',
          fontWeight: 'bold',
          animation: 'pulse 2s infinite',
          zIndex: 1000,
        }}
      >
        🚧 Under Construction 🚧
      </div>

      {/* Pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.85;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
