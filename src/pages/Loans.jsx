import React from "react";
import Header from "../Components/Header/Header";
import LoansComponents from "../Components/LoansComponents";
import ActiveLoansOverwiev from "../Components/ActiveLoansOverwiev/ActiveLoansOverwiev";

const Loans = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Header title={"Loans"} />
      <div className="ms-10 ">
        <LoansComponents />
      </div>
      <ActiveLoansOverwiev />
    </div>
  );
};

export default Loans;
