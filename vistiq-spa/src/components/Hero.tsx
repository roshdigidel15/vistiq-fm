import { useState } from 'react';
import './Hero.css';

interface HeroProps {
  scrolled: boolean;
}

const Hero = ({ scrolled }: HeroProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="hero">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">Vistiq</div>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
              <a href="#services">Services</a>
              <a href="#packages">Packages</a>
              <a href="#shop">Shop</a>
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
              <a href="https://www.zoho.com/bookings/industries/massage-therapy-scheduling-software.html" className="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">A Haven of<br />Peace & Beauty</h1>
            <p className="hero-subtitle">Reconnect with your inner calm through holistic spa rituals and botanical skincare</p>
            <div className="hero-buttons">
              <a href="https://www.zoho.com/bookings/industries/massage-therapy-scheduling-software.html" className="btn btn-primary">Book An Appointment</a>
              <a href="#shop" className="btn btn-secondary">Shop Beauty Products</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
