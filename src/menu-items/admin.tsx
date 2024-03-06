// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DocumentCode2, I24Support, Driving, TaskSquare, TrendUp, TableDocument, DocumentText, UserCirlceAdd } from 'iconsax-react';

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
  registerCustomer: UserCirlceAdd

};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const admin: NavItemType = {
  id: 'admin',
  title: <FormattedMessage id="Administração" />,
  type: 'group',
  children: [
    {
      id: 'views-and-data',
      title: <FormattedMessage id="Visualização e Dados" />,
      type: 'collapse',
      url: '/sample-page',
      icon: icons.database,
      children: [ 
        {
          id: "customer-report",
          title: <FormattedMessage id="Relatório de Clientes" />,
          type: "item"
        },
        {
          id: "ticket-report",
          title: <FormattedMessage id="Relatório de Tickets" />,
          type: "item"
        },
        {
          id: "batches-report",
          title: <FormattedMessage id="Relatório de Lotes" />,
          type: "item"
        },
        {
          id: "returns-report",
          title: <FormattedMessage id="Relatório de Retornos" />,
          type: "item"
        },
        {
          id: "monthly-transfers",
          title: <FormattedMessage id="Movimentação Mensal" />,
          type: "item"
        }
      ]
    },
    {
      id: 'system-config',
      title: <FormattedMessage id="Configuração do Sistema" />,
      type: 'item',
      url: 'https://phoenixcoded.gitbook.io/able-pro/v/react/',
      icon: icons.monthlyReturns,
      external: true,
      target: true,
    },
    {
      id: 'network-infra',
      title: <FormattedMessage id="Rede e Infraestrutura" />,
      type: 'item',
      url: 'https://phoenixcoded.gitbook.io/able-pro/v/react/',
      icon: icons.monthlyReturns,
      external: true,
      target: true,
    }
  ]
};

export default admin;
