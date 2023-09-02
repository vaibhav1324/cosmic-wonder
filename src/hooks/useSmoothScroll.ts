import { useEffect, useRef } from 'react';

/**
 * The `useSmoothScroll` function is a custom hook that enables smooth scrolling behavior
 * when the user scrolls up or down on a webpage.
 */
const useSmoothScroll = () => {
  const isScrolling = useRef<boolean>(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let target = 0;

    const handleScroll = (e: WheelEvent) => {
      if (window.innerWidth < 600) {
        return;
      }

      if (e.deltaX !== 0) {
        return;
      }

      e.preventDefault();

      if (isScrolling.current) {
        return;
      }

      isScrolling.current = true;

      const scrollDirection = e.deltaY > 0 ? 'down' : 'up';
      const windowHeight = window.innerHeight;
      const currentScroll = window.scrollY;

      if (scrollDirection === 'down') {
        target = currentScroll + windowHeight;
      } else {
        target = currentScroll - windowHeight;
      }

      window.scroll({
        top: target,
        behavior: 'smooth',
      });

      timeoutIdRef.current = setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);

        timeoutIdRef.current = null;
      }

      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
};

export default useSmoothScroll;
