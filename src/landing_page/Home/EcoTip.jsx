import React, { useEffect, useState } from 'react';
import './EcoTip.css';

const tips = [
  "Use reusable shopping bags instead of plastic.",
  "Switch to LED light bulbs to save energy.",
  "Compost kitchen waste to reduce landfill impact.",
  "Take shorter showers to conserve water.",
  "Buy local produce to reduce carbon footprint.",
  "Avoid fast fashion — choose quality over quantity.",
  "Turn off appliances when not in use.",
  "Use a bicycle or walk for short distances.",
];

const EcoTip = () => {
  const [todayTip, setTodayTip] = useState("");

  useEffect(() => {
    const dayIndex = new Date().getDay(); // 0 (Sun) to 6 (Sat)
    setTodayTip(tips[dayIndex % tips.length]);
  }, []);

  return (
    <div className="eco-tip-card">
      <h3 className="eco-tip-title">🌱 Eco Tip of the Day</h3>
      <p className="eco-tip-text">{todayTip}</p>
    </div>
  );
};

export default EcoTip;
