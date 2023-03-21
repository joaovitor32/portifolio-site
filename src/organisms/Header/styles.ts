/* eslint-disable no-restricted-syntax */

import { MotionValue } from 'framer-motion';

interface HeaderProps {
  scrolled: boolean;
}

const transitionTime = '0.3s';

const styles = {
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: { xs: 'center', sm: 'center', md: 'space-between', lg: 'space-between', xl: 'space-between' },
    textAlign: 'center',
    alignItems: 'center',
  },
  initials: {
    color: 'primary.main',
    fontWeight: 'bold',
    fontSize: '32px',

    display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' },
  },
  container: ({ scrolled }: HeaderProps) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: scrolled ? '44px' : '64px',
    opacity: scrolled ? 0.76 : 1,
    alignItems: 'center',

    backgroundColor: 'grey.100',

    boxShadow: `0px 0px ${scrolled ? '1px' : '8px'} ${scrolled ? '1px' : '1px'} #178fd6`,
    transition: `height ${transitionTime} ease-out, opacity ${transitionTime} ease-out, box-shadow ${transitionTime} ease-out`,
  }),
};

export default styles;
