import React from 'react'
import { useContext } from 'react';
import { CreatedContext } from '../utils/UseContext';
import { IoMdClose } from "react-icons/io";

export default function Wishlist({item}) {
  const {removeFromWish} = useContext(CreatedContext);



    return (
        <>
            <div className='bg-[#ffffff] rounded-xl p-6'>
              
                <div className='flex border rounded-xl gap-4 mt-10 lg:w-[66%] mx-auto'>
                  <p onClick={() => removeFromWish(item.product_id)} className='text-3xl cursor-pointer text-red-600'><IoMdClose></IoMdClose></p>
                      <img src={item.product_image} alt={item.product_title} className='w-[250px] h-[200px] rounded-xl' />
                    <div className='w-full'>
                      <h2 className='text-2xl font-bold'>{item.product_title}</h2>
                      <p className='text-xl text-[#09080F99]'>{item.description}</p>
                      <p>Price: ${item.price}</p>
                    </div>
                  </div>
              </div>
        </>
      )
    }