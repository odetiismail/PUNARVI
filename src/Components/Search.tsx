import React from "react";
import { MdOutlineSearch } from "react-icons/md";

export const Search = () => {
  return (
    <div className="relative border outline-gray-700  hover:border-gray-600  rounded-md ">
      <input
        type="text"
        placeholder="Search"
        className=' block 
        text-gray-500 
        rounded-md w-full 
        border-none py-1.5  pr-20 pl-7 
        max-sm:py-1  max-sm:pl-1  max-sm:pr-1
        ring-1 
        ring-inset ring-gray-300
         placeholder:text-gray-400 
         focus:ring-2 focus:ring-inset
          focus:ring-white sm:text-sm 
          sm:leading-6" placeholder="0.00"
          active:border-red-900 
          outline-none
          '
      />
      <div className="absolute right-2  top-1">
        <MdOutlineSearch size={25} className="text-gray-500 max-sm:w-5" />
      </div>
    </div>
  );
};
