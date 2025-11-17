import { useState, useEffect } from 'react';
import '../styles/Menu.css';

const ANIMATION_OUT_DURATION = 300;

const Menu = ({ activeSection, sectionColor = { bg: 'var(--blancolow)', text: 'var(--negro)' } }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});
  const [navStyle, setNavStyle] = useState({});

  // Función para normalizar colores RGB a variables CSS
  const normalizeColor = (colorObj) => {
    const rgbToVar = {
      'rgb(255, 254, 227)': 'var(--blancolow)',
      'rgb(0, 0, 0)': 'var(--negro)',
    };

    return {
      bg: rgbToVar[colorObj.bg] || colorObj.bg,
      text: rgbToVar[colorObj.text] || colorObj.text,
    };
  };

  // Función para invertir los colores
  const getComplementaryColors = (color) => {
    const normalized = normalizeColor(color);
    const colorMap = {
      'var(--blancolow)': { bg: 'var(--negro)', text: 'var(--blancolow)' },
      'var(--negro)': { bg: 'var(--blancolow)', text: 'var(--negro)' },
    };

    return colorMap[normalized.bg] || { bg: 'var(--negro)', text: 'var(--blancolow)' };
  };

  useEffect(() => {
    if (sectionColor) {
      const normalized = normalizeColor(sectionColor);
      const colors = isMenuOpen ? getComplementaryColors(sectionColor) : normalized;

      setMenuStyle({
        '--menu-bg': colors.bg,
        '--menu-default-bg': normalized.bg,
        color: colors.text,
      });

      setNavStyle({
        backgroundColor: colors.bg,
        color: colors.text,
      });
    }
  }, [sectionColor, isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen || isAnimatingOut) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isAnimatingOut]);

  // Cerrar menú con animación
  const closeMenuWithAnimation = (callback) => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsAnimatingOut(false);
      if (callback) callback();
    }, ANIMATION_OUT_DURATION);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenuWithAnimation();
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      closeMenuWithAnimation(() => {
        const offsetY = element.getBoundingClientRect().top + window.pageYOffset - 30;
        window.scrollTo({ top: offsetY, behavior: 'smooth' });
      });
    }
  };

  // El menú se renderiza si está abierto o animando la salida
  const showMenu = isMenuOpen || isAnimatingOut;

  return (
    <>
      <header
        className={`header__menu ${isMenuOpen ? 'header__menu-active' : ''} ${
          isAnimatingOut ? 'header__menu-animating-out' : ''
        } `}
        style={menuStyle}
      >
        <button
          className={`header__button ${isMenuOpen ? 'header__button-active' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          {isMenuOpen ? 'Cerrar' : 'Menu'}
        </button>
      </header>

      {showMenu && (
        <nav
          className={`header__nav${isMenuOpen ? ' header__nav-active' : ''}${
            isAnimatingOut ? ' header__nav-animating-out' : ''
          }`}
          style={navStyle}
          inert={isMenuOpen ? undefined : true}
        >
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
              <a className="header__nav-link" href="#bio" onClick={(e) => handleNavClick(e, 'about')}>
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
      )}
    </>
  );
};

export default Menu;
