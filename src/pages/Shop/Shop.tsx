import { FC, Fragment } from 'react';

import AdvantagesSection from '@/components/advantages/AdvantagesSection';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import LowerMenu from '@/components/lower/LowerMenu';
import MainSection from '@/components/main/MainSection';
import PaymentSection from '@/components/payment/PaymentSection';
import OrderModal from '@/components/shared/order-modal/OrderModal';

const Shop: FC = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <MainSection />
        <AdvantagesSection />
        <PaymentSection />
      </main>
      <Footer />
      <LowerMenu />
      <OrderModal />
    </Fragment>
  );
};

export default Shop;
