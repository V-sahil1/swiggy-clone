import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import category from "../Utility/category.json";

import { useEffect } from "react";
import Toprest from "./Toprest";

function Category() {
  const [current,setCurrent]=useState(0)
  const [Category, setCategory] = useState([]);
  const nextslide =() =>{
    if(category.length -8 == current) return false
    setCurrent(current+3)
  }

  const prevslide =() =>{
    if(current==0) return false
    setCurrent(current-3)
  }
  return (
    <>
      <div className="max-w-[1200px] mx-auto overflow-hidden ">
        <div className="flex my-3 items-center justify-between">
          <div className="text-[25px] font-bold ">What's in your mind? </div>
          <div className="flex">
            <div onClick={prevslide} className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
              <FaArrowLeftLong />
            </div>
            <div onClick={nextslide} className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
              <FaArrowRightLong />
            </div>
          </div>
        </div>
        
        <div className="flex  pt-8  " >
          {category.map((cat, i) => {
            return (
              <div style={{
                transform: `translateX(-${current}00%)`
            }}
             className="w-[150px] shrink-0 duration-500  ">
                <div className="border rounded-full ml-6  w-[100px] h-[100px] overflow-hidden">
                  <img
                    src={cat.image}
                    alt="Cat"
                    className="w-full h-full object-cover"
                  />
                  
                </div>
                <div className="flex m-2 justify-center ml-1 items-center hover:text-[#fc8019]  ">{cat.path}</div>
              </div>
            );
          })}
        </div>
        <hr className="my-6 border-[1px]" />
        

        </div>
       

     
    </>
  );
}

export default Category;
