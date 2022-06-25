import Navbar from './Navbar';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.headerLogo} href="#">
        <img src="/images/logo.svg" alt="" />
        <span className={styles.hidden}>sneakers</span>
      </a>
      <Navbar />
      <div className={styles.userActions}>
        <picture className={styles.pictureCart}>
          <img src="/images/icon-cart.svg" alt="Cart" />
        </picture>
        <picture className={styles.pictureAvatar}>
          <img src="/images/image-avatar.png" alt="Avatar" />
        </picture>
      </div>
    </header>
  );
};

export default Header;
