import React from 'react';

import { Box, Container } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import * as Atoms from 'atoms';

import * as Organisms from 'organisms/ContactContent';

import styles from './styles';

export const Contact = () => {
  const theme = useTheme();

  return (
    <Box sx={styles.box({ mainColor: theme.palette.primary.light, color: theme.palette.primary.lighter })}>
      <Container sx={styles.container}>
        <Atoms.Title title="Entre em contato" color="grey.100" backgroundColor="primary.main" />
        <Organisms.ContactContent />
      </Container>
    </Box>
  );
};
