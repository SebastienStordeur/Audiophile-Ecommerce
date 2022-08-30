import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import Main from "../../components/Layout/Main/Main";
import ProductInfos from "../../components/Products/ProductInfos";
import BestGear from "../../components/Cards/BestGear";
import data from "../../data/data.json";

type ProductType = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: {
    paragraph: string;
  };
  box: { quantity: number; name: string }[];
  product_image: string;
  images: string[];
};

const Product: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState<any>();
  console.log(productId);

  useEffect(() => {
    setProduct(data.headphones.find((headphone) => headphone.id === productId));
  }, [productId]);
  console.log(data.headphones.find((headphone) => headphone.id === productId));

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
