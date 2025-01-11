import React from 'react'
import restaurantChains from "../Utility/restaurantChains.json";
import X from './X';
import { FcRating } from "react-icons/fc";
import  { useState, useEffect, useRef } from 'react';
import { VscSettings } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";function Online() {
    const elementRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          // Check if the element's top is 0
          if (rect.top <= 0) {
            setIsAtTop(true);
          } else {
            setIsAtTop(false);
          }
        }
      };
  
      // Add the scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        // Clean up the event listener
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div className="max-w-[1200px] mx-auto o my-8  " ref={elementRef}>
          <div className="flex  items-center justify-between">
            <div className="text-2xl font-bold ">Restaurants with online food delivery  in surat </div>
            
          </div>
          <div 
        className={isAtTop ? "fixed top-0 w-full left-0 z-[9999] bg-white" : ""} > 
            <div className=" flex max-w-[1200px] mx-auto  my-8 gap-3  " >
            <div className=' flex items-center p-3 rounded-md shadow'> <VscSettings className=' mr-1' />  Filter 
            </div>
            <div className='p-3 rounded-md shadow flex items-center  '>
            <RiArrowDropDownLine className=' mr-1' />
                 sort by</div>
             <div className='p-3 rounded-md shadow flex items-center  '>
            
                Book a table </div>
                <div className='p-3 rounded-md shadow flex items-center  '>
            
                Within 5km </div>
                <div className='p-3 rounded-md shadow flex items-center  '>
            
              Rating 4+ </div>
              <div className='p-3 rounded-md shadow flex items-center  '>
            
              Pure Veg </div>
              <div className='flex items-center  bg-[#f0f0f5] justify-center border w-[25%] bg-gray-60/200 rounded-2xl right-0 p-[14px]'>
              <input  className=' flex items-center bg-[#f0f0f5]  w-[100%] font-semibold' type="text" placeholder='search for restaurant and food' />
              <IoSearch className='my-2 font-semibold' />
              </div>
              

          </div></div>
         
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ">
        {restaurantChains.map((ca, index) => {
          return (
            <div className="max-w-[1200px] mx-auto px-2 ">
             <div className='' >
              <div
                className=" group h-[182px] overflow-hidden rounded-[15px] relative"
                key={index}
              >
                <img
                  className="group-hover:scale-110 duration-150 rounded-[15px] m-2 object-cover w-full h-full"

                  src={ca.image}
                  alt=""
             
                />
                <div className="image-overlay absolute w-full h-full top-0  flex items-end tracking-tighter font-bold text-[25px] text-white p-2 ">{ca.offer}</div>
                
                </div>
                
              </div>
              <div className="mt-2 text-xl font-bold"
              >{ca.title}</div>
              <div className=" flex font-bold items-center gap-2"><FcRating/>{ca.rating} 
              <div className=" text-[15px] font-semibold">{ca.minTime}-{ca.maxTime} min</div></div>
              <div className=" text-l font-semibold">{ca.place}</div>
            </div>
            
            
            
          );
        })}
      </div>
            
            </div>
  )
}

export default Online