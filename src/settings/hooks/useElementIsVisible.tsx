import React, { useRef } from 'react';

import { useIntersectionObserver } from 'settings/hooks/useIntersectionObserver';

const useElementIsVisible = () => {
  const newRef = useRef(null);
  const entry = useIntersectionObserver(newRef, {});
  const isVisible = !!entry?.isIntersecting;

  return { newRef, isVisible };
};

export { useElementIsVisible };
