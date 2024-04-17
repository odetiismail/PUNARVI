import React from "react";
import { Link } from "react-router-dom";

export const NavLinks = () => {
  const Links = [
    {
      name: "WOMEN",
    },
    {
      name: "KIDS",
    },
    {
      name: "JEWELRY",
    },
    {
      name: "BOOKS",
    },
  ];

  return (
    <div className="flex gap-8 relative">
      <div className="cursor-pointer group w-full text-md">
        <p className="font-bold text-gray-700  hover:text-Hover">
          <Link to="/">HOME</Link>
        </p>
        {/* <div className=" absolute top-6 left-4 hidden group-hover:block hover:block bg-Natural drop-shadow-md">
          <div className="">
            <p className="p-1 pr-8 hover:bg-Hover-bg hover:text-Hover">
              High End Couture
            </p>
            <p className="p-1 pr-8 hover:bg-Hover-bg hover:text-Hover">
              Sarees
            </p>
            <p className="p-1 pr-8 hover:bg-Hover-bg hover:text-Hover">
              Lehenga
            </p>
            <p className="p-1 pr-8 hover:bg-Hover-bg hover:text-Hover">
              Dresses
            </p>
            <p className="p-1 pr-8 hover:bg-Hover-bg hover:text-Hover">
              Twinning Outfits
            </p>
          </div>
        </div> */}
      </div>
      <div>
        <div className="cursor-pointer group w-full text-md">
          <p className="font-bold text-gray-700  hover:text-Hover">CONTACT</p>
          <div className=" absolute top-6 left-34 hidden group-hover:block hover:block bg-white drop-shadow-md">
            <div className="">
              <p className="p-1 pr-12 hover:bg-Hover-bg hover:text-Hover">
                PRODUCTS
              </p>
              {/* <p className="p-1 pr-12 hover:bg-Hover-bg hover:text-Hover">
                Boy
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="cursor-pointer group groupw-full text-md">
          <p className="font-bold text-gray-700  hover:text-Hover">JEWELRY</p>
          <div className=" absolute top-6 left-48 hidden group-hover:block hover:block bg-white drop-shadow-md">
            <div className="">
              <p className="p-1 pr-12 hover:bg-Hover-bg hover:text-Hover">
                Collection
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer group w-full text-md">
        <p className="font-bold text-gray-700  hover:text-Hover">BOOKS</p>
        <div className=" absolute top-6 right-[-4] hidden group-hover:block hover:block bg-white drop-shadow-md">
          <div className="">
            <p className="p-1 pr-8 hover:bg-Hover-bg hover:text-Hover">
              BookCollection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
