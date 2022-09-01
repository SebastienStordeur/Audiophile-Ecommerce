import React from "react";

import { useDispatch } from "react-redux";
import Image from "next/image";
import MainInfos from "./Subcomponents/MainInfos";
import Features from "./Subcomponents/Features";
import Box from "./Subcomponents/Box";
import ProductImages from "./Subcomponents/ProductImages";

interface ProductInfosI {
  data: {
    id: string;
    name: string;
    price: number;
    description: string;
    features: string[];
    box: { quantity: number; name: string }[];
    product_image: string;
    images: string[];
  };
}

const ProductInfos: React.FC<ProductInfosI> = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {};

  return (
    <section className="w-auto max-w-[1110px] mx-6 md:mx-10 lg:mx-40 xl:mx-auto">
      <MainInfos
        product_image={props.data.product_image}
        description={props.data.description}
        name={props.data.name}
        price={props.data.price}
      />
      <section className="md:mt-[120px] lg:flex lg:justify-between">
        <Features features={props.data.features} />
        <Box box={props.data.box} />
      </section>
      <ProductImages images={props.data.images} />
    </section>
  );
};

export default ProductInfos;
