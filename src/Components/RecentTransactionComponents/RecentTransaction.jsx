import React from "react";
import SubComponent3 from "./SubComponent3";

const RecentTransaction = () => {
  return (
    <div className="w-full max-w-[350px] h-[282px]">
      <p className="p-5 text-blue-900 font-semibold ">Recent Transaction</p>
      <SubComponent3 />
    </div>
  );
};

export default RecentTransaction;
