import React, { Component } from 'react';
import Product from './Product/Product';
import Drink from './Product/Drink';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import styled from 'styled-components';

configureAnchors({offset: -80, scrollDuration: 800});

const StyledProducts = styled.div`
    
`;

const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -20px;
`;

class Products extends Component {
    render() {
        return (
            <div className="wrapper">
                <StyledProducts>
                    <ScrollableAnchor id={'pizza'}>
                        <ProductContainer>
                            <Product pizza />
                            <Product pizza />
                            <Product pizza />
                            <Product pizza />
                            <Product pizza />
                            <Product pizza />
                            <Product pizza />
                        </ProductContainer>
                    </ScrollableAnchor>
                    
                    <h2>Комбо</h2>
                    <ScrollableAnchor id={'combo'}>
                        <ProductContainer>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </ProductContainer>
                    </ScrollableAnchor>

                    <h2>Напитки</h2>
                    <ScrollableAnchor id={'drinks'}>
                        <ProductContainer>
                            <Drink />
                            <Drink />
                            <Drink />
                            <Drink />
                            <Drink />
                            <Drink />
                            <Drink />
                            <Drink />
                            <Drink />
                        </ProductContainer>
                    </ScrollableAnchor>
                    
                </StyledProducts>
            </div>
        );
    }
}

export default Products;