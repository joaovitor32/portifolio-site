import { useState, useEffect } from 'react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

type UseLockedBodyOutput = [boolean, (locked: boolean) => void];

function useLockedBody(initialLocked = false, rootId = '___gatsby'): UseLockedBodyOutput {
  const [locked, setLocked] = useState(initialLocked);

  useIsomorphicLayoutEffect(() => {
    if (!locked) {
      document.body.style.overflow = 'scroll';
      return;
    }

    const originalPaddingRight = document.body.style.paddingRight;

    const root = document.getElementById(rootId);
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = locked ? 'hidden' : 'scroll';

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
        document.body.style.overflow = locked ? 'hidden' : 'scroll';
      }
    };
  }, [locked]);

  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked]);

  return [locked, setLocked];
}

export { useLockedBody };
