import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-gray-200 p-3 rounded-full shadow-md w-full max-w-lg">
      <Search  className="text-blue-900 mr-3" />

      <input
        type="text"
        placeholder="Search for something"
        className="bg-gray-200 text-blue-900 outline-none w-full"
      />
    </div>
  );
};

export default SearchBar;
