import React, { Component } from "react";
import Layout from "../../Layout/DefaultLayout/DefaultLayout";
import HomeSlider from "../../HomeSlider/HomeSlider";
import SecretBuyer from "../../SecretBuyer/SecretBuyer";
import Promocode from "../../Promocode/Promocode";
import Products from "../../Products/Products";
import DeliveryAndPayment from "../../DeliveryAndPayment/DeliveryAndPayment";

class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="content-wrapper">
          <HomeSlider />
          <Promocode />

          <Products />

          <DeliveryAndPayment />
        </div>

        <SecretBuyer />
      </Layout>
    );
  }
}

export default Index;
