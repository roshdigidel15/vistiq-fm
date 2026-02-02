import { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="newsletter section">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="section-title">Subscribe &<br />Stay Inspired</h2>
          <p className="newsletter-subtitle">Fresh updates, self-care rituals & special rewards — straight to your inbox</p>
          
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
