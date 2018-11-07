import React, { Component } from 'react';
import Layout from '../components/Layout/DefaultLayout/DefaultLayout';
import SecretBuyer from '../components/SecretBuyer/SecretBuyer';

class Index extends Component {
    render() {
        return (
            <Layout>
                <SecretBuyer />
            </Layout>
        );
    }
}

export default Index;