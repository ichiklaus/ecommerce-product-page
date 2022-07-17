import { useState } from 'react';
import Image from 'next/image';
import { useMobileResolution } from '../../hooks/useMobileResolution';

import styles from '../../styles/ImageGallery.module.css';

const ImageGallery = ({
  activeContent,
  setActiveContent,
  toggleGallery,
  setToggleGallery,
  gallery,
  product,
}) => {
  const isMobile = useMobileResolution();

  // Importing metadata about functionality icons
  const {
    icons: {
      'icon-close': iconClose,
      'icon-next': iconNext,
      'icon-previous': iconPrevious,
    },
  } = require('../../data.json');

  // Returns the path of the active image
  const activeContentPath = Object.entries(
    product.imagePath.imageProduct,
  ).filter(([key, value], index) => {
    if (index === activeContent) return value;
  });

  // Gets the length of all the elements in the imageProductThumbnail object
  const galleryLength =
    Object.entries(product.imagePath.imageProductThumbnail).map((item) => item)
      .length - 1;

  // Gives a style to the active thumbnail
  const activeThumbnail = (style, index) =>
    index == activeContent ? style : '';

  // Gallery controls: close, next image, previous image.
  const closeGallery = () => gallery && setToggleGallery(!toggleGallery);
  const nextImage = () => {
    activeContent <= galleryLength && setActiveContent(activeContent + 1);
    activeContent === galleryLength && setActiveContent(1);
  };
  const prevImage = () => {
    activeContent > 0 && setActiveContent(activeContent - 1);
    activeContent === 1 && setActiveContent(galleryLength);
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
        <div
          className={`${styles.productPicture} ${
            gallery ? styles.positionRelative : ''
          } ${!gallery ? (isMobile ? styles.positionRelative : '') : ''}`}
        >
          {activeContentPath.map(([name, relativePath]) => {
            return (
              <div
                key={name}
                className={
                  gallery ? styles.galleryImageContainer : styles.imageContainer
                }
              >
                <Image
                  priority
                  className={`${styles.productImage} ${styles.productImageScaleAnimation}`}
                  layout={'fill'}
                  objectFit={'fill'}
                  src={relativePath}
                  alt={product.productName}
                  onClick={() => {
                    // If it's not of type gallery, then change state of toggleGallery accordingly to pop up the gallery by clicking on the Product preview image
                    !isMobile
                      ? !gallery
                        ? setToggleGallery(!toggleGallery)
                        : ''
                      : '';
                  }}
                />
              </div>
            );
          })}
          {gallery && (
            <>
              <span className={styles.iconClose} onClick={closeGallery}>
                <object
                  style={{ pointerEvents: 'none' }}
                  data={iconClose}
                  aria-label="close"
                />
              </span>
              <span
                className={`${styles.circleWrapper} ${styles.circleRight}`}
                onClick={nextImage}
              >
                <Image src={iconNext} width={14} height={14} alt="next" />
              </span>
              <span
                className={`${styles.circleWrapper} ${styles.circleLeft}`}
                onClick={prevImage}
              >
                <Image
                  src={iconPrevious}
                  width={14}
                  height={14}
                  alt="previous"
                />
              </span>
            </>
          )}
          {isMobile && !gallery && (
            <>
              <span className={styles.iconClose}>
                <Image
                  onClick={closeGallery}
                  src={iconClose}
                  layout="fixed"
                  width={20}
                  height={20}
                  aria-label="close"
                  alt="close"
                />
              </span>
              <span
                className={`${styles.circleWrapper} ${styles.circleRight}`}
                onClick={nextImage}
              >
                <Image src={iconNext} width={14} height={14} alt="next" />
              </span>
              <span
                className={`${styles.circleWrapper} ${styles.circleLeft}`}
                onClick={prevImage}
              >
                <Image
                  src={iconPrevious}
                  width={14}
                  height={14}
                  alt="previous"
                />
              </span>
            </>
          )}
        </div>
        <div
          className={`${styles.thumbnailWrapper} ${
            gallery ? styles['thumbnailWrapper--right-side'] : ''
          }`}
        >
          {Object.entries(product.imagePath.imageProductThumbnail).map(
            ([name, relativePath], index) => {
              return (
                <div
                  key={name}
                  className={`${activeThumbnail(styles.activeWrapper, index)} ${
                    styles.thumbnailContainer
                  }`}
                >
                  <Image
                    onClick={() => setActiveContent(index)}
                    className={`${styles.thumbnail} ${activeThumbnail(
                      name,
                      styles.activeThumbnail,
                    )}`}
                    alt={name}
                    width={90}
                    height={90}
                    src={relativePath}
                  />
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
