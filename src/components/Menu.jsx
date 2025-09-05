import { useState, useEffect } from 'react';
import '../styles/Menu.css';

const Menu = ({ activeSection, sectionColor = { bg: 'var(--blancolow)', text: 'var(--negro)' } }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});
  const [navStyle, setNavStyle] = useState({});

  useEffect(() => {
    if (sectionColor) {
      setMenuStyle({
        backgroundColor: sectionColor.bg,
        color: sectionColor.text,
      });

      setNavStyle({
        backgroundColor: sectionColor.bg,
        color: sectionColor.text,
      });
    }
  }, [sectionColor]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`header__menu ${isMenuOpen ? 'header__menu-active' : ''}`} style={menuStyle}>
        <button className={`header__button ${isMenuOpen ? 'header__button-active' : ''}`} onClick={toggleMenu}>
          {isMenuOpen ? 'Cerrar' : 'Menu'}
        </button>
      </header>

      <nav className={`header__nav ${isMenuOpen ? 'header__nav-active' : ''}`} style={navStyle}>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a className="header__nav-link" href="#home" onClick={(e) => handleNavClick(e, 'home')}>
              Inicio
            </a>
          </li>

          <li className="header__nav-item">
            <a className="header__nav-link" href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
              Proyectos
            </a>
          </li>

          <li className="header__nav-item">
            <a className="header__nav-link" href="#bio" onClick={(e) => handleNavClick(e, 'bio')}>
              Biografía
            </a>
          </li>

          <li className="header__nav-item">
            <a className="header__nav-link" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              Contacto
            </a>
          </li>
        </ul>
        <footer className="header__footer">
          <p className="header__footer-copy">Alejandro Goscu © 2025</p>
          <ul className="header__footer-list">
            <li className="header__footer-item">
              <a
                className="header__footer-link"
                href="https://github.com/alejandrogoscu"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li className="header__footer-item">
              <a
                className="header__footer-link"
                href="https://www.linkedin.com/in/alejandrogoscu/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </footer>
      </nav>
    </>
  );
};

export default Menu;
