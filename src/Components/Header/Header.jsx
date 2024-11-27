import React from "react";
import { BellDot, Settings } from "lucide-react";
import SearchBar from "./Searchbar";
import PP from '../../assets/PP.png';

const Header = ({ title }) => {
  return (
    <div
      style={{ height: "101px" }}
      className=" pr-5 bg-white text-blue-900  w-auto flex justify-between items-center border-x-2 "
    >
      <h1 className="flex text-2xl p-5 font-semibold ">{title}</h1>
      <div className="flex gap-5">
        <SearchBar />
        <span className=" bg-gray-500 bg-opacity-25 rounded-full p-3">
          <Settings />
        </span>
        <span className=" bg-gray-500 bg-opacity-25 rounded-full p-3">
        <BellDot color="#df3030" />
        </span>
        <span>
          <img src={PP} alt="pp" className="rounded-full max-w-[47px] max-h-[47px] w-auto h-auto object-cover"/>
        </span>
      </div>
    </div>
  );
};

export default Header;
