import Image from "next/image";
import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

interface IAdsProducts {
  name: string;
  description?: string;
  className: string;
  image: string;
}

const AdsProducts: React.FC<IAdsProducts> = (props) => {
  return (
    <Card className={props.className}>
      <div className="relative w-44 h-48 mx-auto pt-10">
        <Image
          src={props.image}
          alt={props.name}
          layout="fill"
          priority={true}
        />
      </div>
      <h2 className="font-bold uppercase text-4xl tracking-wide">
        {props.name}
      </h2>
      {props.description && (
        <p className="opacity-75 text-[15px] my-6 font-medium">
          {props.description}
        </p>
      )}
      <Button className="bg-black text-white" label="See product">
        See product
      </Button>
    </Card>
  );
};

export default AdsProducts;
