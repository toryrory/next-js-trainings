import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&family=Roboto:wght@400;900&display=swap"
          rel="stylesheet"
        />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
