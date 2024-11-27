import React from "react";
import SubComponent1 from "./SubComponent1.jsx";
import SubComponent2 from "./SubComponent2.jsx";

const MyCards = () => {
  return (
    <div style={{ width: '730px', height: '282px'}} >
      <div className="flex justify-between p-5 text-blue-900 font-semibold ">
        <p>My Cards</p>
        <a href="a">See All</a>
      </div>
      <div className="flex justify-between overflow-x-auto ">
        <SubComponent1 />
        <SubComponent2 />
      </div>
    </div>
  );
};

export default MyCards;
