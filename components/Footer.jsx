import styles from './footer.module.css';

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
    </footer>
  );
}
