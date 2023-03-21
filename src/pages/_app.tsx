/* eslint-disable import/order */
/* eslint-disable no-restricted-syntax */
import { ReactNode } from 'react';

import { NextPage } from 'next';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import { Layout } from 'organisms';
import ThemePresets from 'settings/theme';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import palette from 'settings/theme/palette';

type NextPageWithLayout = NextPage & {
  getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function IndexPage({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <>
      <NextNProgress
        color={palette.primary.light}
        stopDelayMs={0}
        height={5}
        showOnShallow={false}
        options={{ easing: 'ease', speed: 500 }}
      />

      <ThemePresets>
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </ThemePresets>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
