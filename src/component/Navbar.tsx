import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#topp" className="navbar-brand">LIV</a>

        {/* Desktop links */}
        <ul className="navbar-links">
          <li><a href="#om-oss">Om oss</a></li>
          <li><a href="#meny">Meny</a></li>
          <li><a href="#quiz">Quiz</a></li>
          <li><a href="#apningstider">Åpningstider</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>

        {/* Mobile controls */}
        <div className="navbar-mobile-controls">
          <a href="tel:+4740314877" className="navbar-phone-btn" aria-label="Ring oss">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>

          <button
            className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Åpne navigasjon"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      {menuOpen && <div className="navbar-backdrop" onClick={close} />}
      <div className={`navbar-drawer ${menuOpen ? 'open' : ''}`}>
        <button className="navbar-drawer-close" onClick={close} aria-label="Lukk meny">
          <span />
          <span />
        </button>
        <ul className="navbar-drawer-links">
          <li><a href="#om-oss"       onClick={close}>Om oss</a></li>
          <li><a href="#meny"         onClick={close}>Meny</a></li>
          <li><a href="#quiz"         onClick={close}>Quiz</a></li>
          <li><a href="#apningstider" onClick={close}>Åpningstider</a></li>
          <li><a href="#kontakt"      onClick={close}>Kontakt</a></li>
        </ul>
        <a href="tel:+4740314877" className="navbar-drawer-phone">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          +47 403 14 877
        </a>
      </div>
    </>
  );
}

export default Navbar;
