import './Blog.css';

const Blog = () => {
  const posts = [
    {
      title: 'The Art of the Evening Ritual',
      description: 'How to wind down with intention and reset your nervous system',
      link: '/blog/the-art-of-the-evening-ritual'
    },
    {
      title: 'What Your Skin Really Needs This Season',
      description: 'Expert tips for seasonal skincare adjustments',
      link: '/blog/seasonal-skincare'
    },
    {
      title: '5 Spa-Inspired Ways to De-Stress at Home',
      description: 'Bring the spa experience into your daily routine',
      link: '/blog/spa-at-home'
    },
    {
      title: 'The Glow Guide: Pre- and Post-Facial Care',
      description: 'Maximize your facial results with proper care',
      link: '/blog/facial-care-guide'
    }
  ];

  return (
    <section className="blog section" id="blog">
      <div className="container">
        <h2 className="section-title">Thoughts<br />That Glow</h2>
        <p className="section-subtitle">Where beauty, balance, and mindful living come together</p>
        
        <div className="blog-grid">
          {posts.map((post, index) => (
            <a key={index} href={post.link} className="blog-card">
              <div className="blog-image">
                <div className="blog-placeholder"></div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-description">{post.description}</p>
                <span className="blog-link">Read Article →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
