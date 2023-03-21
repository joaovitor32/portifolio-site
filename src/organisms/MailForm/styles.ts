/* eslint-disable no-restricted-syntax */
const styles = {
  formTitle: {
    fontWeight: 800,
    fontSize: { xs: '20px', sm: '20px', md: '22px' },
    lineHeight: '26px',
    color: 'primary.light',
  },
  boxTitle: {
    width: '100%',
  },
  formSubtitle: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 700,
    fontSize: { xs: '20px', sm: '20px', md: '22px' },
    lineHeight: '26px',
    color: 'grey.100',
  },

  formProvider: {
    width: '100%',
    height: '100%',

    position: 'absolute',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  formContent: {
    width: '80%',

    height: 'auto',
    minHeight: '300px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  container: {
    backgroundColor: 'grey.100',

    height: '100%',

    width: '100%',

    marginTop: { xs: '24px', sm: '0px' },

    minHeight: '400px',
    minWidth: { xs: '85%', sm: '320px', md: '360px' },

    borderRadius: '14px',

    position: 'relative',

    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',

    boxShadow: '0px 2px 16px rgba(0, 0, 0, 0.25)',
  },
  closeButton: {
    zIndex: 2,
    position: 'absolute',
    left: '94%',
    top: {
      xs: '8px',
      sm: '8px',
      md: '-12px',
    },

    boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.4)',
  },
};

export default styles;
