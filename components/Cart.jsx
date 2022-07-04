import Image from 'next/image';
import { useMemo } from 'react';
import Button from './Button';
import styles from './Cart.module.css';

export default function Checkout({
  productQuantity,
  setProductQuantity,
  display,
}) {
  // Importing product metadata
  const {
    'fall-limited-sneakers': {
      'product-name': productName,
      'product-price': productPrice,
    },
  } = require('../data.json');

  // Importing icons metadata
  const {
    icons: { 'icon-delete': iconDelete },
    'fall-limited-sneakers': {
      'image-product-path': {
        'product-thumbnail': { 'image-product-1': imageProductThumbnail },
      },
    },
  } = require('../data.json');

  const totalPrice = useMemo(() => {
    let calcTotalPrice = Number(productPrice) * Number(productQuantity);
    calcTotalPrice = Math.round((calcTotalPrice * 100) / 100).toFixed(2);
    return String(calcTotalPrice);
  });

  return (
    <div
      className={`${styles.wrapper} ${
        !display ? styles.hidden : styles.visible
      }`}
    >
      <p>Cart</p>
      {productQuantity !== 0 ? (
        <div className={styles.container}>
          <div className={`${styles.content} ${styles.contentLayout}`}>
            <Image
              className={styles.previewItem}
              src={imageProductThumbnail}
              width={56}
              height={56}
            />
            <div className={styles.cartInfo}>
              <p>{productName}</p>
              <p>
                <span>{productPrice}</span>
                <span> x {productQuantity} </span>
                <span>${totalPrice}</span>
              </p>
            </div>
            <div
              className={styles.deleteIcon}
              onClick={() => setProductQuantity(0)}
            >
              <object
                data={iconDelete}
                type="image/svg+xml"
                aria-label="delete"
              ></object>
            </div>
          </div>
          <Button text={'Checkout'} />
        </div>
      ) : (
        <div className={`${styles.content} ${styles.emptyWarning}`}>
          <p className={styles.emptyText}>Your cart is empty.</p>
        </div>
      )}
    </div>
  );
}
