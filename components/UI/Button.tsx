import React from "react";

interface ButtonI {
  children: string;
  className: string;
  label: string;
}

const Button: React.FC<ButtonI> = (props: ButtonI) => {
  return (
    <button
      className={`flex justify-between items-center w-40 h-12 ${
        props.className || ""
      }`}
      aria-label={props.label}
    >
      {props.children}
    </button>
  );
};

export default Button;
