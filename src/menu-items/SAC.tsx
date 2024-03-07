// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DocumentCode2, I24Support, Driving, TaskSquare, TrendUp, TableDocument, DocumentText, UserCirlceAdd, Box1, Copy } from 'iconsax-react';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  samplePage: DocumentCode2,
  documentation: I24Support,
  roadmap: Driving,
  monthlyReturns: TaskSquare,
  monthlyTransfer: TrendUp,
  database: TableDocument,
  documents: DocumentText,
  registerCustomer: UserCirlceAdd,
  activeMgmt: Box1,
  approvalBatches: Copy

};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const SAC: NavItemType = {
  id: 'SAC',
  title: <FormattedMessage id="SAC" />,
  type: 'group',
  children: [
    {
      id: 'active-management',
      title: <FormattedMessage id="Gestão dos Ativos" />,
      type: 'collapse',
      icon: icons.activeMgmt,
      children: [
        {
          id: "my-customers",
          title: <FormattedMessage id="Meus Clientes" />,
          type: "item"
        },
        {
          id: "my-tickets",
          title: <FormattedMessage id="Meus Tickets" />,
          type: "item"
        }
      ]
    },
    {
      id: 'approval-batches',
      title: <FormattedMessage id="Lotes de Aprovação" />,
      type: 'item',
      url: 'https://phoenixcoded.gitbook.io/able-pro/v/react/',
      icon: icons.approvalBatches,
      external: true,
      target: true,
    },
  ]
};

export default SAC;
