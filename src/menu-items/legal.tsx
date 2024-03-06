// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DocumentText } from 'iconsax-react';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  processMgmt: DocumentText
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const legal: NavItemType = {
  id: 'legal',
  title: <FormattedMessage id="jurídico" />,
  type: 'group',
  children: [
    {
      id: 'process-mgmt',
      title: <FormattedMessage id="Gestão de Processos" />,
      type: 'item',
      icon: icons.processMgmt,
    },
  ]
};

export default legal;
