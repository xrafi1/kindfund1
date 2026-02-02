import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Refund() {
  return (
    <>
      <Header />
      <div className="container section">
        <h1>Refund Policy</h1>
        <p>At KindFund, we take the utmost care in processing donations.</p>
        <h3>Cancellation</h3>
        <p>Once a donation is made, it cannot be cancelled as funds are immediately allocated to projects.</p>
        <h3>Errors</h3>
        <p>If you made a donation in error (e.g., wrong amount), please contact info@kindfund.in within 24 hours for assistance.</p>
      </div>
      <Footer />
    </>
  );
}