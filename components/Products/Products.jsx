import React, { Component } from 'react';
import Product from './Product/Product';
import styled from 'styled-components';

const StyledProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -20px;
`;

class Products extends Component {
    render() {
        return (
            <div className="wrapper">
                <StyledProducts>
                    <Product
                        
                    />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    
                </StyledProducts>
            </div>
        );
    }
}

export default Products;