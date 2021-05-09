import { useEffect, useState } from 'react';

export enum Direction {
  DOWN = 'down',
  UP = 'up',
}

/**
 *
 * use this hook to detect scroll direction
 * @param maxHeight max height till which the scroll direction will be shown
 * @returns scroll direction: 'up' or 'down'
 */

const useScrollDirection = (maxHeight: number) => {
  const [scrollDir, setScrollDir] = useState<Direction | null>(null);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? Direction.DOWN : Direction.UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking && maxHeight > window.pageYOffset) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollDir;
};

export default useScrollDirection;
