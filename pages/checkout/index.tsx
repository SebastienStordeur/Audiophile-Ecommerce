import { NextPage } from "next";
import React from "react";
import Cart from "../../components/Cart/Cart";
import CheckoutForm from "../../components/Forms/CheckoutForm";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";

const CheckoutPage: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="mx-6">
        <CheckoutForm />
        {/*  <Cart /> */}
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default CheckoutPage;
