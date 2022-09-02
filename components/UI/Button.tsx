import React from "react";

interface ButtonI {
  children: React.ReactNode;
  className: string;
  label: string;
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Button: React.FC<ButtonI> = (props) => {
  return (
    <button
      className={`flex justify-center mx-auto items-center w-40 h-12 uppercase text-[13px] font-bold tracking-wider cursor-pointer ${
        props.className || ""
      }`}
      aria-label={props.label}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
