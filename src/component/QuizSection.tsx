import kilen4 from '../res/kilen4.jpg';

function QuizSection() {
  return (
    <section id="quiz" className="quiz">
      <div className="quiz-inner">

        <div>
          <img src={kilen4} alt="Stemning på bryggekanten" className="quiz-img" />
        </div>

        <div className="quiz-text">
          <span className="section-label">Ukentlig happening</span>
          <h2 className="section-title">Lørdag<br />quiz</h2>
          <p>
            Hver lørdag arrangerer vi vår populære pub-quiz på bryggekanten.
            Samle laget, test kunnskapene og nyt god mat og drikke i hyggelige
            omgivelser med sjøen rett utenfor.
          </p>
          <p>
            Quizen er åpen for alle – enten du er på øya for første gang
            eller har vært her i årtier. Meld laget på i baren ved ankomst.
          </p>
          <div className="quiz-badge">
            <strong>Hver lørdag</strong>
            <span>Starter kl. 19:00 · Åpen for alle · Gratis deltakelse</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default QuizSection;
