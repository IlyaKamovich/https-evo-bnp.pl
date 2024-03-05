import React, { Fragment } from 'react';

const Header = React.lazy(() => import('../../components/header/Header'));
const MainSection = React.lazy(() => import('../../components/main/MainSection'));
const AdvantagesSection = React.lazy(() => import('../../components/advantages/AdvantagesSection'));
const OrderModal = React.lazy(() => import('../../components/shared/order-modal/OrderModal'));
const PaymentSection = React.lazy(() => import('../../components/payment/PaymentSection'));
const FeedbackSection = React.lazy(() => import('../../components/feedback/FeedbackSection'));
const LowerMenu = React.lazy(() => import('../../components/lower/LowerMenu'));
const Footer = React.lazy(() => import('../../components/footer/Footer'));

const Shop = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <MainSection />
        <AdvantagesSection />
        <FeedbackSection />
        <PaymentSection />
      </main>
      <Footer />
      <LowerMenu />
      <OrderModal />
    </Fragment>
  );
};

export default Shop;
