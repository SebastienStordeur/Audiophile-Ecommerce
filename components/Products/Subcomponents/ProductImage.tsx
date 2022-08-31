import React from "react";
import Image from "next/image";

interface IProductImage {
  product_image: string;
  name: string;
}

const ProductImage: React.FC<IProductImage> = (props) => {
  return (
    <div className="relative w-full h-80 mt-6 md:h-[480px] lg:h-[560px] lg:w-[540px]">
      <Image
        src={props.product_image}
        alt={props.name}
        layout="fill"
        priority={true}
      />
    </div>
  );
};

export default ProductImage;
