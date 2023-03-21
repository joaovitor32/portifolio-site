import React from 'react';

import { Box } from '@mui/material';

import * as Molecules from 'molecules';

import { RepositoryInfoResponse } from 'settings/infra/types';

import styles from './styles';

interface RepositoriesProps {
  repositories: Array<RepositoryInfoResponse>;
}

export const Content = ({ repositories }: RepositoriesProps) => (
  <Box sx={styles.container}>
    {repositories.map((repository, index) => (
      <Molecules.Card key={`${index}-${repository.name}`} {...repository} position={index} />
    ))}
  </Box>
);
