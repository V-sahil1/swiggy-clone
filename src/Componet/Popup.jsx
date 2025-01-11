import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
function Popup() {
  return (
    <div className='' >
      <div>
      <div className='  
        w-[500px] h-[180px] bg-white flex hover:text-[#fc8019] '>
            <div className='flex items-center gap-4  w-[]'>
            <FaLocationArrow className='font-bold text-[32px]  '  />
            <input className=' h-[50px] text-[30px] font-semibold text-black  w-[400px] bg-white' type="text" placeholder='Search for area, street name...' />
            
           
            </div>
           
            
        </div>
        
      </div>
      <hr className='font-bold' />
      <div className='  
        w-[500px] h-[180px] bg-white flex hover:text-[#fc8019] '>
            <div className='flex items-center gap-4  w-[]'>
            <FaLocationArrow className='font-bold text-[32px]  '  />
            <div></div>
            <div className='font-bold text-[25px] text-[#90a4ae] hover:text-[#fc8019] '>
            Locate me using GPS
            </div>
            
            
           
            </div>
           
            
        </div>
       
        
    </div>
  )
}

export default Popup