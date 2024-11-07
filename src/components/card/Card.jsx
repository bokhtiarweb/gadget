import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card({items}) {
    const {product_id, product_title, product_image, price} = items;
    
    const navigateDetailsPage = useNavigate();

    
  const showDetails = (pId) => {
    navigateDetailsPage(`/details/${pId}`);
  }

  return (
    <div className='bg-[#ffffff] border p-6 rounded-xl shadow-md hover:scale-105 duration-100'>
        <img src={product_image} alt={product_title} className='w-60 h-52 rounded-xl' />
        <div className='mt-4'>
            <h2 className='font-bold text-lg'>{product_title}</h2>
            <p className='my-2 mb-5 text-[#09080F99] text-lg'>Price: ${price}</p>
            <button onClick={() => showDetails(product_id)} className='py-2 px-4 border rounded-full border-commonColor text-commonColor font-semibold'>View Details</button>
        </div>
    </div>
  )
}
