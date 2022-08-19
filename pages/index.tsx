import React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Layout/Header/Header";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
};

export default Home;
