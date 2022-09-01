import React from "react";
import CategoryCard from "../Cards/CategoryCard";

const Categories: React.FC = () => {
  return (
    <section className="grid gap-y-16 py-10 px-6 max-w-[1110px] mx-auto md:grid-cols-3">
      <CategoryCard
        title="headphones"
        image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
      />
      <CategoryCard
        title="speakers"
        image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
      />
      <CategoryCard
        title="earphones"
        image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
      />
    </section>
  );
};

export default Categories;
