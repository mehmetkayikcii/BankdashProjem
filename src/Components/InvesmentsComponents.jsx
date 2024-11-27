import { ChartPie, CircleDollarSign, Undo2} from 'lucide-react';
import React from 'react'

const InvesmentsComponents = () => {
    const myTransactions = [
        {
          icon: <CircleDollarSign size={36} color="#0ed8a5" />,
          color: "bg-green-300",
          Title: "Total Inested Amount",
          amount: "$150,000",
        },
        {
          icon: <ChartPie size={36} color="#e4077d" />,
          color:"bg-pink-300",
          Title: "Number of Invesments",
          amount: "1,250",
        },
        {
          icon: <Undo2 size={36} color="#0716e4" />,
          color: "bg-blue-300",
          Title: "Rate of Return",
          amount: "+5.80%",
        },
      ];    
  return (
    <div
      className="text-black rounded-2xl p-5 flex gap-6"
    >
      {myTransactions.map((singleTransactions) => (
        <div className="flex justify-between bg-white text-black rounded-2xl p-5 w-[350px] h-[120px]">
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

export default InvesmentsComponents