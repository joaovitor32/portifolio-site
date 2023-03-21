/* eslint-disable no-restricted-syntax */
interface BoxProps {
  backgroundColor: string;
}

const styles = {
  box: ({ backgroundColor }: BoxProps) => ({
    minHeight: '44vh',
    height: 'auto',
    width: '100%',

    background: `linear-gradient(transparent, ${backgroundColor})`,

    borderRadius: '64px 64px 0px 0px',

    py: {
      xs: '16px',
      sm: '16px',
      md: '36px',
    },
  }),

  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',

    height: 'auto',
    minHeight: 'inherit',

    flexDirection: 'column',
  },
};

export default styles;
