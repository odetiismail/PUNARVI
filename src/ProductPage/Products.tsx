//import React from 'react'
import { ProductAside } from "./ProductAside";
import { ProductMain } from "./ProductMain";
import { ProductNav } from "./ProductNav";
export const Products = () => {
  return (
    <div className="w-full m-auto"  >
      <ProductNav />
      <div>
        <ProductAside />
        <ProductMain/>
      </div>
    </div>
  );
};
