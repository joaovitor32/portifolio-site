import React, { ButtonHTMLAttributes } from 'react';

import { Icon } from '@iconify/react';
import { Button as MUIButton, SxProps } from '@mui/material';

import styles from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sx?: SxProps;
}

export const CloseButton = ({ sx, ...rest }: ButtonProps) => (
  <MUIButton sx={{ ...styles.button, ...sx }} {...rest}>
    <Icon style={styles.icon} icon={'ion:close-sharp'} />
  </MUIButton>
);
