import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { Search } from "./Components/Search";
import { NavLinks } from "./Components/NavLinks";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

export const NavNext = () => {
  const [change, setChange] = useState(true);

  const Cha = () => {
    setChange(!change);
  };
  const Links = [
    {
      name: "WOMEN",
      sublink: [
        { name: "High end Couture" },
        {
          name: "Sarees",
        },
        {
          name: "Lehenga",
        },
        {
          name: "Dresses",
        },
        {
          name: "Twinning Outfits",
        },
      ],
    },
    {
      name: "KIDS",
      sublink: [
        {
          name: "Girl",
        },
        {
          name: "Boy",
        },
      ],
    },
    {
      name: "JEWELRY",
      sublink: [
        {
          name: "Collection",
        },
      ],
    },
    {
      name: "BOOKS",
      sublink: [
        {
          name: "Book Collection",
        },
      ],
    },
  ];
  return (
    <nav className="p-padding sticky top-0 z-40 bg-Natural">
      <div className="">
        <div className="container flex m-auto justify-between">
          <div>
            <div className="max-sm:hidden">
              <NavLinks />
            </div>

            {/* Mobile Nav Bar */}

            <div className="relative">
              <div className="hidden max-sm:block absolute left-0 z-50">
                <div>
                  {change ? (
                    <HiOutlineMenuAlt2
                      onClick={() => Cha()}
                      size={30}
                      className="text-gray-700 hover:text-gray-400"
                    />
                  ) : (
                    <ImCross
                      onClick={() => Cha()}
                      className="text-gray-700 hover:text-gray-400"
                    />
                  )}
                </div>
              </div>
              {/*hidden max-sm:block w-full bg-white text-center */}
            </div>
          </div>

          {/* Search ingine & Fav& Cart */}
          <div className="flex  gap-6 items-center">
            <Search />
            <div>
              <Link to="/favrate">
                <FaHeart size={25} className="max-sm:w-5 hover:text-Hover" />
              </Link>
            </div>
            <div>
              <Link to="/cart">
                <HiShoppingCart
                  size={28}
                  className="max-sm:w-6 hover:text-Hover"
                />
              </Link>
            </div>
          </div>
        </div>
        {/*Mobile */}
        <div className="hidden max-sm:block">
          <div className={change ? "hidden" : "max-sm:block"}>
            <div className="w-full text-center mt-2  ">
              {Links.map((curr) => (
                <div className="">
                  <div className="p-2 hover:bg-gray-200 w-full h-full text-sm relative group">
                    <h1>{curr.name}</h1>
                    <div className=" absolute hidden group-hover:block hover:block z-50 right-0  bg-white w-full">
                      <div>
                        {curr.sublink.map((cur) => (
                          <h1 className="p-2  hover:bg-gray-100 hover:text-blue-600">
                            {cur.name}
                          </h1>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
