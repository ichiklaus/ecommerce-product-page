import Image from 'next/image';
import { useState } from 'react';
import styles from './ProductImageGallery.module.css';

const ProductImageGallery = ({
  setActiveContent,
  activeContent,
  toggleGallery,
  setToggleGallery,
  gallery,
}) => {
  const {
    'fall-limited-sneakers': {
      'image-product-path': { 'product-thumbnail': productThumbnail },
    },
  } = require('../data.json');

  const {
    'fall-limited-sneakers': {
      'image-product-path': { 'image-product': imageProduct },
    },
  } = require('../data.json');

  const {
    'fall-limited-sneakers': { 'product-name': productName },
  } = require('../data.json');

  const {
    icons: {
      'icon-close': iconClose,
      'icon-next': iconNext,
      'icon-previous': iconPrevious,
    },
  } = require('../data.json');

  const imageArray = Object.entries(imageProduct).filter(([key, value]) => {
    if (Number(key.slice(-1)) === activeContent) return value;
  });

  const activeThumbnail = (name, style) =>
    Number(name.slice(-1)) == activeContent ? style : '';

  const nextImage = () => {
    activeContent <= 4 && setActiveContent(activeContent + 1);
    activeContent === 4 && setActiveContent(1);
  };

  const prevImage = () => {
    activeContent > 0 && setActiveContent(activeContent - 1);
    activeContent === 1 && setActiveContent(4);
  };

  return (
    <div
      className={`${
        gallery &&
        // If component is of type gallery, then create an overlay onClick over the Product preview image
        (!toggleGallery ? styles.hidden : `${styles.overlay} ${styles.visible}`)
      }`}
    >
      <div
        className={`${styles.galleryWrapper} ${
          gallery && styles.galleryPosition
        }`}
      >
        <picture
          className={`${styles.productPicture} ${
            gallery && styles.productPictureRelative
          }`}
        >
          {imageArray.map(([name, relativePath]) => {
            return (
              <Image
                key={name}
                className={styles.productImage}
                width={450}
                height={450}
                src={relativePath}
                alt={productName}
                onClick={() => {
                  // If it's not of type gallery, then change state of toggleGallery accordingly to pop up the gallery by clicking on the Product preview image
                  !gallery && setToggleGallery(!toggleGallery);
                }}
              />
            );
          })}
          {gallery && (
            <>
              <span className={styles.iconClose}>
                <Image
                  onClick={() => {
                    gallery && setToggleGallery(!toggleGallery);
                  }}
                  src={iconClose}
                  layout="fixed"
                  width={20}
                  height={20}
                  // type="image/svg+xml"
                  aria-label="close"
                />
              </span>
              <span
                className={`${styles.circleWrapper} ${styles.circleRight}`}
                onClick={nextImage}
              >
                <Image src={iconNext} width={14} height={14} />
              </span>
              <span
                className={`${styles.circleWrapper} ${styles.circleLeft}`}
                onClick={prevImage}
              >
                <Image src={iconPrevious} width={14} height={14} />
              </span>
            </>
          )}
        </picture>
        <div className={styles.thumbnailWrapper}>
          {Object.entries(productThumbnail).map(([name, relativePath]) => {
            return (
              <picture
                key={name}
                className={activeThumbnail(name, styles.activeWrapper)}
              >
                <Image
                  onClick={() => setActiveContent(Number(name.slice(-1)))}
                  className={`${styles.thumbnail} ${activeThumbnail(
                    name,
                    styles.activeThumbnail,
                  )}`}
                  alt={name}
                  width={90}
                  height={90}
                  src={relativePath}
                />
              </picture>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
