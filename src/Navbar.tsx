//import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-Bg p-padding">
      <div className="container mx-auto  flex justify-between max-sm:justify-center text-white   max-sm:flex">
        <div className=" relative flex gap-6 max-sm:text-sm max-sm:hidden">
          <p className=" font-bold transition-all duration-300 ease-in hover:text-Hover">
           <Link to='/'>
            Home
           </Link>
          </p>
          <p className=" text-base transition-all duration-300 ease-in hover:text-Hover">
            How To Sell
          </p>
          <p className=" text-base transition-all duration-300 ease-in hover:text-Hover">
            How To Sell
          </p>
        </div>
        <div className="">
          <p>FREE SHIPPING ON ALL Orders.</p>
        </div>
        <div className=" relative group flex flex-row-reverse text-sm  hover:text-Hover md:text-base max-sm:hidden  ">
          <p className=" text-sm transition-all duration-300 ease-in hover:Hover hover:border-b-2">
            <Link to='/login'>REGISTER/LOGIN</Link>
          </p>
        </div>
      </div>
    </nav>
  );
};
