import React, { useState } from "react";

import ProductImage from "./ProductImage";
import BasicInfos from "./BasicInfos";

interface IMainInfos {
  name: string;
  product_image: string;
  description: string;
  price: number;
  id: string;
}

const MainInfos: React.FC<IMainInfos> = (props) => {
  return (
    <div className="md:flex">
      <ProductImage product_image={props.product_image} name={props.name} />
      <BasicInfos
        name={props.name}
        description={props.description}
        price={props.price}
        id={props.id}
      />
    </div>
  );
};

export default MainInfos;
