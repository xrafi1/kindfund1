import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Join() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for registering! We will contact you soon.');
  };

  return (
    <>
      <Header />
      <div className="section" style={{ backgroundColor: '#f9fafb', minHeight: '70vh' }}>
        <div className="container">
          <div className="form-card">
            <h2 className="text-center" style={{ color: 'var(--primary-green)' }}>Join KindFund</h2>
            <p className="text-center">Become a volunteer or member today.</p>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label>Full Name</label>
                <input type="text" className="input-field" required />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label>Email Address</label>
                <input type="email" className="input-field" required />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label>Phone Number</label>
                <input type="tel" className="input-field" required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}