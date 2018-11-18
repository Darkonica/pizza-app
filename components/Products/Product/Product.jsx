import React, { Component } from 'react';
import styled from 'styled-components';

const StyledProduct = styled.div`
    width: 25%;
`;

class Product extends Component {
    render() {
        return (
            <StyledProduct>
                <div className="img-cont">
                    <img src="pizza-dodo-sm.jpg" />
                </div>
                <div className="title">Четыре сезона</div>
                <div className="desc">
                    Ветчина, пикантная пепперони, томатный соус, кубики брынзы, шампиньоны, моцарелла, томаты и орегано
                </div>
                <div className="sizes-cont">
                    <div>35 см</div>
                    <div>30 см</div>
                    <div>25 см</div>
                </div>
                <div className="dough">
                    Традиционное
                </div>
            </StyledProduct>
        );
    }
}

export default Product;