import React, { Component } from 'react';
import Layout from '../components/Layout/DefaultLayout/DefaultLayout';
import HomeSlider from '../components/HomeSlider/HomeSlider';
import SecretBuyer from '../components/SecretBuyer/SecretBuyer';
import Promocode from '../components/Promocode/Promocode';
import Products from '../components/Products/Products';

class Index extends Component {
    render() {
        return (
            <Layout>
                <HomeSlider />
                <Promocode />
                
                <Products />

                <SecretBuyer />
            </Layout>
        );
    }
}

export default Index;