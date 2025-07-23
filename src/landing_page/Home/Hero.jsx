import React, { useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const images = [
    "../public/images/woodenToys.jpg",
    "../public/images/cottonSaree.jpg",
    "../public/images/woodenToys.avif",
    "../public/images/naturalMedicine.avif"
    
  ];

  return (
    <div className="hero-container">
      <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>

      <div className="hero-scroll" ref={scrollRef}>
        {images.map((src, index) => (
          <div className="hero-card" key={index}>
            <img src={src} alt={`Hero slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
    </div>
  );
};

export default Hero;
