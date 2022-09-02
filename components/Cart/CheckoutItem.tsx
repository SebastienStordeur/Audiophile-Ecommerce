import Image from "next/image";
import React from "react";
import data from "../../data/data.json";

interface ICheckoutItem {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
  };
}

const CheckoutItem: React.FC<ICheckoutItem> = (props) => {
  const currentItem =
    data.earphones.find((earphone) => earphone.id === props.item.id) ||
    data.headphones.find((hearphone) => hearphone.id === props.item.id) ||
    data.speakers.find((speaker) => speaker.id === props.item.id);
  return (
    <div className="flex w-full mb-6">
      <div className="w-16 h-16 bg-grey rounded-lg relative">
        <Image
          src={`${currentItem?.product_image.split(" ")[0]}tablet${
            currentItem?.product_image.split(" ")[1]
          }`}
          alt={props.item.name}
          layout="fill"
        />
      </div>
      <div className="flex justify-between items-center w-full px-6">
        <div>
          <p className="font-bold text-[15px]">
            {props.item.name.split(" ")[0]}
          </p>
          <p className="font-bold text-sm opacity-50">$ {props.item.price}</p>
        </div>
        <span>x{props.item.quantity}</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
