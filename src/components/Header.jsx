// components/Header.jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      {/* Top bar with phone */}
      
<div style={{
  backgroundColor: '#AAB4C2',
  color: '#0D1B2A',
  fontSize: '0.9rem',
  padding: '0.4rem 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}}>
  <div style={{ flex: 1, textAlign: 'center' }}>
    <strong>BridgeKey Homes: Beyond Traditional Solutions</strong>
  </div>
  <div>
    📞 <strong>602.582.8621</strong>
  </div>
</div>

      {/* Main nav bar */}
      <div style={{
        backgroundColor: '#0D1B2A',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem',
        height: '100px', 
        overflow: 'hidden'
}}>

        {/* Logo */}
        <img
           src="/logo.png"
           alt="BridgeKey Homes Logo"
           style={{ maxHeight: '180px', height: '100%', width: 'auto' }}
        />

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
            <li><Link href="/" style={{ color: 'white', textDecoration: 'none' }} >Home</Link></li>
            <li><Link href="/sell" style={{ color: 'white', textDecoration: 'none' }} >Sell a Home</Link></li>
            <li><Link href="/buy" style={{ color: 'white', textDecoration: 'none' }} >Buy a Home</Link></li>
            <li><Link href="/contact" style={{ color: 'white', textDecoration: 'none' }} >Contact</Link></li>
            <li><Link href="/resources" style={{ color: 'white', textDecoration: 'none' }} >Resources</Link></li>
            <li><Link href="/about" style={{ color: 'white', textDecoration: 'none' }} >About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
