import brygge from '../res/brygge_bilde.jpg';

function Hero() {
  return (
    <section
      id="topp"
      className="hero"
      style={{ backgroundImage: `url(${brygge})` }}
    >
      <div className="hero-content">
        <span className="hero-eyebrow">Sandøya · Sandøykilen</span>
        <h1 className="hero-title">
          LIV PÅ<br />BRYGGEKANTEN
        </h1>
        <p className="hero-subtitle">
          Enkel og god mat, «nedpå-stemning» og sjøen som nærmeste nabo
        </p>
        <div className="hero-buttons">
          <a href="#meny"   className="btn-gold">Se menyen</a>
          <a href="#om-oss" className="btn-outline-white">Om oss</a>
        </div>
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  );
}

export default Hero;
