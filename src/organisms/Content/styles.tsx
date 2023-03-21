/* eslint-disable no-restricted-syntax */
const styles = {
  container: {
    height: 'auto',
    minHeight: 'inherit',
    width: '100%',

    display: 'grid',
    gap: 4,

    gridTemplateColumns: {
      xs: 'repeat(1, 1fr)',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      xl: 'repeat(4, 1fr)',
    },
  },
};

export default styles;
