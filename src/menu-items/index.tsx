// project-imports
import records from './records';
import SAC from './SAC';
import legal from './legal';
import financial from './financial';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [records, SAC, legal, financial]
};

export default menuItems;
