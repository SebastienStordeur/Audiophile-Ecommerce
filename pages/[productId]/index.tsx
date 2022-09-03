import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import Main from "../../components/Layout/Main/Main";
import ProductInfos from "../../components/Products/ProductInfos";
import BestGear from "../../components/Cards/BestGear";
import data from "../../data/data.json";
import Categories from "../../components/Categories/Categories";
import Head from "next/head";

const Product: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    setProduct(
      data.headphones.find((headphone) => headphone.id === productId) ||
        data.earphones.find((earphone) => earphone.id === productId) ||
        data.speakers.find((speaker) => speaker.id === productId)
    );
  }, [productId]);

  return (
    <React.Fragment>
      <Head>
        <title>Audiophile - {product.name}</title>
        <meta name="description" content={`${product.name} page`} />
      </Head>
      <Header />
      <Main>
        {product && <ProductInfos data={product} />}
        <Categories />
        <BestGear />
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default Product;
