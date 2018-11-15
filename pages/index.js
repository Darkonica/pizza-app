import React, { Component } from 'react';
import Layout from '../components/Layout/DefaultLayout/DefaultLayout';
import HomeSlider from '../components/HomeSlider/HomeSlider';
import SecretBuyer from '../components/SecretBuyer/SecretBuyer';
import Promocode from '../components/Promocode/Promocode';

class Index extends Component {
    render() {
        return (
            <Layout>
                <HomeSlider />
                <Promocode />
                
                <SecretBuyer />
            </Layout>
        );
    }
}

export default Index;