import { useState } from 'react';
import menu from '../data/Menydata';
import type { MenuItem } from '../data/Menydata';

function MenuSection() {
  const categories = ['Alle', ...new Set(menu.map(item => item.category))];
  const [active, setActive] = useState('Alle');

  const filtered: MenuItem[] =
    active === 'Alle' ? menu : menu.filter(item => item.category === active);

  return (
    <section id="meny" className="menu">
      <div className="section-container">

        <div className="menu-header">
          <span className="section-label">Vår meny</span>
          <h2 className="section-title">Smak av sjøen</h2>
        </div>

        <div className="menu-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filtered.map(item => (
            <article key={item.id} className="menu-card">
              <img src={item.img} alt={item.title} className="menu-card-img" />
              <div className="menu-card-body">
                <div className="menu-card-category">{item.category}</div>
                <div className="menu-card-row">
                  <h3 className="menu-card-title">{item.title}</h3>
                  <span className="menu-card-price">{item.price} kr</span>
                </div>
                <p className="menu-card-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MenuSection;
