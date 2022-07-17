import Link from 'next/link';

import styles from '../../styles/Navbar.module.css';

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
          <li>
            <Link href='/'>
              <a>Collections</a>
            </Link>
          </li>
          <li>Men</li>
          <li>Women</li>
          <li>
              <a>About</a>
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
