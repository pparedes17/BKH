// pages/index.jsx
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section style={{
        backgroundColor: '#0D1B2A',
        color: 'white',
        padding: '4rem 2rem 2rem',
        textAlign: 'center'
      }}>
        <img
          src="/logo.png"
          alt="BridgeKey Homes Logo"
          style={{
            width: '250px',
            filter: 'drop-shadow(10px 10px 15px rgba(0, 0, 0, 0.6))',
            marginBottom: '1.5rem',
          }}
        />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to BridgeKey Homes</h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
          Your Home. Your Terms. Our Solutions.
        </p>
        <button style={{
          backgroundColor: '#E63946',
          border: 'none',
          padding: '0.8rem 1.5rem',
          fontSize: '1rem',
          color: 'white',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Sell Your Home Now
        </button>
      </section>

      {/* Under Construction Banner */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          textAlign: 'center',
          padding: '1rem 0',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          animation: 'pulse 2s infinite',
          zIndex: 1000,
          color: '#ffffff'
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
    </>
  );
}
