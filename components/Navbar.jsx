import styles from './Navbar.module.css';

const Navbar = ({ hamburgerOpen }) => {
  return (
    <div className={hamburgerOpen && styles.overlay}>
      <nav className={`${styles.navbar} ${hamburgerOpen ? styles.visible : styles.hidden}`}>
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
