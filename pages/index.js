import React, { Component } from 'react';
import Layout from '../components/Layout/DefaultLayout/DefaultLayout';
import SpyInspector from '../components/SpyInspector/SpyInspector';

class Index extends Component {
    render() {
        return (
            <Layout>
                <SpyInspector />
            </Layout>
        );
    }
}

export default Index;