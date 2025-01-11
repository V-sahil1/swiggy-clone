import React from "react";
import restaurantChains from "../Utility/restaurantChains.json";
import { FcRating } from "react-icons/fc";

function X() {
  return (
    <>
    <div className="max-w-[1200px] mx-auto overflow-hidden  ">
    <div className="flex gap-5">
        {restaurantChains.map((ca, index) => {
          return (
            <div className=" ">
             <div className='w-[100vh] md:w-[273px] shrink-0 mb-3 '>
              <div
                className="h-[50vh] md:h-[182px] overflow-hidden rounded-[15px] relative"
                key={index}
              >
                <img
                  className="rounded-[15px] m-2  object-cover w-full h-full "
                  src={ca.image}
                  alt=""
             
                />
                <div className="image-overlay absolute w-full h-full top-0  flex items-end tracking-tighter font-bold text-[25px] text-white p-2 ">{ca.offer}</div>
                
                </div>
                
              </div>
              <div className="mt-2 text-xl font-bold"
              >{ca.title}</div>
              <div className=" flex font-bold items-center gap-2"><FcRating />{ca.rating} 
              <div className=" text-[15px] font-semibold">{ca.minTime}-{ca.maxTime} min</div></div>
              <div className=" text-l font-semibold">{ca.place}</div>
            </div>
            
            
            
          );
        })}
      </div>
    </div>
    
      
    </>
  );
}

export default X;
