import React, { useState } from 'react';

import Layout from '../components/Layout/Layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [productQuantity, setProductQuantity] = useState(0);

  return (
    <Layout
      productQuantity={productQuantity}
      setProductQuantity={setProductQuantity}
    >
      <Component {...pageProps} setProductQuantity={setProductQuantity} />
    </Layout>
  );
}

export default MyApp;
