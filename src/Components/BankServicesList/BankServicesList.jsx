import { ChartLine, HandCoins, ShieldCheck, ShoppingBag, UserRound} from "lucide-react";
import React from "react";

const BankServicesList = () => {
  const myTransactions = [
    {
      icon: <HandCoins size={36} color="#e60a95" />,
      color: "bg-pink-300",
      Title: "Business loans",
      amount: "It is a long established",
      title2: "Lorem Ipsum",
      p:"Many publishing",
    },
    {
      icon: <ShoppingBag size={36} color="#eba000" />,
      color: "bg-orange-300",
      Title: "Checking accounts",
      amount: "It is a long established",
      title2: "Lorem Ipsum",
      p:"Many publishing",
    },
    {
      icon: <ChartLine size={36} color="#f202c6" />,
      color: "bg-pink-300",
      Title: "Savings accounts",
      amount: "It is a long established",
      title2: "Lorem Ipsum",
      p:"Many publishing",
    },
    {
      icon: <UserRound size={36} color="#0716e4" />,
      color: "bg-blue-300",
      Title: "Debit and credit cards",
      amount: "It is a long established",
      title2: "Lorem Ipsum",
      p:"Many publishing",
    },
    {
      icon: <ShieldCheck size={36} color="#03916d" />,
      color: "bg-green-300",
      Title: "Life Insurance",
      amount: "It is a long established",
      title2: "Lorem Ipsum",
      p:"Many publishing",
    },
    {
        icon: <HandCoins size={36} color="#e60a95" />,
        color: "bg-pink-300",
        Title: "Business loans",
        amount: "It is a long established",
        title2: "Lorem Ipsum",
        p:"Many publishing",
      },
  ];
  return (
    <div className="w-full">
      <h3 className="p-5 text-blue-900 font-bold">Bank Services List</h3>
      <div className="text-black rounded-2xl p-5  gap-6">
        {myTransactions.map((singleTransactions) => (
          <div className="flex justify-between mb-4 bg-white text-black rounded-2xl p-5 w-[1110px] h-[90px] ">
            <div className="flex gap-16 items-center">
              <span
                className={`min-w-10 ${singleTransactions.color} bg-opacity-25 rounded-2xl p-4 `}
              >
                {singleTransactions.icon}
              </span>
              <div>
                <p className=" font-bold">{singleTransactions.Title}</p>
                <p className="text-gray-600">{singleTransactions.amount}</p>
              </div>
              <div>
                <p className=" font-bold">{singleTransactions.title2}</p>
                <p className="text-gray-600">{singleTransactions.p}</p>
              </div>
              <div>
                <p className=" font-bold">{singleTransactions.title2}</p>
                <p className="text-gray-600">{singleTransactions.p}</p>
              </div>
              <div>
                <p className=" font-bold">{singleTransactions.title2}</p>
                <p className="text-gray-600">{singleTransactions.p}</p>
              </div>
              <button className=" border-2 p-2 pl-6 pr-6 rounded-full border-blue-700 font-bold text-blue-700">
                Wiev Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankServicesList;
