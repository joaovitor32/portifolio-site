/* eslint-disable no-restricted-syntax */

interface ContainerImageProps {
  image: string;
  light: string;
  main: string;
}

const styles = {
  leftContainer: ({ image, light, main }: ContainerImageProps) => ({
    background: `url(${image}), linear-gradient(270deg, ${light}, ${main})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    borderRadius: '600px',

    margin: 'auto 0',

    width: 'auto',
    height: 'auto',

    minHeight: { xs: '225px', sm: '300px', md: '425px', lg: '425px', xl: '550px' },
    minWidth: { xs: '225px', sm: '300px', md: '425px', lg: '425px', xl: '550px' },
  }),
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    height: 'auto',
    width: 'auto',

    minHeight: { xs: '0px', sm: '0px', md: 'inherit' },
    minWidth: { xs: '0px', sm: '0px', md: 'inherit' },
  },
};

export default styles;
