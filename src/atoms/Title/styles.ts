/* eslint-disable no-restricted-syntax */
interface TitleProps {
  isVisible: boolean;
  backgroundColor?: string;
  color?: string;
}

const styles = {
  titleContainer: {
    height: 'auto',
    minHeight: '64px',
    width: '100%',

    position: 'relative',

    display: 'flex',
    justifyContent: 'center',
    texAlign: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
  title: ({ isVisible, backgroundColor = 'primary.lighter', color = 'primary.main' }: TitleProps) => ({
    color,
    position: 'relative',

    ':after': {
      zIndex: -1,

      position: 'absolute',

      height: '18px',
      backgroundColor,
      content: "''",
      display: 'block',
      bottom: '2px',

      width: isVisible ? '72%' : '0%',
      transition: `width 1s ease-out`,
    },
  }),
};

export default styles;
