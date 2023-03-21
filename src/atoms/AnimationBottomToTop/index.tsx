import React, { ReactNode } from 'react';

import { motion, AnimatePresence, MotionStyle } from 'framer-motion';

interface AnimationBottomToTopProps {
  isVisible?: boolean;
  duration: number;
  children?: ReactNode;
  sx?: MotionStyle;
}

export const AnimationBottomToTop = ({ isVisible, children, duration, sx }: AnimationBottomToTopProps) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        transition={{
          duration,
        }}
        style={sx}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);
