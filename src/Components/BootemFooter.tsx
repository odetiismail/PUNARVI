import React from "react";
import GotoTop from "./GotoTop";
const BottomFooter = () => {
  
  return (
    <div className="w-full bg-black text-white">
      <div className="p-4 pl-10 max-sm:text-center text-sm">
        <p>Powered by <span className="text-blue-800">nopCommerce</span> </p>
        <p>Copyright @ 2020 Punarvi. All Rights Reserved.</p>
      </div>
     
        <GotoTop/>
     
    </div>
  );
};

export default BottomFooter;
