import { Html, Head, Main, NextScript } from 'next/document'
import Seo from '../components/Seo';

export default function Document() {
  return (
    <Html>
      <Head>
        <Seo />
        <script src="https://kit.fontawesome.com/75c4091603.js" crossorigin="anonymous"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}