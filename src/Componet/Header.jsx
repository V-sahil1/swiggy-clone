import React from 'react';
import { RxCaretDown } from "react-icons/rx";
import { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosLogIn } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosHelpCircle } from "react-icons/io";
import Popup from './Popup';

function Header() {
const [toggle,setToggle] =useState(false);
const sidemenu =() => {
  setToggle(true)
}
const hidemenu =() => {
  setToggle(false)
}
const link =[{
  icons : <IoMdSearch />
  ,
  name :"search"
},
{
  icons : <BiSolidOffer />

  ,
  name :"offer",
  sup : "new"
},
{
  icons : <IoIosHelpCircle />
  ,
  name :"help"
},
{
  icons : <IoIosLogIn />

  ,
  name :"sign in "
},
{
  icons : <CiShoppingCart />
  ,
  name :"cart",
  sup : 0
},

]
  return (
    <>
    <div  className='black-overlay w-full h-full fixed duration-500 z-[99999]' onClick={hidemenu} style={{
    opacity : toggle ?1:0,
    visibility: toggle ? "visible" : "hidden"}}>
      <div onClick={(e)=>{e.stopPropagation()}} className='w-[500px] h-full bg-white absolute duration-[400ms] flex justify-center items-center  '  style ={{
      left : toggle ? "0%": "-100%" }} >
        <div>
        <Popup/>
      </div>
      </div>
      
    </div>
    <header className='sticky top-0 bg-white z-[999] p-[15px] c'>
      <div className=
      'max-w-[1200px] mx-auto flex items-center  '>
        <div className='w-[100px]  '>
          <img src="image/logo-2.png" className='w-full' alt="" />
        </div>
        <div className=''>
          <span className='font-bold border-b-[3px] border-[black]'>Sachin </span>
            , Surat Gujrat
            <RxCaretDown onClick={sidemenu} fontSize={25} className=' font-bold cursor-pointer inline text-[#fc8019]'/>

        </div>
        <nav className='hidden font-semibold text-[18px] md:flex list-none gap-10 ml-auto'>
          {
            link.map((link,index)=> {
              return (
              <li key={index} className='flex cursor-pointer hover:text-[#fc8019] items-center gap-1' >
                {link.icons}
                {link.name}
                <sup>{link.sup}</sup>
          </li> )

            })
          }
          
          
        </nav>
        

      </div>
      
    </header>
    </>
  )
}

export default Header