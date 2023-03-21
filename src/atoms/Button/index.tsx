import React, { ButtonHTMLAttributes } from 'react';

import { Button as MUIButton, SxProps } from '@mui/material';

import styles from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  sx?: SxProps;
}

export const Button = ({ title, sx, ...rest }: ButtonProps) => (
  <MUIButton sx={{ ...styles.button, ...sx }} {...rest}>
    {title}
  </MUIButton>
);
