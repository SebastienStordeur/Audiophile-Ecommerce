import React from "react";
import Link from "next/link";

interface IMobileNavbar {
  onClick: () => void;
}

const MobileNavbar: React.FC<IMobileNavbar> = (props) => {
  return (
    <ul
      className="absolute w-full h-auto bg-black text-white font-bold px-8 left-0 top-20 z-50 md:hidden"
      onClick={props.onClick}
    >
      <li className="h-12">
        <Link href="/">Home</Link>
      </li>
      <li className="h-12">
        <Link href="/headphones">Headphones</Link>
      </li>
      <li className="h-12">
        <Link href="/speakers">Speakers</Link>
      </li>
      <li className="h-12">
        <Link href="/earphoens">Earphones</Link>
      </li>
    </ul>
  );
};

export default MobileNavbar;
