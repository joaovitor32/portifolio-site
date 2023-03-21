import { useEffect, useState } from 'react';

export const useScroll = (target = 600) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollValue = window.pageYOffset;
      setCurrentValue(scrollValue);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [target]);

  return { scrolled: currentValue > target, currentValue };
};
