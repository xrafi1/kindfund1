import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <>
      <Header />
      <div className="container section">
        <h1>Privacy Policy</h1>
        <p>Last updated: October 2023</p>
        <p>At KindFund, we value your trust. We collect basic information (Name, Email, Phone) solely for the purpose of processing donations and NGO registration.</p>
        <h3>Data Security</h3>
        <p>We do not share your personal data with third-party advertisers. All payment data is processed securely via encrypted gateways.</p>
      </div>
      <Footer />
    </>
  );
}