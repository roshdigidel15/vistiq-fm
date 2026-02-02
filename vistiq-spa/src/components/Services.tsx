import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Luxury Facials',
      description: 'Hydrating, anti-aging, and brightening facials for radiant skin.',
      link: '/services'
    },
    {
      title: 'Deep Tissue Massage',
      description: 'Relieve tension and stress with expert deep tissue techniques that promote relaxation.',
      link: '/services'
    },
    {
      title: 'Aromatherapy Rituals',
      description: 'Immerse yourself in calming essential oils and holistic techniques for full-body renewal.',
      link: '/services'
    },
    {
      title: 'Full-Body Detox Wrap',
      description: 'Detoxify, exfoliate, and hydrate your skin with our signature mineral-rich body wrap.',
      link: '/services'
    },
    {
      title: 'Hot Stone Therapy',
      description: 'Experience deep relaxation and muscle relief through soothing heated stone treatments.',
      link: '/services'
    },
    {
      title: 'Spa Manicure & Pedicure',
      description: 'Luxury nail care services that nourish, shape, and beautify your hands and feet.',
      link: '/services'
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title">Healing Hands,<br />Lasting Benefits</h2>
        <p className="section-subtitle">Feel the difference with expert care that restores and revitalizes</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href={service.link} className="service-link">View details →</a>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <a href="/services" className="btn btn-primary">Full Services List</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
