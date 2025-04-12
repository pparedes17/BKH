export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0D1B2A', // deep navy blue for trust
      color: 'white',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center',
      position: 'relative'
    }}>
      {/* Logo with drop shadow for relief */}
      <img 
        src="/logo.png" 
        alt="BridgeKey Homes Logo" 
        style={{ 
          width: '250px', // lowercase "width"
          filter: 'drop-shadow(5px 5px 10px rgba(0,0,0,0.6))' 
        }} 
      />

      <h1>Welcome to BridgeKey Homes</h1>

      <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
        Your Home. Your Terms. Our Solutionsss.
      </p>

      {/* Under Construction Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0D1B2A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        zIndex: 9999,
        animation: 'pulse 2s infinite'
      }}>
        🚧 Under Construction 🚧

        <style>
          {`
            @keyframes pulse {
              0% { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.05); opacity: 0.85; }
              100% { transform: scale(1); opacity: 1; }
            }
          `}
        </style>
      </div>
    </div>
  );
}
