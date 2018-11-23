import React, { Fragment } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    font: inherit;
    color: #FFF;
    font-size: 14px;
    font-weight: 500;
    padding: ${props => props.small ? "5px 15px;" : "10px 15px;"};
    background-color: ${props => props.theme.mainColor};
    border: none;
    border-radius: ${props => props.small ? "6px" : "8px"};
    box-shadow: none;
    transition: all 0.15s ease-out;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.mainHoverColor};
    }

    ${props => (props.secondary && props.red)
        ?
        css`
            color: ${props => props.theme.mainColor};
            font-weight: 400;
            background-color: transparent;
            border: 1px solid ${props => props.theme.mainColor};

            &:hover {
                color: ${props => props.theme.mainHoverColor};
                background-color: #FFF;
                border: 1px solid ${props => props.theme.mainHoverColor};
            }
        `
        :
        props.secondary ? css`
            color: #272727;
            font-weight: 400;
            background-color: transparent;
            border: 1px solid #b2b2b2;

            &:hover {
                color: ${props => props.theme.mainColor};
                background-color: #FFF;
                border: 1px solid ${props => props.theme.mainColor};
            }
        `
        : null
    }

    ${props => props.white && css`
        background-color: transparent;
        border: 1px solid #FFF;

        &:hover {
            color: ${props => props.theme.mainColor};
            background-color: #FFF;
            border: 1px solid ${props => props.theme.mainColor};
        }
    `}
`;

const Button = props => {
    return (
        <Fragment>
            {
                props.link
                ?
                <Link href={props.link}>
                    <StyledButton {...props}>{props.children}</StyledButton>
                </Link>
                :
                <StyledButton {...props}>{props.children}</StyledButton>
            }
        </Fragment>
        
    );
};

export default Button;