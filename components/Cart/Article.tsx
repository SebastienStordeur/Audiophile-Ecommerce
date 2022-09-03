import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart";

import data from "../../data/data.json";
import Image from "next/image";

interface IArticle {
  item: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
  };
}

const Article: React.FC<IArticle> = (props) => {
  const dispatch = useDispatch();
  const currentItem =
    data.earphones.find((earphone) => earphone.id === props.item.id) ||
    data.headphones.find((hearphone) => hearphone.id === props.item.id) ||
    data.speakers.find((speaker) => speaker.id === props.item.id);
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.item.id,
        price: props.item.price,
        quantity: 1,
        totalPrice: props.item.totalPrice + props.item.price,
        name: props.item.name,
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.item.id));
  };

  return (
    <div className="flex mb-4">
      <div className="relative w-16 h-16 bg-grey rounded-lg">
        <Image
          src={`${currentItem?.product_image.split(" ")[0]}mobile${
            currentItem?.product_image.split(" ")[1]
          }`}
          alt={props.item.name}
          layout="fill"
        />
      </div>
      <div className="ml-4 mt-2 font-bold">
        <p className="text-[15px]">{props.item.name.split(" ")[0]}</p>
        <p className="text-sm opacity-50">$ {props.item.price}</p>
      </div>
      <div className="relative text-black bg-grey w-24 h-8 mt-4 ml-5">
        <span className="flex justify-between items-center">
          <span
            className="w-7 cursor-pointer flex justify-center"
            onClick={removeItemHandler}
          >
            -
          </span>
          {props.item.quantity}
          <span
            className="w-8 cursor-pointer flex justify-center"
            onClick={addItemHandler}
          >
            +
          </span>
        </span>
      </div>
    </div>
  );
};

export default React.memo(Article);
