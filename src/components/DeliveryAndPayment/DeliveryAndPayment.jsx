import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
`;

const Block = styled.div`
  width: 25%;
  padding: 0 20px;

  h4 {
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme.mainColor};
    margin-bottom: 0.5em;
  }
  p {
    margin: 0 0 1em 0;
  }
`;

function DeliveryAndPayment() {
  return (
    <div className="wrapper">
      <h2>Доставка и оплата</h2>
      <Styled>
        <Block>
          <h4>60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</h4>
          <div className="text">
            <p>Если мы не успеем доставить любые продукты, кроме сувенирной продукции, в течение 60 минут, курьер подарит вам сертификат на большую пиццу.</p>
          </div>
        </Block>
        <Block>
          <h4>ДОДО ПИЦЦА — СЕТЬ ПИЦЦЕРИЙ № 1 В РОССИИ</h4>
          <p>по доставке пиццы по данным из отчета Euromonitor International на май 2017 года.</p>
          <p>Все цены в меню указаны без учета скидок.</p>
        </Block>
        <Block>
          <h4>495 ₽</h4>
          <p>Минимальная сумма доставки без учета сувениров</p>

          <h4>7 000 ₽</h4>
          <p>Максимальная сумма при оплате наличными</p>
          <p>Изображения продуктов могут отличаться от продуктов в заказе.</p>
        </Block>
        <Block>
          <h4>ЗОНА ДОСТАВКИ ОГРАНИЧЕНА</h4>
        </Block>
      </Styled>
    </div>
  );
}

export default DeliveryAndPayment;
