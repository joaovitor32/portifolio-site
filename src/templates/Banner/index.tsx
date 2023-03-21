import React from 'react';

import { Box, Container } from '@mui/material';

import * as Organisms from 'organisms';

import { useElementIsVisible } from 'settings/hooks/useElementIsVisible';

import styles from './styles';

export const Banner = () => {
  const { newRef, isVisible } = useElementIsVisible();

  return (
    <Box ref={newRef} sx={{ heigth: 'inherit', minHeight: '80vh' }}>
      <Container sx={styles.container}>
        <Organisms.BannerLeftContent isVisible={isVisible} />
        <Organisms.BannerRightContent isVisible={isVisible} />
      </Container>
    </Box>
  );
};
