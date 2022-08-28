import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import Main from "../../components/Layout/Main/Main";
import ProductInfos from "../../components/Products/ProductInfos";
import BestGear from "../../components/Cards/BestGear";

type ProductType = {
  price: { integerValue: number };
  name: { stringValue: string };
  description: { stringValue: string };
  features: { stringValue: string };
};

const Product: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    axios
      .get(
        `https://firestore.googleapis.com/v1/projects/audiophile-ecommerce-74670/databases/(default)/documents/headphones/${productId}`
      )
      .then((res) => {
        console.log("response", res.data.fields);
        setProduct(res.data.fields);
      });
  }, [productId]);

  console.log("product", product);

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
