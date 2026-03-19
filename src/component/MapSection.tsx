function MapSection() {
  return (
    <section className="map-section">
      <div className="map-overlay">
        <div className="map-info">
          <span className="section-label">Finn oss</span>
          <h2 className="map-info-title">Sandøya, Bamble</h2>
          <p className="map-info-text">Vi ligger ved Sandøykilen – kom med bil, sykkel eller båt. Gjesteplasser ved brygga.</p>
          <a
            href="https://maps.google.com/?q=Liv+på+bryggekanten,+Sandøya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold map-directions-btn"
          >
            Åpne i Google Maps
          </a>
        </div>
      </div>
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1164.6318855938011!2d9.059667874589632!3d58.597965408381505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4647bbb523319701%3A0xf963865c2fbc9d88!2sLiv%20p%C3%A5%20bryggekanten!5e1!3m2!1sno!2sno!4v1773931276969!5m2!1sno!2sno"
        title="Kart over LIV på Bryggekanten"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

export default MapSection;
