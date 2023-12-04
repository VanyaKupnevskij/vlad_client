import globalStyles from '../../global.module.scss';
import pageGlobalStyles from '../pageGlobalStyle.module.scss';

import SideNavbar from '../../components/SideNavbar';

function ClientsPage() {
  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="clients" />

        <div className={pageGlobalStyles.content}>
          <h1 className={pageGlobalStyles.title}>Кліенти</h1>
          <div className={pageGlobalStyles.content_inner}>
            Дані
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsPage;
