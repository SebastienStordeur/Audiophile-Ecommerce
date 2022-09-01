import React from "react";

interface CardI {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardI> = (props: CardI) => {
  return (
    <article
      className={`max-w-[1111px] text-center mx-auto ${props.className || ""}`}
    >
      {props.children}
    </article>
  );
};

export default Card;
