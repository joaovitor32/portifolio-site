import React from 'react';

import { Box, Container, Typography } from '@mui/material';

import data from 'settings/data/config.json';
import { useDate } from 'settings/hooks/useDate';


import styles from './styles';

export const Footer = () => {
  const { getYear } = useDate();
  return (
    <Box sx={styles.footer}>
      <Container sx={styles.container}>
        <Typography sx={styles.text}>&copy; {`${getYear()} - ${data.footer.text}`}</Typography>
      </Container>
    </Box>
  );
};
