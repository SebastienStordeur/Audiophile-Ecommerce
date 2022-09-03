import React, { Dispatch, SetStateAction } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { cartActions } from "../../store/cart/cart";
import Button from "../UI/Button";
import Article from "./Article";
import Link from "next/link";

export interface ICart {
  onClick: Dispatch<SetStateAction<any>>;
}

const Cart: React.FC<ICart> = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const quantity = useSelector((state: RootState) => state.cart.totalQuantity);
  let price: number = 0;

  const resetCartHandler = () => {
    dispatch(cartActions.resetCart());
  };
  return (
    <React.Fragment>
      <div
        className="bg-black bg-opacity-30 w-screen h-screen fixed z-[10] left-0 top-0"
        onClick={props.onClick}
      ></div>
      <div className="mx-6 min-w-[327px] h-auto fixed mt-10 bg-white text-black rounded-lg z-[20] modal p-7">
        <div className="flex justify-between">
          <h3 className="uppercase font-bold text-lg tracking-wide">
            Cart <span>({quantity})</span>
          </h3>
          <span
            className="cursor-pointer font-medium text-[15px] opacity-50 underline"
            onClick={resetCartHandler}
          >
            Remove all
          </span>
        </div>
        <div className="mt-8">
          {items.map((item) => {
            price += item.totalPrice;
            return <Article key={item.id} item={item} />;
          })}
        </div>
        <div className="flex justify-between my-8">
          <span className="uppercase font-medium text-[15px] opacity-50">
            Total :
          </span>
          <span className="font-bold text-lg">${price ? price : 0}</span>
        </div>
        <Button
          className="bg-brown text-white w-full hover:bg-opacity-50"
          label="Checkout"
        >
          <Link href="/checkout">Checkout</Link>
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Cart;
