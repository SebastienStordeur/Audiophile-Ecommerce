import React from "react";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main";
import BestGear from "../../components/Cards/BestGear";
import ProductCard from "../../components/Cards/ProductCard";
import Section from "../../components/Layout/Section/Section";

import data from "../../data/data.json";
import Categories from "../../components/Categories/Categories";
import { NextPage } from "next";
import Head from "next/head";

const Headphones: NextPage = () => {
  return (
    <>
      <Head>
        <title>Audiophile - Headphones</title>
        <meta name="description" content="Headphones page" />
      </Head>
      <Header />
      <Main>
        <Section className="grid grid-cols-1 gap-28 ">
          {data.headphones.map((headphone) => {
            return <ProductCard data={headphone} key={headphone.id} />;
          })}
        </Section>
        <Categories />
        <BestGear />
      </Main>
      <Footer />
    </>
  );
};

export default Headphones;
