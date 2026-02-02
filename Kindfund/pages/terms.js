import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <>
      <Header />
      <div className="container section">
        <h1>Terms & Conditions</h1>
        <p>Welcome to KindFund. By using this website, you agree to comply with the following terms:</p>
        <ul>
            <li>Donations are voluntary and used for the social causes listed.</li>
            <li>KindFund reserves the right to update these terms at any time.</li>
            <li>Users must provide accurate information when registering.</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}