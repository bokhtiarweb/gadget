import React, {useState} from 'react'
import Header from '../components/Header'
import { useContext } from 'react'
import { CreatedContext } from '../utils/UseContext';
import CartView from '../components/CartView';
import Wishlist from '../components/Wishlist';
import { useNavigate } from 'react-router-dom';
import DynamiTitle from '../components/TItle';

export default function Dashboard() {
  const {details, addWishlist, setDetails, clearAll } = useContext(CreatedContext);
  const [toggleBtn, setToggleBt] = useState(null);

  const goHome = useNavigate();

  DynamiTitle('Dahsboard | Gadgets Heaven');

  const disabedPuched = details.length === 0;

  const handelCart = (toggle) => {
    setToggleBt(toggleBtn !== toggle);
    setToggleBt(toggle);
  }

  const showTotal = () => {
    const myPrice = details.map((item) => item.price );
  
    const addTotal = myPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );

    return addTotal.toFixed(2);
  }

  const sortByPrice = () => {
    const myPrice = [...details].sort((a, b) => b.price - a.price)

    setDetails(myPrice);
  }

  return (
    <div>
        <div className='bg-commonColor p-10'>
          <Header title='Dashboard' description='Odit, illum praesentium soluta error repellat architecto placeat exercitationem repellendus rerum cupiditate velit ipsam qui voluptas sint iste hic aut! Ut, blanditiis!'/>

          <div className='flex justify-center items-center mt-12'>
            <a onClick={() => handelCart('cart')} className={`${toggleBtn === 'cart' ? 'bg-[#ffffff] text-commonColor' : 'text-[#ffffff]'} w-auto border py-1 px-6 mr-2 rounded-badge font-bold cursor-pointer ${!toggleBtn && 'actived'}`}>
              Cart
            </a>

            <a onClick={() => handelCart('wishlist')} className={`w-auto border py-1 px-6 rounded-badge font-bold cursor-pointer ${toggleBtn === 'wishlist' ? 'bg-[#ffffff] text-commonColor' : 'text-[#ffffff]'} `}>Wishlist</a>
            </div>
          </div>


        <div className='w-full'>

        <div className='flex justify-between my-12'>
            <h2 className='text-2xl font-bold'>{toggleBtn === null && 'Cart' || toggleBtn !== 'wishlist' ? 'Cart' : 'Wishlist'}</h2>

            {toggleBtn === null && (<div className='flex justify-center items-center gap-2'>
            <h2 className='text-2xl font-bold'>Total Cost: 
              <span>{showTotal()}</span></h2>
            <div className='flex gap-2'>

              <a onClick={() => sortByPrice()} className='flex py-2 px-4 border border-commonColor font-bold rounded-badge cursor-pointer'>Sort by Price</a>
              <a className='flex py-2 px-4 rounded-badge text-white bg-commonColor font-bold'>Purchase</a>

            </div>
            </div>) || toggleBtn !== 'wishlist' ? (<div className='flex justify-center items-center gap-2'>
            <h2 className='text-2xl font-bold'>Total Cost: <span>${showTotal()}</span></h2>
            <div className='flex gap-2'>
              <a onClick={() => sortByPrice()} className='flex py-2 px-4 border border-commonColor font-bold rounded-badge cursor-pointer'>Sort by Price</a>

              <button className="flex py-2 px-4 rounded-badge text-white bg-commonColor font-bold btn" onClick={()=> document.getElementById('my_modal_4').showModal()
              } disabled={disabedPuched}>Purchase</button>
              {/* Start modal */}

{/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl text-center">
  <img src="/Group.png" className='mx-auto mb-2' alt="" />
    <h3 className="font-bold text-lg">Payment Successfull !</h3>
    <p className="py-4">Thank you for Purchasing</p>
    <p>${showTotal()}</p>
    <div className="modal-action">
      <form method="dialog" className='mx-auto'>
        {/* if there is a button, it will close the modal */}
        <button onClick={() => {
          clearAll();
          goHome('/')
        }} className="btn btn-primary">Close</button>
      </form>
    </div>
  </div>
</dialog>
{/* End modals */}

            </div>
            </div>) : ' '}

        </div>

          {toggleBtn === null && (<div className='rounded-xl p-6'>
            {
              details.map((item) => <p key={item.product_id}>{item.product_title}</p>)
            }
          </div>) || toggleBtn !== 'wishlist' ?
          
              details.map((item) => <CartView key={item.product_id} item={item} ></CartView>)
            : (<div className='rounded-xl p-6'>
              {
                addWishlist.map((item) =>  <Wishlist key={item.product_id} item={item}></Wishlist>)
              }
          </div>)}

          

          
          
        </div>

    </div>
  )
}
