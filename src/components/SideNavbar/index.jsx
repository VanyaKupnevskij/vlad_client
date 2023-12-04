import styles from './style.module.scss';

import IconLink from '../../ui/IconLink';
import {
  GraphicIcon,
  WorkersIcon,
  RecordsIcon,
  GeneralIcon,
  ProjectsIcon,
  ContactsIcon,
  HomeIcon,
} from '../../ui/Icon';

function SideNavbar({ currentTab }) {
  return (
    <div className={styles.side_navbar}>
      <IconLink linkPath="/home" icon={<HomeIcon />} isActive={currentTab === 'home'}>
        Головна
      </IconLink>
      <IconLink linkPath="/contacts" icon={<ContactsIcon />} isActive={currentTab === 'contacts'}>
        Контакти
      </IconLink>
      <IconLink
        linkPath="/projects"
        icon={<ProjectsIcon />}
        isActive={currentTab === 'projects'}>
        Проекти
      </IconLink>
      <h4>Деталі</h4>
      <IconLink
        linkPath="/general"
        icon={<GeneralIcon />}
        isActive={currentTab === 'general'}>
        Основне
      </IconLink>
      <IconLink
        linkPath="/records"
        icon={<RecordsIcon />}
        isActive={currentTab === 'records'}>
        Записи
      </IconLink>
      <IconLink
        linkPath="/workers"
        icon={<WorkersIcon />}
        isActive={currentTab === 'workers'}>
        Працівники
      </IconLink>
      <IconLink
        linkPath="/graphics"
        icon={<GraphicIcon />}
        isActive={currentTab === 'graphics'}>
        Графіки
      </IconLink>

    </div>
  );
}

export default SideNavbar;
