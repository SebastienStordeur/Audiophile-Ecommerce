import React from "react";
import data from "../../data/data.json";

import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main";
import Section from "../../components/Layout/Section/Section";
import ProductCard from "../../components/Cards/ProductCard";
import BestGear from "../../components/Cards/BestGear";
import Categories from "../../components/Categories/Categories";
import { NextPage } from "next";

const Speakers: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <Section className="grid grid-cols-1 gap-28">
          {data.speakers.map((speaker) => {
            return <ProductCard data={speaker} key={speaker.id} />;
          })}
        </Section>
        <Categories />
        <BestGear />
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default Speakers;
