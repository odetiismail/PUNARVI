// import React from 'react'

import { useState } from "react";

export const ImageSection = ({ singleData }: any) => {
  // console.log(singleData);
  const [image, setImage] = useState(0);
  return (
    <div className="grid max-md:p-5 w-full  m-auto grid-cols-2 max-sm:grid-cols-1  justify-items-center items-center gap-4">
      <div className="max-sm:flex">
        {singleData.map((curr: any,k:number) => {
          return (
            <div className="p-2 shadow-xl ">
              <img src={curr} className=" w-36 max-md:w-20   max-sm:w-60  rounded-xl" onClick={()=>{setImage(k)}}/>
            </div>
          );
        })}
      </div>
      <div className="">
        <img src={singleData[image]} className="max-sm:w-52 bg-contain min-w-56 max-md:w-40  rounded-xl" />
      </div>
    </div>
  );  
};
