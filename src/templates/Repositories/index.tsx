import React from 'react';

import { Box, Container } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import * as Atoms from 'atoms';
import * as Organisms from 'organisms/Content';
import data from 'settings/data/config.json';

import { RepositoryInfoResponse } from 'settings/infra/types';

import styles from './styles';

interface RepositoriesProps {
  repositories: Array<RepositoryInfoResponse>;
}

export const Repositories = ({ repositories }: RepositoriesProps) => {
  const theme = useTheme();
  const { light } = theme.palette.primary;

  return (
    <Box sx={styles.box({ backgroundColor: light })}>
      <Container sx={styles.mainContainer}>
        <Atoms.Title title={data.repositories.title} />
        <Organisms.Content repositories={repositories} />
      </Container>
    </Box>
  );
};
