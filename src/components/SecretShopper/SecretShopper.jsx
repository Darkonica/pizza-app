import React from 'react';
import SecretShopperImg from 'static/images/secret-shopper.svg';
import { Button } from 'components/Layout/Button';
import commonStyles from 'styles/commonStyles';
import styles from './styles';

function SecretShopper() {
  return (
    <div className={styles.block}>
      <div className={`${commonStyles.wrapper} ${styles.wrapper}`}>
        <div className={styles.text}>
          <SecretShopperImg />
          <div>Стань тайным покупателем Додо Пиццы и получи пиццу в подарок</div>
        </div>
        <Button white link="/secret-shopper-form">
          Заполнить анкету
        </Button>
      </div>
    </div>
  );
}

export default SecretShopper;
