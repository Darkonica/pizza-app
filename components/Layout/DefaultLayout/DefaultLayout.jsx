import React from 'react';
import Head from 'next/head';
import Header from '../Header/Header';

import 'static/styles/common.css';

const DefaultLayout = props => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            {props.children}
        </div>
    );
};

export default DefaultLayout;