import { useState, useEffect, useRef } from 'react';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isOverMedia, setIsOverMedia] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    const updateCursorPosition = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };
    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseEnter);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
      const mediaElements = document.querySelectorAll('img, video, i, .projectCard__tech');

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });

      mediaElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsOverMedia(true));
        el.addEventListener('mouseleave', () => setIsOverMedia(false));
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseEnter);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={cursorRef} className={`custom-cursor ${isHovering ? 'hover' : ''} ${isOverMedia ? 'over-media' : ''}`} />
  );
};

export default CustomCursor;
