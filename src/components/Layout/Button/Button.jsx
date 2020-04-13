import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  font: inherit;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: ${props => (props.small ? '5px 15px;' : '10px 15px;')};
  background-color: ${props => props.theme.mainColor};
  border: none;
  border-radius: ${props => (props.small ? '6px' : '8px')};
  box-shadow: none;
  transition: all 0.15s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.mainHoverColor};
  }

  ${props =>
    props.secondary && props.red
      ? css`
          color: ${props => props.theme.mainColor};
          font-weight: 400;
          background-color: transparent;
          border: 1px solid ${props => props.theme.mainColor};

          &:hover {
            color: ${props => props.theme.mainHoverColor};
            background-color: #fff;
            border: 1px solid ${props => props.theme.mainHoverColor};
          }
        `
      : props.secondary
        ? css`
          color: #272727;
          font-weight: 400;
          background-color: transparent;
          border: 1px solid #b2b2b2;

          &:hover {
            color: ${props => props.theme.mainColor};
            background-color: #fff;
            border: 1px solid ${props => props.theme.mainColor};
          }
        `
        : null}

  ${props =>
    props.white &&
    css`
      background-color: transparent;
      border: 1px solid #fff;

      &:hover {
        color: ${props => props.theme.mainColor};
        background-color: #fff;
        border: 1px solid ${props => props.theme.mainColor};
      }
    `}
`;

const Button = props => {
  const { link, children } = props;

  return (
    <>
      {link ? (
        <Link to={link}>
          <StyledButton {...props}>{children}</StyledButton>
        </Link>
      ) : (
          <StyledButton {...props}>{children}</StyledButton>
        )}
    </>
  );
};

export default Button;
