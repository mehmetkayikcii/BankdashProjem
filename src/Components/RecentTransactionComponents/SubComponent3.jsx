import React from "react";
import { BadgeDollarSign, CreditCard, PhilippinePeso } from "lucide-react";

const SubComponent3 = () => {
  const myTransactions = [
    {
      icon: <CreditCard color="orange" />,
      color: "bg-orange-500",
      Title: "Deposit from my Card",
      date: "28 January 2021",
      amount: -850,
    },
    {
      icon: <PhilippinePeso color="blue"/>,
      color:"bg-blue-500",
      Title: "Deposit Paypal",
      date: "25 January 2021",
      amount: 2500,
    },
    {
      icon: <BadgeDollarSign color="green"/>,
      color: "bg-green-500",
      Title: "Jemi Wilson",
      date: "21 January 2021",
      amount: 850,
    },
  ];
  return (
    <div
      style={{ width: "350px", height: "235px" }}
      className="bg-white text-black rounded-2xl p-5"
    >
      {myTransactions.map((singleTransactions) => (
        <div className="flex justify-between mb-4">
          <div className="flex gap-5">
          <span
            className={`min-w-10 ${singleTransactions.color} bg-opacity-25 rounded-full p-3`}
          >
              {singleTransactions.icon}
            </span>
            <div>
              <p className="font-semibold">{singleTransactions.Title}</p>
              <p className="">{singleTransactions.date}</p>
            </div>
          </div>

          <p
            className={
              singleTransactions.amount < 0
                ? "text-red-600 font-semibold"
                : "text-green-600 font-semibold"
            }
          >
            {singleTransactions.amount < 0
              ? `-$${Math.abs(singleTransactions.amount)}`
              : `+$${singleTransactions.amount}`}
          </p>
          
        </div>
      ))}
    </div>
  );
};

export default SubComponent3;
