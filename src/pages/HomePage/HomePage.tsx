import React from 'react';
import { DefaultLayout } from 'components/Layout/DefaultLayout';
import { HomeSlider } from 'components/HomeSlider';
import { SecretShopper } from 'components/SecretShopper';
import Products from 'components/Products/Products';
import { DeliveryAndPayment } from 'components/DeliveryAndPayment';
import { Promocode } from 'components/Promocode';
import commonStyles from 'styles/commonStyles.scss';

function HomePage() {
  return (
    <DefaultLayout>
      <div className={commonStyles.contentWrapper}>
        <HomeSlider />
        <Promocode />

        <Products />

        <DeliveryAndPayment />
      </div>

      <SecretShopper />
    </DefaultLayout>
  );
}

export default HomePage;
