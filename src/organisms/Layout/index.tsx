import { Fragment, ReactNode } from 'react';

import { Box } from '@mui/material';

import { Footer } from '../Footer';
import { Header } from '../Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Fragment>
    <Header />
    <Box sx={{ pb: '60px' }} />
    {children}
    <Footer />
  </Fragment>
);

export { Layout };
