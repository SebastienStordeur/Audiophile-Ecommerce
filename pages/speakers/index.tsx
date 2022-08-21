import React, { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main";

const Speakers: React.FC = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    axios.get("url").then((res) => {
      console.log(res.data.documents);
      return setSpeakers(res.data.documents);
    });
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Main>
        <h1></h1>
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default Speakers;
