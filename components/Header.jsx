import { useState } from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = ({ productQuantity, setProductQuantity }) => {
  const {
    icons: {
      'logo-sneakers': logo,
      'image-avatar': imageAvatar,
      'icon-cart': iconCart,
    },
  } = require('../data.json');

  const [display, setDisplay] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerLeftSide}>
        <a className={styles.headerLogo} href="#">
          <Image src={logo} width={138} height={20} alt="Sneakers" />
          <span className={styles.hidden}>sneakers</span>
        </a>
        <Navbar />
      </div>
      <div className={styles.userActions}>
        <picture
          className={styles.pictureCart}
          onClick={() => setDisplay(!display)}
        >
          <Image src={iconCart} alt="Cart" width={24} height={22} />
          <small className={styles.toolTip}>{productQuantity}</small>
        </picture>
        <Cart
          productQuantity={productQuantity}
          setProductQuantity={setProductQuantity}
          display={display}
        />
        <picture className={styles.pictureAvatar}>
          <Image src={imageAvatar} alt="Avatar" width="100%" height="100%" />
        </picture>
      </div>
    </header>
  );
};

export default Header;
