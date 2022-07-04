import { useState } from 'react';
import Button from './Button';
import styles from './AddToCart.module.css';

export default function AddToCart({ setProductQuantity }) {
  const [counter, setCounter] = useState(0);

  const addOneItem = () => {
    setCounter(counter + 1);
  };

  const removeOneItem = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setProductQuantity(counter);
  };

  return (
    <div id="add-to-cart" className={styles.container}>
      <div className={styles.actionWrapper}>
        <div className={styles.removeOneItem} onClick={removeOneItem}>
          <object
            data="/images/icon-minus.svg"
            type="image/svg+xml"
            aria-label="minus"
          />
        </div>
        <span>{counter}</span>
        <div className={styles.addOneItem} onClick={addOneItem}>
          <object
            data="/images/icon-plus.svg"
            type="image/svg+xml"
            aria-label="plus"
          />
        </div>
      </div>
      <Button onSubmit={onSubmit} text={'Add to cart'} />
    </div>
  );
}
