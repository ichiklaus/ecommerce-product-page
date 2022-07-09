import { useState } from 'react';
import Image from 'next/image';
import styles from './HamburgerMenu.module.css';

const HamburgerMenu = ({ hamburgerOpen, setHamburgerOpen }) => {

  const {
    icons: { 'icon-close': iconClose, 'icon-menu': iconMenu },
  } = require('../data.json');

  return (
    <div>
      {hamburgerOpen && (
        <div className={styles.iconWrapper}>
          <Image
            className={hamburgerOpen && styles.transitionToRight}
            layout="fill"
            src={iconClose}
            onClick={() => {
              setHamburgerOpen(!hamburgerOpen);
            }}
          />
        </div>
      )}
      {!hamburgerOpen && (
        <div className={styles.iconWrapper}>
          <Image
            className={!hamburgerOpen && styles.transitionToLeft}
            layout="fill"
            src={iconMenu}
            onClick={() => {
              setHamburgerOpen(!hamburgerOpen);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
