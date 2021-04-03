import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';

const ScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const { scrollY } = useViewportScroll();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [pageHeight, setPageHeight] = useState(0);

  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  const resizePageHeight = useCallback((entries) => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries),
    );
    scrollRef.current && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  return (
    <>
      <motion.div ref={scrollRef} style={{ y: spring }}>
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  );
};

export default ScrollProvider;
