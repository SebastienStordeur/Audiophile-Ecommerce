import Link from "next/link";
import React from "react";
import Card from "../UI/Card";

const CategoryCard = () => {
  return (
    <Card>
      <h3>Headphones</h3>
      <Link href="/">Shop</Link>
    </Card>
  );
};

export default CategoryCard;
