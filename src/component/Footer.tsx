function Footer() {
  return (
    <footer id="kontakt" className="footer">
      <div className="footer-inner">

        <div className="footer-grid">

          <div>
            <div className="footer-brand-name">LIV</div>
            <div className="footer-brand-sub">på Bryggekanten</div>
            <a href="tel:+4740314877" className="footer-contact-link">+47 403 14 877</a>
            <a href="mailto:livpabryggekanten@gmail.com" className="footer-contact-link">
              livpabryggekanten@gmail.com
            </a>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Åpningstider</h4>
            <p>Tirsdag – Lørdag<br />kl. 12:00 – 20:00</p>
            <p>Søndag<br />kl. 12:00 – 18:00</p>
            <p style={{ opacity: 0.38, fontSize: '0.8rem', marginTop: '0.5rem' }}>
              Mandag: Stengt
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Navigasjon</h4>
            <ul>
              <li><a href="#topp">Hjem</a></li>
              <li><a href="#om-oss">Om oss</a></li>
              <li><a href="#meny">Meny</a></li>
              <li><a href="#quiz">Lørdag quiz</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Følg oss</h4>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/livpabryggekanten"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/livpabryggekanten"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
            <p style={{ marginTop: '1rem', opacity: 0.38, fontSize: '0.78rem' }}>
              @LIV på bryggekanten
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} LIV på Bryggekanten</span>
          <span>Sandøya, Norge</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
