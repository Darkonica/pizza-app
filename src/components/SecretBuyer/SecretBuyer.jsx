import React, { Fragment, Component } from "react";
import styled from "styled-components";
import Button from "../Layout/Button/Button";
import SecretBuyerImg from "../../static/images/secret-buyer.svg";

const Block = styled.div`
  color: #fff;
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

  svg {
    width: 50px;
    margin-right: 15px;
  }
`;

class SecretBuyer extends Component {
  render() {
    return (
      <Block>
        <div className="wrapper">
          <LeftPart>
            <SecretBuyerImg />
            <div>Стань тайным покупателем Додо Пиццы и получи пиццу в подарок</div>
          </LeftPart>
          <Button white link={"/secret-buyer-form"}>
            Заполнить анкету
          </Button>
        </div>
      </Block>
    );
  }
}

export default SecretBuyer;
