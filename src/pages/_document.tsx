/* eslint-disable no-restricted-syntax */
/* eslint-disable @next/next/next-script-for-ga */
import * as React from 'react';

import createCache from '@emotion/cache';

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito:wght@600&family=Recursive&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          style={{
            backgroundColor: 'rgba(23,143,214,0.06)',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);

  return { ...initialProps };
};

export default MyDocument;
