export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', margin: 0 }}>
      {/* Main Page Content */}
      <div
        style={{
          backgroundColor: '#0D1B2A',
          color: 'white',
          height: '100vh',
          padding: '2rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        <img
          src="/logo.png"
          alt="BridgeKey Homes Logo"
          style={{
            width: '250px',
            filter: 'drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.6))',
            marginBottom: '2rem'
          }}
        />
        <h1>Welcome to BridgeKey Homes</h1>
        <p style={{ fontSize: '1.5rem' }}>
          Your Home. Your Terms. Our Solutions.
        </p>
      </div>

      {/* Under Construction Banner */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          width: '100%',
          textAlign: 'center',
          color: '#fff',
          fontSize: '2rem',
          fontWeight: 'bold',
          animation: 'pulse 2s infinite'
        }}
      >
        🚧 Under Construction 🚧
      </div>

      {/* Animation Keyframes */}
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
