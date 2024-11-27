import { ShieldCheck, ShoppingBag, SquareActivity } from "lucide-react";
import React from "react";
import BankServicesList from "./BankServicesList/BankServicesList";

const ServicesComponents = () => {
  const myTransactions = [
    {
      icon: <SquareActivity size={36} color="#0010eb" />,
      color: "bg-blue-300",
      Title: "Life Insurance",
      amount: "Unlimited protection",
    },
    {
      icon: <ShoppingBag size={36} color="#eba000" />,
      color: "bg-orange-300",
      Title: "Shopping",
      amount: "Buy.Think.Grow",
    },
    {
      icon: <ShieldCheck size={36} color="#03916d" />,
      color: "bg-green-300",
      Title: "Safety",
      amount: "We are your allies",
    },
  ];
  return (
    <div>
        
      <div className="text-black rounded-2xl p-5 pt-8 flex gap-6">
        {myTransactions.map((singleTransactions) => (
          <div className="flex justify-between mb-4 bg-white text-black rounded-2xl p-5 w-[350px] h-[120px]">
            <div className="flex gap-4 items-center">
              <span
                className={`min-w-10 ${singleTransactions.color} bg-opacity-25 rounded-full p-5 `}
              >
                {singleTransactions.icon}
              </span>
              <div>
                <p className=" font-bold">{singleTransactions.Title}</p>
                <p className="text-gray-600">{singleTransactions.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        <BankServicesList />
      <div>

      </div>
    </div>
  );
};

export default ServicesComponents;
