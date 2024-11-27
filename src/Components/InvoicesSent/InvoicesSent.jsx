import { Apple, Bandage, UserRound } from "lucide-react";
import React from "react";

const InvoicesSent = () => {
  const myTransactions = [
    {
      icon: <Apple size={28} color="#00a841" />,
      color: "bg-green-400",
      Title: "Apple Store",
      date: "5h ago",
      amount: "$450",
    },
    {
      icon: <UserRound size={28} color="#e8ca02" />,
      color: "bg-orange-400",
      Title: "Michael",
      date: "2 days ago",
      amount: "$160",
    },
    {
      icon: <Bandage size={28} color="#020ae8" />,
      color: "bg-blue-400",
      Title: "Playstation",
      date: "5 days ago",
      amount: "$1085",
    },
    {
      icon: <UserRound size={28} color="#e8029f" />,
      color: "bg-pink-400",
      Title: "William",
      date: "10 days ago",
      amount: "$90",
    },
  ];
  return (
    <div>
      <h3 className="p-5 text-blue-900 font-bold">Invoices Sent</h3>
      <div className="p-3  gap-6 bg-white text-gray-500 rounded-2xl w-[350px] h-[364px]">
        {myTransactions.map((singleTransactions) => (
          <div className=" p-4 flex justify-between items-center">
            
            <div className="flex gap-6 items-center">
              <span
                className={` ${singleTransactions.color} bg-opacity-25 rounded-2xl  p-3`}
              >
                {singleTransactions.icon}
              </span>
              <div>
                <p className=" font-bold">{singleTransactions.Title}</p>
                <p className="text-gray-600">{singleTransactions.date}</p>
              </div>
              </div>
              <div>
                <p className="text-gray-600 ">
                  {singleTransactions.amount}
                </p>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoicesSent;
