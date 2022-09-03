import React from "react";
import Link from "next/link";

const MobileNavbar: React.FC = () => {
  return (
    <ul className="absolute w-full h-auto bg-black text-white font-bold px-8 left-0 top-20 z-50 md:hidden">
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
