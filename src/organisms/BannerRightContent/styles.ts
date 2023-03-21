/* eslint-disable no-restricted-syntax */

const styles = {
  rightContainer: {
    width: 'auto',
    height: 'auto',

    maxHeight: 'inherit',
    minHeight: { xs: '764px', sm: '764px', md: '0px', lg: '0px', xl: '0px' },
    minWidth: '48%',

    display: 'flex',
    justifyContent: {
      xs: 'space-around',
      sm: 'space-around',
      md: 'space-evenly',
      lg: 'space-evenly',
      xl: 'space-evenly',
    },
    textAlign: { xs: 'center', sm: 'center', md: 'start', lg: 'start', xl: 'start' },
    alignItems: { xs: 'center', sm: 'center', md: 'start', lg: 'start', xl: 'start' },
    flexDirection: 'column',
    padding: '24px',
  },
};

export default styles;
