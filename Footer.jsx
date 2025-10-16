import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container bg-light mt-5">
      <div className="container">
        <div className="row py-5">
          {/* Brand Section */}
          <div className="col-md-4 mb-4">
            <a className="navbar-brand" href="/Home">        
              <span className="brand-name">Moss</span>
            </a>
            <p className="mt-3">
              Providing quality fashion for the entire family since 2010. 
              Discover our latest collections and exclusive offers.
            </p>
            <div className="social-icons mt-4">
              <a href="#" className="me-3 text-dark">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="me-3 text-dark">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="me-3 text-dark">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="col-md-2 mb-4">
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><a href="/Men" className="text-decoration-none text-dark">Men</a></li>
              <li><a href="/Women" className="text-decoration-none text-dark">Women</a></li>
              <li><a href="/Kids" className="text-decoration-none text-dark">Kids</a></li>
              <li><a href="/Sports" className="text-decoration-none text-dark">Sports</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li><a href="/Contact" className="text-decoration-none text-dark">Contact Us</a></li>
              <li><a href="/FAQs" className="text-decoration-none text-dark">FAQs</a></li>
              <li><a href="/Shipping" className="text-decoration-none text-dark">Shipping & Returns</a></li>
              <li><a href="/SizeGuide" className="text-decoration-none text-dark">Size Guide</a></li>
              <li><a href="/Privacy" className="text-decoration-none text-dark">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <div className="mt-4">
              <h6>Contact Info</h6>
              <p className="mb-1">
                <i className="bi bi-geo-alt me-2"></i> 123 Fashion Street, London, UK
              </p>
              <p className="mb-1">
                <i className="bi bi-telephone me-2"></i> +44 123 456 789
              </p>
              <p className="mb-0">
                <i className="bi bi-envelope me-2"></i> info@mossstore.com
              </p>
            </div>
          </div>
        </div>
        <div className="row border-top pt-3">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; 2025 Moss Store. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="payment-methods">
              <i className="bi bi-credit-card me-2" title="Credit Card"></i>
              <i className="bi bi-paypal me-2" title="PayPal"></i>
              <i className="bi bi-currency-bitcoin me-2" title="Bitcoin"></i>
              <i className="bi bi-wallet2" title="Digital Wallet"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}