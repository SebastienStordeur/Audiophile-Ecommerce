import Image from "next/image";
import React from "react";
import Section from "../Layout/Section/Section";
import Card from "../UI/Card";

const BestGear: React.FC = () => {
  return (
    <Section className="my-28">
      <Card>
        <div className="w-full h-[300px] relative rounded-xl overflow-hidden">
          <Image
            src="/assets/shared/mobile/image-best-gear.jpg"
            alt="Best gear"
            layout="fill"
            priority={true}
          />
        </div>
        <h3 className="uppercase mt-10 font-bold text-[28px] leading-9">
          Bringing you the <span className="text-brown">best</span> audio gear
        </h3>
        <p className="mt-8 px-1 opacity-50 font-medium text-[15px] text-center mix-blend-normal">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </Card>
    </Section>
  );
};

export default BestGear;
