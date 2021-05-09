import { useEffect, useState } from 'react';

const useOnScreen = (ref: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIsVisible(entry.isIntersecting),
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return { isVisible };
};

export default useOnScreen;
