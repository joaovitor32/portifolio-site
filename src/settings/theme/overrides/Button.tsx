/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-restricted-syntax */
import palette from '../palette';

export default {
  MuiButton: {
    styleOverrides: {
      root: {
        '&.button__custom__primary': {
          fontSize: '16px',
          padding: '7px 16px',
          backgroundColor: '#EA0DA8',
          borderRadius: '8px',
          color: palette.common.white,
          textTransform: 'uppercase',
        },
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
};
