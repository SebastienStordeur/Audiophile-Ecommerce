import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Button from "../UI/Button";
import CheckoutItem from "./CheckoutItem";

export const CheckoutCart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  let price: number = 0;

  return (
    <section className="w-full px-6 lg:max-w-[320px] lg:h-[450px] lg:mt-14 lg:ml-4 bg-white">
      <h2 className="font-bold text-lg uppercase mt-24 mb-8 lg:mt-8">
        Summary
      </h2>
      {items.map((item) => {
        price += item.totalPrice;
        return <CheckoutItem key={item.id} item={item} />;
      })}

      <div>
        <div className="flex justify-between">
          <span className="font-medium text-[15px] opacity-50 uppercase">
            Total
          </span>
          <span className="font-bold text-lg uppercase">
            $ {(price + 50 + (price * 20) / 100).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between my-2">
          <span className="font-medium text-[15px] opacity-50 uppercase">
            Shipping
          </span>
          <span className="font-bold text-lg uppercase">$ 50</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="font-medium text-[15px] opacity-50 uppercase">
            VAT (included)
          </span>
          <span className="font-bold text-lg uppercase">
            $ {(price / 5).toFixed(2)}
          </span>
        </div>
      </div>

      <Button
        className="bg-brown text-white md:w-full"
        label="Order"
        type="submit"
      >
        Continue & Pay
      </Button>
    </section>
  );
};
