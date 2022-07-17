import { Html, Head, Main, NextScript } from 'next/document'
import Seo from '../components/Seo';

export default function Document() {
  return (
    <Html>
      <Head>
        <Seo />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}