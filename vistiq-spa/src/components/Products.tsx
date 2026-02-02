import './Products.css';

const Products = () => {
  const products = [
    {
      name: 'Vistiq Signature Scented Candle',
      price: '$46',
      link: '/shop/vistiq-signature-scented-candle'
    },
    {
      name: 'Botanical Room & Linen Mist',
      price: '$28',
      link: '/shop/botanical-room-linen-mist'
    },
    {
      name: 'Essential Oil Roller Trio',
      price: '$44',
      link: '/shop/essential-oil-roller-trio'
    },
    {
      name: 'Aromatherapy Shower Steamer Set',
      price: '$38',
      link: '/shop/aromatherapy-shower-steamer-set'
    }
  ];

  return (
    <section className="products section" id="shop">
      <div className="container">
        <h2 className="section-title">Handpicked<br />for Your Ritual</h2>
        <p className="section-subtitle">From skin to soul, everything you need for your self-care ritual</p>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <a key={index} href={product.link} className="product-card">
              <div className="product-image">
                <div className="product-placeholder"></div>
              </div>
              <div className="product-info">
                <div className="product-price">{product.price}</div>
                <div className="product-name">{product.name}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="products-cta">
          <a href="/shop" className="btn btn-primary">Visit Shop</a>
        </div>
      </div>
    </section>
  );
};

export default Products;
