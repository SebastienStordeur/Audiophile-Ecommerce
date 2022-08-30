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
  console.log(props);
  return (
    <Card>
      <div className="w-full h-[352px] text-center rounded-lg bg-light-grey relative mt-16">
        <Image
          src={props.data.product_image}
          alt={props.data.name}
          layout="fill"
        />
      </div>
      {/* <h3 className="uppercase font-bold text-[28px]">New product</h3> */}
      <h2 className="text-[28px] font-bold leading-9 uppercase mt-8">
        {props.data.name}
      </h2>
      <p className="font-medium text-[15px] opacity-50 my-6 leading-6">
        {props.data.description}
      </p>
      <Button className="bg-brown text-white" label="See product button">
        <Link href={props.data.id} passHref>
          See Product
        </Link>
      </Button>
    </Card>
  );
};

export default CategoryCard;
