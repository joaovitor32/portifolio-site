import { Box, AppBar, Container, Typography } from '@mui/material';

import * as Atoms from 'atoms';
import * as Molecules from 'molecules/HeaderStack';
import data from 'settings/data/config.json';

import { useScroll } from 'settings/hooks';

import styles from './styles';

export const Header = () => {
  const initialHeaderHeight = 64;
  const { scrolled } = useScroll(initialHeaderHeight);

  return (
    <>
      <AppBar sx={styles.container({ scrolled })}>
        <Atoms.ProgressBar />
        <Container sx={styles.header}>
          <Typography sx={styles.initials}>{data.header.initials}</Typography>
          <Molecules.HeaderStack />
        </Container>
      </AppBar>

      <Box sx={{ marginBottom: '48px' }} />
    </>
  );
};
