import React from 'react';

import Typography from '@mui/material/Typography';

import { useFormatter } from 'settings/hooks/useFormatter';

import styles from './styles';

interface CardHeaderProps {
  name: string;
  description: string;
  language: string;
}

export const CardHeader = ({ name, description, language }: CardHeaderProps) => {
  const { normalize } = useFormatter();

  return (
    <>
      <Typography sx={styles.header}>{normalize(name)}</Typography>
      <Typography sx={styles.description}>{description}</Typography>
      <Typography sx={styles.startTitle}>{language}</Typography>
    </>
  );
};
