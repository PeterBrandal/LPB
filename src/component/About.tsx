import kilen3 from '../res/kilen3.jpg';
import kilen4 from '../res/kilen4.jpg';
import livLogo from '../res/livPng.png';

function About() {
  return (
    <section id="om-oss" className="about">
      <div className="section-container">

        <div className="about-brand-stamp">
          <img src={livLogo} alt="LIV på Bryggekanten" className="about-logo" />
        </div>

        <div className="about-grid">
          <div className="about-text">
            <span className="section-label">Om oss</span>
            <h2 className="section-title">Liv ved<br />sjøkanten</h2>
            <p>
              På terrassen ved Sandøya Mat rett ved Sandøykilen, har det i årevis
              blitt servert god mat og godt drikke med sjøen som nærmeste nabo.
              Det tenker vi å fortsette med.
            </p>
            <p>
              Restauranten drives av samme eiere som butikken, og med oss på laget
              har vi fått Lotta Røstad som flyttet til Sandøya for et par år siden.
              Lotta har lang fartstid i «bransjen», er svensk og vil nok sørge for
              at det også gjenspeiles i menyen.
            </p>
            <p>
              Sammen brenner vi for å gjøre både Liv på Bryggekanten og butikken
              til øyas naturlige samlingssted, sommer som vinter.
            </p>
            <p>
              Enkel og god mat, «nedpå-stemning» og den populære quizen hver
              lørdag er oppskriften vi følger. Og plutselig dukker det opp et og
              annet arrangement gjennom året.
            </p>
            <p>Kommer du med båt? Vi har gjesteplasser.</p>
          </div>

          <div>
            <img src={kilen3} alt="Utsikt over Sandøykilen" className="about-img-main" />
          </div>
        </div>

        <div className="about-lower">
          <img src={kilen4} alt="Bryggekanten" className="about-img-secondary" />
          <div className="about-quote-block">
            <blockquote>
              "Øyas naturlige samlingssted – sommer som vinter."
            </blockquote>
            <cite>— LIV på Bryggekanten</cite>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
