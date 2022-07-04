import Seo from './Seo';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import styles from './Layout.module.css';

const Layout = ({ children, productQuantity, setProductQuantity }) => {
  return (
    <div className={styles.container}>
      <Seo />
      <Header
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
      />
      <Main children={children} />
      <Footer />
    </div>
  );
};

export default Layout;
