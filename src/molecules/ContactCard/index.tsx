import React from 'react';

import { Icon } from '@iconify/react';
import { Box, Typography } from '@mui/material';
import { SxProps, useTheme } from '@mui/material/styles';

import { useElementIsVisible } from 'settings/hooks/useElementIsVisible';

import styles from './styles';

interface CardContentProps {
  title: string;
  icon: string;
  info: string;
  sx?: SxProps;
  transitionTime?: number;
}

export const ContactCard = ({ title, icon, info, sx, transitionTime }: CardContentProps) => {
  const theme = useTheme();
  const { newRef, isVisible } = useElementIsVisible();

  return (
    <Box ref={newRef} sx={styles.card({ transitionTime, trigger: isVisible })}>
      <Box sx={styles.upper}>
        <Icon style={styles.icon({ color: theme.palette.primary.main })} icon={icon} />
        <Typography sx={styles.title}>{title}</Typography>
      </Box>
      <Typography sx={{ ...styles.info, ...sx }}>{info}</Typography>
    </Box>
  );
};
