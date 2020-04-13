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

  ${props => {
    if (props.secondary && props.red) {
      return css`
          color: ${props.theme.mainColor};
          font-weight: 400;
          background-color: transparent;
          border: 1px solid ${props.theme.mainColor};

          &:hover {
            color: ${props.theme.mainHoverColor};
            background-color: #fff;
            border: 1px solid ${props.theme.mainHoverColor};
          }
        `;
    } if (props.secondary) {
      return css`
        color: #272727;
        font-weight: 400;
        background-color: transparent;
        border: 1px solid #b2b2b2;

        &:hover {
          color: ${props.theme.mainColor};
          background-color: #fff;
          border: 1px solid ${props.theme.mainColor};
        }
      `;
    }
    if (props.white) {
      return css`
        background-color: transparent;
        border: 1px solid #fff;
        
        &:hover {
          color: ${props.theme.mainColor};
          background-color: #fff;
          border: 1px solid ${props.theme.mainColor};
        }
      `;
    }

    return null;
  }
  }`;

export default StyledButton;
