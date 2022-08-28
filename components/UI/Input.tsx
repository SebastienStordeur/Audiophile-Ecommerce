import React from "react";

interface InputI {
  type?: string;
  className?: string;
  id: string;
  value: string | number;
  onChange: any;
}

const Input: React.FC<InputI> = (props) => {
  return (
    <input
      type={props.type || "text"}
      id={props.id}
      className={` ${props.className || ""}`}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default React.memo(Input);
