import React from "react";

interface IProductImages {
  images: string[];
}

const ProductImages: React.FC<IProductImages> = (props) => {
  return (
    <section className="grid gap-5 mt-20 mx-auto max-w-[1110px] md:grid-cols-2">
      <div
        className="relative w-full h-44 rounded-lg overflow-hidden"
        key={Math.random().toString()}
      >
        <picture>
          <source
            srcSet={`${props.images[0].split(" ")[0]}/desktop/${
              props.images[0].split(" ")[1]
            }`}
            media="(min-width:1024px)"
          />
          <source
            srcSet={`${props.images[0].split(" ")[0]}/tablet/${
              props.images[0].split(" ")[1]
            }`}
            media="(min-width:767px)"
          />
          <img
            src={`${props.images[0].split(" ")[0]}/mobile/${
              props.images[0].split(" ")[1]
            }`}
            alt=""
            className="h-full w-full absolute object-cover"
          />
        </picture>
      </div>
      <div
        className="relative w-full h-44 rounded-lg overflow-hidden"
        key={Math.random().toString()}
      >
        <picture>
          <source
            srcSet={`${props.images[1].split(" ")[0]}/desktop/${
              props.images[1].split(" ")[1]
            }`}
            media="(min-width:1024px)"
          />
          <source
            srcSet={`${props.images[1].split(" ")[0]}/tablet/${
              props.images[1].split(" ")[1]
            }`}
            media="(min-width:767px)"
          />
          <img
            src={`${props.images[1].split(" ")[0]}/mobile/${
              props.images[1].split(" ")[1]
            }`}
            alt=""
            className="h-full w-full absolute object-cover"
          />
        </picture>
      </div>
      <div
        className="relative w-full h-[368px] rounded-lg overflow-hidden md:col-start-2 md:row-start-1 md:row-end-3 md:h-full"
        key={Math.random().toString()}
      >
        <picture>
          <source
            srcSet={`${props.images[2].split(" ")[0]}/desktop/${
              props.images[2].split(" ")[1]
            }`}
            media="(min-width:1024px)"
          />
          <source
            srcSet={`${props.images[2].split(" ")[0]}/tablet/${
              props.images[2].split(" ")[1]
            }`}
            media="(min-width:767px)"
          />
          <img
            src={`${props.images[2].split(" ")[0]}/mobile/${
              props.images[2].split(" ")[1]
            }`}
            alt=""
            className="h-full w-full absolute object-cover"
          />
        </picture>
      </div>
    </section>
  );
};

export default ProductImages;
