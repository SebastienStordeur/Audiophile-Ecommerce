import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../UI/Card";

interface CategoryCardI {
  title: string;
  image?: string;
}

const CategoryCard: React.FC<CategoryCardI> = (props: CategoryCardI) => {
  return (
    <Card className="bg-grey">
      <div className="relative w-80 h-[104px]">
        {props.image && (
          <Image src={props.image} alt={props.title} layout="fill" />
        )}
      </div>
      <h3 className="font-bold text-[15px] uppercase tracking-wider">
        {props.title}
      </h3>
      <Link href={`/${props.title}`}>
        <span className="mt-4 text-[13px] uppercase opacity-50 mix-blend-normal">
          Shop
        </span>
      </Link>
    </Card>
  );
};

export default CategoryCard;
