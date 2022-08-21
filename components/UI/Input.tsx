import React from "react";

interface InputI {
  type?: string;
  className?: string;
  id: string;
  value: string | number;
}

const Input: React.FC<InputI> = (props: InputI) => {
  return (
    <input
      type={props.type || "text"}
      id={props.id}
      className={`w-11/12 h-8`}
    />
  );
};

export default Input;
