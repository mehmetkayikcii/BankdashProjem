
import { CreditCard } from "lucide-react";
import React from "react";

const CardList = () => {
    const myTransactions = [
        {
          icon: <CreditCard size={36} color="#1d00fa" />,
          color: "bg-blue-600",
          Title: "Card Type",
          type: "Secondary",
          title2:"Bank",
          bank: "DBL Bank",
          title3:"Card Number",
          cardNumber:"**** **** 5600",
          title4:"Namain Card",
          name:"William",
        },
        {
            icon: <CreditCard size={36} color="#fa00e5" />,
            color: "bg-pink-600",
            Title: "Card Type",
            type: "Secondary",
            title2:"Bank",
            bank: "BRC Bank",
            title3:"Card Number",
            cardNumber:"**** **** 4300",
            title4:"Namain Card",
            name:"Michel",
          },
          {
            icon: <CreditCard size={36} color="#fad000" />,
            color: "bg-orange-600",
            Title: "Card Type",
            type: "Secondary",
            title2:"Bank",
            bank: "ABM Bank",
            title3:"Card Number",
            cardNumber:"**** **** 7560",
            title4:"Namain Card",
            name:"Edward",
          },
        
      ];
  return (
    <div className="w-full">
      <h3 className="p-5 text-blue-900 font-bold">Card List</h3>
      <div className="text-black rounded-2xl">
        {myTransactions.map((singleTransactions) => (
          <div className="flex justify-between mb-6 bg-white text-black rounded-2xl p-5 w-[730px] h-[109px] ">
            <div className="flex gap-6 items-center">
              <span
                className={`min-w-10 ${singleTransactions.color} bg-opacity-25 rounded-2xl p-4 `}
              >
                {singleTransactions.icon}
              </span>
              <div>
                <p className=" font-bold">{singleTransactions.Title}</p>
                <p className="text-gray-600">{singleTransactions.type}</p>
              </div>
              <div>
                <p className=" font-bold">{singleTransactions.title2}</p>
                <p className="text-gray-600">{singleTransactions.bank}</p>
              </div>
              <div>
                <p className=" font-bold">{singleTransactions.title3}</p>
                <p className="text-gray-600">{singleTransactions.cardNumber}</p>
              </div>
              <div>
                <p className=" font-bold">{singleTransactions.title4}</p>
                <p className="text-gray-600">{singleTransactions.name}</p>
              </div>
              <button className="p-2 pl-6 pr-6 font-bold text-blue-700">
                Wiev Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardList