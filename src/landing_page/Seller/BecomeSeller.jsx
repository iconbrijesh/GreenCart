
import './BecomeSeller.css';

const BecomeSeller = () => {
  return (
    <div className="seller-container">
      <h2>Become a Seller <span role="img" aria-label="leaf">🌿</span></h2>
      <p>Empower communities, promote green living & grow your eco-business.</p>

      <form className="seller-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Shop/Brand Name" />
        <input type="text" placeholder="Product Category (e.g. Bamboo Crafts)" />
        <input type="tel" placeholder="Phone Number" />
        <textarea rows="4" placeholder="Brief Description of Your Products"></textarea>

        <button type="submit">Apply Now</button>
      </form>

      <p className="note">We’ll review your application and get back to you within 48 hours.</p>
    </div>
  );
};

export default BecomeSeller;
