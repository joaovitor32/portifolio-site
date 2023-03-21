/* eslint-disable no-restricted-syntax */
interface IconProps {
  color: string;
}

interface CardProps {
  transitionTime?: number;
  trigger: boolean;
}

const styles = {
  icon: ({ color }: IconProps) => ({
    minHeight: '36px',
    minWidth: '36px',

    height: 'auto',
    width: 'auto',

    color,
  }),
  card: ({ transitionTime = 0.5, trigger }: CardProps) => ({
    backgroundColor: 'grey.100',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.16)',
    borderRadius: '0px 16px 16px 16px',

    width: {
      xs: '100%',
      sm: '100%',
      md: 'auto',
    },
    maxWidth: {
      xs: 'none',
      sm: 'none',
      md: '32%',
    },

    height: 'auto',
    padding: '24px',
    minHeight: '156px',

    display: 'flex',
    flexDirection: 'column',
    textAlign: 'start',
    alignItems: {
      xs: 'start',
      sm: 'start',
      md: 'center',
    },
    justifyContent: 'space-around',

    transition: `all ${transitionTime * 0.5}s cubic-bezier(0.17, 0.55, 0.55, 1) ${transitionTime * 0.25}s`,

    transform: trigger
      ? 'translateX(0%)'
      : {
          xs: 'translateX(-100%)',
          sm: 'translateX(-100%)',
          md: 'translateX(-36%)',
        },
  }),
  upper: {
    width: '100%',

    display: 'flex',
    justifyContent: 'start',
    alignItems: 'end',
    textAlign: 'end',
  },
  title: {
    fontSize: '20px',
    lineHeight: '18px',
    color: 'primary.main',
  },
  info: {
    fontSize: '16px',
    lineHeight: '14px',
    color: 'primary.main',
  },
};

export default styles;
