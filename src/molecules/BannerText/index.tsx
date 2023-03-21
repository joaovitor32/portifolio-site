import React from 'react';

import { Typography, SxProps } from '@mui/material';

import * as Atoms from 'atoms';

interface BannerTextProps {
  isVisible?: boolean;
  text: string;
  sx?: SxProps;
  duration: number;
}

export const BannerText = ({ isVisible, text, sx, duration }: BannerTextProps) => (
  <Atoms.AnimationBottomToTop isVisible={isVisible} duration={duration}>
    <Typography sx={sx}>{text}</Typography>
  </Atoms.AnimationBottomToTop>
);
