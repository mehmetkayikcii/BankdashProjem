import { BellRing, UserRound, Wrench } from "lucide-react";
import React from "react";

export const LastTransaction = () => {
  const myTransactions = [
    {
      icon: <BellRing size={28} color="#00d65d" />,
      color: "bg-green-400",
      Title: "Spotify Subscription",
      date: "25 Jan 2021",
      title2: "Shopping",
      card: "1234****",
      state: "Pending",
      amount: "-$150",
      color2: "text-red-600",
    },
    {
      icon: <Wrench size={28} color="#002bd6" />,
      color: "bg-blue-400",
      Title: "Mobile Service",
      date: "25 Jan 2021",
      title2: "Service",
      card: "1234****",
      state: "Completed",
      amount: "-$340",
      color2: "text-red-600",
    },
    {
      icon: <UserRound size={28} color="#d600ba" />,
      color: "bg-pink-400",
      Title: "Emilly Wilson",
      date: "25 Jan 2021",
      title2: "Transfer",
      card: "1234****",
      state: "Completed",
      amount: "+$780",
      color2: "text-green-600",
    },
  ];
  return (
    <div>
      <h3 className="p-5 !pt-0 text-blue-900 font-bold">Last Transaction</h3>
      <div className=" p-5  gap-6 bg-white text-black rounded-2xl ">
        {myTransactions.map((singleTransactions) => (
          <div className="flex justify-between p-2">
            <ul className="flex gap-9 items-center">
              <span
                className={` ${singleTransactions.color} bg-opacity-25 rounded-2xl  p-3`}
              >
                {singleTransactions.icon}
              </span>
              <li>
                <p className=" font-bold w-[170px]">
                  {singleTransactions.Title}
                </p>
                <p className="text-gray-600">{singleTransactions.date}</p>
              </li>
              <li>
                <p className="text-gray-600 w-[70px]">
                  {singleTransactions.title2}
                </p>
              </li>
              <li>
                <p className="text-gray-600 w-[65px]">
                  {singleTransactions.card}
                </p>
              </li>
              <li>
                <p className="text-gray-600 w-[80px]">
                  {singleTransactions.state}
                </p>
              </li>
              <li>
                <p className={`font-bold ${singleTransactions.color2}`}>
                  {singleTransactions.amount}
                </p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
