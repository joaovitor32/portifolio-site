/* eslint-disable no-restricted-syntax */
interface StarProps {
  color: string;
}

const styles = {
  icon: ({ color }: StarProps) => ({
    minHeight: '24px',
    minWidth: '24px',

    height: 'auto',
    width: 'auto',

    color,
  }),
  startTitle: {
    fontSize: '14px',
    lineHeight: '12px',
    fontWeight: 'bold',
    color: 'primary.main',
  },

  innerContent: {
    width: 'auto',
    minWidth: '36px',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
  },
};

export default styles;
