import { forwardRef } from 'react';

import { TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import styles from './styles';

interface RHFTextFieldProps {
  label?: string;
  value?: any;
  type: string;
  sx?: SxProps<Theme>;
  error?: boolean;
  registerField: () => any;
  placeholder: string;
}

const RHFTextField = forwardRef(({ placeholder, type, error, sx, registerField, ...other }: RHFTextFieldProps) => (
  <TextField
    fullWidth
    type={type}
    error={true}
    variant="standard"
    placeholder={placeholder}
    sx={{ ...styles.input({ error }), ...sx }}
    InputProps={{ disableUnderline: true }}
    {...registerField()}
    {...other}
  />
));

export { RHFTextField };
