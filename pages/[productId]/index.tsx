import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import Main from "../../components/Layout/Main/Main";
import ProductInfos from "../../components/Products/ProductInfos";
import BestGear from "../../components/Cards/BestGear";

const Product: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState({});
  console.log(productId);
  //useEffect
  useEffect(() => {
    axios
      .get(
        `https://firestore.googleapis.com/v1/projects/audiophile-ecommerce-74670/databases/(default)/documents/headphones/${productId}`
      )
      .then((res) => setProduct(res.data.fields));
  }, [productId]);

  console.log(product);

  return (
    <React.Fragment>
      <Header />
      <Main>
        {product && <ProductInfos data={product} />}
        <BestGear />
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default Product;
