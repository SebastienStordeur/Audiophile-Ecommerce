import React from "react";

interface MainI {
  children: React.ReactNode;
}

const Main: React.FC<MainI> = (props: MainI) => {
  return (
    <main id="main" className="w-full">
      {props.children}
    </main>
  );
};

export default Main;
