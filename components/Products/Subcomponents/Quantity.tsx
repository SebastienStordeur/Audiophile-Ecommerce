import React, { useState } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const Quantity = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {};
  return (
    <div className="flex mt-8 mb-20">
      <Input
        type="number"
        className="w-[120px] h-12 px-2 bg-grey text-center font-bold text-[13px]"
        id="quantity"
        value={quantity}
        onChange={changeHandler}
      />
      <Button className="bg-brown text-white" label="Add do cart">
        Add to cart
      </Button>
    </div>
  );
};

export default Quantity;
