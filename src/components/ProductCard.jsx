/*
  {
    "id": 4,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
    "images": [
      "https://placeimg.com/640/480/any?r=0.9178516507833767",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017"
    ]
  }
*/
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ProductCard = ({ animateConfetti, item, index }) => {
  const { addProduct, state } = useCart();
  const [prodInCart, setProdInCart] = useState(false);
  const handleAddProduct = () => {
    animateConfetti();
    addProduct({
      id: item.id,
      name: item.name || item.title,
      price: Math.ceil(item?.price * 80),
      qty: 1
    });
    toast.success("Item added to cart");
  }

  useEffect(()=>{
    const res = state.products.find(prod => prod.id === item.id);
    if(res) setProdInCart(true);
  },[handleAddProduct])

  return (
    <div className='bg-white h-[450px] w-[340px] pb-2' key={index}>
      <div className='overflow-hidden'><img className='hover:scale-110 h-[300px] object-center object-contain transition-transform duration-400' src={item?.image} alt="product" /></div>
      <p className='p-3'>{item?.name || item?.title}</p>
      <div className='flex justify-between items-center px-4 py-2'>
        <p className='text-md font-semibold font-sans'>₹{Math.ceil(item?.price * 80)}</p>
        {
          !prodInCart ?
            <button onClick={handleAddProduct} className='bg-orange text-white rounded-full px-5 py-2 text-sm'>
              Add to cart
            </button> :
            <Link to="/cart" className='bg-white text-orange rounded-full px-4 py-2 text-sm border-2 border-orange'>
              View in cart
            </Link>
        }
      </div>
    </div>
  )
}

export default ProductCard;