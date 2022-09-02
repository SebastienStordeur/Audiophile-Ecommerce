import React from "react";

interface InputI {
  type?: string;
  className?: string;
  id: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  placeholder: string;
}

const Input: React.FC<InputI> = (props) => {
  return (
    <input
      type={props.type || "text"}
      id={props.id}
      className={`placeholder:text-sm  ${props.className || ""}`}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      placeholder={props.placeholder}
    />
  );
};

export default React.memo(Input);
