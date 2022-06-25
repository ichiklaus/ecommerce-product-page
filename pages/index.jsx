import { useState } from 'react';
import AddToCart from '../components/AddToCart';
import data from '../data.json';
import styles from '../styles/Home.module.css';

function formatToFixed2(number) {
  return (Math.round(Number(number) * 100) / 100).toFixed(2);
}

export default function Home() {
  const {
    'product-brand': productBrand,
    'product-name': productName,
    'product-description': productDescription,
    'product-price': productPrice,
    'product-discount': productDiscount,
    'product-real-price': productRealPrice,
  } = data;

  const [productCounter, setProductCounter] = useState('0');

  return (
    <div className={styles.wrapper}>
      <picture className={styles.productPicture}>
        <img
          className={styles.productImage}
          src="/images/image-product-1.jpg"
          alt=""
        ></img>
      </picture>
      <section className={styles.productInfo}>
        <div>
          <p>{productBrand}</p>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <p className={styles.productValue}>
            <span>${formatToFixed2(productPrice)}</span>
            <small>{Number(productDiscount)}%</small>
          </p>
          <p>${formatToFixed2(productRealPrice)}</p>
        </div>
        <AddToCart
          productCounter={productCounter}
          setProductCounter={setProductCounter}
        />
      </section>
    </div>
  );
}
