import { useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`header__menu ${isMenuOpen ? 'header__menu-active' : ''}`}>
        <button className={`header__button ${isMenuOpen ? 'header__button-active' : ''}`} onClick={toggleMenu}>
          {isMenuOpen ? 'Cerrar' : 'Menu'}
        </button>
      </header>

      <nav className={`header__nav ${isMenuOpen ? 'header__nav-active' : ''}`}>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              Inicio
            </a>
          </li>

          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              Proyectos
            </a>
          </li>

          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              Biografía
            </a>
          </li>

          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
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
