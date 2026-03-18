import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#topp" className="navbar-brand">LIV</a>

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

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#om-oss"  onClick={close}>Om oss</a></li>
        <li><a href="#meny"    onClick={close}>Meny</a></li>
        <li><a href="#quiz"    onClick={close}>Quiz</a></li>
        <li><a href="#kontakt" onClick={close}>Kontakt</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
