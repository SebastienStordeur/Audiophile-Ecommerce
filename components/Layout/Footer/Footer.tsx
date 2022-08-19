import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="w-full px-6 py-10 bg-dark-grey text-white text-center"
    >
      <h3 className="mb-12 text-xl font-extrabold">audiophile</h3>
      <ul className="uppercase font-bold text-[13px] leading-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="my-6">
          <Link href="/">Headphones</Link>
        </li>
        <li className="mb-6">
          <Link href="/">Speakers</Link>
        </li>
        <li>
          <Link href="/">Earphones</Link>
        </li>
      </ul>
      <p className="my-12 opacity-50 font-medium text-[15px] leading-6 mix-blend-normal">
        Audiophile is an all in one stop to fulfill your audio needs. Were a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="opacity-50 font-bold text-[15px] mix-blend-normal">
        Copyright 2021. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
