import React, { Component } from 'react';
import Product from './Product/Product';
import styled from 'styled-components';

const StyledProducts = styled.div`
    display: flex;
    justify-content: space-between;
`;

class Products extends Component {
    render() {
        return (
            <div className="wrapper">
                <StyledProducts>
                    <Product
                        
                    />
                </StyledProducts>
            </div>
        );
    }
}

export default Products;