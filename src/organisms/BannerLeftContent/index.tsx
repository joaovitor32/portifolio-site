import React from 'react';

import { Box, Container } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import * as Atoms from 'atoms';
import data from 'settings/data/config.json';

import styles from './styles';

interface BannerLeftContentProps {
  isVisible: boolean;
}

export const BannerLeftContent = ({ isVisible }: BannerLeftContentProps) => {
  const theme = useTheme();
  const { lighter, light } = theme.palette.primary;

  return (
    <Atoms.AnimationBottomToTop sx={styles.imageContainer} duration={0.65} isVisible={isVisible}>
      <Box sx={styles.leftContainer({ image: data.banner.image, light, main: lighter })} />
    </Atoms.AnimationBottomToTop>
  );
};
