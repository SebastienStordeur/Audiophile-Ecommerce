import React from "react";
import Image from "next/image";
import Button from "../UI/Button";

const SubHeader = () => {
  return (
    <div className="relative mb-8">
      <div className="relative w-full h-[513px] z-0">
        <Image
          src="/assets/home/mobile/image-header.jpg"
          alt=""
          layout="fill"
          priority={true}
        />
        <div className="absolute z-10 text-white py-28 text-center">
          <h3 className="text-sm opacity-50 tracking-[10px] uppercase">
            New product
          </h3>
          <h2 className="mt-4 text-4xl font-bold">XX99 Mark II Headphones</h2>
          <p className="mt-6 font-medium text-[15px] opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button className="bg-brown text-white mt-7" label="See product">
            See product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
