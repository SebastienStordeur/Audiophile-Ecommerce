import React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Main from "../components/Layout/Main/Main";
import BestGear from "../components/Cards/BestGear";
import CategoryCard from "../components/Cards/CategoryCard";
import SubHeader from "../components/SubHeaders/SubHeader";
import AdsProducts from "../components/Cards/AdsProducts";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <SubHeader />
        <section className="grid gap-y-16 py-10 px-6">
          <CategoryCard
            title="headphones"
            image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          />

          <CategoryCard
            title="speakers"
            image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          />
          <CategoryCard
            title="earphones"
            image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          />
        </section>
        <section className="px-6">
          <AdsProducts
            className="h-[600px] bg-brown px-6 text-white"
            name="ZX9 speaker"
            description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
            image="/assets/home/mobile/image-speaker-zx9.png"
          />
          <AdsProducts
            className="h-[600px] px-6 text-black"
            name="ZX7 speaker"
            image="/assets/home/mobile/image-speaker-zx7.jpg"
          />
          <AdsProducts
            className="h-[600px] bg-brown px-6 text-black"
            name="YX1 Earphones"
            image="/assets/home/mobile/image-earphones-yx1.jpg"
          />
        </section>
        <BestGear />
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
