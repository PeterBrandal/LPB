import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sandøya Mat</h4>
          <p>Bryggeveien 15<br />3234 Sandøya<br />Norway</p>
        </div>
        
        <div className="footer-section">
          <h4>Åpningstider</h4>
          <p>Mandag - Fredag: 11:00 - 22:00<br />
             Lørdag - Søndag: 10:00 - 23:00</p>
        </div>
        
        <div className="footer-section">
          <h4>Lenker</h4>
          <ul className="footer-links">
            <li><Link to="/">Hjem</Link></li>
            <li><Link to="/meny">Meny</Link></li>
            <li><Link to="/liv">Liv på Brygga</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Følg oss</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sandøya Mat. Alle rettigheter reservert.</p>
      </div>
    </footer>
  );
}

export default Footer; 