import React from "react";

const ActiveLoansOverwiev = () => {
  const myTransactions = [
    {
      slno: "01.",
      loanmoney: "$100,000",
      letftorepay: "$40,500",
      duration: "8 Months",
      rate: "12%",
      installment: "$2,000 / month",
    },
    {
      slno: "02.",
      loanmoney: "$500,000",
      letftorepay: "$250,000",
      duration: "36 Months",
      rate: "10%",
      installment: "$8,000 / month",
    },
    {
      slno: "03.",
      loanmoney: "$900,000",
      letftorepay: "$40,500",
      duration: "12 Months",
      rate: "12%",
      installment: "$5,000 / month",
    },
    {
      slno: "04.",
      loanmoney: "$50,000",
      letftorepay: "$40,500",
      duration: "25 Months",
      rate: "5%",
      installment: "$2,000 / month",
    },
    {
        slno: "05.",
        loanmoney:"$50,000",
        letftorepay: "$40,500",
        duration: "5 Months",
        rate: "16%",
        installment: "$10,000 / month",
      },
    {
      slno: "06.",
      loanmoney: "$80,000",
      letftorepay: "$25,500",
      duration: "14 Months",
      rate: "8%",
      installment: "$2,000 / month",
    },
    {
      slno: "07.",
      loanmoney: "$12,000",
      letftorepay: "$5,500",
      duration: "9 Months",
      rate: "13%",
      installment: "$500 / month",
    },
    {
      slno: "08.",
      loanmoney: "$160,000",
      letftorepay: "$100,800",
      duration: "3 Months",
      rate: "12%",
      installment: "$900 / month",
    },
  ];
  return (
    <div className="p-5 !pt-0 ms-10">
      <h3 className="p-5 text-blue-900 font-bold ">Active Loans Overwiev</h3>
      <div className=" p-5  gap-6 bg-white text-black rounded-2xl divide-y w-[1110px]">
        <div className="p-2">
          <ul className="flex gap-16 items-center">
            <li>
              <p className=" text-cyan-600 font-semibold w-[55px]">SL No</p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold ">Loan Money</p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold w-[100px]">
                Letf to repay
              </p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold w-[100px]">
                Duration
              </p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold w-[88px]">
                Interest rate
              </p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold w-[160px]">
                Installment
              </p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold w-[75px]">Repay</p>
            </li>
          </ul>
        </div>
        {myTransactions.map((singleTransactions) => (
          <div className="p-2">
            <ul className="flex gap-24 items-center">
              <li>
                <p>{singleTransactions.slno}</p>
              </li>
              <li>
                <p className="text-gray-600 w-[65px]">{singleTransactions.loanmoney}</p>
              </li>
              <li>
                <p className="text-gray-600 w-[65px]">
                  {singleTransactions.letftorepay}
                </p>
              </li>
              <li>
                <p className="text-gray-600 w-[80px]">
                  {singleTransactions.duration}
                </p>
              </li>
              <li>
                <p className="text-gray-600 w-[35px]">
                  {singleTransactions.rate}
                </p>
              </li>
              <li>
                <p className="text-gray-600 w-[120px]">
                  {singleTransactions.installment}
                </p>
              </li>
              <button className=" border-2 p-2 pl-6 pr-6 rounded-full border-blue-700 font-bold text-blue-700">
                Repay
              </button>
            </ul>
            
          </div>
        ))}
         <div className="p-2">
          <ul className="flex gap-16 items-center">
            <li>
              <p className=" text-red-600 font-semibold w-[55px]">Total</p>
            </li>
            <li>
              <p className="text-red-600 font-semibold w-[95px]">$125,000</p>
            </li>
            <li>
              <p className="text-red-600 font-semibold w-[405px]">
                $750,000
              </p>
            </li>
            <li>
              <p className="text-red-600 font-semibold ">$50,000/ month</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActiveLoansOverwiev;
