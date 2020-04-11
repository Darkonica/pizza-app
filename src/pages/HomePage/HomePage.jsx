import React from 'react';
import Layout from './components/Layout/DefaultLayout/DefaultLayout';
import HomeSlider from './components/HomeSlider/HomeSlider';
import SecretBuyer from './components/SecretBuyer/SecretBuyer';
import Promocode from './components/Promocode/Promocode';
import Products from './components/Products/Products';
import DeliveryAndPayment from './components/DeliveryAndPayment/DeliveryAndPayment';

function HomePage() {
  return (
    <Layout>
      <div className="content-wrapper">
        <HomeSlider />
        <Promocode />

        <Products />

        <DeliveryAndPayment />
      </div>

      <SecretBuyer />
    </Layout>
  );
}

export default HomePage;
