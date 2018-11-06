import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
    color: #FFF;
    padding: 10px;
    border: 1px solid #FFF;
    border-radius: 10px;
    box-shadow: none;
    background: none;
`;

const Button = props => {
    return (
        <div>
            <Link href={props.link}>
                <StyledButton>{props.children}</StyledButton>
            </Link>
        </div>
    );
};

export default Button;