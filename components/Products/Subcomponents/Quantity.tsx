import React, { useState } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart/cart";

interface IQuantity {
  name: string;
  price: number;
  id: string;
}

const Quantity: React.FC<IQuantity> = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.currentTarget.value));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        quantity,
      })
    );
  };
  return (
    <div className="flex mt-8 mb-20">
      <Input
        type="number"
        className="w-[120px] h-12 px-2 bg-grey text-center font-bold text-[13px] pl-6"
        id="quantity"
        value={quantity}
        onChange={changeHandler}
      />
      <Button
        className="bg-brown text-white lg:ml-4 hover:bg-opacity-50"
        label="Add do cart"
        onClick={addItemHandler}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Quantity;
