import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../Layout/Button/Button';

import image from '../../../static/images/pizza-dodo-sm.jpg';

const StyledProduct = styled.div`
  width: 25%;
  padding: 0 20px;
  margin-bottom: 60px;

  .img-cont img {
    margin: 0 auto;
  }
  .title {
    font-size: 20px;
    margin: 10px 0;
  }
  .desc {
    font-size: 15px;
    color: #878686;
  }
  .sizes-cont {
    display: flex;
    margin: 15px 0;
    border-radius: 8px;
    background: #f3f3f3;
  }
  .dough-cont {
    display: flex;
    margin: 15px 0;
    border-radius: 8px;

    &.bg-gray {
      background: #f3f3f3;
    }
  }

  .order-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: ${props => props.theme.textColor};
    border: 1px solid ${props => props.theme.textColor};
    border-radius: 8px;
    background-color: #fff;
  }
`;

class Product extends Component {
  state = {
    size: 'S',
    doughType: 'standard',
  };

  handleSize = e => {
    e.preventDefault();
    e.target.name === 'S' ? this.setState({ size: e.target.name, doughType: 'standard' }) : this.setState({ size: e.target.name });
  };

  handleDough = e => {
    e.preventDefault();
    this.setState({
      doughType: e.target.name,
    });
  };

  render() {
    const { pizza } = this.props;
    const { size, doughType } = this.state;

    return (
      <StyledProduct>
        <div className="img-cont">
          <img src={image} alt="" />
        </div>
        <div className="title">Четыре сезона</div>
        <div className="desc">Ветчина, пикантная пепперони, томатный соус, кубики брынзы, шампиньоны, моцарелла, томаты и орегано</div>
        {pizza ? (
          <>
            <div className="sizes-cont">
              <ChoiceButton name="L" className={size === 'L' ? 'active' : null} onClick={this.handleSize}>
                35 см
              </ChoiceButton>
              <ChoiceButton name="M" className={size === 'M' ? 'active' : null} onClick={this.handleSize}>
                30 см
              </ChoiceButton>
              <ChoiceButton name="S" className={size === 'S' ? 'active' : null} onClick={this.handleSize}>
                25 см
              </ChoiceButton>
            </div>
            <div className={`dough-cont ${size !== 'S' ? 'bg-gray' : null}`}>
              <ChoiceButton wide name="standard" className={doughType === 'standard' ? 'active' : null} onClick={this.handleDough}>
                Традиционное
              </ChoiceButton>
              {/* NO THIN DOUGH FOR S SIZE! */}
              {size !== 'S' ? (
                <ChoiceButton name="thin" className={doughType === 'thin' ? 'active' : null} onClick={this.handleDough}>
                  Тонкое
                </ChoiceButton>
              ) : null}
            </div>
          </>
        ) : null}

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
}

export default Product;
