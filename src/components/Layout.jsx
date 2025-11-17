import { useState, useEffect } from 'react';
import Menu from './Menu';

const Layout = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [sectionColor, setSectionColor] = useState({ bg: 'var(--blancolow)', text: 'var(--negro)' });

  // Mapa de colores por sección
  const sectionColors = {
    home: { bg: 'var(--blancolow)', text: 'var(--negro)' },
    projects: { bg: 'var(--negro)', text: 'var(--blanco)' },
    about: { bg: 'var(--negro)', text: 'var(--blanco)' },
    contact: { bg: 'var(--blancolow)', text: 'var(--negro)' },
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      const threshold = 60;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Cambiar cuando el threshold cruza dentro de la sección
          if (rect.top <= threshold && rect.bottom >= threshold) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);
              setSectionColor(sectionColors[sectionId]);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Llamada inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <>
      <Menu activeSection={activeSection} sectionColor={sectionColor} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
