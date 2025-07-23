
import "./ProductListing.css";

const productCategories = [
  {
    title: "Kitchen Appliances",
    products: [
      { name: "IMECO Bamboo Mug", price: "₹399", rating: "4.8/5", img: "/images/kitchenImg/maeMug.webp" },
      { name: "Cooker", price: "₹192", rating: "4.6/5", img: "images/kitchenImg/mudCooker.webp" },
      { name: "Cutting Board", price: "₹199", rating: "4.9/5", img: "images/kitchenImg/Cuttingboard.jpg" },
      { name: "Wooden Cup sand bottle", price: "₹150", rating: "4.5/5", img: "images/kitchenImg/wooden Cupsandbottle.jpg" },
      { name: "Wooden spoons", price: "₹99", rating: "4.9/5", img: "images/kitchenImg/Wooden spoons.jpg" },
    ],
  },
  {
    title: "Home Décor",
    products: [
      { name: "Eco Lamp Shade", price: "₹799", rating: "4.7/5", img: "/images/homeDecor/lamp.webp" },
      { name: "Coconut Shell Bowl", price: "₹99", rating: "4.8/5", img: "/images/homeDecor/cockonutBowl.webp" },
      { name: "Terracotta Vase", price: "₹599", rating: "4.6/5", img: "/images/homeDecor/terracotta.webp" },
      { name: "Bamboo Frame Art", price: "₹899", rating: "4.9/5", img: "/images/homeDecor/bholenathji.webp"},
      { name: "Jute Wall Hanging", price: "₹499", rating: "4.8/5", img: "/images/homeDecor/jutewall.webp" },
    ],
  },
  {
    title: "Personal Care",
    products: [
      { name: "Bamboo Toothbrush", price: "₹49", rating: "4.8/5", img: "/images/personalCare/toohbrush.webp" },
      { name: "Neem Wood Comb", price: "₹89", rating: "4.6/5", img: "/images/personalCare/neemComb.webp" },
      { name: "Organic Face Pack", price: "₹299", rating: "4.7/5", img: "/images/personalCare/facePack.webp"},
      { name: "Reusable Cotton Pads", price: "₹199", rating: "4.8/5", img: "/images/personalCare/pads.webp" },
      { name: "Natural Deodorant", price: "₹249", rating: "4.9/5", img: "/images/personalCare/deo.webp" },
    ],
  },
  {
    title: "Gardening Tools",
    products: [
      { name: "Compost Bin", price: "₹250", rating: "4.9/5", img: "images/garden/compostBin.webp" },
      { name: "Cocopeat Block", price: "₹25", rating: "4.7/5", img: "images/garden/cocopeatBlock.webp "},
      { name: "Bamboo Basket", price: "₹100", rating: "4.8/5", img: "images/garden/basket.webp" },
      { name: "Recycled Pots Set", price: "₹299", rating: "4.6/5", img: "images/garden/potSet.webp" },
      { name: "Natural Pest Spray", price: "₹199", rating: "4.7/5", img: "images/garden/pest.webp" },
    ],
  },
  {
    title: "Stationery",
    products: [
      { name: "Plantable Pencil", price: "₹20", rating: "4.8/5", img: "/images/stationery/plantablePenSeed.webp" },
      { name: "Recycled Notebook", price: "₹99", rating: "4.7/5", img: "/images/stationery/recycleNotebook.webp" },
      { name: "NATURAL Handmade Terracotta Water Bottle ", price: "₹39", rating: "4.6/5", img: "/images/stationery/bottle.webp" },
      { name: "Cork Bulletin Board", price: "₹399", rating: "4.8/5", img: "/images/stationery/cork.webp" },
      { name: "Natural Ink Pen", price: "₹59", rating: "4.9/5", img: "/images/stationery/woodPen.webp"},
    ],
  },
];

const EcoStore = () => {
  return (
    <div className="eco-store">
      {productCategories.map((category, i) => (
        <div className="category-section" key={i}>
          <h2 className="category-title">{category.title}</h2>
          <div className="product-row">
            {category.products.map((product, j) => (
              <div className="product-card" key={j}>
                <img src={product.img} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p className="product-rating">🌿 {product.rating}</p>
                <div className="button-group">
                  <button className="view-button">View</button>
                  <button className="add-button">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EcoStore;
