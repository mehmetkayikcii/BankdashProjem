import {
  CircleDollarSign,
  HandCoins,
  NotepadText,
  PiggyBank,
} from "lucide-react";
import React from "react";
import { LastTransaction } from "./LastTransaction/LastTransaction";
import MyCard from "./MyCardsComponent/MyCard";
import DebitCreditOverwiev from "./Debit&CreditOverwiev/DebitCreditOverwiev";
import InvoicesSent from "./InvoicesSent/InvoicesSent";

const AccountsComponents = () => {
  const myTransactions = [
    {
      icon: <CircleDollarSign size={36} color="#d6aa0a" />,
      color: "bg-orange-300",
      Title: "My Balance",
      amount: "12,750",
    },
    {
      icon: <HandCoins size={36} color="#1b18e2" />,
      color: "bg-blue-300",
      Title: "Income",
      amount: "5,600",
    },
    {
      icon: <NotepadText size={36} color="#e21898" />,
      color: "bg-pink-300",
      Title: "Expense",
      amount: "3,460",
    },
    {
      icon: <PiggyBank size={36} color="#19a1a3" />,
      color: "bg-blue-300",
      Title: "Total Saving",
      amount: "7,920",
    },
  ];
  return (
    <div>
      <div className="pt-5 flex gap-7">
        {myTransactions.map((singleTransactions) => (
          <div className="flex justify-between mb-4 bg-white text-black rounded-2xl p-5 w-[255px] h-[120px]">
            <div className="flex gap-4 items-center">
              <span
                className={`min-w-10 ${singleTransactions.color} bg-opacity-25 rounded-full p-5 `}
              >
                {singleTransactions.icon}
              </span>
              <div>
                <p className="text-gray-600 ">{singleTransactions.Title}</p>
                <p className="font-bold">${singleTransactions.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-8">
        <LastTransaction className="w-max-[730px] h-[282px]" />
        <MyCard />
      </div>

      <div className="flex gap-8">
        <DebitCreditOverwiev className="w-max-[730px]" />
        <InvoicesSent />
      </div>
    </div>
  );
};

export default AccountsComponents;
