import globalStyles from '../../global.module.scss';
import pageGlobalStyles from '../pageGlobalStyle.module.scss';

import SideNavbar from '../../components/SideNavbar';

function ProductsPage() {
  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="products" />

        <div className={pageGlobalStyles.content}>
          <h1 className={pageGlobalStyles.title}>Продукти</h1>
          <div className={pageGlobalStyles.content_inner}>
            Дані
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
