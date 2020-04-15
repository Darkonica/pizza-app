import React from 'react';
import styles from './styles';

function DeliveryAndPayment() {
  return (
    <div className="wrapper">
      <h2>Доставка и оплата</h2>
      <div className={styles.container}>
        <div className={styles.block}>
          <h4>60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</h4>
          <div className="text">
            <p>Если мы не успеем доставить любые продукты, кроме сувенирной продукции, в течение 60 минут, курьер подарит вам сертификат на большую пиццу.</p>
          </div>
        </div>
        <div className={styles.block}>
          <h4>ДОДО ПИЦЦА — СЕТЬ ПИЦЦЕРИЙ № 1 В РОССИИ</h4>
          <p>по доставке пиццы по данным из отчета Euromonitor International на май 2017 года.</p>
          <p>Все цены в меню указаны без учета скидок.</p>
        </div>
        <div className={styles.block}>
          <h4>495 ₽</h4>
          <p>Минимальная сумма доставки без учета сувениров</p>

          <h4>7 000 ₽</h4>
          <p>Максимальная сумма при оплате наличными</p>
          <p>Изображения продуктов могут отличаться от продуктов в заказе.</p>
        </div>
        <div className={styles.block}>
          <h4>ЗОНА ДОСТАВКИ ОГРАНИЧЕНА</h4>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAndPayment;
