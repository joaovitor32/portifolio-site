/* eslint-disable no-restricted-syntax */

interface ContainerImageProps {
  image: string;
  light: string;
  main: string;
}

const styles = {
  container: {
    width: '100vw',
    height: 'auto',
    minHeight: 'inherit',
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: 'center',

    flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
  },
  bluredImageContainer: {
    border: '5px solid',
    borderColor: 'primary.main',
    width: '100%',
    height: 'auto',

    minHeight: 'inherit',
  },
};

export default styles;
