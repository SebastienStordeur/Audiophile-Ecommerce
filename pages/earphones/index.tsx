import React, { useState, useEffect } from "react";
import data from "../../data/data.json";

import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main";
import BestGear from "../../components/Cards/BestGear";
import Section from "../../components/Layout/Section/Section";
import ProductCard from "../../components/Cards/ProductCard";
import Categories from "../../components/Categories/Categories";
import { NextPage } from "next";
import Head from "next/head";

const Earphones: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Audiophile - Earphones</title>
        <meta name="description" content="Earphones page" />
      </Head>
      <Header />
      <Main>
        <Section className="grid grid-cols-1 gap-28">
          {data.earphones.map((earphone) => {
            return <ProductCard data={earphone} key={earphone.id} />;
          })}
        </Section>
        <Categories />
        <BestGear />
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default Earphones;
