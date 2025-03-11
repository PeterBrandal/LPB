import React from 'react';
import '../styles/MenuItems.css';

/**
 * Component for displaying individual menu items
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of menu items to display
 */
function MenuItems({ items }) {
  return (
    <div className="menu-items-container">
      {items.map(menuItem => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="menu-item-image" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price} kr</h4>
              </header>
              <p className="item-description">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default MenuItems; 