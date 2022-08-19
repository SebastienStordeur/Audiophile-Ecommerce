import React from "react";

interface CardI {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardI> = (props: CardI) => {
  return (
    <article className={`w-11/12 text-center ${props.className || ""}`}>
      {props.children}
    </article>
  );
};

export default Card;
