import React from "react";
import Image from "next/image";

import Card from "../UI/Card";
import Button from "../UI/Button";

interface CategoryCardI {
  name: string;
  description: string;
  cover: string;
}

const CategoryCard: React.FC<CategoryCardI> = (props: CategoryCardI) => {
  return (
    <Card>
      <div className="w-full h-[352px]">
        <Image src={props.cover} alt={props.name} layout="fill" />
      </div>
      <h2 className="uppercase font-bold text-[28px]">New product</h2>
      <h3>{props.name}</h3>
      <p className="font-medium text-[15px] opacity-50">{props.description}</p>
      <Button className="bg-brown text-white" label="See product button">
        See Product
      </Button>
    </Card>
  );
};

export default CategoryCard;
