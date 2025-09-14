import { useState, useEffect, useRef } from 'react';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isOverMedia, setIsOverMedia] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkIfTouchDevice = () => {
      const isTouchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
      setIsTouchDevice(isTouchCapable);
    };

    checkIfTouchDevice();

    if (!isTouchDevice) {
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

      document.addEventListener('mousemove', updateCursorPosition);
      document.addEventListener('mouseout', handleMouseLeave);
      document.addEventListener('mouseover', handleMouseEnter);

      addHoverListeners();

      const observer = new MutationObserver(addHoverListeners);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        document.removeEventListener('mousemove', updateCursorPosition);
        document.removeEventListener('mouseout', handleMouseLeave);
        document.removeEventListener('mouseover', handleMouseEnter);
        observer.disconnect();
      };
    }
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <div ref={cursorRef} className={`custom-cursor ${isHovering ? 'hover' : ''} ${isOverMedia ? 'over-media' : ''}`} />
  );
};

export default CustomCursor;
