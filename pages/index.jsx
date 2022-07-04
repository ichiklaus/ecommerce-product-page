import { useState } from 'react';
import AddToCart from '../components/AddToCart';
import ProductImageGallery from '../components/ProductImageGallery';
import styles from '../styles/Home.module.css';

function formatToFixed2(number) {
  return (Math.round(number * 100) / 100).toFixed(2);
}

export default function Home({ setProductQuantity }) {
  const [activeContent, setActiveContent] = useState(1);
  const [toggleGallery, setToggleGallery] = useState(false);

  const {
    'fall-limited-sneakers': {
      'product-brand': productBrand,
      'product-name': productName,
      'product-description': productDescription,
      'product-price': productPrice,
      'product-discount': productDiscount,
      'product-real-price': productRealPrice,
    },
  } = require('../data.json');

  return (
    <div className={styles.wrapper}>
      <ProductImageGallery
        setActiveContent={setActiveContent}
        activeContent={activeContent}
        setToggleGallery={setToggleGallery}
        gallery={false}
        />
      <section className={styles.productInfo}>
        <div>
          <p>{productBrand}</p>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <p className={styles.productValue}>
            <span>${formatToFixed2(Number(productPrice))}</span>
            <small>{Number(productDiscount)}%</small>
          </p>
          <p>${formatToFixed2(productRealPrice)}</p>
        </div>
        <AddToCart setProductQuantity={setProductQuantity} />
      </section>
      <ProductImageGallery
        setToggleGallery={setToggleGallery}
        setActiveContent={setActiveContent}
        activeContent={activeContent}
        toggleGallery={toggleGallery}
        gallery={true} // If component is of type gallery
      />
    </div>
  );
}
