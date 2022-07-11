import styles from './Navbar.module.css';

const Navbar = ({ hamburgerOpen }) => {
  return (
    <div
      className={`${styles.fadeIn} ${
        hamburgerOpen ? `${styles.overlay}` : styles.overlayHidden
      }`}
    >
      <nav
        className={`${styles.navbar} ${
          hamburgerOpen
            ? `${styles.visibleNavbar} ${styles.slideIn}`
            : `${styles.hiddenNavbar}`
        }`}
      >
        {/*   */}
        <ul className={styles.navlist}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
