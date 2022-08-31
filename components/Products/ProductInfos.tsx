import React from "react";

import { useDispatch } from "react-redux";
import Image from "next/image";
import MainInfos from "./Subcomponents/MainInfos";

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
    <section className="w-auto mx-6 md:mx-10 lg:mx-40">
      <MainInfos
        product_image={props.data.product_image}
        description={props.data.description}
        name={props.data.name}
        price={props.data.price}
      />

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
      <div className="md:flex mt-20">
        <h3 className="font-bold text-2xl uppercase mb-6">In the box</h3>
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
      </div>
      <div className="mt-20">
        {props.data.images.map((image) => {
          return (
            <div
              className="relative w-full h-44 mb-5 rounded-lg overflow-hidden"
              key={Math.random().toString()}
            >
              <Image src={image} alt="" layout="fill" priority={true} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductInfos;
