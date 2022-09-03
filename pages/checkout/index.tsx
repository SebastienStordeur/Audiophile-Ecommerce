import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import CheckoutForm from "../../components/Forms/CheckoutForm";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";

const CheckoutPage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Audiophile - Checkout</title>
        <meta name="description" content="Checkout page" />
      </Head>
      <Header />
      <section className="mx-6 max-w-[1110px] md:mx-auto">
        <CheckoutForm />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default CheckoutPage;
