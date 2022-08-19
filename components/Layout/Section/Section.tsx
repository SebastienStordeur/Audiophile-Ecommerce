import React from "react";

interface SectionI {
  children: React.ReactNode;
  className: string;
}

const Section: React.FC<SectionI> = (props) => {
  return <section className={`${props.className}`}>{props.children}</section>;
};

export default Section;
