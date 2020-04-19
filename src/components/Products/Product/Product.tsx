import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'components/Layout/Button';

import image from 'static/images/pizza-dodo-sm.jpg';

const StyledProduct = styled.div`
  margin-bottom: 60px;
  padding: 0 20px;
  width: 25%;

  .img-cont img {
    margin: 0 auto;
  }
  .title {
    font-size: 20px;
    margin: 10px 0;
  }
  .desc {
    color: #878686;
    font-size: 15px;
  }
  .sizes-cont {
    background: #f3f3f3;
    border-radius: 8px;
    display: flex;
    margin: 15px 0;
  }
  .dough-cont {
    border-radius: 8px;
    display: flex;
    margin: 15px 0;

    &.bg-gray {
      background: #f3f3f3;
    }
  }

  .order-cont {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .price {
      font-size: 26px;
    }
  }
`;

const ChoiceButton = styled.button`
  width: 40%;
  display: block;
  font-size: 12px;
  color: rgba(55, 53, 53, 0.65);
  text-align: center;
  padding: 6px 0;
  background: none;
  border: 1px solid transparent;
  cursor: pointer;

  ${props => (props.wide ? 'width: 60%;' : '')};

  &.active {
    background-color: #fff;
    border: 1px solid ${props => props.theme.textColor};
    border-radius: 8px;
    color: ${props => props.theme.textColor};
  }
`;

function Product({ pizza }) {
  const [size, setSize] = useState('S');
  const [doughType, setDoughType] = useState('standard');

  const handleSize = e => {
    e.preventDefault();

    if (e.target.name === 'S') {
      setDoughType('standard');
    }

    setSize(e.target.name);
  };

  const handleDough = e => {
    e.preventDefault();
    setDoughType(e.target.name);
  };

  return (
    <StyledProduct>
      <div className="img-cont">
        <img src={image} alt="" />
      </div>
      <div className="title">Четыре сезона</div>
      <div className="desc">Ветчина, пикантная пепперони, томатный соус, кубики брынзы, шампиньоны, моцарелла, томаты и орегано</div>

      {pizza && (
        <>
          <div className="sizes-cont">
            <ChoiceButton name="L" className={size === 'L' ? 'active' : null} onClick={handleSize}>
              35 см
            </ChoiceButton>
            <ChoiceButton name="M" className={size === 'M' ? 'active' : null} onClick={handleSize}>
              30 см
            </ChoiceButton>
            <ChoiceButton name="S" className={size === 'S' ? 'active' : null} onClick={handleSize}>
              25 см
            </ChoiceButton>
          </div>
          <div className={`dough-cont ${size !== 'S' ? 'bg-gray' : null}`}>
            <ChoiceButton wide name="standard" className={doughType === 'standard' ? 'active' : null} onClick={handleDough}>
              Традиционное
            </ChoiceButton>
            {/* NO THIN DOUGH FOR S SIZE! */}
            {size !== 'S' && (
              <ChoiceButton name="thin" className={doughType === 'thin' ? 'active' : null} onClick={handleDough}>
                Тонкое
              </ChoiceButton>
            )}
          </div>
        </>
      )}

      <div className="order-cont">
        <span className="price">
          395 <span>₽</span>
        </span>
        <Button secondary red>
          В корзину
        </Button>
      </div>
    </StyledProduct>
  );
}

export default Product;
