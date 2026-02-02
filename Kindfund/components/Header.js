import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ borderBottom: '1px solid #eee', padding: '20px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/">
          <h2 style={{ margin: 0, color: 'var(--primary-green)', cursor: 'pointer' }}>KindFund.</h2>
        </Link>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <Link href="/">Home</Link>
          <Link href="/join">Join NGO</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}