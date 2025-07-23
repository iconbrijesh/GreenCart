import './FeaturedProduct.css';

const products = [
  {
    id: 1,
    name: 'IMECO Bamboo Mug',
    price: '₹1,299',
    image: '/images/homeImg/EcoMug.webp',
    score: '🌿 4.8/5'
  },
  {
    id: 2,
    name: 'GREENDOT BIOPAK Compostable Garbage Bags ',
    price: '₹499',
    image: '/images/homeImg/garbageBags.webp',
    score: '🌿 4.6/5'
  },
  {
    id: 3,
    name: 'Beco Bamboo Reusable Kitchen Towel',
    price: '₹199',
    image: '/images/homeImg/reuseableTowel.webp',
    score: '🌿 4.9/5'
  },
  {
    id: 4,
    name: 'Neckkonix Vermi Compost Manure',
    price: '₹150',
    image: '/images/homeImg/vermiCompost.webp',
    score: '🌿 4.5/5'
  },
  {
    id: 5,
    name: 'Plantable Seed Pen',
    price: '₹99',
    image: '/images/homeImg/seedPen.webp',
    score: '🌿 4.9/5'
  },
  {
    id: 6,
    name: 'Bio Research Center Naphthalene Balls for Clothes',
    price: '₹349',
    image: '/images/homeImg/naphthalene.webp',
    score: '🌿 4.7/5'
  },
  {
    id: 7,
    name: 'Jute Blue Apple Grocery Bag',
    price: '₹250',
    image: '/images/homeImg/juteBag.webp',
    score: '🌿 4.6/5'
  },
  {
    id: 7,
    name: 'Beco Front Laundry Detergent',
    price: '₹250',
    image: '/images/homeImg/detergent.webp',
    score: '🌿 4.6/5'
  },
  {
    id: 7,
    name: 'Senior lunch box set',
    price: '₹488',
    image: '/images/homeImg/lunchBox.webp',
    score: '🌿 4.6/5'
  },
  {
    id: 7,
    name: 'Piru Wood Tongue Cleaner',
    price: '₹250',
    image: '/images/homeImg/tongueCleaner.webp',
    score: '🌿 4.6/5'
  },
];

const FeaturedProduct = () => {
  const row1 = products.slice(0, 5);
  const row2 = products.slice(5);

  return (
    <section className="featured-section">
      <h2>Most bought</h2>

      <div className="product-grid">
        {row1.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className="score">{product.score}</p>
            <div className="button-group">
              <button className="view-btn">View</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="product-grid">
        {row2.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className="score">{product.score}</p>
            <div className="button-group">
              <button className="view-btn">View</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
