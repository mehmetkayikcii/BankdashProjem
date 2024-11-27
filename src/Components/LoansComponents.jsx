import { BriefcaseBusiness, ChartLine, Cog, UserRound} from 'lucide-react';
import React from 'react'

const LoansComponents = () => {
    const myTransactions = [
        {
          icon: <UserRound size={36} color="#0716e4" />,
          color: "bg-blue-400",
          Title: "Personal Loans",
          amount: "$150,000",
        },
        {
          icon: <BriefcaseBusiness size={36} color="#e4a111" />,
          color:"bg-orange-400",
          Title: "Corporate Loans",
          amount: "$100,000",
        },
        {
          icon: <ChartLine size={36} color="#f202c6" />,
          color: "bg-pink-400",
          Title: "Business Loans",
          amount: "$500,000",
        },
        {
          icon: <Cog size={36} color="#007523" />,
          color: "bg-green-400",
          Title: "Custom Loans",
          amount: "Choose Money",
        },
      ];
  return (
    <div
      className="text-black rounded-2xl p-5 flex gap-7"
    >
      {myTransactions.map((singleTransactions) => (
        <div className="flex justify-between bg-white text-black rounded-2xl p-5 w-[255px] h-[120px]">
          <div className="flex gap-4 items-center">
          <span
            className={`min-w-10 ${singleTransactions.color} bg-opacity-25 rounded-full p-5 `}
          >
              {singleTransactions.icon}
            </span>
            <div>
              <p className="text-gray-600 ">{singleTransactions.Title}</p>
              <p className="font-bold">{singleTransactions.amount}</p>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default LoansComponents