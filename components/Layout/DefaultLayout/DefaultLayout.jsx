import React from 'react';
import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import 'static/styles/common.css';

const DefaultLayout = props => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet" />
            </Head>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;