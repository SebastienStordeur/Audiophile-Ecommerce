import React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import axios from "axios";
import Main from "../components/Layout/Main/Main";
import BestGear from "../components/Cards/BestGear";
import SignupForm from "../components/Forms/SignupForm";
import CategoryCard from "../components/Cards/CategoryCard";
import SubHeader from "../components/SubHeaders/SubHeader";

const Home: NextPage = () => {
  /*   useEffect(() => {
    axios
      .get(
        "https://firestore.googleapis.com/v1/projects/audiophile-ecommerce-74670/databases/(default)/documents/headphones",
        {}
      )
      .then((res) => console.log(res.data.documents));
  }, []); */

  return (
    <React.Fragment>
      <Header />
      <Main>
        <SubHeader />
        <CategoryCard
          title="headphones"
          image="/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
        />
        <CategoryCard title="speakers" />
        <CategoryCard title="earphones" />
        <BestGear />
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
