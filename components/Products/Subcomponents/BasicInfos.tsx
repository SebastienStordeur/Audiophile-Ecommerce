import React from "react";
import Quantity from "./Quantity";

interface IBasicInfos {
  name: string;
  description: string;
  price: number;
  id: string;
}

const BasicInfos: React.FC<IBasicInfos> = (props) => {
  return (
    <div className="md:ml-[68px] md:mt-20 md:w-6/12 lg:w-full">
      <h2 className="font-bold text-[28px] leading-9 uppercase mt-6 md:w-22">
        {props.name}
      </h2>
      <p className="my-6 font-medium text-[15px] leading-6 opacity-50 lg:w-full">
        {props.description}
      </p>
      <p className="font-bold leading-6 text-lg">{`$ ${props.price}`}</p>
      <Quantity name={props.name} price={props.price} id={props.id} />
    </div>
  );
};

export default BasicInfos;
