import React from "react";
import "./WhyGreenCart.css";

const WhyGreenCart = () => {
  return (
    <section className="why-greencart">
      <div className="why-greencart-content">
        <h2>Why GreenCart?</h2>
        <p>
          In a world drowning in plastic, pollution, and overconsumption, it's time we make conscious choices. 
          <strong> GreenCart</strong> isn’t just another e-commerce platform — it's a movement towards a cleaner, healthier planet.
        </p>

        <ul>
          <li><strong>100% Natural:</strong> Every product on GreenCart is made from organic, chemical-free, and sustainable materials.</li>
          <li><strong>Recyclable Packaging:</strong> We say no to plastic. All our packaging is reusable, recyclable, or biodegradable.</li>
          <li><strong>Eco-Friendly Manufacturing:</strong> Our partners follow ethical and environment-first production practices.</li>
          <li><strong>Support Sustainable Development:</strong> Every purchase you make contributes to a greener tomorrow.</li>
        </ul>

        <p>
          With <strong>GreenCart</strong>, you don’t just shop — you take a stand. A stand for our environment, for future generations, and for a world where growth doesn’t cost the Earth.
        </p>

        <p className="cta-line">
          🌍 Make the switch. Choose conscious living. Choose <strong>GreenCart</strong>.
        </p>
      </div>
    </section>
  );
};

export default WhyGreenCart;
