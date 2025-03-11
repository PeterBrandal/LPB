import React, { useState } from 'react';
import MenuItems from './MenuItems';
import '../styles/Meny.css';
import items from '../data/Menydata';

/**
 * Menu page component that displays food categories and menu items
 */
function Meny() {
  // Generate unique categories from menu data
  const allCategories = ['all', ...new Set(items.map(item => item.category))];
  
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState('all');

  /**
   * Filter menu items by category
   * @param {string} category - The category to filter by
   */
  const filterItems = category => {
    setActiveCategory(category);
    
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    
    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Vår Meny</h1>
        <div className="underline"></div>
      </div>
      
      <div className="category-container">
        {categories.map((category, index) => (
          <button 
            key={index}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <MenuItems items={menuItems} />
    </div>
  );
}

export default Meny; 