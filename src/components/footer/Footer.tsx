import { FC } from 'react';
import { FooterContent } from './components/FooterContent';
import './footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <FooterContent />
      </div>
    </footer>
  );
};

export default Footer;
