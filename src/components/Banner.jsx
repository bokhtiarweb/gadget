import React from 'react'

export default function Banner() {
  
  return (
    <div className={`bg-commonColor min-h-[600px] w-full rounded-bl-2xl rounded-br-2xl relative`}>
      
      <div className='w-[82%] mx-auto text-center absolute bottom-0 left-0 right-0 top-12 lg:top-16 space-y-6'>
        <h2 className='text-4xl lg:text-6xl text-white font-bold  space-y-12'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
        <p className='text-white text-xl w-[68%] mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <button className='btn rounded-3xl'>Shop Now</button>
      </div>
     
      <div className='border-solid border-[#ECECEC] border-4 w-[84%] h-[300px] lg:h-[450px] mx-auto absolute left-0 -bottom-36 lg:-bottom-56 right-0 p-6 rounded-tl-xl rounded-tr-xl'>
          <div className='bg-banner bg-cover bg-center h-full w-full'></div>
      </div>

    </div>
  )
}
