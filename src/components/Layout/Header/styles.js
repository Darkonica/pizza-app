import styled from 'styled-components';

export const HeaderStyles = styled.header`
  padding-top: 25px;
  padding-bottom: 5px;

  .upper-part {
    display: flex;
    justify-content: space-between;

    .logo {
      width: 250px;
    }

    .delivery-info {
      font-size: 18px;
      margin-left: 65px;

      .orange {
        color: ${props => props.theme.mainColor};
      }
    }
    .phone {
      font-size: 18px;
      margin-left: 65px;
    }
    .desc {
      color: ${props => props.theme.grayColor};
      font-size: 14px;
    }

    .login-cont {
      button {
        margin-left: 10px;
      }
    }
  }
`;

export const LowerPartStyles = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
  border-bottom: ${props => (props.scroll ? `1px solid ${props.theme.lightgrayColor}` : 'none')};
  padding-bottom: ${props => (props.scroll ? '0px' : '1px')};

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }

  nav {
    ul {
      padding: 0;
      margin: 0;
      transition: transform 0.15s ease-out;
      transform: translateX(${props => (props.scroll ? '0px' : '-52px')});

      li {
        display: inline-block;
        vertical-align: middle;
        margin-right: 16px;

        &:last-of-type {
          margin-right: 0;
        }

        a {
          display: block;
          font-size: 14px;
          color: #272727;
          text-decoration: none;
          padding: 1em 0;
          transition: color 0.15s ease-out;

          &:hover,
          &.active {
            color: ${props => props.theme.mainColor};
          }
        }

        &.logo-mini {
          margin-top: -4px;

          a {
            width: 36px;
            padding: 0;
            line-height: 0;
          }
        }
      }
    }
  }

  .cart {
    display: flex;
    align-items: center;
    padding: 10px 0;

    .info {
      font-size: 14px;
      margin-right: 30px;

      .price {
        font-weight: 500;
      }

      .items {
        color: ${props => props.theme.grayColor};
      }
    }
  }
`;
