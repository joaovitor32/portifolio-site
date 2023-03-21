/* eslint-disable no-restricted-syntax */
interface CardProps {
  position: number;
  trigger: boolean;
}

const getTransitionTime = (position: number) => {
  if (position % 3 == 1) {
    return 1;
  }

  if (position % 3 == 2) {
    return 1.25;
  }

  return 0.75;
};

const styles = {
  card: ({ position, trigger }: CardProps) => ({
    display: 'flex',
    width: 'auto',
    height: 'auto',

    minHeight: '196px',
    minWidth: '128px',

    backgroundColor: 'grey.100',

    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.16)',
    position: 'relative',

    transition: `all ${getTransitionTime(position) * 0.45}s cubic-bezier(0.17, 0.55, 0.55, 1) ${
      getTransitionTime(position) * 0.25
    }s`,

    transform: trigger ? 'translateY(0%)' : 'translateY(24%)',
    opacity: trigger ? 1 : 0,
  }),

  body: {
    height: 'auto',
    minHeight: '236px',

    width: '100%',

    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0px 8px',
  },
  innerContainer: {
    height: 'auto',
    minHeight: '24px',

    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    alignItems: 'center',
  },

  startTitle: {
    fontSize: '14px',
    lineHeight: '12px',
    fontWeight: 'bold',
    color: 'primary.main',
  },
};

export default styles;
