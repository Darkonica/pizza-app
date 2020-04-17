import React from 'react';
import { DefaultLayout } from 'components/Layout/DefaultLayout';
import { HomeSlider } from 'components/HomeSlider';
import { SecretBuyer } from 'components/SecretBuyer';
import Products from 'components/Products/Products';
import { DeliveryAndPayment } from 'components/DeliveryAndPayment';
import { Promocode } from 'components/Promocode';

function HomePage() {
  return (
    <DefaultLayout>
      <div className="content-wrapper">
        <HomeSlider />
        <Promocode />

        <Products />

        <DeliveryAndPayment />
      </div>

      <SecretBuyer />
    </DefaultLayout>
  );
}

export default HomePage;
