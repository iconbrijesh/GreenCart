import React from 'react';
import './Category.css'; // ← Import CSS

const categories = [
  {
    name: 'Personal Care & Hygiene',
    image: 'https://cdn-icons-png.flaticon.com/512/892/892458.png',
  },
  {
    name: 'Home Cleaning Supplies',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046756.png',
  },
  {
    name: 'Clothing',
    image: 'https://cdn-icons-png.flaticon.com/512/892/892458.png',
  },
  {
    name: 'Gardening & Composting',
    image: 'https://cdn-icons-png.flaticon.com/512/2902/2902142.png',
  },
  {
    name: 'Kitchen Essentials',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
  },
];

export default function Category() {
  return (
    <div className="category-container">
      {categories.map((cat, index) => (
        <div className="category-card" key={index}>
          <img src={cat.image} alt={cat.name} />
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
