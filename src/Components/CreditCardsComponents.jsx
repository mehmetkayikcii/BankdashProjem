import React from "react";
import SubComponent1 from "./MyCardsComponent/SubComponent1";
import SubComponent2 from "./MyCardsComponent/SubComponent2";
import SubComponent3 from "./MyCardsComponent/SubComponent3";
import DonutChart from "./CardExpenseStatistic/DonutChart";
import CardList from "./CardList/CardList";
import AddNewCard from "./AddNewCardComponent/AddNewCard";
import CardSetting from "./CardSetting/CardSetting";

const CreditCardsComponents = () => {
  return (
    <div>
      <div className="flex justify-between p-5 text-blue-900 font-bold ">
        <p>My Cards</p>
      </div>
      <div className="flex gap-7">
        <div className="">
          <SubComponent3 />
        </div>
        <div style={{ width: "730px", height: "282px" }}>
          <div className="flex justify-between overflow-x-auto">
            <SubComponent1 />
            <SubComponent2 />
          </div>
        </div>
      </div>
      <div className="flex gap-7">
        <DonutChart />
        <CardList />
      </div>
      <div className="flex gap-7 pb-5">
        <AddNewCard />
        <CardSetting />
      </div>
    </div>
  );
};

export default CreditCardsComponents;
