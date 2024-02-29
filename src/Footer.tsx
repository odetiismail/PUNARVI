import React, { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import BottomFooter from "./Components/BootemFooter";

export const Footer = () => {
  //OnClick For Mobile
  const [data, setData] = useState("");
  const Change = (da:string) => {
    setData(da);
  };
  return (
    <div className="h-full w-full relative">
      <div className="">
        <div className=" m-auto border-t-8 max-sm:border-t-4 border-gray-800">
          {/*Laptop Layout */}
          <div className="container  max-sm:hidden mt-6 max-sm:mt-2 m-auto w-full  flex justify-around flex-wrap max-sm:text-center">
            <div className=" p-6 max-sm:p-4 ">
              <p className="text-xl font-bold pb-2 max-sm:text-base">
                <span>My Account</span>
              </p>
              <span className=" border-t-2 border-gray-900 pr-8"></span>
              <p className="p-2 max-sm:text-sm max-sm:p-1">
                <span className=" cursor-pointer hover:text-Hover">
                  My Account
                </span>
              </p>
              <p className="p-2 max-sm:text-sm max-sm:p-1">
                <span className="cursor-pointer hover:text-Hover">
                  Orders
                </span>
              </p>
              <p className="p-2 max-sm:text-sm max-sm:p-1">
                <span className=" cursor-pointer hover:text-Hover">
                  Recently Viewed Products
                </span>
              </p>
              <p className="p-2 max-sm:text-sm max-sm:p-1">
                <span className="cursor-pointer hover:text-Hover">
                  ShoppingCart
                </span>
              </p>
            </div>
            <div className="max-sm:p-4 ">
              <p className="text-xl font-bold pb-2 max-sm:text-base">
                <span>About Us</span>
              </p>
              <span className=" border-t-2 border-gray-900 pr-8"></span>
              <p className="p-2 max-sm:text-sm max-sm:p-1">
                <span className=" cursor-pointer hover:text-Hover">
                  About Us
                </span>
              </p>
              <p className="p-2 max-sm:text-sm max-sm:p-1">
                <span className="cursor-pointer hover:text-Hover">
                  Contac Ust
                </span>
              </p>
              <p className="p-2 max-sm:text-sm max-sm:p-1">
                <span className=" cursor-pointer hover:text-Hover">
                  FAQ's
                </span>
              </p>
              <p className="p-2 max-sm:text-sm max-sm:p-1">
                <span className="cursor-pointer hover:text-Hover">
                  Apply for Seller Account
                </span>
              </p>
            </div>
            <div className="max-sm:p-4">
              <p className="text-xl font-bold pb-2">Follow us</p>
              <span className="border-t-2 border-gray-900 pr-8 "></span>
              <div className="flex gap-4 overflow-auto ">
                <div className="p-2 bg-black text-white rounded-full hover:text-black drop-shadow-md hover:bg-gray-300 cursor-pointer">
                  <IoLogoInstagram size={20} />
                </div>
                <div className=" p-2 bg-black text-white rounded-full hover:text-black drop-shadow-md hover:bg-gray-300 cursor-pointer">
                  <CiYoutube size={20} />
                </div>
              </div>

              <div className="pt-4 text-lg font-bold">Payment Metheds</div>
              <div className="flex gap-3 overflow-auto ">
                <div className=" text-black cursor-pointer">
                  <FaCcVisa className="text-4xl max-sm:text-3xl" />
                </div>
                <div className=" text-black cursor-pointer">
                  <FaCcMastercard className="text-4xl max-sm:text-3xl" />
                </div>
                <div className=" text-black cursor-pointer">
                  <FaCcPaypal className="text-4xl max-sm:text-3xl" />
                </div>
                <div className=" text-black cursor-pointer">
                  <FaCcDiscover className="text-4xl max-sm:text-3xl" />
                </div>
              </div>
            </div>
          </div>

          {/*Mobile */}
          <div className="hidden max-sm:block w-full">
            <div
              className="relative transition delay-150 duration-300 ease-in-out"
              onClick={() => Change("amount")}
            >
              <div className="text-lg font-bold p-2 cursor-pointer">
                My Account
              </div>
              <span className="absolute right-3 top-3">
                {data == "amount" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </span>
              <div className={data == "amount" ? "max-sm:block" : "hidden"}>
                <div className="text-center">
                  <p className="p-1 hover:bg-gray-400 cursor-pointer">
                    My Account{" "}
                  </p>
                  <p className="p-1 hover:bg-gray-400 cursor-pointer">Orders</p>
                  <p className="p-1 hover:bg-gray-400 cursor-pointer">
                    Recently Viewed Products
                  </p>
                  <p className="p-1 hover:bg-gray-400 cursor-pointer">
                    ShoppingCart
                  </p>
                </div>
              </div>
            </div>
            <div className="relative" onClick={() => Change("us")}>
              <div className="text-lg font-bold p-2 cursor-pointer">
                Useful Links
              </div>
              <span className="absolute right-3 top-3">
                {data == "us" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </span>
              <div className={data == "us" ? "max-sm:block" : "hidden"}>
                <div className="text-center">
                  <p className="p-1 hover:bg-gray-400 cursor-pointer">
                    About Us
                  </p>
                  <p className="p-1 hover:bg-gray-400 cursor-pointer">
                    Contact Us
                  </p>
                  <p className="p-1 hover:bg-gray-400 cursor-pointer">FAQ's</p>
                  <p className="p-1 hover:bg-gray-400 cursor-pointer">
                    Apply For Seller Acount
                  </p>
                </div>
              </div>
            </div>
            <div className="relative" onClick={() => Change("follow")}>
              <div className="text-lg font-bold p-2 cursor-pointer">
                Follow Us
              </div>
              <span className="absolute right-3 top-3">
                {data == "follow" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </span>
              <div className={data == "follow" ? "max-sm:block" : "hidden"}>
                <div className="flex w-full justify-center gap-4">
                  <div className="p-2 bg-black text-white rounded-full hover:text-black drop-shadow-md hover:bg-gray-300 cursor-pointer">
                    <IoLogoInstagram size={20} />
                  </div>
                  <div className=" p-2 bg-black text-white rounded-full hover:text-black drop-shadow-md hover:bg-gray-300 cursor-pointer">
                    <CiYoutube size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative" onClick={() => Change("payment")}>
              <div className="text-lg font-bold p-2 cursor-pointer">
                Payment Methods
              </div>
              <span className="absolute right-3 top-3">
                {data == "payment" ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </span>
              <div className={data == "payment" ? "max-sm:block" : "hidden"}>
                <div className="flex w-full justify-center gap-4">
                  <div className=" text-black cursor-pointer">
                    <FaCcVisa className="text-4xl max-sm:text-3xl" />
                  </div>
                  <div className=" text-black cursor-pointer">
                    <FaCcMastercard className="text-4xl max-sm:text-3xl" />
                  </div>
                  <div className=" text-black cursor-pointer">
                    <FaCcPaypal className="text-4xl max-sm:text-3xl" />
                  </div>
                  <div className=" text-black cursor-pointer">
                    <FaCcDiscover className="text-4xl max-sm:text-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Bottom Footer */}
      <BottomFooter />
    </div>
  );
};
