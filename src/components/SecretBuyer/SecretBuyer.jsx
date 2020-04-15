import React from 'react';
import SecretBuyerImg from 'static/images/secret-buyer.svg';
import Button from 'components/Layout/Button/Button';
import commonStyles from 'styles/commonStyles';
import styles from './styles';

function SecretBuyer() {
  return (
    <div className={styles.block}>
      <div className={commonStyles.wrapper}>
        <div className={styles.text}>
          <SecretBuyerImg />
          <div>Стань тайным покупателем Додо Пиццы и получи пиццу в подарок</div>
        </div>
        <Button white link="/secret-buyer-form">
          Заполнить анкету
        </Button>
      </div>
    </div>
  );
}

export default SecretBuyer;
