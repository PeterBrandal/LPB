import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Velkommen til Sandøya Mat</h1>
        <p className="lead">En gastronomisk opplevelse ved sjøen</p>
      </div>
      
      <div className="home-content">
        <section className="about-section">
          <h2>Om Sandøya Mat</h2>
          <p>
            Sandøya Mat tilbyr lokale råvarer med fokus på bærekraftig mat og 
            gode smaksopplevelser i vakre omgivelser ved sjøen.
          </p>
        </section>
        
        <section className="featured-section">
          <h2>Ukens anbefaling</h2>
          <p>
            Prøv vår nye sesongmeny med ferske råvarer fra lokale produsenter.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home; 