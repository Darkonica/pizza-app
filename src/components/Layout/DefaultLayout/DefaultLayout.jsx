import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from '../Header';
import { Footer } from '../Footer';

import '../../../static/styles/fonts.css';
import '../../../static/styles/common.css';

const theme = {
  mainColor: '#FF6900',
  mainHoverColor: '#d96334',
  grayColor: '#878686',
  lightgrayColor: '#e6e6e6',
  textColor: '#373535',
};

const DefaultLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </ThemeProvider>
    </>
  );
};

export default DefaultLayout;
