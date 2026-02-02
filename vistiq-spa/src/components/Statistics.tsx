import './Statistics.css';

const Statistics = () => {
  const stats = [
    {
      value: '98%',
      label: 'Customer Satisfaction',
      description: '98% of our clients leave feeling deeply relaxed, refreshed, and rejuvenated after their visit'
    },
    {
      value: '5k+',
      label: 'Annual Treatments',
      description: 'Over 5,000 luxury spa treatments performed every year, ensuring top-tier wellness experiences'
    },
    {
      value: '10k+',
      label: 'Happy Clients',
      description: 'With over 10,000 satisfied clients worldwide, Vistiq is your trusted destination for luxury self-care'
    },
    {
      value: '4.9/5',
      label: 'Excellence Rating',
      description: 'Our services are rated 4.9/5 stars by thousands of delighted guests, reflecting our commitment to excellence'
    }
  ];

  return (
    <section className="statistics section" id="statistics">
      <div className="container">
        <h2 className="section-title">Health that Speaks<br />in Numbers</h2>
        <p className="section-subtitle">See how our expertise and dedication have transformed thousands of lives</p>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
