import React from "react";

interface IInputValidator {
  children: React.ReactNode;
  className?: string;
}

const InputValidator: React.FC<IInputValidator> = (props) => {
  return (
    <div className={`flex flex-col ${props.className || ""}`}>
      {props.children}
    </div>
  );
};

export default InputValidator;
