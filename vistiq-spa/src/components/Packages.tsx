import './Packages.css';

const Packages = () => {
  const packages = [
    {
      name: 'The Glow Ritual',
      price: '$240',
      duration: '2 hrs 30 min',
      services: [
        'Radiance Boost Facial',
        'Vistiq Gua Sha Facial Ritual',
        'Eye & Lip Revival Add-On'
      ]
    },
    {
      name: 'Hot Stone Harmony',
      price: '$265',
      duration: '2 hrs 30 min',
      services: [
        'Vistiq Signature Hot Stone Massage',
        'Upper Body Hot Stone Therapy',
        'Hot Stone Scalp & Neck Ritual'
      ]
    },
    {
      name: 'Hand & Foot Spa Ritual',
      price: '$255',
      duration: '3 hrs',
      services: [
        'Vistiq Signature Manicure',
        'Vistiq Signature Pedicure',
        'Aromatherapy Spa Pedicure'
      ]
    },
    {
      name: 'Relax & Reset Package',
      price: '$295',
      duration: '3 hrs',
      services: [
        'Deep Tissue & Hot Towel Ritual',
        'Aromatherapy Hot Stone Massage',
        'Express Glow Facial'
      ]
    },
    {
      name: 'Weekend Wellness Escape',
      price: '$540',
      duration: '4 hrs 15 min',
      services: [
        'Couples Deep Tissue Experience',
        'Couples Hot Stone Escape',
        'Detox & Clear Purifying Facial'
      ]
    },
    {
      name: 'The Ultimate Reset',
      price: '$410',
      duration: '4 hrs 15 min',
      services: [
        'Full-Body Aroma Detox',
        'Charcoal & Sea Salt Detox Ritual',
        'Detox & Clear Purifying Facial'
      ]
    }
  ];

  return (
    <section className="packages section" id="packages">
      <div className="container">
        <h2 className="section-title">Indulge in Our<br />Signature Packages</h2>
        
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-meta">
                <span className="package-price">{pkg.price}</span>
                <span className="package-duration">{pkg.duration}</span>
              </div>
              <div className="package-services">
                <p className="services-label">Included services:</p>
                <ul className="services-list">
                  {pkg.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
              <a href="https://www.zoho.com/bookings/industries/massage-therapy-scheduling-software.html" className="btn btn-primary package-btn">
                Book this Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
