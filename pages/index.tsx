import React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Main from "../components/Layout/Main/Main";
import BestGear from "../components/Cards/BestGear";
import SubHeader from "../components/SubHeaders/SubHeader";
import Categories from "../components/Categories/Categories";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Audiophile - Home</title>
        <meta name="description" content="Home page" />
      </Head>
      <Header />
      <Main>
        <SubHeader />
        <Categories />
        <BestGear />
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
