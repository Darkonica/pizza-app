import React, { Fragment, Component } from 'react';
import Link from 'next/link';
import ReactSVG from 'react-svg';
import styled from 'styled-components';
import Button from '../Layout/Button/Button';

const Block = styled.div`
    color: #FFF;
    font-weight: 500;
    padding: 5px 0;
    background-color: ${props => props.theme.mainColor};

    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const LeftPart = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;

    .svg {
        width: 50px;
        margin-right: 15px;
    }
    svg {
        display: inline-block;
        vertical-align: top;
        max-width: 100%;
        max-height: 100%;
        width: 100%;
    }
`;

class SecretBuyer extends Component {
    render() {
        return (
            <Block>
                <div className="wrapper">
                    <LeftPart>
                        <ReactSVG src="static/images/secret-buyer.svg" className="svg" />
                        Стань тайным покупателем Додо Пиццы и получи пиццу в подарок
                    </LeftPart>
                    <Button white link={'/secret-buyer-form'}>
                        Заполнить анкету
                    </Button>
                </div>
            </Block>
        );
    }
}

export default SecretBuyer;