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

        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to BridgeKey Homes</h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
          Your Home. Your Terms. Our Solutions.
        </p>
        <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
          *** Site Under Redesign ***
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

    </>
  );
}
