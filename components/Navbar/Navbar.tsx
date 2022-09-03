import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Categories from "../Categories/Categories";
import MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const openMenuHandler = (): void => {
    setIsMenuVisible((prevValue) => !prevValue);
  };

  const showCartHandler = (): void => {
    setShowCart((prevValue) => !prevValue);
  };
  return (
    <nav className="flex justify-between items-center w-full max-w-[1110px] mx-auto text-white">
      {isMenuVisible && <MobileNavbar />}
      <div className="cursor-pointer md:hidden">
        <Image
          src="/assets/shared/tablet/icon-hamburger.svg"
          alt="Open menu"
          width={16}
          height={16}
          onClick={openMenuHandler}
        />
      </div>
      <div className="font-bold text-2xl">audiophile</div>
      <ul className="uppercase hidden cursor-pointer md:flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="mx-8">
          <Link href="/headphones">Headphones</Link>
        </li>
        <li className="mr-8">
          <Link href="/speakers">Speakers</Link>
        </li>
        <li>
          <Link href="/earphones">Earphones</Link>
        </li>
      </ul>
      <div onClick={showCartHandler} className="cursor-pointer">
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="Cart"
          width={23}
          height={20}
        />
      </div>
      {showCart && <Cart onClick={showCartHandler} />}
    </nav>
  );
};

export default Navbar;
