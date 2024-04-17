import React, { useEffect, useState } from "react";
import { ImageSection } from "./ImageSection";
import { useParams } from "react-router-dom";

import axios from "axios";

interface ObjectData {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: string;
  thumbnail: string;
}

export const SingleProduct: React.FC = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState<ObjectData | null>(null);
  console.log(singleData);
  useEffect(() => {
    axios
      .get<ObjectData>(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setSingleData(res.data);
      });
  }, [id]);

  // console.log(singleData);

  return (
    <div className="grid grid-cols-2 p-4 max-sm:grid-cols-1 relative">
      <div className="">
        {singleData && <ImageSection singleData={singleData.images} />}
      </div>
      <div className="p-5 w-full relative">
        <p className="font-bold text-2xl">{singleData?.title}</p>
        <div className="p-5  ">
          <p className="font-bold text-xl text-gray-600">
            Price:${singleData?.price}
          </p>
          <p className=" text-md p-4 text-xl">
            Category: {singleData?.category}
          </p>
          <p className=" text-md p-4 text-md">{singleData?.description}</p>
          <p className=" text-md p-4 text-xl">
            discountPercentage: {singleData?.discountPercentage}
          </p>
          <p className=" text-md p-4 text-xl">Rating: {singleData?.rating}</p>
        </div>
        {/* Buttons */}
        <div className="flex absolute  bottom-10 right-[20%] gap-10">
          <div className=" rounded-lg border border-gray-300  bg-[#162330] hover:bg-[#006666] hover:border-0 text-white ">
            <button className="p-3 w-40 font-semibold ">Buy Now</button>
          </div>
          <div className="rounded-lg border border-gray-300  bg-[#162330] hover:bg-[#006666] hover:border-0 text-white ">
            <button className="p-3 w-40 font-semibold ">Add TO Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
