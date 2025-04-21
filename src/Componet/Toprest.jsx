import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import X from "./X";
import { useState } from "react";
import restaurantChains from "../Utility/restaurantChains.json";



function Toprest() {
  const[slide,setSlide]= useState(0);
  const next = () =>{
    if(restaurantChains.length -2 == slide) return false
    setSlide(slide+1)
  }

  const prev = () =>{
    if(slide==0) return false
    setSlide(slide-1)
  }

  return (
    <>
    <div className="max-w-[1200px] mx-auto overflow-hidden  ">
    <div className="flex my-3 items-center justify-between">
        <div className="text-2xl font-bold ">Top restaurant Chains in surat </div>
        <div className="flex">
          <div
           onClick={prev}
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
          >
            <FaArrowLeftLong />
          </div>
          <div
           onClick={next}
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
          >
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
      
     <div className="flex gap-5 mt-6 ">
     <X/>
    </div>
    <hr className="mt-8" />
    </>
  );
}

export default Toprest