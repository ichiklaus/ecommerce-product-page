import { useState } from 'react';

import productsJson from '../../products.json';

import AddToCart from '../../components/Actions/AddToCart';
import ImageGallery from '../../components/Navigation/ImageGallery';

import styles from '../../styles/Product.module.css';

import { formatToFixed2 } from '../../helpers';

export default function Product({ product, setProductQuantity }) {
  const [toggleGallery, setToggleGallery] = useState(false);
  const [activeContent, setActiveContent] = useState(0);

  return (
    <div className={styles.wrapper}>
      <ImageGallery
        activeContent={activeContent}
        setActiveContent={setActiveContent}
        setToggleGallery={setToggleGallery}
        gallery={false}
        product={product}
      />
      <section className={styles.productInfo}>
        <div>
          <p>{product.productBrand}</p>
          <h1>{product.productName}</h1>
          <p>{product.productDescription}</p>
          <div className={styles.pricing}>
            {product.productPrice && product.productDiscount ? (
              <>
                <p className={styles.productValue}>
                  <span>${formatToFixed2(product.productPrice)}</span>
                  <small>{Number(product.productDiscount)}%</small>
                </p>
                <p className={styles.discount}>
                  ${formatToFixed2(product.productRetailPrice)}
                </p>
              </>
            ) : (
              <p className={styles.productValue}>
                <span>${product.productRetailPrice}</span>
              </p>
            )}
          </div>
        </div>
        <AddToCart setProductQuantity={setProductQuantity} />
      </section>
      <ImageGallery
        activeContent={activeContent}
        setActiveContent={setActiveContent}
        setToggleGallery={setToggleGallery}
        toggleGallery={toggleGallery}
        gallery={true} // If component is of type gallery
        product={product}
      />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const productList = productsJson.filter(
    (item) =>
      item.productName
        .replace(/\s+/g, '-')
        .toLowerCase()
        .concat('-', item.id) == params.productId,
  );

  return {
    props: {
      product: productList[0],
    },
  };
}

export async function getStaticPaths() {
  const paths = productsJson.map((item) => ({
    params: {
      productId: item.productName
        .replace(/\s+/g, '-')
        .toLowerCase()
        .concat('-', item.id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
