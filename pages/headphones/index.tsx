import React from "react";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main";
import BestGear from "../../components/Cards/BestGear";
import ProductCard from "../../components/Cards/ProductCard";
import Section from "../../components/Layout/Section/Section";

import data from "../../data/data.json";

const Headphones: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Section className="grid grid-cols-1 gap-28">
          {data.headphones.map((headphone) => {
            return <ProductCard data={headphone} key={headphone.id} />;
          })}
        </Section>
        <BestGear />
      </Main>
      <Footer />
    </>
  );
};

export default Headphones;
