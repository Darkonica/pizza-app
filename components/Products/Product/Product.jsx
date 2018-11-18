import React, { Component } from 'react';
import Button from '../../Layout/Button/Button';
import styled from 'styled-components';

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
    .choices-cont {
        display: flex;
        margin: 15px 0;
        border-radius: 8px;
        background: #f3f3f3;
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
    flex: 1 0 0;
    display: block;
    font-size: 12px;
    color: rgba(55, 53, 53, 0.65);
    text-align: center;
    padding: 6px 0;
    background: none;
    border: 1px solid transparent;
    cursor: pointer;

    &.active {
        color: #373535;
        border: 1px solid #373535;
        border-radius: 8px;
        background-color: #fff;
    }
`;

class Product extends Component {
    state = {
        size: 'L',
        doughType: 'standard'
    }

    handleSize = e => {
        e.preventDefault();
        this.setState({
            size: e.target.name
        });
    }

    handleDough = e => {
        e.preventDefault();
        this.setState({
            doughType: e.target.name
        });
    }

    render() {
        const { size, doughType } = this.state;
        return (
            <StyledProduct>
                <div className="img-cont">
                    <img src="/static/images/pizza-dodo-sm.jpg" />
                </div>
                <div className="title">Четыре сезона</div>
                <div className="desc">
                    Ветчина, пикантная пепперони, томатный соус, кубики брынзы, шампиньоны, моцарелла, томаты и орегано
                </div>
                <div className="choices-cont">
                    <ChoiceButton
                        name='L'
                        className={size === 'L' ? 'active' : null}
                        onClick={this.handleSize}
                    >
                        35 см
                    </ChoiceButton>
                    <ChoiceButton
                        name='M'
                        className={size === 'M' ? 'active' : null}
                        onClick={this.handleSize}
                    >
                        30 см
                    </ChoiceButton>
                    <ChoiceButton
                        name='S'
                        className={size === 'S' ? 'active' : null}
                        onClick={this.handleSize}
                    >
                        25 см
                    </ChoiceButton>
                </div>
                <div className="choices-cont">
                    <ChoiceButton
                        name='standard'
                        className={doughType === 'standard' ? 'active' : null}
                        onClick={this.handleDough}
                    >
                        Традиционное
                    </ChoiceButton>
                    <ChoiceButton
                        name='thin'
                        className={doughType === 'thin' ? 'active' : null}
                        onClick={this.handleDough}
                    >
                        Тонкое
                    </ChoiceButton>
                </div>
                <div className="order-cont">
                    <span className="price">395 <span>₽</span></span>
                    <Button secondary>В корзину</Button>
                </div>
            </StyledProduct>
        );
    }
}

export default Product;