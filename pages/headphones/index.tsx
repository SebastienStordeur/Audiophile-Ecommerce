import React, { useEffect, useState } from "react";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main";
import axios from "axios";
import BestGear from "../../components/Cards/BestGear";
import ProductCard from "../../components/Cards/ProductCard";
import Section from "../../components/Layout/Section/Section";

const Headphones: React.FC = () => {
  const [headphones, setHeadphones] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://firestore.googleapis.com/v1/projects/audiophile-ecommerce-74670/databases/(default)/documents/headphones"
      )
      .then((res) => {
        console.log(res.data.documents);
        return setHeadphones(res.data.documents);
      });
  }, []);

  console.log(headphones);
  return (
    <>
      <Header />
      <Main>
        <Section className="grid grid-cols-1 gap-28">
          {headphones.map(
            (headphone: /* create interface */ {
              name: string;
              fields: {
                name: {
                  stringValue: string;
                };
                description: {
                  stringValue: string;
                };
                image: {
                  stringValue: string;
                };
              };
            }) => {
              console.log(headphone.fields.image.stringValue);
              return (
                <ProductCard
                  key={headphone.name.split("/").pop()}
                  name={headphone.fields.name.stringValue}
                  description={headphone.fields.description.stringValue}
                  cover={`/${headphone.fields.image.stringValue}`}
                />
              );
            }
          )}
        </Section>
        <BestGear />
      </Main>
      <Footer />
    </>
  );
};

export default Headphones;
