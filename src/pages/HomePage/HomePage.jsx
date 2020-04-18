import React from 'react';
import { DefaultLayout } from 'components/Layout/DefaultLayout';
import { HomeSlider } from 'components/HomeSlider';
import { SecretBuyer } from 'components/SecretBuyer';
import Products from 'components/Products/Products';
import { DeliveryAndPayment } from 'components/DeliveryAndPayment';
import { Promocode } from 'components/Promocode';
import commonStyles from 'styles/commonStyles';

function HomePage() {
  return (
    <DefaultLayout>
      <div className={commonStyles.contentWrapper}>
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
