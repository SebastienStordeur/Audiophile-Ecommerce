import Image from "next/image";
import React from "react";

const Cart = () => {
  const removeCartHandler = () => {};
  return (
    <div className="mx-6">
      <div className="flex justify-between">
        <h3 className="uppercase font-bold text-lg tracking-wide">Cart (3)</h3>
        <span className="cursor-pointer font-medium text-[15px] opacity-50 underline">
          Remove all
        </span>
      </div>
      <div>{/*  <div><Image src="" alt="" layout="fill"></Image></div> */}</div>
      <div className="flex justify-between">
        <span className="uppercase font-medium text-[15px] opacity-50">
          Total
        </span>
        <span className="font-bold text-lg">$5,396</span>
      </div>
    </div>
  );
};

export default Cart;
