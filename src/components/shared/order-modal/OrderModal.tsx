import { ChangeEvent, useMemo, useState } from 'react';
import { Modal, Input, notification } from 'antd';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { useTypeDispatch } from '../../../hooks/useTypeDispatch';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { isModalSelector } from '../../../store/order-modal/selectors';
import { toggleModal } from '../../../store/order-modal/slice';
import Discount from '../discount/Discount';
import OldPrice from '../old-price/OldPrice';
import CurrentPrice from '../current-price/CurrentPrice';
import { updateThanksData } from '../../../store/thanks/thanks.slice';
import { useNavigate } from 'react-router-dom';
import { CONFIG } from '@/config';
import './order-modal.scss';

declare global {
  interface Window {
    ym: any;
  }
}

window.ym = window.ym || {};

const OrderModal = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    phone: '',
  });

  const [api, contextHolder] = notification.useNotification();

  const disableSend = useMemo(() => {
    return Object.values(data).some((value) => !value.length);
  }, [data]);

  const isOpen = useTypeSelector(isModalSelector);
  const dispatch = useTypeDispatch();

  const onCloseModal = () => dispatch(toggleModal(false));

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setData((state) => ({
      ...state,
      name: event.target.value,
    }));
  };

  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setData((state) => ({
      ...state,
      phone: event.target.value,
    }));
  };

  const sendData = async () => {
    try {
      await axios.post(CONFIG.REQUESTS.SEND_ORDER, {
        ...data,
        primaryId: 'mini-pila',
        productName: 'Аккумуляторная цепная мини-пила',
        price: CONFIG.CRM.NEW_PRICE,
        targetologId: CONFIG.CRM.TARGETOLOG_ID,
        webmasterId: CONFIG.CRM.WEBMASTER_ID,
        orderMethod: CONFIG.CRM.ORDER_METHOD,
        url: window.location.href.substring(0, 100),
        shopSite: CONFIG.CRM.SHOP_SITE,
        items: [
          {
            initialPrice: CONFIG.CRM.NEW_PRICE,
            quantity: 1,
            offer: {
              externalId: 'mini-pila',
            },
          },
        ],
      });

      dispatch(updateThanksData({ name: data.name, phone: data.phone }));
      onCloseModal();
      setData({
        name: '',
        phone: '',
      });
      window.ym(96589207, 'reachGoal', 'btn-click-me');
      navigate('/thanks');
    } catch (e) {
      api.error({
        key: 'error',
        message: 'Произошла ошибка повторите позже!',
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Modal title="Аккумуляторная цепная мини-пила" open={isOpen} onOk={onCloseModal} onCancel={onCloseModal} footer={null}>
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
        <div className="form">
          <Input value={data.name} className="input" placeholder="Имя: Иван" onChange={onChangeName} />
          <InputMask
            className="input"
            value={data.phone}
            mask="+375 99 999 99 99"
            autoComplete="off"
            placeholder="Телефон: +375 ХХ ХХХ ХХ ХХ"
            onChange={onChangePhone}
          />
          <button disabled={disableSend} type="button" className="send-button" onClick={sendData}>
            Заказать со скидкой
          </button>
          <label className="form-label">
            <input type="checkbox" defaultChecked required className="form-input-label" />Я согласен с политикой конфиденциальности и
            пользовательским соглашением
          </label>
        </div>
      </Modal>
    </>
  );
};

export default OrderModal;
