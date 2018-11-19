import React, { Component } from 'react';
import Product from './Product/Product';
import Drink from './Product/Drink';
import styled from 'styled-components';

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
                    <ProductContainer>
                        <Product pizza />
                        <Product pizza />
                        <Product pizza />
                        <Product pizza />
                        <Product pizza />
                        <Product pizza />
                        <Product pizza />
                    </ProductContainer>
                    

                    <h2>Комбо</h2>
                    <ProductContainer>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </ProductContainer>

                    <h2>Напитки</h2>
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
                        <Drink />
                        <Drink />
                        <Drink />
                        <Drink />
                        <Drink />
                    </ProductContainer>
                    
                </StyledProducts>
            </div>
        );
    }
}

export default Products;