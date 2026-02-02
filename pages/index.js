import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [amount, setAmount] = useState('');

  const handleDonate = () => {
    if (!amount) return alert('Please enter an amount');
    alert(`Thank you for initiating a donation of ₹${amount}. Redirecting to payment gateway...`);
  };

  return (
    <>
      <Head>
        <title>KindFund | Empowering Lives</title>
        <meta name="description" content="Support the KindFund foundation." />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="section" style={{ backgroundColor: 'var(--light-green)', padding: '80px 0' }}>
        <div className="container grid-2">
          <div>
            <span style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>BE THE CHANGE</span>
            <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', margin: '10px 0 20px 0' }}>
              Your Small Contribution Can Create Big Impact in Assam.
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', marginBottom: '30px' }}>
              Join KindFund in our mission to provide education, healthcare, and hope to those who need it most.
            </p>
          </div>
          
          {/* Donation Card */}
          <div className="form-card">
            <h3 className="text-center">Make a Donation</h3>
            <p className="text-center" style={{ fontSize: '0.9rem', color: '#666' }}>Secure • Transparent • Tax Exempt</p>
            
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Amount (₹)</label>
            <input 
              type="number" 
              className="input-field" 
              placeholder="e.g. 1000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              {[500, 1000, 2000].map((val) => (
                <button 
                  key={val}
                  onClick={() => setAmount(val)}
                  style={{ 
                    padding: '8px 15px', 
                    background: amount == val ? 'var(--primary-green)' : '#eee',
                    color: amount == val ? 'white' : 'black',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer'
                  }}
                >
                  ₹{val}
                </button>
              ))}
            </div>

            <button onClick={handleDonate} className="btn btn-primary" style={{ width: '100%' }}>
              Donate Securely
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section container text-center">
        <h2 style={{ color: 'var(--primary-green)' }}>Our Mission</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-gray)' }}>
          To build a sustainable future for underprivileged communities in Barpeta Road and beyond. 
          We focus on direct impact, transparency, and community-led growth.
        </p>
        <div style={{ marginTop: '40px' }}>
           <img 
             src="https://placehold.co/800x400/2E7D32/FFFFFF?text=Community+Impact+Image" 
             alt="Impact" 
             style={{ width: '100%', borderRadius: 'var(--radius)' }} 
           />
        </div>
      </section>

      <Footer />
    </>
  );
}