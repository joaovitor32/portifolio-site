/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-restricted-syntax */
export default {
  MuiCssBaseline: ({ palette }) => ({
    styleOverrides: {
      body: {
        '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
          backgroundColor: 'transparent',
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
          borderRadius: 24,
          backgroundColor: palette.primary.main,
          minHeight: 12,
        },
      },
    },
  }),
};
