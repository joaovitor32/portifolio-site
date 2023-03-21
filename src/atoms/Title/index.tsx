import React from 'react';

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useElementIsVisible } from 'settings/hooks/useElementIsVisible';

import styles from './styles';

interface TitleProps {
  title: string;
  backgroundColor?: string;
  color?: string;
}

export const Title = ({ title, color, backgroundColor }: TitleProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { newRef, isVisible } = useElementIsVisible();

  return (
    <Box ref={newRef} sx={styles.titleContainer}>
      <Typography variant={matches ? 'h3' : 'h2'} sx={styles.title({ isVisible, color, backgroundColor })}>
        {title}
      </Typography>
    </Box>
  );
};
