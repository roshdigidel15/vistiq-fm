import './Philosophy.css';

const Philosophy = () => {
  const features = [
    {
      title: 'Crafted for Calm',
      description: 'We create more than treatments—we create space to breathe.'
    },
    {
      title: 'Community Love',
      description: 'Vistiq is more than a spa — it\'s a part of our clients\' self-care rituals. From first-time guests to loyal regulars, our community keeps coming back for the warmth, the care, and the calm.',
      link: '/',
      linkText: 'Read Testimonials'
    },
    {
      title: 'Professionals You Can Trust',
      description: 'At Vistiq, our team consists of highly trained, certified spa and wellness professionals. From licensed massage therapists to expert estheticians, every practitioner is hand-selected for their skill, experience, and intuitive care.',
      link: '/about',
      linkText: 'Meet Our Team'
    },
    {
      title: 'Real Results',
      stats: [
        { label: 'Repeat Visits', value: '82%' },
        { label: 'Therapist Experience—average', value: '9+ years' },
        { label: 'Product Repurchase Rate', value: '72%' }
      ]
    }
  ];

  return (
    <section className="philosophy section">
      <div className="container">
        <h2 className="section-title">Where Expertise<br />Meets Indulgence</h2>
        <p className="section-subtitle">We blend science and serenity to deliver meaningful results every time</p>
        
        <div className="philosophy-grid">
          {features.map((feature, index) => (
            <div key={index} className="philosophy-card">
              <h3 className="philosophy-title">{feature.title}</h3>
              <p className="philosophy-description">{feature.description}</p>
              
              {feature.stats && (
                <div className="philosophy-stats">
                  {feature.stats.map((stat, idx) => (
                    <div key={idx} className="mini-stat">
                      <div className="mini-stat-label">{stat.label}</div>
                      <div className="mini-stat-value">{stat.value}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {feature.link && (
                <a href={feature.link} className="philosophy-link">{feature.linkText}</a>
              )}
            </div>
          ))}
        </div>

        <div className="philosophy-cta">
          <p className="cta-text">This isn't just a spa treatment—it's a reset for your mind, body, and soul.</p>
          <a href="https://www.zoho.com/bookings/industries/massage-therapy-scheduling-software.html" className="btn btn-primary">Book Your Escape</a>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
