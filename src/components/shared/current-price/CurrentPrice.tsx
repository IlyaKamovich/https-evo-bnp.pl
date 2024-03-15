import { FC } from 'react';
import { CONFIG } from '@/config';
import './current-price.scss';

const CurrentPrice: FC = () => {
  return <span className="current">{`${CONFIG.CRM.NEW_PRICE} pln`}</span>;
};

export default CurrentPrice;
