// components/Header.jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      {/* Top bar with phone */}
      <div style={{
        backgroundColor: '#0D1B2A',
        color: 'white',
        fontSize: '0.9rem',
        padding: '0.4rem 1rem',
        textAlign: 'right'
      }}>
        Call us today: <strong>602.582.8621</strong>
      </div>

      {/* Main nav bar */}
      <div style={{
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: '1px solid #ccc'
      }}>
        {/* Logo */}
        <img src="/logo.png" alt="BridgeKey Homes Logo" style={{ height: '50px' }} />

        {/* Navigation Menu */}
        <nav>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '1.5rem',
            margin: 0,
            padding: 0,
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sell">Sell a Home</Link></li>
            <li><Link href="/buy">Buy a Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
