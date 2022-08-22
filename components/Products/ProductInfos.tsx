import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

interface ProductInfosI {
  data: {
    price: {
      integerValue: number;
    };
    name: {
      stringValue: string;
    };
    description: {
      stringValue: string;
    };
    image: {
      stringValue: string;
    };
    features: {
      stringValue: string;
    };
    box?: any;
  };
}

const ProductInfos: React.FC<ProductInfosI> = (props) => {
  const [quantity, setQuantity] = useState<number>(1);

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {};

  const addToCartHandler = () => {};

  return (
    <section className="w-11/12 mx-auto">
      <h2 className=" font-bold text-[28px] leading-9 uppercase">
        {props.data.name.stringValue}
      </h2>
      <p className="my-6 font-medium text-[15px] leading-6 opacity-50">
        {props.data.description.stringValue}
      </p>

      <p className="font-bold leading-6 text-lg">{`$ ${props.data.price.integerValue}`}</p>
      <div className="flex mt-8 mb-20">
        <Input
          type="number"
          className=""
          id="quantity"
          value={quantity} /* onChange={changeHandler} */
        />
        <Button className="bg-brown text-white" label="Add do cart">
          Add to cart
        </Button>
      </div>

      <h3 className="font-bold text-2xl uppercase mb-6">Features</h3>
      <p className="text-[15px] font-medium leading-6 opacity-50">
        {props.data.features.stringValue}
      </p>

      <h3 className="font-bold text-2xl uppercase mb-6 mt-20">In the box</h3>
    </section>
  );
};

export default ProductInfos;
