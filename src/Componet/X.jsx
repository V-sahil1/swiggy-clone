import React from "react";
import restaurantChains from "../Utility/restaurantChains.json";
import { FcRating } from "react-icons/fc";

function X() {
  return (
    <div className="max-w-[1200px] mx-auto overflow-hidden">
      <div className="flex gap-5 overflow-x-auto flex-nowrap pb-4 px-2 scrollbar-hide   ">
        {restaurantChains.map((ca, index) => (
          <div key={index} className="shrink-0 w-[250px]">
            <div className="h-[182px] overflow-hidden rounded-[15px] relative">
              <img
                className="rounded-[15px] object-cover w-full h-full"
                src={ca.image}
                alt=""
              />
              <div className="absolute w-full h-full top-0 flex items-end tracking-tighter font-bold text-[20px] text-white p-2 bg-gradient-to-t from-black/60 to-transparent">
                {ca.offer}
              </div>
            </div>
            <div className="mt-2 text-xl font-bold">{ca.title}</div>
            <div className="flex items-center gap-2 font-bold">
              <FcRating />
              {ca.rating}
              <span className="text-[15px] font-semibold">
                {ca.minTime}-{ca.maxTime} min
              </span>
            </div>
            <div className="text-base font-semibold">{ca.place}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default X;
