import Header from './Header';
import Footer from './Footer';

import styles from '../../styles/Layout.module.css';

const Layout = ({ children, productQuantity, setProductQuantity }) => {
  return (
    <div className={styles.container}>
      <Header
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
      />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
