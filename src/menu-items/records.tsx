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

const records: NavItemType = {
  id: 'records',
  title: <FormattedMessage id="registros" />,
  type: 'group',
  children: [
    {
      id: 'database',
      title: <FormattedMessage id="Base De Dados" />,
      type: 'item',
      url: '/sample-page',
      icon: icons.database
    },
    {
      id: 'monthly-returns',
      title: <FormattedMessage id="Retorno Mensal" />,
      type: 'item',
      url: 'https://phoenixcoded.gitbook.io/able-pro/v/react/',
      icon: icons.monthlyReturns,
      external: true,
      target: true,
    },
    {
      id: 'monthly-transfer',
      title: <FormattedMessage id="Repasse Mensal" />,
      type: 'item',
      url: 'https://phoenixcoded.gitbook.io/able-pro/v/react/roadmap',
      icon: icons.monthlyTransfer,
      external: true,
      target: true
    },
    {
      id: 'documents',
      title: <FormattedMessage id="Documentos" />,
      type: 'item',
      url: 'https://phoenixcoded.gitbook.io/able-pro/v/react/roadmap',
      icon: icons.documents,
      external: true,
      target: true
    },
    {
      id: 'register-customer',
      title: <FormattedMessage id="Cadastrar Cliente" />,
      type: 'item',
      url: 'https://phoenixcoded.gitbook.io/able-pro/v/react/roadmap',
      icon: icons.registerCustomer,
      external: true,
      target: true
    }
  ]
};

export default records;
