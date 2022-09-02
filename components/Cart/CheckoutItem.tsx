import React from "react";

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
  return (
    <div className="flex w-full mb-6">
      <div className="w-16 h-16 bg-grey rounded-lg"></div>
      <div className="flex justify-between items-center w-full px-6">
        <div>
          <p>{props.item.name.split(" ")[0]}</p>
          <p>{props.item.price}</p>
        </div>
        <span>x{props.item.quantity}</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
