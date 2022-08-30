import Image from "next/image";
import React from "react";
import Section from "../Layout/Section/Section";
import Card from "../UI/Card";

/** need to change the picture considering the right size of the screen */

const BestGear: React.FC = () => {
  return (
    <Section className="my-28 ]">
      <Card className="lg:flex lg:flex-row-reverse lg:h-[588px]">
        <div className="w-full h-[300px] relative rounded-xl overflow-hidden lg:h-full">
{/*         <picture className="w-full h-full absolute object-cover">
          <source srcSet="/assets/shared/tablet/image-best-gear.jpg"
                  media="(min-width: 768px)" />
          <img src="/assets/shared/mobile/image-best-gear.jpg" alt="" />
          </picture> */}

          <Image
            src="/assets/shared/mobile/image-best-gear.jpg"
            alt="Best gear"
            layout="fill"
            priority={true}
          /> 
        </div>
        <div className="text-center lg:text-left lg:w-full lg:pr-32 lg:py-36">
        <h3 className="uppercase mt-10 font-bold text-[28px] leading-9 md:text-[40px] md:mx-20 md:leading-10 lg:mx-0">
          Bringing you the <span className="text-brown">best</span> audio gear
        </h3>
        <p className="mt-8 px-1 opacity-50 font-medium text-[15px]  mix-blend-normal">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p></div>
      </Card>
    </Section>
  );
};

export default BestGear;