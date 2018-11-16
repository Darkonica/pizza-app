import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Layout/Button/Button';

const PromoCode = styled.div`
    text-align: center;
    margin: 32px 0 48px;

    input {
        padding: 6px 15px;
        border: 1px solid #aaa;
        border-right: none;
        border-radius: 15px 0 0 15px;
        box-shadow: none;
    }
`;

const StyledButton = styled(Button)`
    color: #FF6900;
    padding: 4px 10px;
    border-radius: 0 15px 15px 0;
    border-color: #FF6900;
`;

class Promocode extends Component {

    state = {
        value: ''
    };

    onChange = (e) => {
        const value = e.target.value;
        console.log(value);
        this.setState({
            ...this.state,
            value
        });
    }

    onSubmit = () => {

    }

    render() {
        const { value } = this.state;

        return (
            <PromoCode>
                <input
                    type="text"
                    placeholder="Введите промокод"
                    value={value}
                    onChange={this.onChange}
                />
                <StyledButton secondary>Применить</StyledButton>
            </PromoCode>
        );
    }
}

export default Promocode;