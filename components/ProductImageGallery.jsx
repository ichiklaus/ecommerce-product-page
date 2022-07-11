import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProductImageGallery.module.css';

const ProductImageGallery = ({
  setActiveContent,
  activeContent,
  toggleGallery,
  setToggleGallery,
  gallery,
}) => {
  const [isMobileResolution, setIsMobileResolution] = useState(false);
  useEffect(() => {
    function handleResize() {
      window.innerWidth <= 820
        ? setIsMobileResolution(true)
        : setIsMobileResolution(false);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Importing metadata about the product
  const {
    'fall-limited-sneakers': {
      'product-name': productName,
      'image-product-path': {
        'product-thumbnail': productThumbnail,
        'image-product': imageProduct,
      },
    },
  } = require('../data.json');

  // Importing metadata about functionality icons
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

  // Gallery controls: close, next image, previous image.
  const closeGallery = () => gallery && setToggleGallery(!toggleGallery);
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
          id="product-picture"
          className={`${styles.productPicture} ${
            gallery && styles.productPictureRelative
          } ${!gallery && isMobileResolution && styles.productPictureRelative}`}
        >
          {imageArray.map(([name, relativePath]) => {
            return (
              <div
                key={name}
                className={
                  gallery ? styles.galleryImageContainer : styles.imageContainer
                }
              >
                <Image
                  className={`${styles.productImage} ${styles.productImageAni}`}
                  layout={'fill'}
                  objectFit={'fill'}
                  src={relativePath}
                  alt={productName}
                  onClick={() => {
                    // If it's not of type gallery, then change state of toggleGallery accordingly to pop up the gallery by clicking on the Product preview image
                    !isMobileResolution &&
                      !gallery &&
                      setToggleGallery(!toggleGallery);
                  }}
                />
              </div>
            );
          })}
          {gallery && (
            <>
              <span className={styles.iconClose}>
                <Image
                  onClick={closeGallery}
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
          {isMobileResolution && !gallery && (
            <>
              <span className={styles.iconClose}>
                <Image
                  onClick={closeGallery}
                  src={iconClose}
                  layout="fixed"
                  width={20}
                  height={20}
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
                className={`${activeThumbnail(name, styles.activeWrapper)} ${
                  styles.thumbnailContainer
                }`}
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
