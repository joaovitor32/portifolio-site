import { useTheme } from '@mui/material/styles';
import { motion, useScroll as useFramerMotionScroll } from 'framer-motion';

import styles from './styles';

export const ProgressBar = () => {
  const { scrollYProgress } = useFramerMotionScroll();

  const theme = useTheme();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          backgroundColor: theme.palette.primary.main,
          ...styles.scrollProgress,
        }}
      />
    </>
  );
};
