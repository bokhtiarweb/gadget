import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';
import { BsCart4 } from 'react-icons/bs';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import StarRating from '../components/StarRating';
import { useContext } from 'react';
import {CreatedContext} from "../utils/UseContext"
import DynamiTitle from '../components/TItle';

export default function Details() {
    const {handelAddCart, addWish, handelWishlist} = useContext(CreatedContext);
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    DynamiTitle('Dahsboard | Gadgets Heaven');

    useEffect(() => {
        fetch(`/gadgets.json`).
        then(res => res.json()).
        then(data => {
            const results = data.find((item) => item.product_id === id);
            setProduct(results)
        })
    }, [id]);
    

  return (
    <div>
        <div className='bg-commonColor pt-12 pb-52'>
        <Header title='Product Details Page' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nisi quasi, magnam ab assumenda veritatis esse tempore nihil iure libero molestias, iusto sit voluptatem placeat! Alias nostrum labore cumque magni.' />
    </div>

        
        <div className='w-full mb-96 relative'>
        <div className='w-[90%] mx-auto bg-white rounded-xl absolute left-0 right-0 -bottom-96 lg:-bottom-80 grid grid-cols-2 gap-6 p-6'>
            <div className='h-[350px] lg:h-[400px]'>
                <img src={product.product_image} alt={product.product_title} className='w-full h-full rounded-xl' />
            </div>

            <div>
                <h1 className='text-3xl font-bold'>{product.product_title}</h1>
                <p className='font-bold text-lg mt-2 mb-6'>Price: ${product.price}</p>
                <a className='py-1 px-6 border border-[#309C08] text-[#309C08] font-semibold rounded-full'>{product.availability ? 'In Stock' : 'Out of Stock'}</a>
                <p className='text-[#09080F99] text-lg mt-4'>{product.description}</p>
                <p className='font-bold text-lg mt-4 mb-2'>Specifications: </p>


                <ol>
                {
                    Array.isArray(product.specification) ? 
                    (product.specification.map((item, idx) => (
                    <li key={idx} className='text-[#09080F99] text-lg'>
                    {idx+ 1}. {item}
                    </li>
                    )) 
                    ):
                (<li>{product.specification}</li>)
                }
                </ol>

                <div className='flex justify-start items-center w-[200px]  mt-4 mb-2'>
                <p className='font-bold text-lg mr-2'>Rating: </p>
                <p className='w-[15px] h-[15px] bg-black'></p>
                </div>

                <div className='w-[300px] flex items-center'>
                    <StarRating rating={product.rating}></StarRating>
                </div>
                    
                    <div className="flex items-center mt-4 w-[250px]">
                        <a className="flex items-center font-semibold text-white py-2 px-4 mr-4 rounded-full bg-commonColor cursor-pointer">
                        <span onClick={() => handelAddCart(product)} className='mr-2 text-lg mt-2'>Add To Card </span><BsCart4 className='text-xl'></BsCart4>
                        </a>

                        
                        <button onClick={() => handelWishlist(product)} className={`p-1 text-2xl rounded-full bg-white cursor-pointer ${addWish !== 0 ? 'opacity-30 hover:cursor-not-allowed': ' '}`} disabled={addWish !== 0 ? true : false}>
                        <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
                        </button>
                    </div>
                
            </div>
        </div>
        </div>

    </div>
  )
}
