import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f9fafb', padding: '50px 0', marginTop: 'auto', borderTop: '1px solid #eee' }}>
      <div className="container">
        <div className="grid-2">
          <div>
            <h3 style={{ color: 'var(--primary-green)' }}>KindFund</h3>
            <p style={{ color: 'var(--text-gray)' }}>
              Empowering communities through trusted support and transparency.
              <br />
              <strong>Barpeta Road, Assam, India</strong>
            </p>
            <p>Email: <a href="mailto:info@kindfund.in">info@kindfund.in</a></p>
          </div>
          <div style={{ textAlign: 'left' }}>
            <h4>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Link href="/privacy">Privacy Policy</Link></li>
              <li style={{ marginBottom: '10px' }}><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/refund">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.9rem', color: '#999' }}>
          &copy; {new Date().getFullYear()} KindFund Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}