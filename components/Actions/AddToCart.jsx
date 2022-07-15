import { useState } from 'react';
import Button from '../Actions/Button';
import styles from '../../styles/AddToCart.module.css';

export default function AddToCart({ setProductQuantity }) {
  const [counter, setCounter] = useState(0);

  // Importing control icons metadata
  const {
    icons: { 'icon-plus': iconPlus, 'icon-minus': iconMinus },
  } = require('../../data.json');

  // Add-total-items-to-cart controls: Add one, remove one, submit items.
  const addOneItem = () => setCounter(counter + 1);
  const removeOneItem = () => counter > 0 && setCounter(counter - 1);
  const submitItems = (event) => {
    event.preventDefault();
    setProductQuantity(counter);
  };

  return (
    <div id="add-to-cart" className={styles.container}>
      <div className={styles.actionWrapper}>
        <div className={`${styles.iconAnimation} ${styles.removeOne}`} onClick={removeOneItem}>
          <object
            data={iconMinus}
            type="image/svg+xml"
            aria-label="minus"
          />
        </div>
        <span>{counter}</span>
        <div className={`${styles.iconAnimation} ${styles.addOne}`} onClick={addOneItem}>
          <object
            data={iconPlus}
            type="image/svg+xml"
            aria-label="plus"
          />
        </div>
      </div>
      <Button onSubmit={submitItems} text={'Add to cart'} />
    </div>
  );
}
