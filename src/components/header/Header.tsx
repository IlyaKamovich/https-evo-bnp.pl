import { useState } from 'react';

import './header.scss';
import BurgerMenu from '../burger-menu/BurgerMenu';

const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <header className="header">
        <div className="menu">
          <div className="container">
            <button type="button" className="icon-button menu-trigger" onClick={onOpen}>
              <img src="icons/burger.svg" alt="menu" />
            </button>
            <span>Ostateczna sprzedaż -30%</span>
          </div>
        </div>
        <div className="sale">Hulajnoga elektryczna nowej generacji</div>
      </header>
      <BurgerMenu open={open} onClose={onClose} />
    </>
  );
};

export default Header;
