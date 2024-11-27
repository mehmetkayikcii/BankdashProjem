import { Apple, Search, TypeOutline } from "lucide-react";
import React from "react";

const MyInvestments = () => {
  const myTransactions = [
    {
      icon: <Apple size={36} color="#db008b" />,
      color: "bg-pink-600",
      Title: "App Store",
      p: "E-commerce, Marketplace",
      amount: "$54,000",
      p2: "Envestment Value",
      color2: "text-green-600",
      a: "+%16",
      p3: "Return Value",
    },
    {
      icon: <Search size={36} color="#0025db" />,
      color: "bg-blue-600",
      Title: "Samsung Mobile",
      p: "E-commerce, Marketplace",
      amount: "$25,300",
      p2: "Envestment Value",
      color2: "text-red-600",
      a: "-%4",
      p3: "Return Value",
    },
    {
      icon: <TypeOutline size={36} color="#dbac00" />,
      color: "bg-yellow-600",
      Title: "Tesla Motors",
      p: "Electric Vehicles",
      amount: "$8,200",
      p2: "Envestment Value",
      color2: "text-green-600",
      a: "+%25",
      p3: "Return Value",
    },
  ];
  return (
    <div className="">
      <h3 className="p-5 ms-5 text-blue-900 font-bold">My Investments</h3>
      <div className="text-black rounded-2xl gap-6">
        {myTransactions.map((singleTransactions) => (
          <div className="flex justify-between mb-4 bg-white text-black rounded-2xl p-5 w-[635px] h-[90px] ">
            <div className="flex gap-8 items-center">
              <span
                className={`${singleTransactions.color} bg-opacity-25 rounded-2xl p-4 `}
              >
                {singleTransactions.icon}
              </span>
              <div>
                <p className=" font-bold">{singleTransactions.Title}</p>
                <p className="text-gray-600 w-[185px]">{singleTransactions.p}</p>
              </div>
              <div>
                <p className=" font-bold">{singleTransactions.amount}</p>
                <p className="text-gray-600">{singleTransactions.p2}</p>
              </div>
              <div>
                <p className={`font-bold ${singleTransactions.color2}`}>
                  {singleTransactions.a}
                </p>
                <p className="text-gray-600">{singleTransactions.p3}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInvestments;
