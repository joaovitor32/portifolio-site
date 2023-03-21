/* eslint-disable no-restricted-syntax */

const styles = {
  footer: {
    backgroundColor: 'grey.100',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'fixed',
    bottom: 0,
    width: '100vw',

    boxShadow: `0px 0px 1px 0px #178fd6`,
    zIndex: 5,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: 'auto',
    minHeight: '48px',
  },

  text: {
    letterSpacing: '0px',
    fontSize: { xs: '8px', sm: '12px', md: '16px' },
    fontWeight: '500',
    lineHeight: '0px',
    textAlign: 'center',
    color: 'primary.main',
  },
};

export default styles;
