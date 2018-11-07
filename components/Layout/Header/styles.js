import styled from 'styled-components';

const Styles = styled.div`
  header {
    padding-top: 30px
  }
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
        color: #FF6900;
      }
    }
    .phone {
      font-size: 18px;
      margin-left: 65px;
    }
    .desc {
      color: #888;
      font-size: 14px;
    }

    .login-cont {
      button {
        margin-left: 10px;
      }
    }
  }
  
  .lower-part {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;

    nav {
      ul {
        padding: 0;
        margin: 0;

        li {
          display: inline-block;
          margin-left: 1.5em;

          &:first-of-type {
            margin-left: 0;
          }

          a {
            display: block;
            font-size: 14px;
            color: #272727;
            text-decoration: none;
            padding: 1em 0;
            transition: color 0.15s ease-out;

            &:hover, &.active {
              color: #FF6900;
            }
          }
        }
      }
    }
  }
`;

export default Styles;