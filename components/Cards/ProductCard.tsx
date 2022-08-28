import React from "react";
import Image from "next/image";
import Link from "next/link";

import Card from "../UI/Card";
import Button from "../UI/Button";

interface CategoryCardI {
  id: string;
  name: string;
  description: string;
  cover?: any;
}

const CategoryCard: React.FC<CategoryCardI> = (props) => {
  console.log(props);
  return (
    <Card>
      <div className="w-full h-[352px] text-center bg-light-grey">
        <Image src={props.cover} alt={props.name} layout="fill" />
      </div>
      {/* <h3 className="uppercase font-bold text-[28px]">New product</h3> */}
      <h2 className="text-[28px] font-bold leading-9 uppercase">
        {props.name}
      </h2>
      <p className="font-medium text-[15px] opacity-50 my-6">
        {props.description}
      </p>
      <Button className="bg-brown text-white" label="See product button">
        <Link href={props.id} passHref>
          See Product
        </Link>
      </Button>
    </Card>
  );
};

export default CategoryCard;
