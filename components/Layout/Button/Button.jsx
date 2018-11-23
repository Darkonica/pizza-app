import React, { Fragment } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
    font: inherit;
    color: ${props => props.secondary ? "#272727" : "#FFF"};
    font-size: 14px;
    font-weight: ${props => props.secondary ? "400" : "500"};
    padding: ${props => props.small ? "5px 15px;" : "10px 15px;"};
    border: ${props => props.white ? "1px solid #FFF" : props.secondary ? "1px solid #B2B2B2" : "none"};
    border-radius: ${props => props.small ? "6px" : "8px"};
    box-shadow: none;
    background-color: ${props => (props.white || props.secondary) ? "transparent" : props.theme.mainColor };
    transition: all 0.15s ease-out;
    cursor: pointer;

    &:hover {
        color: ${props => (props.white || props.secondary) ? props.theme.mainColor : "#FFF"};
        background: ${props => (props.white || props.secondary) ? "#FFF" : props.theme.mainColor};
        border: ${props => props.white ? "1px solid #FFF" : props.secondary ? `1px solid ${props.theme.mainColor}` : "none"};
    }
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