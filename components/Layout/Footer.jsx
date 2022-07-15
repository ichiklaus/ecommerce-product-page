import styles from '../../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Challenge coded by{' '}
        <a
          className={styles.footerCredit}
          href="https://www.frontendmentor.io/profile/ichiklaus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yeraldo Nicolás Moreira
        </a>
      </span>
      <ul className={styles.social}>
        <li><a href="#"><i className={`${styles.faBrands} fa-brands fa-instagram`}></i></a></li>
        <li><a href="#"><i className={`${styles.faBrands} fa-brands fa-twitter`}></i></a></li>
        <li><a href="#"><i className={`${styles.faBrands} fa-brands fa-facebook-f`}></i></a></li>
        <li><a href="#"><i className={`${styles.faBrands} fa-brands fa-whatsapp`} ></i></a></li>
      </ul>
    </footer>
  );
}
