import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useDispatch } from "react-redux";
import Image from "next/image";

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
  const [quantity, setQuantity] = useState<number>(1);

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {};
  const addToCartHandler = () => {};

  return (
    <section className="w-auto mx-6">
      <div className="relative w-full h-80 mt-6">
        <Image
          src={props.data.product_image}
          alt={props.data.name}
          layout="fill"
        />
      </div>
      <h2 className=" font-bold text-[28px] leading-9 uppercase mt-6">
        {props.data.name}
      </h2>
      <p className="my-6 font-medium text-[15px] leading-6 opacity-50">
        {props.data.description}
      </p>
      <p className="font-bold leading-6 text-lg">{`$ ${props.data.price}`}</p>
      <div className="flex mt-8 mb-20">
        <Input
          type="number"
          className="w-[120px] h-12 px-2 bg-grey text-center font-bold text-[13px]"
          id="quantity"
          value={quantity}
          onChange={changeHandler}
        />
        <Button className="bg-brown text-white" label="Add do cart">
          Add to cart
        </Button>
      </div>

      <h3 className="font-bold text-2xl uppercase mb">Features</h3>
      {props.data.features.map((feature) => {
        return (
          <p
            key={Math.random().toString()}
            className="mt-6 font-medium text-[15px] leading-6 opacity-50"
          >
            {feature}
          </p>
        );
      })}
      <h3 className="font-bold text-2xl uppercase mb-6 mt-20">In the box</h3>
      <ul>
        {props.data.box.map((element) => {
          return (
            <li
              key={Math.random().toString()}
              className="text-[15px] leading-6"
            >
              <span className="text-brown font-bold mr-6">{`${element.quantity}x`}</span>
              <span className="font-medium opacity-50">{element.name}</span>
            </li>
          );
        })}
      </ul>
      <div className="mt-20">
        {props.data.images.map((image) => {
          return (
            <div
              className="relative w-full h-44 mb-5 rounded-lg overflow-hidden"
              key={Math.random().toString()}
            >
              <Image src={image} alt="" layout="fill" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductInfos;
