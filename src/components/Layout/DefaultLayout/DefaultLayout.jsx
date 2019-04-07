import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "styled-components";

import "../../../static/styles/common.css";

const theme = {
  mainColor: "#FF6900",
  mainHoverColor: "#d96334",
  grayColor: "#878686",
  lightgrayColor: "#e6e6e6",
  textColor: "#373535",
};

const DefaultLayout = props => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Header />
          {props.children}
          <Footer />
        </Fragment>
      </ThemeProvider>
    </Fragment>
  );
};

export default DefaultLayout;
