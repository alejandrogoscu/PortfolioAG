import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [sectionColor, setSectionColor] = useState({
    bg: 'var(--blancolow)',
    text: 'var(--negro)',
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 60 && rect.bottom >= 60) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);

              const computedStyle = window.getComputedStyle(section);
              setSectionColor({
                bg: computedStyle.backgroundColor,
                text: computedStyle.color,
              });
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return { activeSection, sectionColor };
};
