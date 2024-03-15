import { FC, Fragment, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Modal, notification } from 'antd';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTypeDispatch } from '../../../hooks/useTypeDispatch';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { isModalSelector } from '../../../store/order-modal/selectors';
import { toggleModal } from '../../../store/order-modal/slice';
import Discount from '../discount/Discount';
import OldPrice from '../old-price/OldPrice';
import CurrentPrice from '../current-price/CurrentPrice';
import { updateThanksData } from '../../../store/thanks/thanks.slice';
import { CONFIG } from '@/config';
import 'moment/locale/ru';
moment.locale('ru');

import './order-modal.scss';

export type Inputs = {
  name: string;
  phone: string;
};

declare global {
  interface Window {
    ym: any;
  }
}

window.ym = window.ym || {};

const OrderModal: FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const [api, contextHolder] = notification.useNotification();

  const isOpen = useTypeSelector(isModalSelector);
  const dispatch = useTypeDispatch();

  const onCloseModal = () => dispatch(toggleModal(false));

  const createOrder: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsLoading(true);
      const text = `Nowe zamówienie \nCzas: ${moment().format('LLL')}\nNazwa: ${
        data.name
      }\nTelefon: ${data.phone.trim()}\nLink do strony: ${window.location.href.split('?')[0]}`;

      await axios.post(
        CONFIG.REQUESTS.CREATE_ORDER,
        { chat_id: CONFIG.TELEGRAM.CHAT_ID, text },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      dispatch(updateThanksData({ name: data.name, phone: data.phone }));
      onCloseModal();
      reset();

      //window.ym(96589207, 'reachGoal', 'btn-click-me');
      navigate('/thanks');
    } catch (e) {
      api.error({
        key: 'error',
        message: 'Wystąpił błąd, wykonaj ponownie później!',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      {contextHolder}
      <Modal title="Hulajnoga Elektryczna Nowej Generacji" open={isOpen} onOk={onCloseModal} onCancel={onCloseModal} footer={null}>
        <div className="modal-header">
          <div className="right">
            <div className="info">
              <Discount />
              <div className="prices">
                <OldPrice />
                <CurrentPrice />
              </div>
            </div>
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit(createOrder)}>
          <input className="input" placeholder="Wpisz swoje imię i nazwisko" {...register('name', { required: true })} />
          <input className="input" placeholder="Wprowadź swój numer telefonu" {...register('phone', { required: true })} />
          <button disabled={isLoading} type="submit" className="send-button">
            Zamówienie ze zniżką
          </button>
          <label className="form-label">
            <input type="checkbox" defaultChecked required className="form-input-label" />
            Zgadzam się z polityką prywatności i umowę użytkownika
          </label>
        </form>
      </Modal>
    </Fragment>
  );
};

export default OrderModal;
