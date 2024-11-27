import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import React from "react";

const RecentTransactions = () => {
  const myTransactions = [
    {
      icon: <CircleArrowUp color="#0068a8" />,
      Description: "Spotify Subscription",
      TransactionID: "#12548796",
      Type: "Shopping",
      card: "1234****",
      date: "28 Jan, 12.30 AM",
      amount: "-$2,500",
      color2: "text-red-600",
    },
    {
      icon: <CircleArrowDown color="#0068a8" />,
      Description: "Freepik Sales",
      TransactionID: "#12548796",
      Type: "Transfer",
      card: "1234****",
      date: "25 Jan, 10.40 PM",
      amount: "+$750",
      color2: "text-green-600",
    },
    {
      icon: <CircleArrowUp color="#0068a8" />,
      Description: "Mobile Service",
      TransactionID: "#12548796",
      Type: "Service",
      card: "1234****",
      date: "20 Jan, 10.40 PM",
      amount: "-$150",
      color2: "text-red-600",
    },
    {
      icon: <CircleArrowUp color="#0068a8" />,
      Description: "Wilson",
      TransactionID: "#12548796",
      Type: "Transfer",
      card: "1234****",
      date: "15 Jan, 3.29 PM",
      amount: "-$1050",
      color2: "text-red-600",
    },
    {
      icon: <CircleArrowDown color="#0068a8" />,
      Description: "Emilly",
      TransactionID: "#12548796",
      Type: "Transfer",
      card: "1234****",
      date: "14 Jan, 10.40 PM",
      amount: "+$840",
      color2: "text-green-600",
    },
  ];
  return (
    <div className="p-5 ms-5">
      <h3 className="p-5 text-blue-900 font-bold "> Recent Transactions</h3>
      <div className="">
          <ul className="flex gap-10 items-center border border-b-2 border-b-slate-300">
            <li>
              <p className="text-blue-900 font-semibold border-b-4 p-2 border-b-blue-900">
                All Transaction
              </p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold ">Income</p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold ">Expense</p>
            </li>
          </ul>
        </div>
      <div className=" p-5  gap-6 mt-10 bg-white text-black rounded-2xl divide-y w-[1110px]">
        <div className="p-2">
          <ul className="flex gap-10 items-center">
            <li>
              <p className=" w-[243px] text-cyan-600 font-semibold">
                Description
              </p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold ">Transaction ID</p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold w-[50px]">Type</p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold w-[65px]">Card</p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold w-[125px]">Date</p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold w-[75px]">Amount</p>
            </li>
            <p className="text-cyan-600 font-semibold w-[125px]">Receipt</p>
          </ul>
        </div>
        {myTransactions.map((singleTransactions) => (
          <div className="p-2">
            <ul className="flex gap-10 items-center">
              <span className="p-3">{singleTransactions.icon}</span>
              <li>
                <p className=" w-[165px]">{singleTransactions.Description}</p>
              </li>
              <li>
                <p className="text-gray-600 ">
                  {singleTransactions.TransactionID}
                </p>
              </li>
              <li>
                <p className="text-gray-600 w-[65px]">
                  {singleTransactions.Type}
                </p>
              </li>
              <li>
                <p className="text-gray-600 w-[65px]">
                  {singleTransactions.card}
                </p>
              </li>
              <li>
                <p className="text-gray-600 w-[125px]">
                  {singleTransactions.date}
                </p>
              </li>
              <li>
                <p
                  className={`font-bold ${singleTransactions.color2} w-[65px]`}
                >
                  {singleTransactions.amount}
                </p>
              </li>
              <button className=" border-2 p-2 pl-6 pr-6 rounded-full border-blue-700 font-bold text-blue-700">
                Download
              </button>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
