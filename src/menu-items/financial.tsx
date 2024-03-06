// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { MoneySend, Note1 } from 'iconsax-react';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  financialMgmt: MoneySend,
  paymentBatches: Note1

};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const financial: NavItemType = {
  id: 'financial',
  title: <FormattedMessage id="financeiro" />,
  type: 'group',
  children: [
    {
      id: 'financial-mgmt',
      title: <FormattedMessage id="Gestão do Financeiro" />,
      type: 'item',
      url: '/sample-page',
      icon: icons.financialMgmt
    },
    {
      id: 'payment-batches',
      title: <FormattedMessage id="Lotes de Pagamento" />,
      type: 'item',
      icon: icons.paymentBatches,
      external: true,
      target: true,
    },
  ]
};

export default financial;
