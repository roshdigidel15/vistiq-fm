import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Where Luxury<br />Meets Serenity</h2>
            <p className="about-description">
              Experience personalized spa treatments that restore balance and elevate self-care
            </p>
            <a href="/about" className="btn btn-primary">More About Vistiq</a>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="tag">Luxury Spa</div>
              <div className="tag">Wellness Retreat</div>
              <div className="tag">Mind Body Soul</div>
              <div className="tag">Spa Day</div>
              <div className="tag">Holistic Healing</div>
              <div className="tag">Pamper Yourself</div>
              <div className="tag">Luxury Lifestyle</div>
              <div className="tag">Luxury Facial</div>
              <div className="tag">Glowing Skin</div>
              <div className="tag">Hydrating Facial</div>
              <div className="tag">Anti Aging Treatment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
