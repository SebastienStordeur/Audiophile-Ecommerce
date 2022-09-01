import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../UI/Card";

interface CategoryCardI {
  title: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardI> = (props: CategoryCardI) => {
  return (
    <Card className="bg-grey h-40">
      <div className="relative w-80 h-40 mx-auto -mt-9">
        <Image
          src={props.image}
          alt={props.title}
          width={120}
          height={104}
          priority={true}
        />
      </div>
      <h3 className="font-bold text-[15px] uppercase tracking-wider -mt-10">
        {props.title}
      </h3>
      <Link href={`/${props.title}`}>
        <span className="mt-4 text-[13px] uppercase opacity-50 mix-blend-normal">
          Shop{" "}
          <span className="relative w-[5px] h-2.5">
            <Image
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt=""
              layout="fill"
            />
          </span>
        </span>
      </Link>
    </Card>
  );
};

export default CategoryCard;
