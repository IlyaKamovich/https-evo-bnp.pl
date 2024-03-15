import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { thanksName, thanksPhone } from '../../store/thanks/thanks.selectors';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { FooterContent } from '@/components/footer/components/FooterContent';
import './Thanks.styles.scss';

const Thanks = () => {
  const name = useTypeSelector(thanksName);
  const phone = useTypeSelector(thanksPhone);

  return (
    <Fragment>
      <div className="thanks">
        <div className="container">
          <header className="thanks__header">
            <img src="https://light.of.by/tiktok/new-sumka-adelle-blr/core/assets/img/bird.png" alt="bird" />
            <h2 className="thanks__header__title">Dziękujemy za zgłoszenie</h2>
          </header>
          <p className="thanks__info">Prosimy o zweryfikowanie wprowadzonej nazwy i numeru:</p>
          <div className="thanks__fields">
            <div className="thanks__fields__item">
              <label className="thanks__fields__item__label">Nazwa*</label>
              <input className="thanks__fields__item__input" disabled defaultValue={name} />
            </div>
            <div className="thanks__fields__item">
              <label className="thanks__fields__item__label">Telefon*</label>
              <input className="thanks__fields__item__input" disabled defaultValue={phone} />
            </div>
          </div>
          <p className="thanks__details">Menedżer wkrótce skontaktuje się z Tobą, aby podać więcej szczegółów</p>
          <p className="thanks__subdetails">
            Jeśli popełniłeś błąd w formularzu zgłoszeniowym - kliknij przycisk "popraw dane" i złóż wniosek z poprawnymi danymi ponownie.
          </p>
          <Link className="thanks__link" to="/">
            Popraw dane
          </Link>
        </div>
        <div className="thanks__footer">
          <FooterContent />
        </div>
      </div>
    </Fragment>
  );
};

export default Thanks;
