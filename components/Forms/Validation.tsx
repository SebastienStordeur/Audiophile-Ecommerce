import Link from "next/link";
import React from "react";
import Button from "../UI/Button";

interface IValidation {
  price: number;
}

const Validation: React.FC<IValidation> = (props) => {
  return (
    <section className="fixed w-screen h-screen left-0 top-0">
      <div className="backdrop w-full h-full bg-grey bg-opacity-20"></div>
      <div className="px-6 py-8 mx-auto text-center bg-white w-11/12 h-auto z-10 fixed modal drop-shadow-lg">
        <h2 className=" font-bold text-2xl uppercase">
          Thank you for your order
        </h2>
        <p className="font-medium text-[15px] opacity-50">
          You will receive an email confirmation shortly.
        </p>

        <Button
          label="Home"
          className="bg-brown text-white hover:bg-opacity-50 mt-8"
        >
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
};

export default Validation;
