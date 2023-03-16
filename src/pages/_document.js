import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&family=Roboto:wght@400;900&display=swap"
          rel="stylesheet"
        ></Link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
