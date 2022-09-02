import React from "react";
import Image from "next/image";
import Button from "../UI/Button";
import Link from "next/link";

const SubHeader: React.FC = () => {
  return (
    <div className="relative mb-8">
      <div className="relative w-full h-[513px] z-0">
        <picture>
          <source
            srcSet="/assets/home/desktop/image-hero.jpg"
            media="(min-width:1024px)"
            className="-left-10"
          />
          <source
            srcSet="/assets/home/tablet/image-header.jpg"
            media="(min-width:767px)"
          />
          <img
            src="/assets/home/mobile/image-header.jpg"
            alt=""
            className="absolute h-full w-full"
          />
        </picture>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-6 text-white py-28 text-center lg:text-left lg:w-96 lg:left-1/4">
          <h3 className="text-sm opacity-50 tracking-[10px] uppercase">
            New product
          </h3>
          <h2 className="mt-4 text-4xl font-bold">XX99 Mark II Headphones</h2>
          <p className="mt-6 font-medium text-[15px] opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            className="bg-brown text-white mt-7 hover:bg-opacity-50 lg:ml-0"
            label="See product"
          >
            <Link href="/AX15147841">See product</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
