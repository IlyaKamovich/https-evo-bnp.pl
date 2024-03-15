import CurrentPrice from '../../../shared/current-price/CurrentPrice';
import Discount from '../../../shared/discount/Discount';
import OldPrice from '../../../shared/old-price/OldPrice';

import './main-info.scss';

const MainInfo = () => {
  return (
    <div className="main-info">
      <div className="main-info-price">
        <CurrentPrice />
        <OldPrice />
        <Discount />
      </div>
    </div>
  );
};

export default MainInfo;
