import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { cartActions } from "../../store/cart/cart";
import Button from "../UI/Button";
import Article from "./Article";
import Link from "next/link";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const quantity = useSelector((state: RootState) => state.cart.totalQuantity);

  const resetCartHandler = () => {
    dispatch(cartActions.resetCart());
  };
  return (
    <div className="mx-6 min-w-[327px] h-80 fixed mt-10 bg-black inset-1/2 rounded-lg">
      <div className="flex justify-between">
        <h3 className="uppercase font-bold text-lg tracking-wide">
          Cart <span>{quantity}</span>
        </h3>
        <span
          className="cursor-pointer font-medium text-[15px] opacity-50 underline"
          onClick={resetCartHandler}
        >
          Remove all
        </span>
      </div>
      <div>
        {items.map((item) => (
          <Article key={item.id} item={item} />
        ))}
        {/*  <div><Image src="" alt="" layout="fill"></Image></div> */}
      </div>
      <div className="flex justify-between">
        <span className="uppercase font-medium text-[15px] opacity-50">
          Total : {}
        </span>
        <span className="font-bold text-lg">${}</span>
        <Button className="bg-brown w-full" label="Checkout">
          <Link href="/checkout">Checkout</Link>
        </Button>
      </div>
    </div>
  );
};

export default Cart;
