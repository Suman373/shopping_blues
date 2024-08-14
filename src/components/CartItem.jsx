import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const CartItem = ({ item, index }) => {

  const {removeProduct, updateProduct} = useCart();
  const [itemQty, setItemQty] = useState(item.qty);

  const handleRemoveItem = ()=>{
    removeProduct(item.id);
    toast('Removed item', {
      icon: '🥲',
    });
  }

  const handleQty = (action)=>{
    const newQty = itemQty + action;
    if(action===-1 && newQty < 1) return removeProduct(item.id);
    setItemQty(newQty);
    updateProduct(item.id,{...item,qty:newQty});
  }

  return (
    <div className='w-full bg-white p-4 rounded-xl flex items-start justify-between border-b-2 border-orange' key={index}>
      <div className='w-2/3 flex items-start justify-between'>
        <p className='font-serif'>{item?.name || item?.title}  <span> ( x {itemQty})</span></p>
        <div className='flex items-center justify-center gap-2 px-5 '>
          <button onClick={()=>handleQty(-1)} className='text-md text-white bg-orange px-2 rounded-lg hover:bg-[#000]'>-</button>
          <p className='font-semibold text-base'>{itemQty}</p>
          <button onClick={()=>handleQty(1)} className='text-md text-white bg-orange px-2 rounded-lg hover:bg-[#000]'>+</button>
        </div>
      </div>
      <div className='bg-white flex items-center justify-end gap-3 p-1'>
        <p className='font-semibold text-base'>₹ {itemQty * item?.price}</p>
       <span onClick={handleRemoveItem} className='w-6 h-6 bg-[#000] grid place-content-center rounded-full cursor-pointer hover:bg-orange hover:scale-110'> <AiOutlineDelete className='text-sm text-white ' /></span>
      </div>
    </div>
  )
}

export default CartItem;