import React from 'react'

function Cart() {
  return (
    <>
      <div className="flex gap-5">
        {restaurantChains.map((ca, index) => {
          return (
            <div className="max-w-[1200px] mx-auto  ">
             <div className='w-[273px] shrink-0 grow '>
              <div
                className="h-[182px] overflow-hidden rounded-[15px] relative"
                key={index}
              >
                <img
                  className="rounded-[15px] m-2  object-cover w-full h-full "
                  src={ca.image}
                  alt=""
                  srcset=""
                />
                <div className="image-overlay absolute w-full h-full top-0  flex items-end tracking-tighter font-bold text-[25px] text-white p-2 ">{ca.offer}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Cart