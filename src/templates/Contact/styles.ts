/* eslint-disable no-restricted-syntax */

interface BoxColor {
  mainColor: string;
  color: string;
}

const styles = {
  box: ({ mainColor, color }: BoxColor) => ({
    minHeight: '48vh',
    height: 'auto',
    width: '100%',

    padding: 0,

    background: `linear-gradient(${mainColor}, ${color})`,
  }),
  container: {
    height: 'auto',
    minHeight: 'inherit',
    width: '100%',
  },
};

export default styles;
