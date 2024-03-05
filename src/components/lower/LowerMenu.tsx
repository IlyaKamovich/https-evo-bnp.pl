import { useMemo } from 'react';
import ByuWithDiscount from '../shared/byu-with-discount/ByuWithDiscount';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { isLowerModalSelector } from '../../store/lower-modal/selectors';

import './lower-menu.scss';

const LowerMenu = () => {
  const showMenu = useTypeSelector(isLowerModalSelector);

  const lowerMenuClasses = useMemo(() => {
    if (showMenu) {
      return 'lower-menu lower-menu__show';
    }
    return 'lower-menu';
  }, [showMenu]);

  return (
    <div className={lowerMenuClasses}>
      <ByuWithDiscount />
    </div>
  );
};

export default LowerMenu;
