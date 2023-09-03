import React, { useEffect } from 'react';

const useParallaxEffect = <T extends React.RefObject<HTMLImageElement>>(
  imageRef: T,
) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) {
        return;
      }

      imageRef.current.style.transition = 'transform 0.3s ease-out';

      const { clientX: mouseX, clientY: mouseY } = e;

      const {
        left,
        top,
        width,
        height,
      } = imageRef.current.getBoundingClientRect();

      const xPos = ((mouseX - left) / width - 0.5) * 50;
      const yPos = ((mouseY - top) / height - 0.5) * 50;

      imageRef.current.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [imageRef]);
};

export default useParallaxEffect;
