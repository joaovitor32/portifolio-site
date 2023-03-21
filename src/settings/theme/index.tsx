/* eslint-disable no-restricted-syntax */
import { ReactNode } from 'react';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import breakpoints from './breakpoints';
import { CssBaseline as CustomizedCssBaseline } from './overrides';
import palette from './palette';
import typography from './typography';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = createTheme({
    typography,
    breakpoints,
    palette,
    components: {
      MuiCssBaseline: CustomizedCssBaseline.MuiCssBaseline({ palette }),
      MuiButton: {
        styleOverrides: {
          root: {
            '&.button__custom__primary': {},
            '&.button__custom__primary:disabled': {
              backgroundColor: '#ff7dd8',
            },
            '&.button__custom__default': {
              borderRadius: '8px',
              textTransform: 'none',
              fontSize: '16px',
              padding: '7px 16px',
              color: palette.primary.main,
              backgroundColor: palette.grey?.[100],
            },

            '&.button__custom__default span svg': {
              fontSize: '25px',
              color: 'currentColor',
            },
          },
        },
      },
    },
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
