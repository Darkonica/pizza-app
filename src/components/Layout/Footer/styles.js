import styled from "styled-components";

const Styles = styled.div`
  footer {
    color: #fff;
    background-color: ${props => props.theme.textColor};

    a {
      color: #fff;
      opacity: 0.7;
      text-decoration: none;

      &:hover {
        opacity: 1;
      }
    }

    .upper-part {
      padding: 30px 0 20px;

      .line-cont {
        display: flex;
        justify-content: space-between;

        &:first-of-type {
          margin-bottom: 60px;
        }
      }

      .menu-cont {
        display: flex;

        .menu-block {
          margin-left: 50px;

          &:first-of-type {
            margin-left: 0;
          }

          .title {
            font-weight: bold;
            letter-spacing: 0.2px;
            margin-bottom: 5px;
          }
          ul {
            padding: 0;
            margin: 0;
            list-style: none;

            li {
              line-height: 1.8;
            }
          }
        }
      }

      .contacts {
        text-align: right;

        .phone {
          font-size: 26px;
          letter-spacing: 0.4px;
        }
        .desc {
          font-size: 14px;
          color: ${props => props.theme.grayColor};
        }
        .email {
          margin-top: 10px;
        }
      }

      .data-cont {
        display: flex;

        .data-block {
          max-width: 320px;
          width: 100%;
          margin-right: 50px;

          .title {
            font-size: 24px;
            font-weight: 500;
          }
          .text {
            opacity: 0.7;
          }
        }
      }

      .socials-cont {
        display: flex;
        align-items: flex-end;

        .social {
          display: flex;
          align-items: center;
          margin-left: 10px;

          .svg {
            width: 24px;
            height: 24px;
            line-height: 0;
            margin-top: -2px;
            margin-right: 3px;
          }
        }
      }
    }
    .lower-part {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      border-top: 1px solid #4e4b4b;

      ul {
        display: inline-block;
        padding: 0;
        margin: 0;

        li {
          display: inline-block;
          margin-left: 1.5em;
          line-height: 26px;

          &:first-of-type {
            margin-left: 0;
          }

          &.copyright {
            opacity: 0.7;

            > div {
              display: inline-block;
            }

            .svg {
              width: 110px;
              display: inline-block;
              margin-right: 5px;
              fill: #fff;
              vertical-align: top;
            }
          }
        }
      }

      .app-links {
        display: flex;

        .social {
          display: block;
          height: 40px;
          margin-left: 10px;
          opacity: 1;

          svg {
            display: block;
            height: 40px;
            width: auto;
          }
        }
      }
    }
  }
`;

export default Styles;
