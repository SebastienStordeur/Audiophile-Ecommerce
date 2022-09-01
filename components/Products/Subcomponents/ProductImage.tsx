import React from "react";

interface IProductImage {
  product_image: string;
  name: string;
}

const ProductImage: React.FC<IProductImage> = (props) => {
  return (
    <div className="relative w-full h-80 mt-6 md:h-[480px] md:w-[280px] lg:h-[560px] lg:w-full ">
      <picture>
        <source
          srcSet={`${props.product_image.split(" ")[0]}/desktop/${
            props.product_image.split(" ")[1]
          }`}
          media="(min-width:1024px)"
        />
        <source
          srcSet={`${props.product_image.split(" ")[0]}/tablet/${
            props.product_image.split(" ")[1]
          }`}
          media="(min-width:767px)"
        />
        <img
          src={`${props.product_image.split(" ")[0]}/mobile/${
            props.product_image.split(" ")[1]
          }`}
          alt=""
          className="h-full w-full absolute object-cover"
        />
      </picture>
    </div>
  );
};

export default ProductImage;
