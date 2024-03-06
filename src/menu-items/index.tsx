// project-imports
import records from './records';
import SAC from './SAC';
import legal from './legal';
import financial from './financial';
import admin from './admin';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [records, SAC, legal, financial, admin]
};

export default menuItems;
