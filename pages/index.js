import React, { Component } from 'react';
import Layout from '../components/Layout/DefaultLayout/DefaultLayout';
import HomeSlider from '../components/HomeSlider/HomeSlider';
import SecretBuyer from '../components/SecretBuyer/SecretBuyer';

class Index extends Component {
    render() {
        return (
            <Layout>
                <HomeSlider />
                
                <SecretBuyer />
            </Layout>
        );
    }
}

export default Index;