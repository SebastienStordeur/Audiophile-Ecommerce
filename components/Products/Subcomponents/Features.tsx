import React from "react";

interface IFeatures {
  features: string[];
}

const Features: React.FC<IFeatures> = (props) => {
  return (
    <div className="lg:w-7/12">
      <h3 className="font-bold text-2xl uppercase mb">Features</h3>
      {props.features.map((feature) => (
        <p
          key={Math.random().toString()}
          className="mt-6 font-medium text-[15px] leading-6 opacity-50"
        >
          {feature}
        </p>
      ))}
    </div>
  );
};

export default Features;
