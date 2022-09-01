import React from "react";
import Navbar from "../../Navbar/Navbar";

const Header: React.FC = () => {
  return (
    <header
      id="header"
      className="flex items-center bg-black w-full h-[90px] px-6"
    >
      <Navbar />
    </header>
  );
};

export default Header;
