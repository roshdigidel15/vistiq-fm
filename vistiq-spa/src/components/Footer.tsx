import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Vistiq</h3>
            <p className="footer-description">
              Your sanctuary for holistic wellness and botanical beauty rituals.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="/services">Luxury Facials</a></li>
              <li><a href="/services">Deep Tissue Massage</a></li>
              <li><a href="/services">Aromatherapy Rituals</a></li>
              <li><a href="/services">Hot Stone Therapy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:hello@vistiq.com">hello@vistiq.com</a></li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
              <li><a href="https://www.zoho.com/bookings/industries/massage-therapy-scheduling-software.html">Book Appointment</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Vistiq. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
