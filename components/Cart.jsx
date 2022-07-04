import Image from 'next/image';
import Button from './Button';
import data from '../data.json';

import styles from './Cart.module.css';

export default function Checkout({
  productQuantity,
  setProductQuantity,
  display,
}) {
  const {
    'fall-limited-sneakers': {
      'product-name': productName,
      'product-price': productPrice,
    },
  } = data;
  let totalPrice = Number(productPrice) * Number(productQuantity);
  totalPrice = Math.round((totalPrice * 100) / 100).toFixed(2);

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
              src={'/images/image-product-1-thumbnail.jpg'}
              width={56}
              height={56}
            />
            <div className={styles.cartInfo}>
              <p>{productName}</p>
              <p>
                <span>{productPrice}</span>
                <span> x {productQuantity} </span>
                <span>${String(totalPrice)}</span>
              </p>
            </div>
            <div
              className={styles.deleteIcon}
              onClick={() => setProductQuantity(0)}
            >
              <object
                data="/images/icon-delete.svg"
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
