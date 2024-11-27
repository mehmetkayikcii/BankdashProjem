import React from "react";
import PP from "../../assets/PP.png";
import { ChevronRight, Send } from "lucide-react";

const QuickTransfer = () => {
  const myFriend = [
    {
      name: "Randy Press",
      title: "Director",
    },
    {
      name: "Workman",
      title: "Designer",
    },
  ];
  return (
    <div className="w-full max-w-[445px] h-[323px] ">
      <h3 className="p-5 text-blue-900 font-semibold">Quick Transfer</h3>
      <div className="bg-white rounded-2xl">
        <div className="flex justify-between p-5">
          <div className="flex justify-around gap-5 items-center">
            <span>
              <img
                src={PP}
                alt="pp"
                className="rounded-full max-w-[55px] max-h-[55px] w-auto h-auto object-cover m-3"
              />

              <p className="font-extrabold text-center">Livia Bator</p>
              <p className="font-extrabold text-gray-500 text-center">CEO</p>
            </span>
            {myFriend.map((singleFriend) => (
              <span>
                <img
                  src={PP}
                  alt="pp"
                  className="rounded-full max-w-[55px] max-h-[55px] w-auto h-auto object-cover m-3"
                />

                <p className=" text-center">
                  {singleFriend.name}
                </p>
                <p className=" text-gray-500 text-center">
                  {singleFriend.title}
                </p>
              </span>
            ))}
          </div>
          <div className="flex flex-col justify-center">
            <button className=" bg-opacity-25 rounded-full p-4 bg-white shadow-md ">
              
                <ChevronRight color="#8a8a8a" />
              
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center align-baseline gap-10 p-3">
          <p className="text-gray-500 pl-4">Write Amount</p>
          <div className="relative">
            <input type="number" max='100' placeholder="525.5" className="text-gray-500 bg-slate-200  rounded-full font-semibold pl-6 pe-6 py-4"  />
            <div className="absolute right-0 top-0 ">
              <div className="bg-blue-800 rounded-full py-4 px-4 h-full flex gap-2">
              <span className="text-white font-semibold">Send</span>
              <Send color="#ffffff" />
            </div></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
