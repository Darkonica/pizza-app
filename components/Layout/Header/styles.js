import styled from 'styled-components';

const Styles = styled.div`
  header {
    padding: 30px 0;
  }
  .upper-part {
    display: flex;

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
  }
  
  .lower-part {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    nav {
      ul {
        padding: 0;

        li {
          display: inline-block;
          margin-left: 1.5em;

          &:first-of-type {
            margin-left: 0;
          }

          a {
            font-size: 14px;
            color: #272727;
            text-decoration: none;
            padding: 1.5em 0;
          }
        }
      }
    }
  }
`;

export default Styles;