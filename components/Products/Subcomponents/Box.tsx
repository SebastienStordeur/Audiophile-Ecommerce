import React from "react";

interface IBox {
  box: { quantity: number; name: string }[];
}

const Box: React.FC<IBox> = (props) => {
  return (
    <div className="md:flex mt-20 lg:mt-0 lg:flex-col">
      <h3 className="font-bold text-2xl uppercase mb-6">In the box</h3>
      <ul className="md:ml-72 lg:ml-0">
        {props.box.map((element) => {
          return (
            <li
              key={Math.random().toString()}
              className="text-[15px] leading-6"
            >
              <span className="text-brown font-bold mr-6">{`${element.quantity}x`}</span>
              <span className="font-medium opacity-50">{element.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Box;
