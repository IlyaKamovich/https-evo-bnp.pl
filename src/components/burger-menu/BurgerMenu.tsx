import { FC } from 'react';
import Drawer from 'antd/es/drawer';
import './burger-menu.scss';

interface IComponentProps {
  open: boolean;
  onClose: () => void;
}

const BurgerMenu: FC<IComponentProps> = ({ open, onClose }) => {
  return (
    <Drawer title="Nawigacja" placement="left" closable onClose={onClose} open={open} className="burger-menu">
      <p>
        <a href="#advantages" title="zalety" onClick={onClose}>
          zalety
        </a>
      </p>
      <p>
        <a href="#payment" title="zalety" onClick={onClose}>
          DOSTAWA I PŁATNOŚĆ
        </a>
      </p>
    </Drawer>
  );
};

export default BurgerMenu;
