import React from "react";

const TrendingStock = () => {
  const myTransactions = [
    {
      slno: "01.",
      name: "Trivago",
      price: "$520",
      return: "+5%",
      color2: "text-green-600",
    },
    {
      slno: "02.",
      name: "Canon",
      price: "$480",
      return: "+10%",
      color2: "text-green-600",
    },
    {
      slno: "03.",
      name: "Uber Food",
      price: "$350",
      return: "-3%",
      color2: "text-red-600",
    },
    {
      slno: "04.",
      name: "Nokia",
      price: "$940",
      return: "+2%",
      color2: "text-green-600",
    },
    {
      slno: "05.",
      name: "Tiktok",
      price: "$670",
      return: "-12%",
      color2: "text-red-600",
    },
  ];
  return (
    <div className="">
      <h3 className="p-5 text-blue-900 font-bold ">Trending Stock</h3>

      <div className="p-5 bg-white text-black rounded-2xl divide-y w-[445px] h-[302px]">
        <div className="p-2">
          <ul className="flex gap-7 items-center">
            <li>
              <p className="text-cyan-600 font-semibold">SL No</p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold w-[95px]">Name</p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold w-[85px]">Price</p>
            </li>
            <li>
              <p className="text-cyan-600 font-semibold">Return</p>
            </li>
          </ul>
        </div>
        {myTransactions.map((singleTransactions) => (
          <div className="p-2">
            <ul className="flex gap-12 items-center">
              <li>
                <p className="">{singleTransactions.slno}</p>
              </li>
              <li>
                <p className="text-gray-600 w-[75px]">{singleTransactions.name}</p>
              </li>
              <li>
                <p className="text-gray-600 w-[65px]">
                  {singleTransactions.price}
                </p>
              </li>
              <li>
                <p
                  className={`font-bold ${singleTransactions.color2} w-[65px]`}
                >
                  {singleTransactions.return}
                </p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingStock;
