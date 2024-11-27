
import { Apple, CreditCard, Lock, Search } from "lucide-react";
import React from "react";
const CardSetting = () => {
    const myTransactions = [
        {
            icon: <CreditCard size={36} color="#fad000" />,
            color: "bg-orange-600",
            Title: "Block Card",
            p:"Instantly block your card",
        },
        {
            icon: <Lock size={36} color="#0011fa" />,
            color: "bg-blue-600",
            Title: "Change Pin Code",
            p:"Choose another pin code",
          },
          {
            icon: <Search size={36} color="#fa00cc" />,
            color: "bg-pink-600",
            Title: "Add to Google Pay",
            p:"Withraw without any card",
          },
          {
            icon: <Apple size={36} color="#00fa2a" />,
            color: "bg-green-600",
            Title: "Add to Apple Pay",
            p:"Withraw without any card",
          },
          {
            icon: <Apple size={36} color="#00fa2a" />,
            color: "bg-green-600",
            Title: "Add to Apple Store",
            p:"Withraw without any card",
          },
        
      ];
  return (
    <div className="w-full">
      <h3 className="p-5 text-blue-900 font-bold">Card Setting</h3>
      <div className="text-black rounded-2xl">
      <div className="bg-white text-black rounded-2xl p-5 w-[350px] h-[440px] ">
        {myTransactions.map((singleTransactions) => (
            <div className="flex gap-6 items-center p-2">
              <span
                className={`min-w-10 ${singleTransactions.color} bg-opacity-25 rounded-2xl p-4 `}
              >
                {singleTransactions.icon}
              </span>
              <div>
                <p className=" font-bold">{singleTransactions.Title}</p>
                <p className="text-gray-600">{singleTransactions.p}</p>
              </div>
            </div>
         
        ))}
         </div>
      </div>
    </div>
  )
}

export default CardSetting