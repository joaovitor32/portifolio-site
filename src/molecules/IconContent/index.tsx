import React from 'react';

import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import styles from './styles';

interface IconContentProps {
  count?: number;
  icon: string;
}

export const IconContent = ({ count, icon }: IconContentProps) => {
  const theme = useTheme();
  return (
    <Box sx={styles.innerContent}>
      <Icon style={styles.icon({ color: theme.palette.primary.main })} icon={icon} />
      {Number(count) >= 0 ? <Typography sx={styles.startTitle}>{count}</Typography> : null}
    </Box>
  );
};
