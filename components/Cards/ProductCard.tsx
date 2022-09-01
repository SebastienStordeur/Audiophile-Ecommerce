import React from "react";
import Image from "next/image";
import Link from "next/link";

import Card from "../UI/Card";
import Button from "../UI/Button";

interface CategoryCardI {
  data: {
    id: string;
    name: string;
    description: string;
    product_image: any;
  };
}

const CategoryCard: React.FC<CategoryCardI> = (props) => {
  return (
    <Card className="lg:flex lg:even:flex-row-reverse">
      <div className="h-[352px] text-center rounded-lg mx-6 bg-grey relative mt-16 overflow-hidden lg:w-[540px] lg:h-[560px]">
        <picture>
          <source
            srcSet={`${props.data.product_image.split(" ")[0]}/desktop/${
              props.data.product_image.split(" ")[1]
            }`}
            media="(min-width:1024px)"
          />
          <source
            srcSet={`${props.data.product_image.split(" ")[0]}/tablet/${
              props.data.product_image.split(" ")[1]
            }`}
            media="(min-width:767px)"
          />
          <img
            src={`${props.data.product_image.split(" ")[0]}/mobile/${
              props.data.product_image.split(" ")[1]
            }`}
            alt={props.data.name}
            className="absolute h-full w-full object-fill md:w-56 mx-auto lg:w-full"
          />
        </picture>
      </div>
      <div className="lg:w-3/6 lg:mt-40 lg:text-left">
        {/* <h3 className="uppercase font-bold text-[28px]">New product</h3> */}
        <h2 className="text-[28px] font-bold leading-9 uppercase mt-8">
          {props.data.name}
        </h2>
        <p className="font-medium text-[15px] opacity-50 my-6 leading-6">
          {props.data.description}
        </p>
        <Button
          className="bg-brown text-white hover:bg-opacity-50 lg:mx-0"
          label="See product button"
        >
          <Link href={props.data.id} passHref>
            See Product
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default CategoryCard;
