import Image from 'next/image';
import Link from 'next/link';

import { formatToFixed2 } from '../utils';
import { loadProductsData } from '../libs/loadProducts';

// import { useState } from 'react';
// import AddToCart from '../components/Actions/AddToCart';
// import ImageGallery from '../components/Navigation/ImageGallery';
import styles from '../styles/Home.module.css';

export default function Home({ productsData }) {
  const formatId = (name, id) =>
    name.replace(/\s+/g, '-').toLowerCase().concat('-', id);

  return (
    <div className={styles.wrapper}>
      {productsData.map((item) => (
        <div key={item.productName} className={styles['product-wrapper']}>
          <Link
            href={`/products/[productId]`}
            as={`/products/${formatId(item.productName, item.id)}`}
          >
            <div className={styles['image-wrapper']}>
              <Image
                priority
                src={item.imagePath.imageProduct['imageProduct1']}
                layout={'fill'}
                style={{ borderRadius: '10px' }}
              />
            </div>
          </Link>
          <p>{item.productName}</p>
          {item.productPrice && item.productDiscount ? (
            <small className={styles['product-value']}>
              <span>${formatToFixed2(item.productPrice)}</span>{' '}
              <span>{Number(item.productDiscount)}%</span>{' '}
            </small>
          ) : (
            <small >
              ${item.productRetailPrice}
            </small>
          )}
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const productsDataJson = await loadProductsData();
  return {
    props: {
      productsData: productsDataJson,
    },
  };
}
