import React, { useState } from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';

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
