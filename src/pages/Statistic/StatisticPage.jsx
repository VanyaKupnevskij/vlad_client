import globalStyles from '../../global.module.scss';
import pageGlobalStyles from '../pageGlobalStyle.module.scss';

import SideNavbar from '../../components/SideNavbar';

function StatisticPage() {
  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="statistic" />

        <div className={pageGlobalStyles.content}>
          <h1 className={pageGlobalStyles.title}>Статистика</h1>
          <div className={pageGlobalStyles.content_inner}>
            Графіки
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticPage;
