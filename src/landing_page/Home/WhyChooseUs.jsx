import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <p className="intro-text">
        At GreenCart, we’re not just a store—we're a movement towards a more sustainable world. Here’s why thousands trust us:
      </p>

      <div className="reasons-grid">
        <div className="reason-card">
          <h3>🌿 100% Natural Products</h3>
          <p>We only sell products made from pure, chemical-free ingredients that are safe for both you and the planet.</p>
        </div>

        <div className="reason-card">
          <h3>🤝 Ethical Sourcing</h3>
          <p>We partner with local farmers and artisans, ensuring fair wages and responsible sourcing for every product.</p>
        </div>

        <div className="reason-card">
          <h3>📦 Eco-Friendly Packaging</h3>
          <p>No plastic, no pollution. All our packaging is biodegradable, compostable, and kind to Mother Earth.</p>
        </div>

        <div className="reason-card">
          <h3>🌎 Every Order = Impact</h3>
          <p>A portion of every purchase goes towards planting trees and supporting rural sustainability programs.</p>
        </div>

        <div className="reason-card">
          <h3>🧡 Community First</h3>
          <p>We believe in growing together—with our customers, partners, and the planet. Your support makes the change possible.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
