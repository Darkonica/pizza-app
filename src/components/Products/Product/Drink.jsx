import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../Layout/Button/Button';

import image from '../../../static/images/drink-mors.jpg';

const StyledProduct = styled.div`
  width: 16.66666666666667%;
  padding: 0 20px;
  margin-bottom: 60px;

  .img-cont img {
    margin: 0 auto;
  }
  .title {
    font-size: 18px;
    line-height: 1.1;
    margin: 10px 0;
  }

  .order-cont {
    margin-top: 20px;
    text-align: center;

    .price {
      font-size: 26px;
      margin-bottom: 5px;
    }
  }
`;

class Product extends Component {
  state = {};

  render() {
    return (
      <StyledProduct>
        <div className="title">Морс Черная смородина, 0,45 л</div>
        <div className="img-cont">
          <img src={image} alt="" />
        </div>

        <div className="order-cont">
          <div className="price">
            145 <span>₽</span>
          </div>
          <Button secondary red>
            В корзину
          </Button>
        </div>
      </StyledProduct>
    );
  }
}

export default Product;
