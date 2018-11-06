import React, { Fragment, Component } from 'react';
import Link from 'next/link';
import ReactSVG from 'react-svg';
import styled from 'styled-components';
import Button from '../Layout/Button/Button';

const Block = styled.div`
    color: #FFF;
    background-color: #FF6900;

    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items; center;
        align-content: center;
        vertical-align: middle;
    }
`;

class SpyInspector extends Component {
    render() {
        return (
            <Block>
                <div className="wrapper">
                    <div>
                        <ReactSVG src="static/images/spy-inspector.svg" />
                        Стань тайным покупателем Додо Пиццы и получи пиццу в подарок
                    </div>
                    <Button white link={'/form'}>
                        Заполнить анкету
                    </Button>
                </div>
            </Block>
        );
    }
}

export default SpyInspector;