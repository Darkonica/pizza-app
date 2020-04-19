import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton from './styles';

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
