import { useState } from 'react';
import toast from 'react-hot-toast';

const useAddToCart = () => {
    
   // CHECK STORED USER CART
   const checkCartItem = JSON.parse(localStorage.getItem('cart')) || [];

   // ALL STATE ARE HERE
   const [storedCart, setStoredCart] = useState(checkCartItem)

   // HANDLER ADD TO CART
   const handlerAddToCart = (_id) => {
       const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

       const isItemInCart = existingCart.includes(_id)
       if (!isItemInCart) {
           existingCart.push(_id);
           setStoredCart(existingCart)
           toast.success('Successfully Added')
       }

       localStorage.setItem('cart', JSON.stringify(existingCart));
   };

   return {storedCart, handlerAddToCart}
};

export default useAddToCart;