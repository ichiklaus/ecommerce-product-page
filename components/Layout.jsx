import Seo from './Seo';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Seo />
      <Header />
      {/* <main>{children}</main> */}
      <Main children={children} />
      <Footer />
    </div>
  );
};

export default Layout;
