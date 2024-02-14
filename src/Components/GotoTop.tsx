import React, { useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";

const GotoTop = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // useEffect(()=>{
  //   goToBtn()
  // },[])
  return (
    <div className="relative">
      <div className="text-center w-full">
        <div className=" text-Hover  right-10 fixed bottom-28 cursor-pointer ">
          <FaAnglesUp size={28}  onClick={()=>goToBtn()}/>
        </div>
      </div>
    </div>
  );
};

export default GotoTop;
