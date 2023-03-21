/* eslint-disable no-restricted-syntax */

interface HeaderProps {
  scrolled: boolean;
}

const transitionTime = '0.3s';

const styles = {
  headerButton: {},
  headerButtonTitle: {
    color: 'primary.main',

    ':after': {
      display: 'block',
      content: "''",
      borderBottom: '2px solid',
      borderColor: 'primary.main',
      transform: 'scaleX(0)',
      transition: `transform ${transitionTime} ease-out`,
    },

    ':hover': {
      ':after': {
        transform: 'scaleX(1)',
      },
    },
  },
};

export default styles;
