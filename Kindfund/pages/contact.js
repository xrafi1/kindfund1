import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <div className="container section">
        <h1 className="text-center">Contact Us</h1>
        <div className="grid-2" style={{ marginTop: '40px' }}>
          
          <div style={{ padding: '30px', backgroundColor: 'var(--light-green)', borderRadius: 'var(--radius)' }}>
            <h3>Get in Touch</h3>
            <p>Have questions about our programs or your donation? Reach out to us.</p>
            <p><strong>📍 Address:</strong><br />Barpeta Road, Assam, India</p>
            <p><strong>📧 Email:</strong><br />info@kindfund.in</p>
          </div>

          <form className="form-card" style={{ margin: 0, maxWidth: '100%' }}>
             <h3>Send a Message</h3>
             <input type="text" placeholder="Your Name" className="input-field" />
             <textarea rows="4" placeholder="How can we help?" className="input-field" style={{ resize: 'vertical' }}></textarea>
             <button className="btn btn-primary">Send Message</button>
          </form>

        </div>
      </div>
      <Footer />
    </>
  );
}