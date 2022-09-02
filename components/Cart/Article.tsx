import React from "react";
import Quantity from "../Products/Subcomponents/Quantity";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart";

interface IArticle {
  item: {
    id: string;
    name: string;
    quantity: number;
    price: number;
  };
}

const Article: React.FC<IArticle> = (props) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart(props.item));
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.item.id));
  };

  return (
    <div>
      <div>
        <p>{props.item.name.split(" ")[0]}</p>
        <p>{props.item.price}</p>
      </div>
      <div className="relative text-black bg-grey w-24 h-8">
        <span className="flex justify-between items-center">
          <span className="w-6" onClick={removeItemHandler}>
            -
          </span>
          {props.item.quantity}
          <span className="w-6" onClick={addItemHandler}>
            +
          </span>
        </span>
      </div>
    </div>
  );
};

export default Article;
