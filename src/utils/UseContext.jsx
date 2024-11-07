import React, {useState} from 'react'
import { createContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
export const CreatedContext = createContext();

export const UsePorvider = ({children}) => {
    const [addCart, setAddCart] = useState(0);
    const [addWish, setAddWish] = useState(0);
    const [details, setDetails] = useState([]);
    const [addWishlist, setAddWishlist] = useState([]);

    const handelAddCart = (id) => {
        setAddCart(addCart + 1);
        setDetails([...details, id]);
        toast.success(`Product add to cart.`);
    }

    const handelWishlist = (id) => {

      if (!addWishlist.includes(id)) {
        setAddWish(addWish + 1);
        setAddWishlist([...addWishlist, id]);
        
        toast.success(`Product add to wishlist.`);

      } else {
        toast.error(`Product with ID ${id.product_id} is already in the wishlist.`);
      }
      
    }

  const removeFromCart = (productId) => {
      setDetails((prevDetails) => prevDetails.filter(item => item.product_id !== productId));
  };
  const removeFromWish = (productId) => {
    setAddWishlist((prevDetails) => prevDetails.filter(item => item.product_id !== productId));
};

    const clearAll = () => {
        setAddCart(0);
        setAddWish(0);
        setDetails([]);
        setAddWishlist([]);
    };

  return (
    <>
    <CreatedContext.Provider value={{addCart, details, addWish, addWishlist, handelAddCart, handelWishlist, setDetails, removeFromCart, removeFromWish, clearAll}}>
        {children}
    </CreatedContext.Provider>
    <ToastContainer></ToastContainer>
  </>
  )
}
